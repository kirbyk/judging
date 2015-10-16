Judging = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      userHacks: Meteor.user().profile.hacks
    };
  },

  getInitialState: function() {
    return {
      lastHack: Meteor.user().profile.lastHackJudged,
      currentHack: null
    };
  },

  componentDidMount: function() {
    Meteor.typeahead.inject();
  },

  submitHack: function() {
    const hackName = React.findDOMNode(this.refs.hack).value;
    const hack = Hacks.findOne({name: hackName});

    this.setState({
      currentHack: hack
    });
  },

  _updateLastHackAndReset: function() {
    Meteor.users.update({
      _id: Meteor.user()._id
    }, { 
      $set: {
        "profile.lastHackJudged": this.state.currentHack
      }
    });

    Meteor.users.update({
      _id: Meteor.user()._id
    }, { 
      $push: {
        "profile.hacks": this.state.currentHack
      }
    });

    this.setState({
      lastHack: this.state.currentHack,
      currentHack: null
    });

    React.findDOMNode(this.refs.hack).value = '';
  },

  completeFirstHack: function() {
    this._updateLastHackAndReset();
  },

  moreImpressive: function() {
    Comparisons.insert({
      lastHack: this.state.lastHack,
      currentHack: this.state.currentHack,
      isCurrentMoreImpressiveThanLast: true,
      judge: Meteor.userId()
    });

    this._updateLastHackAndReset();
  },

  lessImpressive: function() {
    Comparisons.insert({
      lastHack: this.state.lastHack,
      currentHack: this.state.currentHack,
      isCurrentMoreImpressiveThanLast: false,
      judge: Meteor.userId()
    });

    this._updateLastHackAndReset();
  },

  render: function() {

    let hackView;

    if (this.state.currentHack) {
      if (!Meteor.user().profile.lastHackJudged) {
        hackView = (
          <div>
            <h4>This is the first hack you've looked at.</h4>
            <h4>Current Hack: {this.state.currentHack.name}</h4>
            <button onClick={this.completeFirstHack}>First Hack Judged</button>
          </div>
        );
      } else {
        hackView = (
          <div>
            <h4>Is this current hack more or less impressive than the last hack?</h4>
            <h4>Current Hack: {this.state.currentHack.name}</h4>
            <h4>Last Hack: {this.state.lastHack.name}</h4>

            <button onClick={this.moreImpressive}>More impressive</button>
            <button onClick={this.lessImpressive}>Less impressive</button>
          </div>
        );
      }
    }

    return (
      <div>
        <h2>
          You've judged {this.data.userHacks.length} hacks.
        </h2>

        <input className="form-control typeahead" type="text"
          placeholder="Hacks"
          data-source="Hacks" ref="hack"/>

        <button onClick={this.submitHack}>Judge!</button>

        {hackView}

      </div>
    );
  }
});
