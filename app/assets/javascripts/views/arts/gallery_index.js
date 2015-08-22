CapstoneProject.Views.GalleryIndex = Backbone.CompositeView.extend({
  template: JST["arts/gallery_index"],

  initialize: function (options) {
    this.arts = options.arts;
    this.listenTo(this.model, "sync", this.addActiveClass);
  },

  events: {
    'click .m-background': 'remove',
    'click button.btn-danger': 'removeBtn',
    'mouseover .item.active': 'showCaption',
    'mouseleave .item.active': 'hideCaption'
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


  removeBtn: function (event) {
    event.preventDefault();
    this.remove();
  },

  showCaption: function () {
    $(".carousel-caption").removeClass("hidden");
  },

  hideCaption: function () {
    $(".carousel-caption").addClass("hidden");
  }



});
