CapstoneProject.Collections.Users = Backbone.Collection.extend({
  url: "api/users",
  model: CapstoneProject.Models.User,

  getOrFetch: function (id) {
    var user = this.get(id);
    var users = this;
    if (user) {
      user.fetch();
    } else {
      user = new CapstoneProject.Models.User({id: id});
      user.fetch({
        success: function () {
          users.add(user);
        }
      });
    }
    return user;
  },


  arts: function () {
    if (!this._arts) {
      this._arts = new CapstoneProject.Collections.Arts([], { artist: this });
    }
    return this._arts;
  },


  categories: function () {
    if (!this._categories) {
      this._categories = new CapstoneProject.Collections.Categories([], { artist: this });
    }
    return this._categories;
  },

  parse: function (response) {
    if (response.arts) {
      this.arts().set(response.arts, { parse: true });
      delete response.arts;
    }
    if (response.categories) {
      this.categories().set(response.categories, {parse: true});
      delete response.categories;
    }
    if(response.page){
      this.page = response.page;
      this.total_pages = response.total_pages;
      return response.artists;
    } else {
      return response;
  }
  }
});
