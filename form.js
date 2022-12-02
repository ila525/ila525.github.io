function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let x = document.forms["myForm"]["email"].value;
      if (x == "") {
        alert("Email must be filled out");
        return false;
    }

    let x = document.forms["myForm"]["message"].value;
      if (x == "") {
        alert("Message required");
        return false;
    }


  }