CapstoneProject.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  arts: function () {
    if (!this._arts) {
      this._arts = new CapstoneProject.Collections.Arts([], { artist: this });
    }
    return this._arts;
  },

  patrons: function () {
    if (!this._patrons) {
      this._patrons = new CapstoneProject.Collections.Patrons([], { artist: this });
    }
    return this._patrons;
  },

  parse: function (response) {
    if (response.arts) {
      this.arts().set(response.arts, { parse: true });
      delete response.arts;
    }

    if (response.patrons) {
      this.patrons().set(response.patrons, { parse: true });
      delete response.patrons;
    }

    return response;
  }


});
