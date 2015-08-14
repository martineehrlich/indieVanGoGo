CapstoneProject.Views.ArtExploreItem = Backbone.View.extend({
  template: JST["arts/art_explore_item"],


  initialize: function () {
    // this.artist = options.artist;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({art: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .art-item": "addArtModal"
  },

  addGalleryIndex: function () {
    var modal = new CapstoneProject.Views.GalleryIndex({model: this.model});

    // var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});
    $('body').append(modal.$el);
    modal.render();
    // this.addSubview('.gallery', galleryIndexView);
  }

});
