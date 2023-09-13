let add = document.getElementById("add");

add.addEventListener("click", addTask);

let x = 0;

let elementid;
let partsid;
let image_divid;

// Task adding function
function addTask() {
  let section2 = document.getElementById("section2");
  let input = document.getElementById("text").value;

  if (input === "") {
    alert("Enter the text.");
  } else {
    ++x;

    elementid = "element" + x;
    partsid = "parts" + x;
    image_divid = "image_div" + x;
    imageid = "image" + x;
    taskid = "task" + x;
    closeid = "close" + x;
    image_closeid = "image_close" + x;

    document.getElementById("text").value = "";

    let element = document.createElement("div");
    element.className = "element";
    element.id = elementid;
    section2.appendChild(element);

    let elementdiv = document.getElementById(elementid);
    let parts = document.createElement("div");
    parts.className = "parts";
    parts.id = partsid;
    elementdiv.appendChild(parts);

    let partsdiv = document.getElementById(partsid);
    let image_div = document.createElement("div");
    image_div.className = "image-div";
    image_div.id = image_divid;
    partsdiv.appendChild(image_div);

    let img = document.getElementById(image_divid);
    let image = document.createElement("img");
    image.className = "image";
    image.id = imageid;
    img.appendChild(image);

    let task = document.createElement("div");
    task.className = "task";
    task.id = taskid;
    partsdiv.appendChild(task);
    task.innerHTML = input;

    let close = document.createElement("div");
    close.className = "close";
    close.id = closeid;
    partsdiv.appendChild(close);

    let close_div = document.getElementById(closeid);
    let image_close = document.createElement("img");
    image_close.className = "image_close";
    image_close.id = image_closeid;
    image_close.src = "close.png"; // close mark
    close_div.appendChild(image_close);
  }
}

// Create event listener
document.addEventListener("click", (e) => {
  // Retrieve id from clicked element
  let elementId = e.target.id;

  let parentElementId = e.target.parentElement.parentElement.parentElement.id;
  console.log(parentElementId);
  let closeCheckId = "close";
  let imageCloseCheckId = "image_close";
  let image_div_checked = "image";

  for (let i = 1; i <= x; i++) {
    if (closeCheckId + i === elementId || imageCloseCheckId + i === elementId) {
      document.getElementById(parentElementId).style.display = "none";
      break;
    }
    if (image_div_checked + i === elementId) {
      document.getElementById(image_div_checked + i).src =
        "task-check-mark.png";
      let bparentElementId = e.target.parentElement.parentElement.id;

      document.getElementById(bparentElementId).style.backgroundColor =
        "rgba(144, 238,144, 1)";
    }
  }
});
