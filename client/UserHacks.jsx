UserHacks = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData: function() {
    const hackIds = this.props.hacks.map((hack) => new Mongo.ObjectID(hack));

    return {
      hacks: HacksCollection.find({_id: {$in: hackIds} }).fetch()
    };
  },

  getInitialState: function() {
    return {};
  },

  render: function() {
    return (
      <ul>
        {this.data.hacks.map(function(hack) {
          return (
            <li key={hack._id}>
              {hack.name}
            </li>
          );
        })}
      </ul>
    );
  }
});
