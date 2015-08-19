CapstoneProject.Views.NavShow = Backbone.View.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.router = options.router;
    this.arts = options.arts;
    this.users = options.users;
    this.searchResults = [];
    this.artResults = [];
    this.listenTo(this.users, "sync", this.renderResults);
    this.listenTo(this.arts, "sync", this.renderResults);
  },
  renderResults: function(){
    var $results = this.$('.search-results');
    $results.empty();
    var lis = this.searchResults.map(function (result) {
      var resultLI = $('<li class="list-group-item search-result"></li>');
      resultLI.html(result.escape('name'));
      return resultLI;
    });
      var lis2 = this.artResults.map(function (result) {
      var resultLI = $('<li class="list-group-item search-result"></li>');
      resultLI.html(result.escape('title'));
      return resultLI;
    });
    $results.append(lis);
    $results.append(lis2);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderResults();
    return this;
  },

  events: {
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
    var $input = $("input.form-control");
      var users = this.users;
      var arts = this.arts;
      $("input.form-control").keyup(function (event) {
        if ( $("input.form-control").val() !== "") {
        event.preventDefault();
            users.fetch ({
              data: {search_string: $input.val() }
            });
            arts.fetch({
              data: {search_string: $input.val() }
            });
            this.searchResults = this.users;
            this.artResults = this.arts;
          }
        }.bind(this));
    },

    navigateToRequested: function () {

    },

    closeSearch: function () {
      this.searchResults = [];
      this.artResults = [];
      this.renderResults();
    }




});
