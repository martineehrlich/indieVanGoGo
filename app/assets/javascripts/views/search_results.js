CapstoneProject.Views.SearchResult = Backbone.View.extend({
  template: JST["search/search_result"],

  initialize: function (options) {
    this.results = options.search_results;
    this.listenTo(this.results, "sync remove", this.render);
  },

  render: function () {
    var content = this.template({results: this.results});
    this.$el.html(content);
    return this;
  }

});
