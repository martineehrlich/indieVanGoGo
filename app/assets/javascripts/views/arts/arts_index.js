CapstoneProject.Views.ArtsIndex = Backbone.CompositeView.extend({
  template: JST["arts/arts_index"],

  initialize: function (options) {
    // this.collection = options.collection;
    // this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addArtItemView);
    // this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(this.collection, 'add', this.addArtistItemView);
    this.collection.each(this.addArtItemView.bind(this));
  },

  render: function () {
    var content = this.template({arts: this.model.arts()});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtItemView: function (art) {
    var subview = new CapstoneProject.Views.ArtIndexItem({ model: art });
    this.addSubview('.arts', subview);
  }


});
