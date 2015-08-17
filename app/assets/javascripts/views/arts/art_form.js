CapstoneProject.Views.ArtForm = Backbone.View.extend({
  template: JST["arts/art_form"],

  initialize: function(options) {
    this.categories = options.categories;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.categories, "sync", this.render);
  },

  render: function () {
    var content = this.template({categories: this.categories});
    this.$el.html(content);
    this.onRender();
    return this;
  },

  events: {
    "submit form": "createArt",
    "click .upload": "upload",
    "click .art-form-category": "selectCategory",
    "change .art-title": "openForm",
    "keydown .art-title": "displayBottom"
  },

  displayBottom: function (event) {
  $(".art-title").keyup(function(event){
    if (event.keyCode === 13){
      event.preventDefault();
      $(".art-title").focusout();
      this.openForm();
    }
    return false;
  }.bind(this));
},

  onRender: function () {
    var $dropdown = this.$(".dropdown-toggle");
    var $firstCategory = this.$(".dropdown-menu:first-child");
    $firstCategory.addClass("active-category");
    var text = $firstCategory.html();
    $dropdown.html(text + " <span class='caret'></span>");
  },

  createArt: function(event){
    event.preventDefault();
    var attrs = $(event.target).serializeJSON();
    var that = this;
    var title = $(".art-title").val();
    var $category = this.$(".active-category");
    var id = $category.attr("data-id");
    this.model.set("category_id", id);
    this.model.set("title", title);
    this.model.save(attrs, {
      success: function () {
        that.collection.add(that.model);
        Backbone.history.navigate("explore", {trigger: true});
      }
    });
  },

  openForm: function () {
    this.$('.lower').removeClass('hidden');
  },

  selectCategory: function (event) {
    this.$(".active-category").removeClass("active-category");
    $target = $(event.currentTarget);
    $target.addClass("active-category");
    $category = this.$(".dropdown-toggle");
    $category.html($target.attr("category-name") + "<span class='caret'></span>");
  },

  upload: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result){
      var data = result[0];
      this.model.set({image_file_name: data.url});
    }.bind(this));
    }

});
