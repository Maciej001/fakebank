Header = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },
  
  handleSignIn(e) {
    e.preventDefault(); 
    FlowRouter.go("/signin");
  },

  handleSignOut() {
    Meteor.logout((error, success) => {
      if (error) console.log(error);
      FlowRouter.go("/");
    });
  },

  render() {  

    return (  
      <nav id="menu">
        <a className="logo" href="/">
          FAKE BANK
        </a>
        { this.data.currentUser ? 
          <a className="sign-out" href="#" onClick={ this.handleSignOut }>Sign out</a>
        :  
          <a className="sign-in" href="#" onClick={ this.handleSignIn }>Sign in</a>
        }

      </nav>
    ) 
  }
    
});

