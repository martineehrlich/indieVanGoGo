CapstoneProject.Views.CategoryIndexItem = Backbone.View.extend({
  template: JST["artists/category_index_item"],
  tagName: "div",


  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({category: this.model});
    this.$el.html(content);
    return this;
  }
});
