async function Login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:6969/users/login",{
      method: "POST",
      body:JSON.stringify({
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data)
    return data
  }