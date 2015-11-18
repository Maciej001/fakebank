NewAccountForm = React.createClass({
  propTypes: {
    closeForm: React.PropTypes.func.isRequired
  },

  mixins: [ReactMeteorData],

  getMeteorData() {
    let bankAccountsSub = Meteor.subscribe('bankAccounts');

    return {
      bankAccountsLoaded:   bankAccountsSub.ready(),
      bankAccounts:         BankAccounts.find().fetch()
    }
  },

  getInitialState() {
    return {
      error: false
    }
  },

  createAccount(e) {
    e.preventDefault(); 

    let name = ReactDOM.findDOMNode( this.refs.name ).value.trim();
    let error = "";

    // empty account name
    if ( name === "" ) {
      error += "Please name Your New Account";
    }

    this.setState({ error: error });

    if ( error === "" ) {
      this.setState({ error: false });

      if ( BankAccounts.find({ userId: Meteor.userId(), name: name }).count() > 0) {
        this.setState({ error: "Account with the same name already exists." });
      } else {

        Meteor.call( "createNewAccount", name, ( err ) => {
          if (err ) {
            console.log("Error creating new account.");
          } else {
            this.props.closeForm();
            Bert.alert({
              title: 'New account has been created!',
              type: 'success',
              icon: 'fa-money'
            });
          }
        });
      }

    }

  },

  cancel(e) {
    e.preventDefault();
    this.props.closeForm();
  },

  render() {

    return (     

      <div>  
        { this.data.bankAccountsLoaded ? 

          <form id="new-account-form" role="form" onSubmit={ this.createAccount }>
            
            { this.state.error ?
              <h4 className="error-msg">{ this.state.error }</h4>
              : ""
            }

            <div className="form-group">
              <input type="text" ref="name" className="form-control" placeholder="Chose account name"/>
            </div>

            <button id="account-save" type="submit" className="btn btn-submit">Save</button>
            <button id="account-cancel" className="btn btn-cancel" onClick={ this.cancel }>Cancel</button>
          </form>

        : "" }

      </div>

      

    )
  }
})
  
  