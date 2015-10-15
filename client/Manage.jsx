Manage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      users: Meteor.users.find({"profile.isAdmin": false}).fetch()
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        Here we manage. Here are the users.
        <ul>
          {this.data.users.map(function(user) {
            return (
              <User key={user._id} user={user} />
            );
          })}
        </ul>
      </div>
    );
  }
});
