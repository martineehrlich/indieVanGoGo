CapstoneProject.Views.GalleryIndex = Backbone.CompositeView.extend({
  template: JST["arts/gallery_index"],

  initialize: function () {
    // this.model.fetch(); // why do i have to fetch here?
    // this.collection = this.model.arts();
    // this.listenTo(this.collection, 'add', this.addGalleryItemView);
    // this.listenTo(this.collection, 'remove', this.removeGalleryItemView);
    // this.collection.each(this.addGalleryItemView.bind(this));
    // this.listenTo(this.model, "sync", this.render);
    $(document).on('keyup', this.handleKey.bind(this));

  },

  render: function () {
    var content = this.template({arts: this.collection});
    this.$el.html(content);
    return this;
  },

  events: {
    'click .modal': 'remove',
    'click .btn-primary': 'removeBtn'
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  removeBtn: function (event) {
    event.preventDefault();
    this.remove();
  },

  // addGalleryItemView: function (art) {
  //   var subview = new CapstoneProject.Views.GalleryIndexItem({ model: art });
  //   this.addSubview('.gallery-index', subview);
  // },
  //
  // removeGalleryItemView: function (art) {
  //   this.removeModelSubview('.gallery-index', art);
  // }

});
