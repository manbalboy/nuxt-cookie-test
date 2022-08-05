export default function ({ $axios, redirect }) {


    $axios.onResponse(response => {
        // console.log(">>>>>>>>>>",response);



        return Promise.reject(response.data);
      })


      $axios.onResponseError(response => {
        console.log("onResponseError>>>>>>>>>>",response);



        // return Promise.reject(response.data);
      })

    $axios.onError(error => {
     console.log(error, "><<<<<<<<<<");
    //  redirect('/testtest')
    })
  }