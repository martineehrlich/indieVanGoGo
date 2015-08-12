CapstoneProject.Views.Explore = Backbone.CompositeView.extend({
  template: JST["index/explore"],


  initialize: function (options) {
    this.artists = options.collection;
    this.addArtistIndexView();
    this.listenTo(this.artists, "sync", this.render);

  },

  render: function () {
    var content = this.template({collection: this.artists});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtistIndexView: function () {
    // var subview = new CapstoneProject.Views.ArtistIndex({ artists: this.artists});
    // this.addSubview('.all-artists', subview);
    var arts = new CapstoneProject.Collections.Arts();
    arts.fetch();
    var subview2 = new CapstoneProject.Views.ArtExploreIndex({collection: arts});
    this.addSubview('.all-artists', subview2);
  },


});
