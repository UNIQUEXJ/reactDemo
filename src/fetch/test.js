import { get, post } from './index'

export function getData() {
  var result = get('api/login');
  result.then(res => {
    return res.json()
  }, err => {
    console.log(err)
  })
}

export function loginRequest(paramsObj) {
  var result = post('/commonapi/login', paramsObj);
  result.then(res => {
    return res.json()
  }).then(json => {
    console.log(json)
  });
}