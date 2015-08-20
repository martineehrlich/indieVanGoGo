CapstoneProject.Views.Profile = Backbone.CompositeView.extend({
  template: JST["users/profile"],

  initialize: function (options) {
    this.addArtworkIndexView();
    this.addFundingInfoView();
    this.listenTo(this.model, "sync", this.render);
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
    return this;
  },

  addArtworkIndexView: function () {
    var viewsToRemove = this.subviews(".artist");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".artist", view);
    }.bind(this));
    var subview = new CapstoneProject.Views.ArtsIndex({model: this.model, collection: this.model.arts()});
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


 addFundingInfoView: function () {
   var viewsToRemove = this.subviews(".funding-info");
   viewsToRemove.forEach(function(view){
     this.removeSubview(".funding-info", view);
   }.bind(this));
   var subview = new CapstoneProject.Views.FundingInfo({model: this.model, collection: this.model.patrons()});
   this.addSubview('.funding-info', subview);
 },

});
