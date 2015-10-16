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
          <Route path="login" component={Login}/>
          <Route component={AuthenticatedApp}>
            <Route path="judging" component={Judging}/>
            <Route path="comparison/:id/new" component={NewComparison}/>
            <Route path="manage" component={Manage}/>
          </Route>
        </Route>
      </Router>
    );
  }
});
