CapstoneProject.Collections.Arts = Backbone.Collection.extend({
  url: "api/arts",
  model: CapstoneProject.Models.Art,

  parse: function (response) {
    this.page = response.page;
    this.total_pages = response.total_pages;
    return response.arts;
  }
});
