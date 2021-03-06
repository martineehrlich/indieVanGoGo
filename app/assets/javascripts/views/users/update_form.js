CapstoneProject.Views.UpdateForm = Backbone.CompositeView.extend({
    template: JST['users/update_form'],

    events: {
      'submit form': 'updateProfile',
      'click .m-background': 'remove',
      'click .close': 'removeBtn',
      "click .upload": "upload",
    },

    initialize: function (options) {
      this.model = options.user;
    },

    render: function () {
      this.$el.html(this.template({user: this.model}));
      return this;
    },

    removeBtn: function (event) {
      event.preventDefault();
      this.remove();
    },

    updateProfile: function(event){
      event.preventDefault();
      var attrs = $(event.target).serializeJSON();
      var that = this;
      this.model.set(attrs);
      this.model.save({}, {
        success: function () {
          Backbone.history.navigate("#profile", {trigger: true});
          this.model.fetch();
          this.remove();
        }.bind(this),
        error: function (model, response) {
          var $errorsDiv = this.$(".errors-div");
          $errorsDiv.removeClass("hidden");
          var errors = _(response.responseJSON);
          errors.each(function (error){
            this.$(".errors-list").append(error);
          }.bind(this));
      }
      });

    },

    upload: function (event) {
      event.preventDefault();
      cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
        if (error) { return; }
        var data = result[0];
        this.$(".file-name-div").html(data.original_filename + "." + data.format);
        this.model.set({image_url: data.url});
      }.bind(this));
      }
  });
