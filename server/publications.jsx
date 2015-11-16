Meteor.publish('transactions', () => Transactions.find() );
Meteor.publish('bankAccounts', () => BankAccounts.find() );



