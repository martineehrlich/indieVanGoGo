CapstoneProject.Views.Explore = Backbone.CompositeView.extend({
  template: JST["index/explore"],


  initialize: function (options) {
    this.artists = options.artists;
    this.arts = options.arts;
    this.categories = options.categories;
    this._currentCategoryid = "1";
    this.addCategoriesView();
    this.addCategoryShow(); //fixxxxxx thissssss
    this.addArtistExploreView();
    this.listenTo(this.artists, "sync", this.render);
    this.listenTo(this.arts, "sync", this.render);
    // this.listenTo(this.categories, "sync", this.render);
    this.currentCollection = this.artists;
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

  addCategoryShow: function () {
      if (this.categories.first()) {
        var category = this.categories.first();
        var subview = new CapstoneProject.Views.CategoryShow({model: category});
        this.addSubview(".category-show", subview);
    }
  },


  changeActiveCategory: function (event) {
    var viewsToRemove = this.subviews(".category-show");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".category-show", view);
    }.bind(this));
    $target = $(event.currentTarget);
    var id = $target.attr("data-id");
    var category = this.categories.get(id);
    this._currentCategoryid = category.id;
    var subview = new CapstoneProject.Views.CategoryShow({model: category});
    this.addSubview(".category-show", subview);
    this.addActiveCollectionView();
  },

  addActiveCollectionView: function () {
    var viewsToRemove = this.subviews(".all-artists");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".all-artists", view);
    }.bind(this));
    this.currentCollection.fetch({
      data: { category_id: this._currentCategoryid }
    });
    var subview;
    if(this.currentCollection.constructor === CapstoneProject.Collections.Users ){
      subview = new CapstoneProject.Views.ArtistIndex({artists: this.currentCollection});
      this.addSubview('.all-artists', subview);
    } else {
      subview = new CapstoneProject.Views.ArtExploreIndex({collection: this.currentCollection});
      this.addSubview('.all-artists', subview);
    }
  },

  addArtExploreView: function () {
    var viewsToRemove = this.subviews(".all-artists");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".all-artists", view);
    }.bind(this));
    this.currentCollection = this.arts;
    this.currentCollection.fetch({
      data: { category_id: this._currentCategoryid }
    });
    var subview = new CapstoneProject.Views.ArtExploreIndex({collection: this.currentCollection});
    this.addSubview('.all-artists', subview);
  },

  addArtistExploreView: function () {
    var viewsToRemove = this.subviews(".all-artists");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".all-artists", view);
    }.bind(this));
    this.currentCollection = this.artists;
    this.currentCollection.fetch({
      data: { category_id: this._currentCategoryid }
    });
    var subview = new CapstoneProject.Views.ArtistIndex({ artists: this.currentCollection});
    this.addSubview('.all-artists', subview);
  }

});
