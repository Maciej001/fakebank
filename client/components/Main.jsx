Main = React.createClass({
  
  getInitialState() {
    return {
      newAccount:     false,
      newTransaction: false
    }
  },

  newAccount() {
    this.setState({ newAccount: true });
    this.setState({ newTransaction: false });
  },

  closeNewAccountForm() {
    this.setState({ newAccount: false });
  },

  newTransaction() {
    this.setState({ newTransaction: true });
    this.setState({ newAccount: false });
  },

  closeNewTransaction() {
    this.setState({ newTransaction: false });
  },

  render() {
    return (
      <div className="container">

        <div id="new-account" className="row">
          <div className="col-xs-12">
            <button className="btn btn-primary btn-blue" onClick={ this.newAccount }>Create New Account</button>
            { this.state.newAccount ?
              <NewAccountForm closeForm={ this.closeNewAccountForm } /> : "" }
          </div>
        </div>

        <div id="accounts-list" className="row">
          <div className="col-xs-12">
            <AccountsList />
          </div>
        </div>

        <div id="new-transaction" className="row">
          <div className="col-xs-12">
            <button className="btn btn-primary btn-blue" onClick={ this.newTransaction }>New Transaction</button>
            { this.state.newTransaction ? 
              <NewTransactionForm  closeForm={ this.closeNewTransaction } /> : "" }
          </div>
        </div>
        
      </div>
    )
  }
})
  