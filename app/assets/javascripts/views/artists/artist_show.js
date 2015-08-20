CapstoneProject.Views.ArtistShow = Backbone.CompositeView.extend({
  template: JST["artists/artist_show"],

  initialize: function (options) {
    this.addArtworkIndexView();
    if(document.location.hash.slice(-2, -1) === "="){
    this.artId = document.location.hash.slice(-1);
    }
    this.listenTo(this.model, "sync", this.render);
  },

  scrollToAnchor: function (aid){
      var aTag = $("a[name='"+ aid +"']");
      if(aTag.offset() !== undefined){
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
      }
    },

  events: {
    "click .explore-gallery-button": "addArtworkIndexView",
    "click .explore-patrons-button": "addPatronIndexView",
    'click .btn-compose': "createPatron"
},

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function () {
    if (this.artId){
    this.scrollToAnchor(this.artId);
  }
  },

  addArtworkIndexView: function () {
    var viewsToRemove = this.subviews(".artist");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".artist", view);
    }.bind(this));
    var subview = new CapstoneProject.Views.ArtsIndex({artId: this.artId, model: this.model, collection: this.model.arts()});
    this.addSubview('.artist', subview);
  },

  addPatronIndexView: function () {
    var viewsToRemove = this.subviews(".artist");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".artist", view);
    }.bind(this));
    var subview = new CapstoneProject.Views.PatronsIndex({ model: this.model, collection: this.model.patrons()});
    this.addSubview('.artist', subview);
  },

  createPatron: function () {
   var modal = new CapstoneProject.Views.PatronForm({artist: this.model, collection: this.model.patrons(),
     model: new CapstoneProject.Models.Patron()
   });
   $('body').append(modal.$el);
   modal.render();
 }
});
