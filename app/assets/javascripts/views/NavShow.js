CapstoneProject.Views.NavShow = Backbone.View.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.router = options.router;
    // this.listenTo(this.router, "route", this.handleRoute);
    // this.listenTo(this.collection, "add remove", this.updateCount);
  },

  // handleRoute: function (routeName, params) {
  //   this.$el.find(".active").removeClass("active");
  //   this.$el.find("." + routeName).addClass("active");
  // },
  //
  // updateCount: function () {
  //   this.$("#tweets-count").text(this.collection.length);
  // },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    "click .glyphicon-search": "openSearch",
    "blur .navbar-form": "closeSearch",

  },

  openSearch: function () {
    var $searchbar = $(".navbar-form");
    $searchbar.css("display", "block");
    var $input = this.$("input.form-control");
    $input.focus();
  },

  closeSearch: function () {
    var $searchbar = $(".navbar-form");
    $searchbar.css("display", "none");
  }

});
