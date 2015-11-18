Meteor.publish('transactions', () => Transactions.find() );

Meteor.publish('bankAccounts', () => BankAccounts.find() );
Meteor.publish('userAccounts', () => BankAccounts.find({ userId: this.userId }) );

Meteor.publish('merchants', () => Merchants.find());



