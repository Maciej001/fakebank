
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { 
      content:  <NotFound />
    });
  }
};

FlowRouter.route('/',{
  name: 'Home', 
  action(params) {
    ReactLayout.render(MainLayout, { 
      content:  <Home />
    });
  }
});

FlowRouter.route('/main',{
  name: 'Main', 
  action(params) {

    if (Meteor.userId()) {
      ReactLayout.render(MainLayout, { 
        content:  <Main />
      });
    } else {
      FlowRouter.go('/')
    }
  }
});

FlowRouter.route('/signup',{
  name: 'Signup', 
  action(params) {
    ReactLayout.render(MainLayout, { 
      content:  <SignUp />
    });
  }
});

FlowRouter.route('/signin',{
  name: 'Home', 
  action(params) {
    ReactLayout.render(MainLayout, { 
      content:  <SignIn />
    });
  }
});
