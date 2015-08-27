var ESCAPE_KEY_CODE = 27;
CapstoneProject.Views.ArtShow = Backbone.View.extend({
  template: JST['arts/art_show'],

  events: {
    'click .m-background': 'remove',
    'click .close': 'removeBtn'
  },

  initialize: function () {
    //WE MUST REMOVE THIS EVENT WHEN WE LEAVE THIS PAGE
    this.boundHandler = this.handleKey.bind(this);
    $(document).on('keyup', this.boundHandler);
  },

  render: function () {
    this.$el.html(this.template({art: this.model}));
    return this;
  },

  handleKey: function (event) {
    if (event.keyCode === ESCAPE_KEY_CODE) {
      this.remove();
    }
  },
  remove: function(){
    $(document).off('keyup', this.boundHandler);
    Backbone.View.prototype.remove.call(this);
  },
  removeBtn: function (event) {
    event.preventDefault();
    this.remove();
  }
});
