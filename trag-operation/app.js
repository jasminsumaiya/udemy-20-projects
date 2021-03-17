window.addEventListener("load", init);
var active = false;

function init() {
  var dragItem = document.getElementById("drag-item");
  dragItem.addEventListener("mousedown", onMouseDown);
}

function onMouseDown(e) {
  var container = document.getElementById("container");
  container.addEventListener("mousemove", onMouseMove);
  container.addEventListener("mouseup", onMouseUp);
  active = true;
  console.log("mousedown");
}

function onMouseMove(e) {
  console.log("mousemove");

  if (active) {
    var dragItem = document.getElementById("drag-item");
    dragItem.style.left = `${e.clientX}px`;
    dragItem.style.top = `${e.clientY}px`;
  }
}

function onMouseUp(e) {
  var container = document.getElementById("container");
  container.removeEventListener("mousemove", onMouseMove);
  active = false;
  console.log("mouseup");
}
