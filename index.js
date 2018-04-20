// The commented out code below solves the challenge using JQuery
// let firstFetchSettings = {
//   url: 'https://jwt-demo.openshift.techgap.it/login',
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json',
//   },
//   data: JSON.stringify({username: 'admin', password: 'password'}),
// }

// let secondFetchSettings = {
//   url: 'https://jwt-demo.openshift.techgap.it/profile',
//   method: 'GET',
//   headers: {
//     'content-type': 'application/json',
//   },
// }

// $.ajax(firstFetchSettings).done(function (data, status, xhr){
//   let jwt = xhr.getResponseHeader('authorization');

//   secondFetchSettings.headers['Authorization'] = jwt;

//   $.ajax(secondFetchSettings).done(function (profileInfo) {
//     $('#name-first').text(profileInfo.firstname);
//     $('#name-last').text(profileInfo.lastname);
//   });
// });

//although this event might not work on IE8, it should work on all modern browsers
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('challenge-navbar').innerHTML = getNavBar();
  document.getElementById('content-main').innerHTML = getLogin();
});

//when the user clicks on the login btn, let's grab the values they provided and pass
//them off to our fetch function.
document.addEventListener('click', function initAuth(e){
  if(e.target && e.target.id === 'auth-login'){
    let username = document.getElementById('auth-username').value;
    let pass = document.getElementById('auth-password').value;
  
    //check to see that we actually got something from the above code.
    if(username && pass){
      //adding this as a basic UX solution for the user.
      e.target.className += ' cursor-wait';
    
      authUser(username, pass);
    }

    else {
      swal({
        type: 'error',
        title: 'Information Missing',
        text: 'Either Username or Password were missing.'
      });
    }
  }
});

//the code below solves the challenge using Javascripts Fetch API
function authUser(username, password) {
  fetch('https://jwt-demo.openshift.techgap.it/login', {
    body: JSON.stringify({username, password}),
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
  })
    .then(resp => {
      //let's check to see we got a go ahead from the server
      if(resp.ok)
        return resp;
      else
        throw Error;
    }) //by passing only a function, the function is implicitly given the return from the previous method
    .then(getToken) //grab the auth token from the resp
    .then(getProfileInfo) //get the profile info from the /profile endpoint
    .then(toJson) //convert the response to JSON
    .then(jsonObj => {
      document.getElementById('content-main').innerHTML = createProfilePage(jsonObj);
    })
    .catch(error => {
      //else lets give the user some feedback that the server didn't 
      //accept their credentials.
      swal({
        type: 'error',
        title: 'Sorry',
        text: 'Username or Password is incorrect. Please try again.',
      });
      
      //we need to get rid of the cursor-wait class so as to not confuse the user.
      document.getElementById('auth-login').className = document.getElementById('auth-login').className.split('cursor-wait')[0];
    });
  
    
  }

  //the functions below use Promise based resolving since it takes some time to resolve
  //the below actions.
function getToken(resp) {
  let authToken = resp.headers.get('Authorization');

  //let's save the authToken for future use
  document.cookie = 'authToken=' + authToken + '; path=/';

  return authToken;
}

function getProfileInfo(jwt) {
  return Promise.resolve(
    fetch('https://jwt-demo.openshift.techgap.it/profile', {
      headers: {
        'content-type': 'application/json',
        'Authorization': jwt,
      },
      method: 'GET',
    })
  );
}

function toJson(resp) {
  if(!resp.ok)
  throw Error;

  return Promise.resolve(resp.json());
}
