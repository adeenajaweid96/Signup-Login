// -----empty array
var userData = [];

var registerBtn = document.getElementById("register");
registerBtn &&
  registerBtn.addEventListener("click", function () {
   
    var regName = document.getElementById("userName");
    var regEmail = document.getElementById("userEmail");
    var regPassword = document.getElementById("userPass");

    if (regName === "" || regEmail === "" || regPassword === "") {
      Swal.fire({
        title: "?",
        text: "Fill All the fields",
        icon: "question",
      });
      return;
    }
      else{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Account Successfully Created!",
            showConfirmButton: false,
            timer: 1500,
          });
      }
    
    
    var obj = {
      name: regName.value,
      email: regEmail.value,
      password: regPassword.value,
    };


    var userData = JSON.parse(localStorage.getItem("users"))|| [];
    userData.push(obj);

    regName.value = "";
    regEmail.value = "";
    regPassword.value = "";

    console.log(userData);
    localStorage.setItem("users", JSON.stringify(userData));
    var getData = JSON.parse(localStorage.getItem("users"));
    getData.push(obj);
  });

var login = document.getElementById("userLogin");
login &&
  login.addEventListener("click", function () {
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");

    var users = JSON.parse(localStorage.getItem("users"));

    for (var user of users) {
      if (user.email == loginEmail.value) {
        if (user.password == loginPassword.value) {
          Swal.fire({
            title: "You have successfully Logged in",
            showClass: {
              popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
            },
            hideClass: {
              popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
            },
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Password ",
          });
        }
      } else {
        if (loginPassword.value == user.password) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Incorrect Email! ",
          });
        }
      }
    }
  });
