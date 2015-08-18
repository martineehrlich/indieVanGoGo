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
    "keydown .form-control": "makeQuery"
  },

  openSearch: function () {
    var $searchbar = $(".navbar-form");
    $searchbar.css("display", "block");
    var $input = this.$("input.form-control");
    $input.focus();
  },

  makeQuery: function () {
    $("input.form-control").keyup(function (event) {
        if (event.keyCode === 13){
          event.preventDefault();
        var $input = $("input.form-control");
          var artists = new CapstoneProject.Collections.Users();
          var arts = new CapstoneProject.Collections.Arts();
          var searchArtists = artists.fetch ({
            data: {search_string: $input.val() }
          });
          this.router.
          Backbone.history.navigate("searchResults", {trigger: true});
          // var searchArts = arts.fetch({
          //   data: {search_string: $input.html() }
          // });
        }
        return false;
      });
    },

  closeSearch: function () {
    var $searchbar = $(".navbar-form");
    $searchbar.css("display", "none");
  }

});
