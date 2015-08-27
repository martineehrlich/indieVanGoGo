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
    this.$(".errors-list").empty();
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    if (formData.anonymous === "true"){
      this.model.set("name", "Anonymous");
      this.model.set("amount", formData.amount);
      this.model.set("anonymous", formData.anonymous);
      this.model.set("anonymous", formData.anonymous);
      this.model.set("artist_id", formData.artist_id);
      formData = {};
    }
    this.model.save(formData, {
      success: function (patron) {
        this.collection.add(patron);
        var $success = this.$(".alert-success");
        $success.removeClass("hidden");
        setTimeout(function(){
          this.remove();}.bind(this), 0);
      }.bind(this),
      error: function (model, response) {
        var $errorsDiv = this.$(".errors-div");
        $errorsDiv.removeClass("hidden");
        this.$(".errors-list").append("Please include your name and the amount you wish to donate.");
    }.bind(this)
  });
  },


  onRender: function () {
    $('.name-field').focus();
  }
});
