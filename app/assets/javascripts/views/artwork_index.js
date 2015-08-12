CapstoneProject.Views.ArtworkIndex = Backbone.CompositeView.extend({
  template: JST["artists/artwork_index"],

  initialize: function (options) {
    this.collection = options.collection;
    // this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.collection, 'add', this.addArtistItemView);
    // this.collection.each(this.addArtistItemView.bind(this));
  },

  render: function () {
    var content = this.template({artworks: this.collection});
    this.$el.html(content);
    // this.attachSubviews();
    return this;
  },

  // addArtworkIndexView: function () {
  //   var subview = new CapstoneProject.Views.ArtworkIndex({ collection: this.artist.arts });
  //   this.addSubview('.artist', subview);
  // }

});
