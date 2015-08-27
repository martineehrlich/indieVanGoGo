CapstoneProject.Views.ArtistIndexItem = Backbone.CompositeView.extend({
  template: JST["artists/artist_index_item"],
  className: "project-item artist-item col-md-3",


  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    $artist = $(".project-item");
    $artist.attr("data-id", this.model.id);
  },

  events: {
    "click .gallery-button": "addGalleryIndex",
  },
  addGalleryIndex: function () {
    var modal = new CapstoneProject.Views.GalleryIndex({arts: this.model.arts()});
    modal.render();
    modal.$(".gallery-close").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '5%' });
    modal.$(".gallery-close").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'right': '5%' });
    modal.$(".m-content").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '50%' });
    modal.$(".m-content").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'left': '50%' });
    $('body').append(modal.$el);
  },
});
