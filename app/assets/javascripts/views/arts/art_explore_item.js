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
  }
});
