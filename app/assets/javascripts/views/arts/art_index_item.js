CapstoneProject.Views.ArtIndexItem = Backbone.View.extend({
  template: JST["arts/art_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({art: this.model});
    this.$el.html(content);
    return this;
  }
});
