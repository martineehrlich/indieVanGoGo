CapstoneProject.Views.NavShow = Backbone.View.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.newSearch = new CapstoneProject.Collections.Searches();
    this.listenTo(this.newSearch, "sync reset", this.renderResults);
  },

  renderResults: function(){
    var $results = this.$('.search-results');
    $results.empty();
    var lis = this.newSearch.map(function (result) {
      var resultLI = $('<li class="list-group-item search-result"></li>');
      resultLI.html('<img src=' + result.escape("image") + '>' + result.escape('header') + result.escape('type'));
      resultLI.attr("data-id", result.id);
      resultLI.attr("data-artist-id", result.get("artist_id"));
      resultLI.addClass(result.escape("type"));
      return resultLI;
    });
    $results.append(lis);
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    this.renderResults();
    return this;
  },

  events: {
    "blur .form-control": "closeSearch",
    "keyup .form-control": "makeQuery",
    "click .list-group-item": "navigateToRequested"
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
  }


});
