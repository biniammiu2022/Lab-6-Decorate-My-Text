function hello() {
  alert("Hello, World!");
}

function interval() {
  var id = setInterval(enlargeText, 1000);
  setTimeout(clearInterval, 5000, id);
}
function enlargeText() {
  // document.getElementById("textarea").style.fontSize="24pt";
  var prop = window.getComputedStyle(document.getElementById("area")).fontSize;
  newProp = parseInt(prop) + 2 + "pt";
  document.getElementById("area").style.fontSize = newProp;
}

function second() {
  if (document.getElementById("bling").checked == true) {
    document.getElementById("area").style.fontWeight = "bold";
    document.getElementById("area").style.color = "green";
    document.getElementById("area").style.textDecoration = "underline";
    document.getElementById("area").style.background =
      "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    // location.assign"http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
  } else {
    document.getElementById("area").style.fontWeight = "";
    document.getElementById("area").style.color = "";
    document.getElementById("area").style.textDecoration = "";
    document.body.style.backgroundImage = "";
  }
}

function pig() {
  var words = document.getElementById("area").value;
  var splittedword = words.split(/\s+/);
  var result = "";
  for (var i = 0; i < splittedword.length; i++) {
    if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {
      changed = splittedword[i] + "ay";
    } else {
      var word = splittedword[i];
      for (var j = 0; j < word.length; j++) {
        if (word[j].match("[aeoiuAEOIU]")) {
          var changed = word.substring(j) + word.substring(0, j) + "ay";
          break;
        }
      }
    }
    result += changed + " ";
  }
  document.getElementById("area").value = result;
}

function markov() {
  var words = document.getElementById("area").value;
  var arr = words.split(/\s+/);
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = "Malkovich";
    }
    result += arr[i] + " ";
  }
  document.getElementById("area").value = result;
}
