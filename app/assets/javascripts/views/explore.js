CapstoneProject.Views.Explore = Backbone.CompositeView.extend({
  template: JST["index/explore"],


  initialize: function (options) {
    this.artists = options.collection;
    this.addArtistIndexView();
    this.listenTo(this.artists, "sync", this.render);

  },

  render: function () {
    var content = this.template({collection: this.artists});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtistIndexView: function () {
    // var subview = new CapstoneProject.Views.ArtistIndex({ artists: this.artists});
    // this.addSubview('.all-artists', subview);
    // <h4 class="pull-right"><a href="#">View <%=artist.escape("name")%>'s Work</a></h4>
    // <h4><a href="#api/users/<%=artist.id%>"><%= artist.escape("name") %></a></h4>
    var arts = new CapstoneProject.Collections.Arts();
    arts.fetch();
    var subview2 = new CapstoneProject.Views.ArtExploreIndex({collection: arts});
    this.addSubview('.all-artists', subview2);
  },


});
