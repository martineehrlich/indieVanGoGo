CapstoneProject.Collections.Arts = Backbone.Collection.extend({
  url: "api/arts",
  model: CapstoneProject.Models.Art,

  parse: function (response) {
    if(response.page){
    this.page = response.page;
    this.total_pages = response.total_pages;
    return response.arts;
  }else {
      return response;
    }
  },


  getOrFetch: function (id) {
    var art = this.get(id);
    var arts = this;
    if (art) {
      art.fetch();
    } else {
      art = new CapstoneProject.Models.Art({id: id});
      art.fetch({
        success: function () {
          arts.add(art);
        }
      });
    }
    return art;
  },

});
