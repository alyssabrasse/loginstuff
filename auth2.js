(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDpFhW_ggE1xTj9ZiVQQ0s6w8xwBMTya1Q",
    authDomain: "steminar-d9d84.firebaseapp.com",
    databaseURL: "https://steminar-d9d84.firebaseio.com",
    storageBucket: "steminar-d9d84.appspot.com",
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e => {
    //Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => $("#errors").text(e.message));

  });

  // Add signup event
  btnSignUp.addEventListener('click', e => {
    //Get email and pass
    // TODO: CHECK FOR REAL EMAILS
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => $("#errors").text(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });


  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      console.log("blah");
      $("#username").text(firebaseUser.email);
      $("#errors").text("");
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      $("#errors").text("NOT LOGGED IN");
      btnLogout.classList.add('hide');
    }
  });

}());
