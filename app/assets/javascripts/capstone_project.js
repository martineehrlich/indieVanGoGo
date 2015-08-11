window.CapstoneProject = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#root");
    new CapstoneProject.Routers.Router({$rootEl: $rootEl});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  CapstoneProject.initialize();
});
