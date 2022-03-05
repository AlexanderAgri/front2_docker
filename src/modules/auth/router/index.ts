const route = {
  name: "auth",
  component: () =>
    import(/* webpackChunkName: "auth" */ "@a/layout/AuthLayout.vue"),
  children: [
    {
      path: "login",
      name: "auth-login",
      component: () =>
        import(/* webpackChunkName: "auth-login" */ "@a/views/LoginView.vue"),
    },
  ],
};

export default route;
