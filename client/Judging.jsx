Judging = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      userHacks: Meteor.user().profile.hacks
    };
  },

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    Meteor.typeahead.inject();
  },

  render: function() {
    return (
      <div>
        <h2>
          You've judged {this.data.userHacks.length} hacks.
        </h2>

        <input className="form-control typeahead" id="shit" name="hacks" type="text"
          placeholder="Hacks"
          data-source="Hacks"/>

      </div>
    );
  }
});
