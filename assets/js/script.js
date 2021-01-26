/* Drag and drop form template creating API 
   Developer: Mr.Mna
   cubosystems.com
*/
/*---------------------Sample Gird with cells--------------------------- */
function sampleGrid() {
    var div = "<div class='row p-1 pl-3 pr-3' id='customRowId2'>" +
        "<div class='col-md-6 p-0' id='colId1'>" +
        "<div class='row m-0 p-0'>" +
        "<div class='col-12 droppable' style='height: 40px; border: 1px  solid;' hqy-droppable-element='active'></div>" +
        "</div>" +
        "<div class='row m-0 p-0'>" +
        "<div class='col-12 droppable' style='height: 40px; border: 1px  solid;' hqy-droppable-element='active'></div>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-6 p-0' id='colId2'>" +
        "<div class='row m-0 p-0'>" +
        "<div class='col-12 droppable' style='height: 40px; border: 1px  solid;' hqy-droppable-element='active'></div>" +
        "</div>" +
        "<div class='row m-0 p-0'>" +
        "<div class='col-12 droppable' style='height: 40px; border: 1px  solid;' hqy-droppable-element='active'></div>" +
        "</div>" +
        "</div>" +
        "</div>";

    $("#hardCodedDiv").append(div);
}
sampleGrid();

/*------------------------------------------------ */
/*---------------------Remove styles and borders---------------------- */

$("#removeStyles").on('click', function () {
    var childList = [];
    for (var i = 0; i <= ($("#sampleZone").find('*').attr('id')).length; i++) {
        childList.push($("#sampleZone").find('*').attr('id'));
        $("#sampleZone").find('*').removeAttr('style');
    }
});

$("#removeGridBorder").on('click', function (e) {
    e.preventDefault()
    if (window.confirm("Do you want to remove the borders?")) {
        for (var i = 0; i < ($("#generateZone").find('*').attr('id')).length; i++) {
            $("#generateZone").find('*').removeAttr('style');
        }
        $('div .removeRowIcon').remove();
        $('div .colBtn').remove();
    }
})

/*------------------------------------------------ */
/*---------------------Reset grid---------------------- */

$("#resetGrid").on('click', function (e) {
    e.preventDefault();
    if (window.confirm("Do you want to reset the Grid?")) {
        $('.grid div').remove();
        $("#generateZone").addClass('d-none');
        $('#layoutTitle').addClass('d-none');
        $("#rowValuesGrid").val('');
        $("#coloumnValuesGrid").val('');
    }
})

/*---------------------------------------------*/
/*------------------- Initial Grid Build------------------ */

var rowId = 0; // this rowId is common variable

$("#createGrid").on('click', function (e) {
    e.preventDefault();
    var rowValues = parseInt($("#rowValuesGrid").val());
    var colValues = parseInt($("#coloumnValuesGrid").val());
    var isCellsChecked = $("#cellsActive").prop("checked");

    if (rowValues <= 0 || colValues > 12 || isNaN(rowValues) || rowValues == "" || colValues == "") {
        alert("Please Provide valid Row & Column Numbers!")
    } else {

        var colMd = parseInt($("#coloumnValuesGrid").val());
        switch (colMd) {
            case 1:
                colMd = 12;
                $("#generateZone").removeClass('d-none');
                $("#samplePlay").addClass('d-none');
                break;
            case 2:
                colMd = 6;
                $("#generateZone").removeClass('d-none');
                $("#samplePlay").addClass('d-none');
                break;
            case 3:
                colMd = 4;
                $("#generateZone").removeClass('d-none');
                $("#samplePlay").addClass('d-none');
                break;
            case 4:
                colMd = 3;
                $("#generateZone").removeClass('d-none');
                $("#samplePlay").addClass('d-none');
                break;
            case 6:
                colMd = 2;
                $("#generateZone").removeClass('d-none');
                $("#samplePlay").addClass('d-none');
                break;
            case 12:
                colMd = 1;
                $("#generateZone").removeClass('d-none');
                $("#samplePlay").addClass('d-none');
                break;
            default:
                colMd = null;
                alert("Column Value Doesn't Match The Bootstrap Grid Col values!")
                break;
        }

        if (colMd != null) {
            $('#addRowButton').attr('class', 'btn btn-info w-80 mt-2 mb-3 d-block');
        }

        $('#layoutTitle').removeClass('d-none');
        rowId++;
        var intialFinalGrid = initialGridBuild(rowValues, colValues, rowId, colMd, isCellsChecked);
        $("#generateZone").append(intialFinalGrid);

        $("#resetGrid").removeClass();
        $("#resetGrid").addClass('btn btn-dark w-50 mt-2');
        $("#createCustomGrid").removeClass().addClass('d-none');
        $("#addRowButton").removeClass().addClass('btn btn-info w-100 mt-2 mb-3');
        $("#htmlButton").removeClass('d-none').addClass('row mt-4');
        $("htmlZone").removeClass('d-none').addClass('container mt-2');
        //addLanguageScript('dragAndDrop');
    }
});

function initialGridBuild(rowValues, colValues, rowId, colMd, isCellsChecked) {

    var gridElement = [];
    var columnId = 1;
    var colGrid = [];

    if (colMd != null) {

        if (isCellsChecked == true) {
            function generateCols(colValues, columnId, rowId, colMd) {
                for (var c = 0; c < colValues; c++) {
                    var colRemoveButton = "<i class='fas fa-minus-circle colBtn' onclick='removeCol(" + columnId + "," + rowId + ")' cursor='pointer' style='cursor: pointer; margin-left: -32px'></i>";
                    colGrid.push("<div class='col-md-" + colMd + " theRemovClass' id='rowId" + rowId + "colId" + columnId + "' style='height: 80px; border: 1px  solid;' hqy-droppable-element='active'>" + colRemoveButton +
                        "<div class='row' style='margin-top: -24px;'><div class='col-12 droppable' style='height: 40px; border: 1px  solid;' hqy-droppable-element='active'></div></div>" +
                        "<div class='row'><div class='col-12 droppable' style='height: 40px; border: 1px  solid;' hqy-droppable-element='active'></div></div>" +
                        "</div>");
                    columnId++;
                }
                var finalColGrid;
                if (rowId > 1) {
                    finalColGrid = colGrid.splice(0, colValues);
                }
                return finalColGrid = colGrid.join('');
            }

        } else {
            function generateCols(colValues, columnId, rowId, colMd) {
                //id='rowId"+rowId+"colId"+columnId+"'
                for (var c = 0; c < colValues; c++) {
                    var colRemoveButton = "<i class='fas fa-minus-circle colBtn edit' id='colRemoveButton' onclick='removeCol(" + columnId + "," + rowId + ")' cursor='pointer' style='cursor: pointer;'></i>";
                    var removeItemInColoumn = "<i class='fas fa-minus-circle colElementBtn edit' id='removeItemButton' onclick='removeColItem(" + columnId + "," + rowId + ")' cursor='pointer' style='cursor: pointer; right: 25px;'></i>";

                    colGrid.push("<div class='col-md-" + colMd + " theRemovClass' id='rowId" + rowId + "colId" + columnId + "' data-droppable='destination' style='height: 80px; border: 1px  solid;' ondrop='drop_handler(event);' ondragover='dragover_handler(event);'>" + colRemoveButton + "" + removeItemInColoumn + "</div>");
                    columnId++;
                }
                var finalColGrid;
                if (rowId > 1) {
                    finalColGrid = colGrid.splice(0, colValues);
                }
                return finalColGrid = colGrid.join('');
            }
        }

        for (var r = 0; r < rowValues; r++) {
            var removeButton = "<p class='text-danger removeRowIcon' style='margin-top: -75px;margin-left: -20px; cursor: pointer;' onclick='removeRow(" + rowId + ")'><i class='fas fa-minus-circle' style='font-size: 22px; z-index: 800;'></i><p>";
            gridElement.push("<div class='row mt-1 pl-3 pr-3' id='rowId" + rowId + "'>" + generateCols(colValues, columnId, rowId, colMd) + "" + removeButton + "</div>");
            rowId++;
        }

        var grid = gridElement.join('');

        return grid;

    } else {
        return alert("Provide a valid column Value!");
    }
}

/*------------------------------------------------ */
/*---------------------Add row button function--------------------------- */

$('#createRow').click(function (evnt) {
    evnt.preventDefault();
    var colMdValue = 0;
    var coloumnValues = $('#coloumnValues').val();
    $("script[src='dragAndDrop.js']").remove()
    //using this set of code im finding the last row's Id which is created by initial grid build
    //and using that found Id and by adding +1 to it.. the new row id is generated
    var lastId = 0;
    var divIds = [];

    if ($("#generateZone").is(':empty')) {
        lastId = 0;
        console.log('div empty')
    } else {
        divIds.push($("#generateZone").children().find('div'));
        var last = divIds.map(function (divIds) {
            var newArr = [];
            for (var i = 0; i < divIds.length; i++) {
                newArr.push(divIds[i])
            }

            return newArr.slice(-1).pop();
        });
        var id = $(last).parent().attr('id');
        var splitedId = id.split(/(\d+)/);
        lastId = parseInt(splitedId[1]);
    }

    /*----------------------------*/

    if (coloumnValues == "" || coloumnValues > 12) {
        alert('Please Provide a Valid Column Number in Each Feild!');
    }
    switch (parseInt(coloumnValues)) {
        case 1:
            colMdValue = 12;
            $("#generateZone").removeClass('d-none');
            $("#samplePlay").addClass('d-none');
            break;
        case 2:
            colMdValue = 6;
            $("#generateZone").removeClass('d-none');
            $("#samplePlay").addClass('d-none');
            break;
        case 3:
            colMdValue = 4;
            $("#generateZone").removeClass('d-none');
            $("#samplePlay").addClass('d-none');
            break;
        case 4:
            colMdValue = 3;
            $("#generateZone").removeClass('d-none');
            $("#samplePlay").addClass('d-none');
            break;
        case 6:
            colMdValue = 2;
            $("#generateZone").removeClass('d-none');
            $("#samplePlay").addClass('d-none');
            break;
        case 12:
            colMdValue = 1;
            $("#generateZone").removeClass('d-none');
            $("#samplePlay").addClass('d-none');
            break;
        default:
            break;
    }

    $('#layoutTitle').removeClass('d-none');
    lastId++;
    var createRowReturnedElements = colElement(colMdValue, coloumnValues, lastId);
    $("#generateZone").append(createRowReturnedElements);
});

function colElement(colMd, coloumnValues, lastId) {
    var arrCol = [];
    var columnId = 1;
    //id='rowId"+lastId+"colId"+columnId+"'
    for (var i = 0; i < coloumnValues; i++) {
        var colRemoveButton = "<i class='fas fa-minus-circle colBtn edit text-danger' id='colRemoveButton' onclick='removeCol(" + columnId + "," + lastId + ")' cursor='pointer' style='cursor: pointer;'></i>";
        var removeItemInColoumn = "<i class='fas fa-minus-circle colBtn edit text-warning' id='removeItemButton' onclick='removeColItem(" + columnId + "," + lastId + ")' cursor='pointer' style='cursor: pointer; right: 25px;'></i>";

        arrCol.push("<div class='col-md-" + colMd + " theRemovClass' id='rowId" + lastId + "colId" + columnId + "' data-droppable='destination' style='height: 80px; border: 1px  solid;' ondrop='drop_handler(event);' ondragover='dragover_handler(event);'>" + colRemoveButton + "" + removeItemInColoumn + "</div>");
        columnId++;
    }

    if (colMd == 0) {
        return alert('Please Provide a valid column Number!');
    }

    var removeButton = "<p class='text-danger removeRowIcon' style='margin-top: -75px;margin-left: -20px; cursor: pointer;' onclick='removeRow(" + lastId + ")'><i class='fas fa-minus-circle' style='font-size: 22px; z-index: 800;'></i><p>";
    var result = arrCol.join('');
    var row = "<div class='row mt-1 pl-3 pr-3' id='rowId" + lastId + "'>" + result + "" + removeButton + "</div>";

    return row.toString();
}

/*---------------------------------------------------------- */
/*---------Remove Row function------------------*/

function removeRow(rowId) {
    var elmnt = $("#rowId" + rowId + "");
    console.log(elmnt);
    if (window.confirm("Do You Want To Remove The Row?")) {
        elmnt.remove();
    }
}

/*---------------------------------------------------------- */
/* Delete columns accordig to bootstrap grid order and resize the row */

function removeCol(colId, rowId) {
    var coloumn = $("#rowId" + rowId + "colId" + colId + "");
    const constRwoId = $(coloumn).parents().attr('id');
    // console.log(constRwoId);
    // console.log(coloumn);
    if (window.confirm("Do you want to remove the Column?")) {
        coloumn.remove();
        passValueToReArrangeCol(coloumn, constRwoId);
        if (colId == 1) {
            var rowRemove = document.getElementById(constRwoId);
            rowRemove.remove();
        }
    }

}

function passValueToReArrangeCol(columnId, idRow) {
    var idOfRow = idRow;
    var className = (columnId).attr('class');

    if (className == "col-md-6 theRemovClass") {
        var remainingElems = $("#" + idOfRow).children().attr('id');
        console.log(remainingElems);
        return $("#" + remainingElems).removeClass().addClass("col-md-12 theRemovClass")
    }
    if (className == "col-md-4 theRemovClass") {
        return $("#" + idOfRow).find('div').removeClass().addClass("col-md-6 theRemovClass");
    }
    if (className == "col-md-3 theRemovClass") {
        return $("#" + idOfRow).find('div').removeClass().addClass("col-md-4 theRemovClass");
    }
    if (className == "col-md-2 theRemovClass") {
        //Here i store all remaining div tags inside array
        var remainingElems = [];
        remainingElems.push($("#" + idOfRow).find('div'));    //Creating a string array and pushing all the remaining divs inside it
        var arr = remainingElems.map(function (remainingElems) {  //since we cant delete HTML objects inside array, im mapping the remaining elements to a new array to filter the unwanted elements
            var newArr = [];    //inside the array im creating another array so we can access each of them later as a single array
            for (var i = 0; i < remainingElems.length; i++) {
                newArr.push(remainingElems[i])  // pushing all the unwanted elements inside this newArr
            }
            return newArr.splice(-1, 1); //since we have only 1 unwanted element we are taking the last element from all remaining elements
        })
        var elemnt = arr[0];
        $(elemnt).remove();
        return $("#" + idOfRow).find('div').removeClass().addClass("col-md-3 theRemovClass");
    }
    if (className == "col-md-1 theRemovClass") {
        //Here i store all remaining div tags inside array
        var remainingElems = [];
        remainingElems.push($("#" + idOfRow).find('div'));    //Creating a string array and pushing all the remaining divs inside it
        var arr = remainingElems.map(function (remainingElems) {  //since we cant delete HTML objects inside array, im mapping the remaining elements to a new array to filter the unwanted elements
            var newArr = [];    //inside the array im creating another array so we can access each of them later as a single array
            for (var i = 0; i < remainingElems.length; i++) {
                newArr.push(remainingElems[i])  // pushing all the remaining elements inside this newArr
            }
            for (var x = 0; x < 6; x++) {
                newArr.splice(-1, 1);    //since we have 6 unwanted elements we are looping through the newArr remaining elements to take those unwanteds out and store it in newArr 
            }
            return newArr;  // now reterning the newArr and storing all the unwanted elements inside arr Array 
        })
        console.log(arr)
        var elemnt = arr[0];    // since we cant remove an array contains html objects using .remove(), We are storing the arr Arrays 0 index which is the set of all unwanted elements to a normal varibale
        console.log(elemnt)
        $(elemnt).remove(); //Using this function we are removing the all remaining elements
        return $("#" + idOfRow).find('div').removeClass().addClass("col-md-2 theRemovClass"); // We are removing existing classes from remaining elements and assining new classes
    }
}

/*-------------------Remove Column Items-----------------------*/
function removeColItem(columnId, rowId) {
    var columnId = "rowId" + rowId + "colId" + columnId;
    //console.log(columnId);
    //console.log($("#" + columnId).children());
    var droppedItem = $("#" + columnId).find('div');
    if (window.confirm("Do you want to delete the Item?")) {
        droppedItem.remove();
    }
}

/*--------------------------------------------------------*/
/*--------------------------------------------------------*/

$("#createNewGrid").on('click', function(e){
    e.preventDefault();
    window.location.href = 'index.html';
})

/* --------------------------------------------------------- */
/* --------------------Generate Html------------------------------------- */

$("#generateHtml").on('click', function (e) {
    e.preventDefault();
    if (window.confirm("Do you want to generate HTML?")) {
        $("#htmlZone").removeClass('d-none').addClass('container mt-2')
        $('#htmlZone').html($('#generateZone').html());

        for(var i=0; i < ($("#htmlZone").find('*').attr('id')).length; i++){
            $("#htmlZone").find('*').removeAttr('style');
        }
        $('div .removeRowIcon').remove();
        $('div .colBtn').remove();

        for (var i = 0; i < ($("#generateZone").find('*').attr('id')).length; i++) {
            $("#generateZone").find('*').removeAttr('style');
        }
        $('div .removeRowIcon').remove();
        $('div .colBtn').remove();
        $('div .colElementBtn ').remove();

    }

});

/*-----------------------------*/
/*--------------Generate HTML---------------*/

function download(fileName, content) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    //document.removeChild(element);
}

//start download
$("#generateHtml").on('click', function () {

    $(".form-group").removeAttr('id draggable ondragstart ondragend');
    $(".theRemovClass").removeAttr('id data-droppable ondrop ondragover');
    $(".row").removeAttr('id');
    $(".row").removeClass('mt-1 pl-3 pr-3')
    $(".theRemovClass").removeClass('theRemovClass');
    
    var htmlContent = "<!DOCTYPE html>" +
        "<html lang='en'>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
        "<title>Document</title>" +
        "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' />" +
        "</head>" +
        "<body class='bg-light'>" +
        "<div class='container p-2'><form action='' method='post'>" + $('#htmlZone').html() + "</form></div>" +
        "<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'></script>" +
        "<script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js'></script>" +
        "</body>" +
        "</html>";

    var fileName = 'form.html';
    download(fileName, htmlContent);
})
