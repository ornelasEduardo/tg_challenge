function getNavBar() {
  return `<nav class="d-md-none navbar navbar-dark brand-secondary_bg">
  <a class="navbar-brand" href="#">TG Challenge</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-mobile" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar-mobile">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Join Us</a>
      </li>
    </ul>
  </div>
</nav>`
}