CapstoneProject.Views.ArtistIndexItem = Backbone.CompositeView.extend({
  template: JST["artists/artist_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .art-gallery": "addGalleryIndex"
  },

  addGalleryIndex: function () {
    var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});
    this.addSubview('.gallery', galleryIndexView);
  }
});
