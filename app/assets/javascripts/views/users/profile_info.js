CapstoneProject.Views.Profile = Backbone.CompositeView.extend({
  template: JST["users/profile_show"],

  initialize: function (options) {
    this.addArtworkIndexView();
    this.addFundingInfoView();
    this.listenTo(this.model, "change sync", this.render);
  },

  events: {
    "click .explore-gallery-button": "addArtworkIndexView",
    "click .explore-patrons-button": "addPatronIndexView",
    'click .btn-compose': "createPatron",
    'click .edit-profile': "popModal",
    'mouseover .test-header': "showEditButton",
    'mouseleave .test-header': "hideEditButton"
},

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  showEditButton: function () {
    this.$(".edit-profile").removeClass("hidden");
  },

  hideEditButton: function () {
    this.$(".edit-profile").addClass("hidden");
  },


  addArtworkIndexView: function () {
    this.$(".explore-patrons-button").removeClass("active");
    this.$(".explore-gallery-button").addClass("active");
    var viewsToRemove = this.subviews(".artist");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".artist", view);
    }.bind(this));
    var subview = new CapstoneProject.Views.UserArtsIndex({model: this.model, collection: this.model.arts()});
    this.addSubview('.artist', subview);
  },

  popModal: function () {
    this.$(".edit-profile").addClass("hidden");
    var modal = new CapstoneProject.Views.UpdateForm({user: this.model});
    $('body').append(modal.$el);
    modal.render();
  },

  addPatronIndexView: function () {
    this.$(".explore-gallery-button").removeClass("active");
    this.$(".explore-patrons-button").addClass("active");
    var viewsToRemove = this.subviews(".artist");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".artist", view);
    }.bind(this));
    var subview = new CapstoneProject.Views.UserPatronsIndex({ model: this.model, collection: this.model.patrons()});
    this.addSubview('.artist', subview);
  },


 addFundingInfoView: function () {
   var viewsToRemove = this.subviews(".funding-info");
   viewsToRemove.forEach(function(view){
     this.removeSubview(".funding-info", view);
   }.bind(this));
   var subview = new CapstoneProject.Views.UserFundingInfo({model: this.model, collection: this.model.patrons()});
   this.addSubview('.funding-info', subview);
 },

});
