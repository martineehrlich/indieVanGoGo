CapstoneProject.Views.ArtistShow = Backbone.CompositeView.extend({
  template: JST["artists/artist_show"],

  initialize: function (options) {
    this.addArtworkIndexView();
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
  'click .btn-compose': "createPatron"
},

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addArtworkIndexView: function () {
    var subview = new CapstoneProject.Views.ArtsIndex({ model: this.model, collection: this.model.arts()});
    this.addSubview('.artist', subview);
  },

  createPatron: function () {
   var modal = new CapstoneProject.Views.PatronForm({artist: this.model,
     model: new CapstoneProject.Models.Patron()
   });
   $('body').append(modal.$el);
   modal.render();
 },

});
