let topRow = document.querySelector(".top-row");
let str = "";
for (let i = 0; i < 26; i++) {
    str += `<div class='col'>${String.fromCharCode(65 + i)}</div>`;
}
topRow.innerHTML = str;
let leftCol = document.querySelector(".left-col");
str = ""
for (let i = 0; i < 100; i++) {
    str += `<div class='left-col_box'>${i + 1}</div>`
}
leftCol.innerHTML = str;

let grid = document.querySelector(".grid");
str = "";
for (let i = 0; i < 100; i++) {
    str += `<div class="row">`
    for (let j = 0; j < 26; j++) {
        str += `<div class='col' contenteditable="true" rid=${i} cid=${j}></div>`
    }
    str += "</div>";
    //${String.fromCharCode(65 + j)}${i + 1}
}
grid.innerHTML = str;




let workSheetDB = [];
function initCurrentSheetDB() {
    //2d Array -> Styling prop
    let sheetDB = [];
    for (let i = 0; i < 100; i++) {
        let row = [];
        for (let j = 0; j < 26; j++) {
            let cell = {
                //formatting
                bold: false,
                italic: false,
                underline: false,
                fontFamily: "Arial",
                fontSize: "16",
                hAlign: "left",
                bg_color: "#FFFFFF",
                fg_color: "#000000",
                //text
                value:"",
                children:[],
                formula:""
            };
            row.push(cell);
        }
        sheetDB.push(row);
    }
    workSheetDB.push(sheetDB);
}
initCurrentSheetDB();