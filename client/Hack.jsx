Hack = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      hack: HacksCollection.findOne({
        _id: new Mongo.ObjectID(this.props.params.id)
      })
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <div>
        This is a hack
        {this.data.hack.name}
      </div>
    );
  }
});
