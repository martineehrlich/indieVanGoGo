CapstoneProject.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = new CapstoneProject.Collections.Users();
    this.arts = new CapstoneProject.Collections.Arts();
    this._categories = new CapstoneProject.Collections.Categories();
    this._categories.fetch();
    this.users.fetch();
    this.arts.fetch();
  },

  routes: {
    "": "explore",
    "users/:id/:artid": "artistShow",
    "users/:id": "artistShow",
    "create": "artCreate",
    "profile": "userProfile"
  },

  explore: function () {
    this.users.fetch({
      remove: false,
      data: { page: 1 }
    });
    this.arts.fetch({
      remove: false,
      data: { page: 1 }
    });
    var exploreView = new CapstoneProject.Views.Explore({
      artists: this.users,
      arts: this.arts,
      categories: this._categories});
    this._swapView(exploreView);
  },

  artistShow: function (id, artId) {
    var artist = this.users.getOrFetch(id);
    var view = new CapstoneProject.Views.ArtistShow({model: artist, artId: artId});
    this._swapView(view);
  },

  artCreate: function () {
    this._categories.fetch();
    var model = new CapstoneProject.Models.Art();
    var view = new CapstoneProject.Views.ArtForm({
      model: model,
      collection: this.arts,
      categories: this._categories});
    this._swapView(view);
  },

  userProfile: function () {
    var artist = this.users.getOrFetch(CapstoneProject.CURRENT_USER.id);
    var view = new CapstoneProject.Views.Profile({model: artist});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
    $(document).scrollTop(0);
  }
});
