CapstoneProject.Views.ArtsIndex = Backbone.CompositeView.extend({
  template: JST["arts/arts_index"],

  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addArtItemView);
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
  }


});
