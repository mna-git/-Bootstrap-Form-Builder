function dragstart_handler(ev) {
    // Add the id of the drag source element to the drag data payload so
    // it is available when the drop event is fired
    ev.dataTransfer.setData("text", ev.target.id);
    ev.currentTarget.style.cursor = "pointer";
    // Tell the browser both copy and move are possible
    ev.effectAllowed = "copyMove";
}

function dragover_handler(ev) {
    //console.log("dragOver");
    // Change the target element's background colour
    //ev.currentTarget.style.background = "lightblue";
    ev.preventDefault();
}

function drop_handler(ev) {
    //console.log("Drop");
    ev.preventDefault();
    // Get the id of drag source element (that was added to the drag data
    // payload by the dragstart event handler)
    var id = ev.dataTransfer.getData("text");


    // getting the id of the draggable element and droppable elements data attribute (if both true, getting a clone and assiging the draged elemnt to droppable feild)
    if ( id && ev.target.getAttribute('data-droppable') ) {
        var nodeCopy = document.getElementById(id).cloneNode(true);

        //after dropping, asking for the ID value and label name
        var elementId  = window.prompt("Please provide the ID","newId");
        
        //Setting the Id Value to elements parent DIV
        nodeCopy.id = elementId;
        //attaching to the column
        ev.target.appendChild(nodeCopy);

        //console.log(document.getElementById(elementId).getElementsByTagName("input"));

        //now getting the input elements inside the parent DIV
        var inputElement = document.getElementById(elementId).getElementsByTagName("input");
        //Setting the ID for the Input Element
        inputElement[0].id = elementId;

        //This set of codes will dynamically change the label name of the element by user given value
        var elementLabel  = window.prompt("Please provide the label","New Label");
        var labelElement = document.getElementById(elementId).getElementsByTagName("label");
        labelElement[0].innerHTML = elementLabel;

    }

    
}

//after drag end
function dragend_handler(ev) {
    //console.log("dragEnd");
    // Remove all of the drag data
    ev.dataTransfer.clearData();
}