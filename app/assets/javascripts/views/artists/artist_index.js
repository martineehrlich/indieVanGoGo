CapstoneProject.Views.ArtistIndex = Backbone.CompositeView.extend({
  template: JST["artists/artists_index"],
  tagName: "div",
  className: "row",


  initialize: function (options) {
    this.collection = options.artists;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addArtistItemView);
    this.listenTo(this.collection, 'remove', this.removeArtistItemView);
    this.collection.each(this.addArtistItemView.bind(this));
  },

  render: function () {
    var content = this.template({artists: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtistItemView: function (artist) {
    var subview = new CapstoneProject.Views.ArtistIndexItem({ model: artist });
    this.addSubview('.artists', subview);
  },

  removeArtistItemView: function (artist) {
    this.removeModelSubview('.artists', artist);
  }



});
