Meteor.methods({
  createNewAccount( name ) {
    check( name, String);

    if ( name && name !== "" ) {

      // check if user has account with accountName
      if ( BankAccounts.find({ userId: this.userId, name: name }).count > 0) {
        throw new Meteor.Error('account-exists', 'Account of this name already exists.');
      }

      BankAccounts.insert({
        name:         name,
        userId:       this.userId,
        balance:      0
      })
    }
  },

  deleteAccount( id ) {
    check( id, String );
    
    BankAccounts.remove({ _id: id });
  },

  createNewTransaction( transaction ) {
    check( transaction, {
      accountName: String,
      description: String,
      amount: Number,
      merchantName: String,
      merchantId: String
    });

    Transactions.insert( transaction );
  }

});
