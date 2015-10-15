User = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {};
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <li>
        {this.props.user.username}
        <UserHacks hacks={this.props.user.profile.hacks} />
      </li>
    );
  }
});
