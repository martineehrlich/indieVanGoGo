CapstoneProject.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = new CapstoneProject.Collections.Users();
    this.arts = new CapstoneProject.Collections.Arts();
  },

  routes: {
    "": "opening",
    "explore": "explore",
    "users/:id": "artistShow",
    "arts/new": "artCreate"
  },

  explore: function () {
    this.users.fetch();
    this.arts.fetch();
    var exploreView = new CapstoneProject.Views.Explore({users: this.users, arts: this.arts});
    this._swapView(exploreView);
  },

  artistShow: function (id) {
    var artist = this.users.getOrFetch(id);
    var view = new CapstoneProject.Views.ArtistShow({model: artist});
    this._swapView(view);
  },

  artCreate: function () {
    var model = new CapstoneProject.Models.Art();
    var view = new CapstoneProject.Views.ArtForm({model: model});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
