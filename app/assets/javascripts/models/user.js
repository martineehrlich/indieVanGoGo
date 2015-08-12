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

  }
});


comments: function () {
  if (!this._comments) {
    this._comments = new BlogApp.Collections.Comments([], { post: this });
  }
  return this._comments;
}
Step 2:

//post.js

parse: function (response) {
  if (response.comments) {
    this.comments().set(response.comments);
    delete response.comments;
  }
  return response;
}
