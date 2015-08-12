CapstoneProject.Models.Art = Backbone.Model.extend({
  urlRoot: "api/arts",

  // artist: function () {
  //   if (!this._artist) {
  //     this._artist = new CapstoneProject.Models.User({ art: this });
  //   }
  //   return this._artist;
  // },
  //
  // parse: function (response) {
  //   this.artist().set(response.artist, { parse: true });
  //   delete response.artist;
  //   return response;
  // }
});
