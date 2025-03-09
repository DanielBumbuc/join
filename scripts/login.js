function init() {
  updateContent("login");
}

function updateContent(section) {
  let contentWrapper = document.getElementById("contentWrapper");
  contentWrapper.innerHTML = "";
  
  switch(section) {
    case "login":
      contentWrapper.innerHTML = loginTemplate();
      break;
    case "signUp":
      contentWrapper.innerHTML = signUpTemplate();
      break;
    default:
      console.error(`Unknown section: ${section}`);
  }
}

function loginTemplate() {
  return `
    <img class="heroLogo" src="/assets/img/joinLogoSmall.svg" alt="">
    <header class="signUpHeroContainer">
      <span class="signUpText">Not a Join user?</span>
      <button onclick="updateContent('signUp')" class="button signUpButton">Sign up</button>
    </header>
    <main id="contentLogin" class="contentLogin">
      <div class="loginContainer">
        <h2>Log in</h2>
        <hr class="hr">
        <form onsubmit="">
          <div class="inputWrapper">
            <input id="email" class="inputfield" type="email" placeholder="Email">
            <img class="inputIcon" src="/assets/img/mail.svg" alt="">
          </div>
          <div class="inputWrapper">
            <input id="password" class="inputfield" required type="password" placeholder="Password">
            <img class="inputIcon" src="/assets/img/lock.svg" alt="">
          </div>
          <div class="buttonWrapper">
            <button class="button loginButton">Log in</button>
            <button class="button guestLoginButton">Guest Log in</button>
          </div>
        </form>
      </div>
    </main>
    <footer class="legalLinks">
      <span class="privacyPolicy">Privacy Policy</span>
      <span class="legalNotice">Legal notice</span>
    </footer>
  `
}

function signUpTemplate() {
  return `
    <img class="heroLogo" src="/assets/img/joinLogoSmall.svg" alt="">
    <main id="contentSignUp" class="contentSignUp">
      <div class="signUpContainer">
        <img onclick="updateContent('login')" class="returnArrow" src="/assets/img/returnArrow.svg" alt="">  
        <h2>Sign up</h2>
        <hr class="hr">
        <form onsubmit="">
          <div class="inputWrapper">
            <input id="name" class="inputfield" required type="text" placeholder="Name">
            <img class="inputIcon" src="/assets/img/person.svg" alt="">
          </div>
          <div class="inputWrapper">
            <input id="email" class="inputfield" required type="email" placeholder="Email">
            <img class="inputIcon" src="/assets/img/mail.svg" alt="">
          </div>
          <div class="inputWrapper">
            <input id="password" class="inputfield" required type="password" placeholder="Password">
            <img class="inputIcon" src="/assets/img/lock.svg" alt="">
          </div>
          <div class="inputWrapper">
            <input id="passwordCheck" class="inputfield" required type="password" placeholder="Confirm Password">
            <img class="inputIcon" src="/assets/img/lock.svg" alt="">
          </div>
          <div class="checkPrivacyPolicy">
            <input required id="checkbox" class="checkbox" type="checkbox">
            <span>I accept the <span class="hightlight">Privacy Policy</span> </span>
          </div>
          <div class="buttonWrapper">
            <button class="button signUpButton">Sign up</button>
          </div>
        </form>
      </div>
    </main>
    <footer class="legalLinks">
      <span class="privacyPolicy">Privacy Policy</span>
      <span class="legalNotice">Legal notice</span>
    </footer>
  `
}




