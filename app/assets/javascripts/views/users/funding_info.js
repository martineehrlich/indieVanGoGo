CapstoneProject.Views.UserFundingInfo = Backbone.CompositeView.extend({
  template: JST["users/funding_info"],

  initialize: function () {
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.model, "sync change", this.render);
    this.listenTo(this.collection, "add", this.updateInfo);
  },

  render: function () {
    var content = this.template({artist: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  updateInfo: function () {
    this.model.fetch();
  }
});
