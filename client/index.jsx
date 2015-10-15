const { Link } = ReactRouter;

Index = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
    );
  }
});
