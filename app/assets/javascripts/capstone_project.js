window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#main");
    var $navbar = $('#navbar');
    var router = new CapstoneProject.Routers.Router({$rootEl: $rootEl});
    var nav = new CapstoneProject.Views.NavShow({router: router});
    $navbar.html(nav.render().$el);
    Backbone.history.start();
  }
};
