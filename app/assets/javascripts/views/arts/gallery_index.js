CapstoneProject.Views.GalleryIndex = Backbone.CompositeView.extend({
  template: JST["arts/gallery_index"],

  initialize: function (options) {
    this.arts = options.arts;
    this.listenTo(this.model, "sync", this.addActiveClass);

  },

  render: function () {
    var content = this.template({arts: this.arts});
    this.$el.html(content);
    return this;
  },


  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  addActiveClass: function () {
    $(".carousel-inner:first-child").addClass("active");
  },

  events: {
    'click .m-background': 'remove',
    'click button.btn-danger': 'removeBtn'
  },


  removeBtn: function (event) {
    event.preventDefault();
    this.remove();
  }


});
