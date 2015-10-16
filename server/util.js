Accounts.onCreateUser(function(options, user) {
  user.profile = {
    isAdmin: false,
    hacks: []
  };
  return user;
});
