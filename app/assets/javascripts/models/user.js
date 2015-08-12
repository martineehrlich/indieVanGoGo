CapstoneProject.Models.User = Backbone.Model.extend({
  urlRoot: "api/users",

  parse: function (response) {
    if (response.arts) {
      this.arts().set(response.arts);
      delete response.arts;
    }
    return response;
  },

  arts: function ( ) {
    if (!this._arts) {
      this._arts = new CapstoneProject.Collections.Artworks([], { artist: this });
    }
    return this._artss;
  }
});
