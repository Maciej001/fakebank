BankAccounts = new Meteor.Collection( 'bankAccounts' );
BankAccounts.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

BankAccounts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});


// User 
Meteor.users.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Meteor.users.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

// Transactions
Transactions =    new Mongo.Collection('transactions');
Transactions.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Transactions.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});