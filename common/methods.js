Meteor.methods({
  addUser: function(user) {
    return Accounts.createUser({
      username: user.username,
      password: user.password
    });
  }
});
