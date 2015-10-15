const { Router, Route, IndexRoute, history } = ReactRouter;

const browserHistory = history.createHistory();

Routes = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="signin" component={SignIn}/>
          <Route component={AuthenticatedApp}>
            <Route path="hacks" component={Hacks}/>
            <Route path="hack/:id" component={Hack}/>
            <Route path="manage" component={Manage}/>
          </Route>
        </Route>
      </Router>
    );
  }
});
