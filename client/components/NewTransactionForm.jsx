NewTransactionForm = React.createClass({
  propTypes: {
    closeForm: React.PropTypes.func.isRequired
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    let merchantsSub =    Meteor.subscribe('merchants');
    let userAccountsSub = Meteor.subscribe('userAccounts');

    return {
      merchantsLoaded:  merchantsSub.ready(),
      merchants:        Merchants.find().fetch(),

      userAccountsLoaded:  userAccountsSub.ready(),
      userAccounts:        BankAccounts.find({ userId: Meteor.userId() }).fetch()
    }
  },

  getInitialState() {
    return {
      error: false
    }
  },

  createTransaction(e) {
    e.preventDefault(); 

    let transaction = {
      accountName:    ReactDOM.findDOMNode( this.refs.accountName ).value,
      description:    ReactDOM.findDOMNode( this.refs.description ).value.trim(),
      amount:         Math.round( 100 * ReactDOM.findDOMNode( this.refs.amount ).value.trim()) / 100,
      merchantName:   ReactDOM.findDOMNode( this.refs.merchantName ).value
    }

    transaction.merchantId = Merchants.findOne({ name: transaction.merchantName })._id;

    let error = "";

    if (transaction.description === "") {
      error += "Transaction description missing";
    }

    if (transaction.amount === "") {
      error += "Amount missing.";
    }

    this.setState({ error: error });

    if ( error === "" ) {
      this.setState({ error: false });

      let transactionDescription = 'At ' + transaction.merchant + ' you spent GBP ' + transaction.amount;

      Meteor.call( "createNewTransaction", transaction, ( err ) => {
        if (err ) {
          console.log("Error creating new transaction.");
        } else {
          this.props.closeForm();
          Bert.alert({
            title: 'New transaction has been created!',
            description: transactionDescription,
            type: 'success',
            icon: 'fa-money'
          });
        }
      });

    }

  },

  cancel(e) {
    e.preventDefault();
    this.props.closeForm();
  },

  render() {

    return (      
      <div>  
        { ( this.data.merchantsLoaded && this.data.userAccountsLoaded ) ? 

          <form id="new-transaction-form" role="form" onSubmit={ this.createTransaction }>
            
            { this.state.error ?
              <h4 className="error-msg">{ this.state.error }</h4>
              : ""
            }
            
            <div class="form-group">
              <select className="form-control" ref="merchantName">
                { this.data.merchants.map(( merchant ) => {
                    return <option key={ merchant._id } value={ merchant.name }> { merchant.name } </option>
                  })
                }
              </select>
            </div>

            <div class="form-group">
              <select className="form-control" ref="accountName">
                { this.data.userAccounts.map(( account ) => {
                    return <option key={ account._id } value={ account.name }> { account.name } </option>
                  })
                }
              </select>
            </div>

            <div className="form-group">
              <input type="text" ref="description" className="form-control" placeholder="Description, eg. Coffee"/>
            </div>

            <div className="form-group">
              <input type="text" ref="amount" className="form-control" id="amount" placeholder="Amount, eg. 5.55"/>
            </div>

            <button id="transaction-save" type="submit" className="btn btn-submit">Create</button>
            <button id="transaction-cancel" className="btn btn-cancel" onClick={ this.cancel }>Cancel</button>
          </form>

          : "" }
      </div>

    )
  }
})
  
  