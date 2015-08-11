CapstoneProject.Views.ArtistIndexItem = Backbone.View.extend({
  template: JST["artists/artist_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    return this;
  }
});
