Hacks = new Meteor.Collection("Hacks");

if (Meteor.isClient) {
  Template.judging.helpers({
    hacks: function() {
      return Hacks.find().fetch().map(function(hack){ return hack.name; });
    }
  });

  Template.judging.rendered = function() {
    Meteor.typeahead.inject();
  };

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    user.profile = {
      isAdmin: false,
      hacks: []
    };
    return user;
  });
}


Router.route('/', function (){
  this.render('index');
});

Router.route('/judging', function() {
  this.render('judging');
});

Router.route('/manage', function() {
  this.render('manage');
});

Router.route('/comparison/:id/new', function() {
  this.render('newComparison', {
    data: {
      hackId: this.params.id
    }
  });
});
