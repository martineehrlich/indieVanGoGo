CapstoneProject.Views.ArtExploreItem = Backbone.View.extend({
  template: JST["arts/art_explore_item"],
  className: "project-item col-sm-3 col-lg-3 col-md-3",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({art: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .art-item": "addArtModal"
  },

  addArtModal: function () {

    var modal = new CapstoneProject.Views.ArtShow({model: this.model});
    modal.render();
    modal.$(".m-content").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '50%' });
    modal.$(".m-content").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'left': '50%' });
    // var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});
    $('body').append(modal.$el);


    // this.addSubview('.gallery', galleryIndexView);
  }

});
