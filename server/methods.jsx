Meteor.methods({
  createNewAccount( accountName ) {
    check( accountName, String);

    if ( accountName && accountName !== "" ) {

      // check if user has account with accountName
      if ( BankAccounts.find({ userId: this.userId, accountName: accountName }).count > 0) {
        throw new Meteor.Error('account-exists', 'Account of this name already exists.');
      }

      BankAccounts.insert({
        accountName:  accountName,
        userId:       this.userId
      })
    }
  }
});