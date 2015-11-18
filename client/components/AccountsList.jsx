AccountsList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let userAccountsSub     = Meteor.subscribe('bankAccounts');

    return {
      userAccountsLoaded:   userAccountsSub.ready(),
      userAccounts:         BankAccounts.find({ userId: Meteor.userId() }).fetch()
    }
  },

  render() {
    return (
      <div>
        <h3 className="header-grey">My Accounts</h3>

        { this.data.userAccountsLoaded ?

          <table className="table table-hover">
            <thead>
              <tr>
                <th>Account Name</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              { this.data.userAccounts.map(( account ) => {
                  return <AccountListItem key={ account._id } account={ account } />
                })
              }
            </tbody>
          </table>

          : 
            <h4>No Accounts</h4>
        }
      </div>
    )
  }
})
  