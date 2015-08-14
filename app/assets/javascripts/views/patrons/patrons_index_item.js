CapstoneProject.Views.PatronIndexItem = Backbone.View.extend({
  template: JST["patrons/patron_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({patron: this.model});
    this.$el.html(content);
    return this;
  }
});
