window.addEventListener("load", init);
var active = false;

function init(e) {
  var container = document.getElementById("container");
  container.addEventListener("mouseenter", () => {
    container.style.cursor = "move";
    //console.log("hi");
  });

  var container = document.getElementById("container");
  container.addEventListener("mousedown", onMouseDown);

  var scroolBar = document.getElementById("scrool-div");
  scroolBar.addEventListener("mouseenter", () => {
    scroolBar.style.cursor = "default";
  });

  event.preventDefault();
}

function onMouseDown(e) {
  var container = document.getElementById("container");
  //console.log("hi");
  active = true;

  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("mouseup", onMouseUp);

  event.preventDefault();
}

function onMouseMove(e) {
  if (active) {
    var resizeItemOne = document.getElementById("container");
    resizeItemOne.style.width = `${e.clientX}px`;
    resizeItemOne.style.height = `${e.clientY}px`;

    console.log("x", e.clientX);
    console.log("y", e.clientY);

    var resizeItemTwo = document.getElementById("scrool-div");
    resizeItemTwo.style.width = `${e.clientX - 2}px`;
    resizeItemTwo.style.height = `${e.clientY - 2}px`;
  }
  event.preventDefault();
}

function onMouseUp(e) {
  var container = document.getElementById("container");
  container.removeEventListener("mousemove", onMouseMove);
  active = false;
  console.log("mouseup");
  event.preventDefault();
}
