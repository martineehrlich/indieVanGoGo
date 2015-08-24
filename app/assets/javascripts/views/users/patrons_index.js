CapstoneProject.Views.UserPatronsIndex = Backbone.CompositeView.extend({
  template: JST["users/patrons_index"],

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPatronItemView);
    this.listenTo(this.collection, 'remove', this.removePatronItemView);
    this.collection.each(this.addPatronItemView.bind(this));
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPatronItemView: function (patron) {
    var subview = new CapstoneProject.Views.UserPatronIndexItem({ model: patron, collection: this.collection });
    this.addSubview('.patrons', subview);
  },

  removeArtItemView: function (art) {
    this.removeModelSubview('.patrons', art);
  }

});
