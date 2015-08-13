CapstoneProject.Views.ArtistIndex = Backbone.CompositeView.extend({
  template: JST["categories/categories_index"],
  tagName: "div",
  className: "row",


  initialize: function (options) {
    this.collection = options.categories;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addCategoryView);
    this.listenTo(this.collection, 'remove', this.removeCategoryView);
    this.collection.each(this.addArtistItemView.bind(this));
  },

  render: function () {
    var content = this.template({categories: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCategoryView: function (category) {
    var subview = new CapstoneProject.Views.CategoryIndexItem({ model: category });
    this.addSubview('.categories', category);
  },

  removeCategoryView: function (category) {
    this.removeModelSubview('.categories', category);
  }



});
