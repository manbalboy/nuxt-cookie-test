export default function ({ store, redirect, $cookiz, req}) {
  if(req.headers?.cookie) {

    const cookies = parseCookie(req?.headers?.cookie);
  }
    // $cookiz.set('test','bbb', {httpOnly : false})
}

const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});