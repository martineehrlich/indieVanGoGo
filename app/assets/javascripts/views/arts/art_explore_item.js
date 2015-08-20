CapstoneProject.Views.ArtExploreItem = Backbone.View.extend({
  template: JST["arts/art_explore_item"],
  className: "project-item col-sm-3 col-lg-3 col-md-3",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.users = new CapstoneProject.Collections.Users();
    this.artist = this.users.getOrFetch(this.model.escape("artist_id"));
    this.listenTo(this.artist, "sync", this.render);
  },

  render: function () {
    var content = this.template({art: this.model, artist: this.artist});
    this.$el.html(content);
    return this;
  },

  events: {
    "click .art-item": "addArtModal",
    "click .art-explore-button": "navigateToArtist"

  },

  addArtModal: function () {
    var modal = new CapstoneProject.Views.ArtShow({model: this.model});
    modal.render();
    modal.$(".m-content").css({"margin-top":  window.pageYOffset - $(modal.$el).height() / 2, 'top': '50%' });
    modal.$(".m-content").css({ 'margin-left': window.pageXOffset - $(modal.$el).width() / 2, 'left': '50%' });
    $('body').append(modal.$el);

  },

  navigateToArtist: function () {
    Backbone.history.navigate("#users/" + this.model.escape('artist_id'), {trigger: true});
  }



});
