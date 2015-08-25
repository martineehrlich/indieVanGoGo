CapstoneProject.Views.NavShow = Backbone.CompositeView.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.newSearch = new CapstoneProject.Collections.Searches();
    this.listenTo(this.newSearch, "sync", this.addSearchResultView);
    this.listenTo(this.newSearch, 'reset remove', this.removeSearchResultView);
    this.newSearch.each(this.addSearchResultView.bind(this));
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addSearchResultView: function (result) {
    var subview = new CapstoneProject.Views.SearchResult({ search_results: result});
    this.addSubview('.search-results', subview);
  },

  removeSearchResultView: function () {
    var viewsToRemove = this.subviews(".search-results");
     viewsToRemove.forEach(function(view){
       this.removeSubview(".search-results", view);
     }.bind(this));
     var $results = this.$('.search-results');
     $results.empty();
  },

  events: {
    "blur .form-control": "closeSearch",
    "keyup .form-control": "makeQuery",
    "click .list-group-item": "navigateToRequested",
    "submit form": "preventDefault",
    "click .navbar-header": "navigateToExplore"
  },

  preventDefault: function (event) {
    event.preventDefault();
  },

  navigateToExplore: function () {
    Backbone.history.navigate("", {trigger: true});
  },

  makeQuery: function (event) {
    var $input = $("input.form-control");
    if ( $("input.form-control").val() !== "") {
      event.preventDefault();
      this.newSearch.fetch ({
        data: {search_string: $input.val() },
        reset: true
      });
    } else {
      this.newSearch.reset([]);
    }
  },

  navigateToRequested: function (event) {
    $target = $(event.currentTarget);
    var id = null;
    var artistid = null;
    if($target.hasClass("Art")){
      id = $target.data("artist-id");
      artid = $target.data("id");
      Backbone.history.navigate("#users/" + id + "/" + artid, {trigger: true});
    } else {
     id = $target.data("id");
     Backbone.history.navigate("#users/" + id, {trigger: true});
    }

  },

  closeSearchHelper: function () {
    $(".list-group-item").remove();
  },

  closeSearch: function () {
    setTimeout(this.closeSearchHelper.bind(this), 200);
    $("input.form-control").val("");
  },
  // renderResults: function(){
  //   // var viewsToRemove = this.subviews(".search-results");
  //   // viewsToRemove.forEach(function(view){
  //   //   this.removeSubview(".search-results", view);
  //   // }.bind(this));
  //   // var $results = this.$('.search-results');
  //   // $results.empty();
  //   //
  //   // var lis = this.newSearch.map(function (result) {
  //   //   var resultLI = $('<li class="list-group-item search-result"></li>');
  //   //   resultLI.html('<img src=' + result.escape("image") + '>' + result.escape('header') + result.escape('type'));
  //   //   resultLI.attr("data-id", result.id);
  //   //   resultLI.attr("data-artist-id", result.get("artist_id"));
  //   //   resultLI.addClass(result.escape("type"));
  //   //   return resultLI;
  //   // });
  //   // $results.append(lis);
  // },



});
