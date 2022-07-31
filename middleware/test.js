export default function ({ store, redirect, $cookiz, req}) {
  if(req?.headers?.cookie) {

    const cookies = parseCookie(req?.headers?.cookie);
    console.log(">>>>>",cookies)
  }
}

const parseCookie = str =>
  str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});