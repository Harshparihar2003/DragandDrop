const dragDropContainer = document.getElementsByClassName("drag-drop-container")
const items = document.getElementsByClassName("items")
let dragItem;
const header = document.querySelector(".heading")
const alert = document.querySelector(".alert")
const html = `
        <div class="alert alert-primary" role="alert">
            Success! Element dragged.
      </div>`

for (i of items) {
    i.addEventListener("dragstart", (e) => {
        // store a reference on the dragged element
        dragItem = e.target;
        e.target.classList.add("dragging")
    })
    i.addEventListener("dragend", (e) => {

        e.target.classList.remove("dragging")
    })
}

/* events fired on the drop targets */
for (container of dragDropContainer) {
    container.addEventListener("dragover", (e) => {
        // prevent default to allow drop
        e.preventDefault();
    })
    container.addEventListener("dragenter", (e) => {

        // highlight potential drop target when the draggable element enters it
        if (e.target.classList.contains("drag-drop-container")) {
            e.target.classList.add("dragover");
        }
    })
    container.addEventListener("dragleave", (e) => {
        // reset background of potential drop target when the draggable element leaves it
        if (e.target.classList.contains("drag-drop-container")) {
            e.target.classList.remove("dragover");
        }
    })
    container.addEventListener("drop", (e) => {
        e.preventDefault();
        // move dragged element to the selected drop target
        if (e.target.classList.contains("drag-drop-container")) {
            e.target.classList.remove("dragover");
            e.target.appendChild(dragItem);
        }
        setTimeout(() => {
            alert.classList.remove("hide");
        }, 0);
        setTimeout(() => {
            alert.classList.add("hide");
        }, 1000);
            
    })
}
