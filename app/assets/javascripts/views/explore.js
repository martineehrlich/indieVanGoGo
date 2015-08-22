CapstoneProject.Views.Explore = Backbone.CompositeView.extend({
  template: JST["index/explore"],


  initialize: function (options) {
    this.artists = options.artists;
    this.arts = options.arts;
    this.categories = options.categories;
    this._currentCategoryid = "1";
    this.addCategoriesView();
    this.addArtistExploreView();

    if (this.categories.isEmpty()) {
      this.listenTo(this.categories, "sync", this.addCategoryShow);
    } else {
      this.addCategoryShow();
    }
    this.currentCollection = this.artists;
    this.listenTo(this.currentCollection, "add", this.render);
    $(window).scroll(this.nextPage.bind(this));
  },

  events: {
    "click .explore-artists": "addArtistExploreView",
    "click .explore-arts": "addArtExploreView",
    "click a.category-item": "changeActiveCategory"
  },

  render: function () {
    var content = this.template({collection: this.artists});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    // this.listenForScroll();
    return this;
  },

  onRender: function () {
    this.$(".explore-artists").addClass("active");
    var listItems = $("a.category-item");
    listItems.first().addClass("active");
  },

  addCategoriesView: function () {
    var subview = new CapstoneProject.Views.CategoriesIndex({ categories: this.categories});
    this.addSubview('.categories', subview);
  },

  addCategoryShow: function () {
      if (this.categories.first()) {
        var category = this.categories.first();
        var subview = new CapstoneProject.Views.CategoryShow({model: category});
        var listItems = $(".category-item");
        listItems.first().addClass("active");
        this.addSubview(".category-show", subview);
        this.$(".explore-artists").addClass("active");
    }
  },


  changeActiveCategory: function (event) {
    this.$(".category-item.active").removeClass("active");
    var viewsToRemove = this.subviews(".category-show");
    viewsToRemove.forEach(function(view){
      this.removeSubview(".category-show", view);
    }.bind(this));
    $target = $(event.currentTarget);
    $target.addClass("active");
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
    this.$(".explore-artists").removeClass("active");
    this.$(".explore-arts").addClass("active");
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
    this.$(".explore-arts").removeClass("active");
    this.$(".explore-artists").addClass("active");
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
  },

 nextPage: function () {
   var view = this;
   if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
     if (view.currentCollection.page < view.currentCollection.total_pages) {
       view.currentCollection.fetch({
         data: { page: view.currentCollection.page + 1 },
         remove: false
       });
     }
   }
 }

});
