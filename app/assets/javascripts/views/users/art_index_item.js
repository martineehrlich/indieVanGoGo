CapstoneProject.Views.UserArtIndexItem = Backbone.View.extend({
  template: JST["users/art_index_item"],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);

  },

  render: function () {
    var content = this.template({art: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .delete-art": "deleteArt"
  },

  deleteArt: function () {
    this.model.destroy();
  }


});
