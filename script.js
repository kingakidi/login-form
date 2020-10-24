const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

// CHECK KEYUP VALUE
function onkeyup(data) {
  data.forEach((data) => {
    data.onkeyup = function () {
      if (data.value.length < 1) {
        data.style.border = "1px red solid";
      } else {
        data.style.border = "solid #ccc 0.7px";
      }
    };
  });
}
onkeyup([username, password]);

// CHECK EMPTY VALUE
function checkvalue(data) {
  let result;
  data.forEach((element) => {
    if (element.value.length < 1) {
      element.style.border = "1px red solid";
      result = true;
    } else {
      element.style.border = "none";
      result = false;
    }
  });
  return result;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (checkvalue([username, password]) === false) {
    // SEND INPUTS TO ACTION PAGE
    alert("Good to go");
  }
});
