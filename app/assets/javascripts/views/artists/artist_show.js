CapstoneProject.Views.ArtistShow = Backbone.CompositeView.extend({
  template: JST["artists/artist_show"],

  initialize: function (options) {
    // this.model = options.artist;
    this.addArtworkIndexView();
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtworkIndexView: function () {
    var subview = new CapstoneProject.Views.ArtsIndex({ model: this.model, collection: this.model.arts()});
    this.addSubview('.artist', subview);
  }

});
