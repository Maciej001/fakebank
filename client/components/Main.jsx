Main = React.createClass({
  
  getInitialState() {
    return {
      newAccount: false
    }
  },

  closeForm() {
    this.setState({ newAccount: false });
  },

  newAccount() {
    this.setState({ newAccount: true });
  },

  render() {
    return (
      <div className="container">
        
        { this.state.newAccount ?

          <div id="new-account-form" className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <NewAccountForm closeForm={ this.closeForm } />
            </div>
          </div>
                
          : 

          <div id="new-account" className="row">
            <div className="col-xs-12">
              <button className="btn btn-primary btn-blue" onClick={ this.newAccount }>Create New Account</button>
            </div>
          </div>
        }

        <div id="accounts-list" className="row">
          <div className="col-xs-12">
            <AccountsList />
          </div>
        </div>

        <div id="new-transaction" className="row">
          <div className="col-xs-12">
            <NewTransactionForm />
          </div>
        </div>
        
      </div>
    )
  }
})
  