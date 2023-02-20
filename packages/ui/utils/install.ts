export function withInstallFunction(fn, name) {
  fn.install = app => {
    app.component(fn.name, fn);
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
}
