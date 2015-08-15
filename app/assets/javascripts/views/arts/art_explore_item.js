CapstoneProject.Views.ArtExploreItem = Backbone.View.extend({
  template: JST["arts/art_explore_item"],


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

    // var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});
    $('body').append(modal.$el);
    $("html,body").css("overflow","hidden");
    modal.render();
    // this.addSubview('.gallery', galleryIndexView);
  }

});
