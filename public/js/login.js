$(function() {
  //   //Signup Button will hide the signup button and display the signup portal
  //   $(".signupButton").click((e) => {
  //     e.preventDefault();
  //     $(".signupButton").hide();
  //     $(".signupPortal").show();
  //   });
  // }
  const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  const showSignupForm = async(e) =>{
    e.preventDefault();
    console.log(event)
    $(".signupButton").hide();
    $(".signupPortal").show();
  }

  $( ".signup-form" ).on( "submit", loginFormHandler)
  $( ".signup-form" ).on( "submit", signupFormHandler)
  $(".signupButton").click(showSignupForm)
});
