CapstoneProject.Views.ArtistIndexItem = Backbone.CompositeView.extend({
  template: JST["artists/artist_index_item"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .art-gallery": "addGalleryIndex"
  },

  addGalleryIndex: function () {
    var modal = new CapstoneProject.Views.GalleryIndex({model: this.model});
    // var galleryIndexView = new CapstoneProject.Views.GalleryIndex({model: this.model});
    $('body').append(modal.$el);
    modal.render();
    // this.addSubview('.gallery', galleryIndexView);
  }


 // composeTweet: function () {
 //   modal = new BackboneDemo.Views.TweetForm({
 //     collection: this.collection,
 //     model: new BackboneDemo.Models.Tweet()
 //   });
 //
 // },
});
