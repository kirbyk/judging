const { Link } = ReactRouter;

Hacks = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      hacks: Meteor.user().profile.hacks
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className="row">
        <h2>
          You've judged {this.data.hacks.length} hacks.
        </h2>
        <UserHacks hacks={this.data.hacks} />
      </div>
    );
  }
});
