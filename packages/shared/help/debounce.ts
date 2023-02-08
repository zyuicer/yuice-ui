export function debounce(
  fn,
  interval,
  config: { leading?: boolean; trailing?: boolean } = { leading: false }
) {
  let isLeading = config.leading;
  let timer: ReturnType<typeof setTimeout> | null = null;
  function _debounce(this: any, ...args) {
    if (timer) clearTimeout(timer);
    if (isLeading) {
      console.log('intur');
      
      fn.apply(this, args);
      isLeading = false;
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      if (config.leading) {
        isLeading = true;
      }
    }, interval);
  }
  return _debounce;
}
