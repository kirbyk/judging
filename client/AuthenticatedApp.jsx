const { History } = ReactRouter;

AuthenticatedApp = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData: function() {
    return {
      isAuthenticated: Meteor.userId() !== null
    };
  },

  signOut: function(e) {
    e.preventDefault();
    Meteor.logout(this.signOutCallback);
  },

  signOutCallback: function(error) {
    if (error === undefined) {
      this.history.pushState(null, "/");
    }
  },

  componentWillMount: function() {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/signin');
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/signin');
    }
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <button className="btn btn-default" onClick={this.signOut}>Sign Out</button>
          {this.props.children}
        </div>
      </div>
    );
  }
});
