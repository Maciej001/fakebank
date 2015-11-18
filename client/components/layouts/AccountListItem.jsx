AccountListItem = React.createClass({
  propTypes: {
    account: React.PropTypes.object.isRequired
  },
  
  deleteAccount(e) {
    e.preventDefault();
    Meteor.call( "deleteAccount", this.props.account._id );
  },

  render() {
    let account = this.props.account;

    return (
      <tr key={ account._id }>
        <td>{ account.name }</td>
        <td>
          <button className="btn btn-primary btn-xs btn-red" onClick={ this.deleteAccount }>Delete</button>
        </td>
      </tr>
    )
  }
})
  