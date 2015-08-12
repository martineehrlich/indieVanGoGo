CapstoneProject.Views.ArtForm = Backbone.View.extend({
  template: JST["arts/art_form"],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
