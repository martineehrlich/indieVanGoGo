CapstoneProject.Views.PatronsIndex = Backbone.CompositeView.extend({
  template: JST["arts/patrons_index"],

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addArtItemView);
    this.listenTo(this.collection, 'remove', this.removeArtItemView);
    this.collection.each(this.addArtItemView.bind(this));
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtItemView: function (art) {
    var subview = new CapstoneProject.Views.ArtIndexItem({ model: art });
    this.addSubview('.arts', subview);
  },

  removeArtItemView: function (art) {
    this.removeModelSubview('.arts', art);
  }

});
