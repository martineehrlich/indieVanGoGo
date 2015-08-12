CapstoneProject.Views.ArtistIndexItem = Backbone.View.extend({
  template: JST["artists/artist_index_item"],
  tagName: "div",
  className: "col-sm-4 col-lg-4 col-md-4",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    return this;
  }
});
