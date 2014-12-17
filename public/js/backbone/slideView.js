var SlideView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("{<br/> src: '<%= src %>',<br/> url: '<%= url %>',<br/> begin: [<%= begin %>],<br/> end: [<%= end %>]<br/> },"),
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        var slideHtml = this.template(this.model.attributes);
        this.$el.html(slideHtml);
        return this;
    }, 

    events: {

    }
});


var SlidesView = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.collection, 'add', this.render);
    },

    render: function() {
        var that = this;
        this.$el.empty();
        _.each(this.collection.models, function(slide) {
            var slideView = new SlideView({model: slide});
            that.$el.prepend(slideView.render().el);
        });
        return this;
    }, 
    
    events: {

    }
})