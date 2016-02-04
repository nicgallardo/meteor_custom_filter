Router.configure({
  layoutTemplate: 'layout',
  // notFoundTemplate: 'notFound',
  // loadingTemplate: 'loading',
  yieldTemplates: {
    "topNav": {to: 'topNav'}
  }
});

Router.route('/', {
  name: 'index'
});
