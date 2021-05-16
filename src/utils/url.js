export function parseQuery(url) {
  const queryMarkIndex = url.indexOf('?');

  if (queryMarkIndex === -1) return '';

  let str = url.substring(queryMarkIndex + 1);

  const tmpArr = str.replace(/#\/|\?/gi, '&') || [];
  const res = {};

  tmpArr.forEach((item) => {
    const param = item.split('=');
    if (param.length > 1) {
      const [paramKey, paramValue] = param;
      res[paramKey] = paramValue;
    }
  })

  return res;
}