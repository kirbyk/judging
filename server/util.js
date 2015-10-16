Accounts.onCreateUser(function(options, user) {
  user.profile = {
    isAdmin: false,
    hacks: [],
    lastHackJudged: null
  };
  return user;
});
