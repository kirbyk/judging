const { Link } = ReactRouter;

Index = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    );
  }
});
