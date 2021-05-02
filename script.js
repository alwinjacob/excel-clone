let addbtnContainer = document.querySelector(".add-sheet_container");
let sheetList = document.querySelector(".sheets_list");
let firstSheet = document.querySelector(".sheet");
let addressBar = document.querySelector(".address-box");
let Allcells = document.querySelectorAll(".grid .col");

let leftButton = document.querySelector(".Left");
let rightButton = document.querySelector(".Right");
let centerButton = document.querySelector(".Center");

let boldBtn = document.querySelector(".bold");
let underlineBtn = document.querySelector(".underline");
let italicBtn = document.querySelector(".italic");

let forColor = document.querySelector("#color");
let bgColor = document.querySelector("#bg-color");






//************************************************************************* */
//colors
bgColor.addEventListener("change", () => {
    let cell = cellAddress();;
    let bgcolor = bgColor.value;
    cell.style.backgroundColor = bgcolor;
})

forColor.addEventListener("change", () => {
    let cell = cellAddress();
    let fcolor = forColor.value;
    cell.style.color = fcolor;
})

//BUTTON FUNCTIONALITY
boldBtn.addEventListener("click", () => {
    let cell = cellAddress();
    cell.style.fontWeight = "bold";

});

boldBtn.addEventListener("dblclick", () => {
    let cell = cellAddress();
    cell.style.fontWeight = "normal";
    console.log("none")

});


italicBtn.addEventListener("dblclick", () => {
    let cell = cellAddress();
    cell.style.fontStyle = "normal";
    console.log("none")

});

italicBtn.addEventListener("click", () => {
    let cell = cellAddress();
    cell.style.fontStyle = "oblique";
})


underlineBtn.addEventListener("dblclick", () => {
    let cell = cellAddress();
    cell.style.textDecorationLine = "none";

})
underlineBtn.addEventListener("click", () => {
    let cell = cellAddress();
    cell.style.textDecorationLine = "underline";

})


let fontFamilyBtn = document.querySelector(".font-family");
fontFamilyBtn.addEventListener("change", () => {
    let fontFamily = fontFamilyBtn.value;
    let cell = cellAddress();
    cell.style.textAlign = "left";
    cell.style.fontFamily = fontFamily;
});

let fontSizeBtn = document.querySelector(".font-size");
fontSizeBtn.addEventListener("change", () => {
    let fontSize = fontSizeBtn.value;
    let cell = cellAddress();
    cell.style.textAlign = "left";
    cell.style.fontSize = fontSize + "px";
});

leftButton.addEventListener("click", () => {
    let cell = cellAddress();
    cell.style.textAlign = "left";
});

rightButton.addEventListener("click", () => {
    let cell = cellAddress();
    cell.style.textAlign = "right";
});

centerButton.addEventListener("click", () => {
    let cell = cellAddress();
    cell.style.textAlign = "center";
});


//************************************************************************* */


function cellAddress() {
    let address = addressBar.value;
    let {
        rid,
        cid
    } = getRidCidFromAddress(address);
    let cell = document.querySelector(`.col[cid="${cid}"][rid="${rid}"]`);
    return cell;
}


function getRidCidFromAddress(address) {
    let cellColAdd = address.charCodeAt(0);
    let cellRowAdd = address.slice(1);
    let cid = Number(cellColAdd) - 65;
    let rid = Number(cellRowAdd) - 1;
    return {
        rid,
        cid,
    };
}

// Address Box Value
for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("click", () => {
        let rid = Number(Allcells[i].getAttribute("rid"));
        let cid = Number(Allcells[i].getAttribute("cid"));
        let rowAdd = rid + 1;
        let colAdd = String.fromCharCode(cid + 65);
        let address = colAdd + rowAdd;
        addressBar.value = address;
        // Allcells[i].style.border="2px solid lightgreen"
    });
}
Allcells[0].click();

firstSheet.addEventListener("click", handleActiveSheet);

addbtnContainer.addEventListener("click", () => {
    let SheetArr = document.querySelectorAll(".sheet");
    let lastSheetElem = SheetArr[SheetArr.length - 1];
    let idx = lastSheetElem.getAttribute("SheetIdx");
    idx = Number(idx);
    let NewSheet = document.createElement("div");
    NewSheet.setAttribute("class", "sheet");
    NewSheet.setAttribute("SheetIdx", idx + 1);
    NewSheet.innerText = `Sheet ${idx + 1}`;
    sheetList.appendChild(NewSheet);
    NewSheet.addEventListener("click", handleActiveSheet);
});

function handleActiveSheet(e) {
    let MySheet = e.currentTarget;
    let sheetsArr = document.querySelectorAll(".sheet");
    sheetsArr.forEach(function (sheet) {
        sheet.classList.remove("active_sheet");
    });
    if (!MySheet.classList[1]) {
        MySheet.classList.add("active_sheet");
    }
}