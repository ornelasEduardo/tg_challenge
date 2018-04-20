function getLogin() {
  return `<section class='row' style='height: 100vh;'>
  <section class='col-md-5 col-xs-12 align-self-center d-flex justify-content-center'>
    <div>
      <div class='mb-4'>
        <h2 class=''>Welcome to <span class='brand-text'>TG Challenge</span></h2>
        <span class='font-14'>Please login to your account.</span>
      </div>

      <div class='d-flex flex-column mt-3'>
        <label class='font-12 mb-0' for='auth-username'>Username</label>
        <input id='auth-username' class='mb-3 form-control' type="text" />

        <label class='font-12 mb-0' for='auth-password'>Password</label>
        <input id='auth-password' class='form-control' type="password" />
      </div>

      <div class='d-flex justify-content-between align-items-center mt-3'>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="auth-remember_me">
          <label class="custom-control-label font-12" for="auth-remember_me">Remember Me</label>
        </div>
        <a class='font-12 mt-2' href='#'>Forgot Password</a>
      </div>

      <div id='auth-btn_group' class='mt-4'>
          <button id='auth-login' class='btn brand-bg mr-3 p-2 text-white'>Login</button>
          <button id='auth-signup' class='btn btn-outline-dark p-2'>Sign Up</button>
        </div>
      <span id="name-first"></span>
    </div>
  </section>
  <section class='col-md-7 d-none d-md-block' style='background-image: url("./flowers.jpg"); background-size: cover; background-position: center;'>
    <div class='d-flex align-items-center justify-content-end mt-4'>
      <span id="name-last"></span>
      <a href="#" class='mx-3 text-white'>Home</a>
      <a href="#" class='mx-3 text-white'>About</a>
      <a href="#" class='mx-3 text-white'>Join Us</a>
    </div>
  </section>
</section>`;
}