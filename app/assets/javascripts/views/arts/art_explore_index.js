CapstoneProject.Views.ArtExploreIndex = Backbone.CompositeView.extend({
  template: JST["arts/art_explore_index"],



  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addArtExploreItemView);
    this.listenTo(this.collection, 'remove', this.removeArtExploreItemView);
    this.collection.each(this.addArtExploreItemView.bind(this));
  },

  render: function () {
    var content = this.template({arts: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtExploreItemView: function (art) {
    var subview = new CapstoneProject.Views.ArtExploreItem({ model: art });
    this.addSubview('.artists', subview);
  },

  removeArtExploreItemView: function (art) {
    this.removeModelSubview('.artists', art);
  }

});
