CapstoneProject.Views.GalleryIndexItem = Backbone.CompositeView.extend({
  template: JST["arts/gallery_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({art: this.model});
    this.$el.html(content);
    return this;
  }
});
