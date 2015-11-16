Home = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  signup(e) {
    e.preventDefault();
    FlowRouter.go('/signup');
  },

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <h1>Welcome to FAKE BANK</h1>
          <p>
          Open fake account and generate fake transactions
          </p>
          { this.data.currentUser ? 
            ""
          :
            <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={ this.signup }>Sign Up</a></p>
          }

        </div>
      </div>
    )
  }
})
