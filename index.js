window.addEventListener("DOMContentLoaded", function () {
  var delay = Math.random() * 5000;
  var available = Math.floor(Math.random() * 2);

  var buttonText, buttonColor, buttonClass;
  if (available) {
    buttonText = "AVAILABLE";
    buttonColor = "green";
    buttonClass = "enable";
    cursor = "pointer";
  } else {
    buttonText = "UNAVAILABLE";
    buttonColor = "lightGray";
    buttonClass = "disabled";
    cursor = "no-drop";
  }
  window.setTimeout(function () {
    document
      .getElementById("container")
      .insertAdjacentHTML(
        "afterbegin",
        "<button id='actionButton' style='background-color:" +
          buttonColor +
          ";cursor:" +
          cursor +
          ";'" +
          buttonClass +
          ">" +
          buttonText +
          "</button>"
      );
    document.getElementById("actionButton").onclick = function () {
      window.alert("button was clicked");
    };
  }, delay);
});
