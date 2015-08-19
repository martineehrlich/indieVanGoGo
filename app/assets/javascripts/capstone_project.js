window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.users = new CapstoneProject.Collections.Users();
    this.arts = new CapstoneProject.Collections.Arts();
    var $rootEl = $("#main");
    var $navbar = $('#navbar');
    var router = new CapstoneProject.Routers.Router({$rootEl: $rootEl, users: this.users, arts: this.arts});
    var nav = new CapstoneProject.Views.NavShow({router: router, users: this.users, arts: this.arts});
    $navbar.html(nav.render().$el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  CapstoneProject.initialize();
});
