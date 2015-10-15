Hacks = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      hacks: HacksCollection.find({}).fetch(),
      userHacks: Meteor.user().profile.hacks
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div className="row">
        <h2>
          You've judged {this.data.userHacks.length} hacks.
        </h2>

        <input id="shit" type="text"/>

        <UserHacks hacks={this.data.userHacks} />
      </div>
    );
  }
});
