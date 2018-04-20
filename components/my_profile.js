function createProfilePage(name = {}) {
  return `
  <div class="row my-5">
      <div class="col-lg-8 offset-lg-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="./user_stock.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Who Am I?</h5>
            <p class="card-text">${'Name: ' + name.firstname + ' ' + name.lastname}</p>
            <p class="card-text">${'Username: ' + name.username}</p>
            <a id='profile-return_btn' href="#" class="btn btn-primary">Redirect to Login</a>
          </div>
        </div>
      </div>
  </div>
<hr>`;
}

//when they click on the return button on the page, let's return to the login view
//this adds an event to dynamically generated html
document.addEventListener('click', function(e) {
  /*
    check to see we have a truthy event target and that the target is the one we're
    looking for. 
  */
  if(e.target && e.target.id === 'profile-return_btn')
    document.getElementById('content-main').innerHTML = getLogin();
});
