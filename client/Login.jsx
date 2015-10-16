const { History } = ReactRouter;

Login = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {
      error: null
    };
  },

  onFormSubmit: function(e) {
    e.preventDefault();
    let username = React.findDOMNode(this.refs.username).value.trim();
    let password = React.findDOMNode(this.refs.password).value.trim();

    Meteor.loginWithPassword({username: username}, password, this.signInCallback);
  },

  signInCallback: function(error) {
    if (error === undefined) {
      if (Meteor.user().profile.isAdmin) {
        this.history.pushState(null, "/manage");
      } else {
        this.history.pushState(null, "/judging");
      }
    } else {
      this.setState({
        error: error.reason
      });
    }
  },

  render: function() {
    var error;
    if(this.state.error) {
      error = <div>{this.state.error}</div>
    }

    return (
      <div>

        {error}

        <div>
          <form onSubmit={this.onFormSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="Username" ref="username" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" ref="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
});
