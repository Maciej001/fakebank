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
          <h1>Welcome</h1>
          <p>
          Main Header
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
