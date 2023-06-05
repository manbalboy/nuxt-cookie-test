export default function ({ $axios, redirect, route ,app}) {

  $axios.onRequest(config => {
    console.log(">>>>>>>>>>>>>route",app.context.route.path)
  })
    $axios.onResponse(response => {
        // console.log(">>>>>>>>>>",response);



        // return Promise.reject(response.data);
      })


      $axios.onResponseError(response => {



        // return Promise.reject(response.data);
      })

    $axios.onError(error => {
    })
  }