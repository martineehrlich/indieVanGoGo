CapstoneProject.Views.ArtForm = Backbone.View.extend({
  template: JST["arts/art_form"],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    "submit form": "createArt",
    "click .upload": "upload"
  },

  createArt: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    var that = this;
    this.model.save(attrs, {
      success: function () {
        that.collection.add(that.model);
        Backbone.history.navigate("explore", {trigger: true});
      }
    });
  },

  upload: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      var data = result[0];
      this.model.set({image_file_name: data.url});
    }.bind(this));
    }

});
