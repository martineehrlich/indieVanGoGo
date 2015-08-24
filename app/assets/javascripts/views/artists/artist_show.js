CapstoneProject.Views.ArtistShow = Backbone.CompositeView.extend({
  template: JST["artists/artist_show"],

  initialize: function (options) {
    $(window).on('load', function(){
      $(document).scrollTop(0);
});

    this.artId = options.artId;
    this.addArtworkIndexView();
    this.addFundingInfoView();
    this.listenTo(this.model, "sync", this.render);
  },

  scrollToAnchor: function (aid){
      var aTag = $("a[name='"+ aid +"']");
      if(aTag.offset() !== undefined){
      $('html,body').animate({scrollTop: aTag.offset().top}, 1500);
      }
      Backbone.history.navigate("#users/" + this.model.id);
    },

  events: {
    "click .explore-gallery-button": "addArtworkIndexView",
    "click .explore-patrons-button": "addPatronIndexView",
    'click .btn-compose': "createPatron",

},

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function () {
    if (this.artId !== null ){
      this.scrollToAnchor(this.artId);
    }
  },


  addArtworkIndexView: function () {
    this.$(".explore-patrons-button").removeClass("active");
    this.$(".explore-gallery-button").addClass("active");
    var viewsToRemove = this.subviews(".artist");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".artist", view);
    }.bind(this));
    var subview = new CapstoneProject.Views.ArtsIndex({model: this.model, collection: this.model.arts()});
    this.addSubview('.artist', subview);
  },

  addPatronIndexView: function () {
    this.$(".explore-gallery-button").removeClass("active");
    this.$(".explore-patrons-button").addClass("active");
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
   modal.render();
   modal.$(".m-content").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '50%' });
   modal.$(".m-content").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'left': '50%' });
   $('body').append(modal.$el);

 },

 addFundingInfoView: function () {
   var viewsToRemove = this.subviews(".funding-info");
   viewsToRemove.forEach(function(view){
     this.removeSubview(".funding-info", view);
   }.bind(this));
   var subview = new CapstoneProject.Views.FundingInfo({model: this.model, collection: this.model.patrons()});
   this.addSubview('.funding-info', subview);
 },

});
