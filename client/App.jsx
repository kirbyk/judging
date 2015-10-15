App = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});
