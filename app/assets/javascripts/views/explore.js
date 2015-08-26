CapstoneProject.Views.Explore = Backbone.CompositeView.extend({
  template: JST["index/explore"],


  initialize: function (options) {
    this.artists = options.artists;
    this.arts = options.arts;
    this.categories = options.categories;
    this.addCategoriesView();
    this._currentCategoryid = "1";
    this.currentCollection = this.artists;
    this.addArtistExploreView();
    if (this.categories.isEmpty()) {
      this.listenTo(this.categories, "sync", this.addCategoryShow);
    } else {
      this.addCategoryShow();
      var listItems = $("a.category-item");
      listItems.first().addClass("active");
    }
    this.boundNextPage = this.nextPage.bind(this);
    $(window).on("scroll", this.boundNextPage);

  },

  remove: function(){
    $(window).off("scroll", this.boundNextPage);
    Backbone.CompositeView.prototype.remove.call(this);
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
    var category = this.categories.get($target.attr("data-id"));
    this._currentCategoryid = category.id;
    var subview = new CapstoneProject.Views.CategoryShow({model: category});
    this.addSubview(".category-show", subview);

    if (this.currentCollection.constructor === CapstoneProject.Collections.Users ){
      this.addArtistExploreView();
    }  else {
        this.addArtExploreView();
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

  nextPage: function (event) {
    if(this.currentCollection.constructor === CapstoneProject.Collections.Users){
      this.data = {
        data: { page: this.currentCollection.page + 1, explore: true},
        remove: false
      };
    } else {
      this.data = {
        data: { page: this.currentCollection.page + 1, category_id: this._currentCategoryid},
        remove: false
      };
    }
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (this.currentCollection.page < this.currentCollection.total_pages) {
        this.currentCollection.fetch(this.data);
      }
    }
  },

});
