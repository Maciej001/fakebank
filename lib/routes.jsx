
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
