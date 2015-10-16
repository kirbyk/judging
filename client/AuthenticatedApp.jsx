const { History } = ReactRouter;

AuthenticatedApp = React.createClass({
  mixins: [ReactMeteorData, History],

  getMeteorData: function() {
    return {
      isAuthenticated: Meteor.userId() !== null
    };
  },

  logout: function(e) {
    e.preventDefault();
    Meteor.logout(this.logoutCallback);
  },

  logoutCallback: function(error) {
    if (error === undefined) {
      this.history.pushState(null, "/");
    }
  },

  componentWillMount: function() {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/login');
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (!this.data.isAuthenticated) {
      this.history.pushState(null, '/login');
    }
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
        {this.props.children}
      </div>
    );
  }
});
