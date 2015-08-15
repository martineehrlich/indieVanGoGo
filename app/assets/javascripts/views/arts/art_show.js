CapstoneProject.Views.ArtShow = Backbone.View.extend({
  template: JST['arts/art_show'],

  events: {
    'click .m-background': 'remove',
    'click .close': 'removeBtn'
  },

  initialize: function () {

    $(document).on('keyup', this.handleKey.bind(this));
  },

  render: function () {
    this.$el.html(this.template({art: this.model}));
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
  }
});
