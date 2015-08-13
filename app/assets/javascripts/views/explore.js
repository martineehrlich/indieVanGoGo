CapstoneProject.Views.Explore = Backbone.CompositeView.extend({
  template: JST["index/explore"],


  initialize: function (options) {
    this.artists = options.artists;
    this.arts = options.arts;
    this.categories = options.categories;
    this.addCategoriesView();
    this.addArtistExploreView();
    this.listenTo(this.artists, "sync", this.render);
    this.listenTo(this.arts, "sync", this.render);

  },

  events: {
    "click .explore-artists": "addArtistExploreView",
    "click .explore-arts": "addArtExploreView",
    "click li.list-group-item": "changeActiveCategory"
  },

  render: function () {
    var content = this.template({collection: this.artists});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCategoriesView: function () {
    var subview = new CapstoneProject.Views.CategoriesIndex({ categories: this.categories});
    this.addSubview('.categories', subview);
  },

  changeActiveCategory: function (event) {
    $(".category-show").empty();
    $target = $(event.currentTarget);
    var id = $target.attr("data-id");
    var category = this.categories.get(id);
    var subview = new CapstoneProject.Views.CategoryShow({model: category});
    this.addSubview(".category-show", subview);
  },

  addArtExploreView: function () {
    $(".all-artists").empty();
    var subview = new CapstoneProject.Views.ArtExploreIndex({collection: this.arts});
    this.addSubview('.all-artists', subview);
  },

  addArtistExploreView: function () {
    $(".all-artists").empty();
    var subview = new CapstoneProject.Views.ArtistIndex({ artists: this.artists});
    this.addSubview('.all-artists', subview);
  }

});
