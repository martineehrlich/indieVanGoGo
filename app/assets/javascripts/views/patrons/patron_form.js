CapstoneProject.Views.PatronForm = Backbone.View.extend({
  template: JST['patrons/patron_form'],

  events: {
    'submit form': 'createPatron',
    'click .m-background': 'remove',
    'click .close': 'removeBtn'
  },

  initialize: function (options) {
    this.artist = options.artist;
    $(document).on('keyup', this.handleKey.bind(this));
  },

  render: function () {
    this.$el.html(this.template({artist: this.artist}));
    this.onRender();
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

  createPatron: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: function (tweet) {
        this.collection.add(patron);
        this.remove();
      }.bind(this)
    });
  },


  onRender: function () {
    $('.amount-field').focus();
  }
});
