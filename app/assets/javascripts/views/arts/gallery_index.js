CapstoneProject.Views.GalleryIndex = Backbone.CompositeView.extend({
  template: JST["arts/gallery_index"],

  initialize: function () {
    this.model.fetch(); // why do i have to fetch here?
    this.collection = this.model.arts();
    this.listenTo(this.collection, 'add', this.addGalleryItemView);
    this.listenTo(this.collection, 'remove', this.removeGalleryItemView);
    this.collection.each(this.addGalleryItemView.bind(this));
  },

  render: function () {
    var content = this.template({arts: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addGalleryItemView: function (art) {
    var subview = new CapstoneProject.Views.GalleryIndexItem({ model: art });
    this.addSubview('.gallery-index', subview);
  },

  removeGalleryItemView: function (art) {
    this.removeModelSubview('.gallery-index', art);
  }

});
