CapstoneProject.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  arts: function () {
    if (!this._arts) {
      this._arts = new CapstoneProject.Collections.Arts([], { artist: this });
    }
    return this._arts;
  },

  parse: function (response) {
    if (response.arts) {
      this.arts().set(response.arts, { parse: true });
      delete response.arts;
    }
    return response;
  }


});
