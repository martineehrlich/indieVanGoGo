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
    "click .delete-art": "deleteArt",
    "click .img-responsive": "popModal"
  },

  popModal: function () {
    event.preventDefault();
      var modal = new CapstoneProject.Views.ArtShow({model: this.model});
      modal.render();
      modal.$(".m-content").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '50%' });
      modal.$(".m-content").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'left': '50%' });
      $('body').append(modal.$el);
  },

  deleteArt: function () {
    this.model.destroy();
  }


});
