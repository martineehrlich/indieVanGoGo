CapstoneProject.Views.ArtistIndexItem = Backbone.CompositeView.extend({
  template: JST["artists/artist_index_item"],
  className: "project-item col-md-3",

  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .project-description": "renderStuff",
    "click .gallery-button": "addGalleryIndex",
    'click .m-background': 'remove',
    'click .gallery-close': 'removeBtn',
    'click .right': "nextImageRight",
    'click .left': "nextImageLeft"
  },

  renderStuff: function () {
    console.log("stuff");
  },

  addGalleryIndex: function () {
    var modal = new CapstoneProject.Views.GalleryIndex({arts: this.model.arts()});
    modal.render();
    modal.$(".gallery-close").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '5%' });
    modal.$(".gallery-close").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'right': '5%' });
    modal.$(".m-content").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '50%' });
    modal.$(".m-content").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'left': '50%' });
    // var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});
    $('body').append(modal.$el);
    // console.log("add gallery event fired");
    // debugger
    // var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});

    // this.addSubview('.gallery', galleryIndexView);
  },

 // composeTweet: function () {
 //   modal = new BackboneDemo.Views.TweetForm({
 //     collection: this.collection,
 //     model: new BackboneDemo.Models.Tweet()
 //   });
 //
 // },
});
