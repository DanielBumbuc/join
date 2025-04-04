function loginTemplate() {
  let savedEmail = localStorage.getItem("registeredEmail") || "";
  let savedPassword = localStorage.getItem("registeredPassword") || "";
  setTimeout(() => toggleLoginButton(), 0);

  return `
    <img class="heroLogo" src="./assets/img/joinLogoSmall.svg" alt="">
    <header class="signUpHeroContainer">
      <span class="signUpText">Not a Join user?</span>
      <button onclick="updateContent('signUp')" class="button signUpButton">Sign up</button>
    </header>
    <main id="contentLogin" class="contentLogin">
      <div class="loginContainer">
        <h2>Log in</h2>
        <hr class="hr">
        <form onsubmit="login(event); return false">
          <div class="inputWrapper">
            <input id="emailLogin" class="inputfield" type="email" value="${savedEmail}" placeholder="Email" oninput="toggleLoginButton()">
            <img class="inputIcon" src="./assets/img/mail.svg" alt="">
            <span class="hide">Placeholder</span>
          </div>
          <div class="inputWrapper">
            <input id="passwordLogin" class="inputfield" type="password" value="${savedPassword}" placeholder="Password" oninput="toggleLoginButton()">
            <img onclick="togglePasswordVisibility('passwordLogin')" id="passwordIcon" class="inputIcon passwordIcon" src="./assets/img/lock.svg" alt="">
            <span id="errorMsgLogin" class="errorMsgPassword hide">Check your email and password. Please try again.</span>
          </div>
          <div class="buttonWrapper">
            <button disabled  type="submit" id="loginButton" class="button loginButton">Log in</button>
            <a class="button guestLoginButton" href="summary.html">Guest Log in</a>
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