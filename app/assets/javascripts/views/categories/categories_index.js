CapstoneProject.Views.CategoriesIndex = Backbone.CompositeView.extend({
  template: JST["categories/categories_index"],
  tagName: "div",

  initialize: function (options) {
    this.collection = options.categories;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addCategoryView);
    this.listenTo(this.collection, 'remove', this.removeCategoryView);
    this.collection.each(this.addCategoryView.bind(this));
  },

  render: function () {
    var content = this.template({categories: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function () {
    $(".categories-index div:first-child a:first").addClass("active");
  },

  addCategoryView: function (category) {
    var subview = new CapstoneProject.Views.CategoryIndexItem({ model: category });
    this.addSubview('.categories-index', subview);
  },

  removeCategoryView: function (category) {
    this.removeModelSubview('.categories-index', category);
  }


});
