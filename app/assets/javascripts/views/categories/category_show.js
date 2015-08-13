CapstoneProject.Views.CategoryShow = Backbone.View.extend({
  template: JST["categories/category_show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({category: this.model});
    this.$el.html(content);
    return this;
  }
});
