CapstoneProject.Views.CategoryIndexItem = Backbone.CompositeView.extend({
  template: JST["categories/category_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({category: this.model});
    this.$el.html(content);
    return this;
  }
});
