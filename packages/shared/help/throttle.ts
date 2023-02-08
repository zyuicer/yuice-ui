export function throttle(
  fn,
  interval,
  options: { leading?: boolean; trailing?: boolean } = {
    leading: false,
    trailing: false
  }
) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer: any = null;

  function _throttle(this: any, ...args) {
    const nowTime = new Date().getTime();
    if (lastTime === 0 && !leading) lastTime = nowTime;
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      lastTime = nowTime;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(this, ...args);
      return;
    }
    if (!timer && trailing) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
        lastTime = !leading ? 0 : new Date().getTime();
      }, remainTime);
    }
  }
  _throttle.cencel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      lastTime = 0;
    }
  };
  return _throttle;
}
