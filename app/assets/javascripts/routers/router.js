CapstoneProject.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = new CapstoneProject.Collections.Users();
  },

  routes: {
    "": "opening",
    "explore": "explore",
    "api/users/:id": "artistShow"
  },

  explore: function () {
    this.users.fetch();
    var exploreView = new CapstoneProject.Views.Explore({collection: this.users});
    this._swapView(exploreView);
  },

  artistShow: function (id) {
    var artist = this.users.getOrFetch(id);
    var view = new CapstoneProject.Views.ArtistShow({artist: artist});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
