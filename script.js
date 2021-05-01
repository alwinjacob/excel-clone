let addbtnContainer = document.querySelector(".add-sheet_container")
let sheetList = document.querySelector(".sheets_list")
let firstSheet = document.querySelector(".sheet");


firstSheet.addEventListener("click", handleActiveSheet)

addbtnContainer.addEventListener("click", () => {
    let SheetArr = document.querySelectorAll(".sheet");
    let lastSheetElem = SheetArr[SheetArr.length - 1];
    let idx = lastSheetElem.getAttribute("SheetIdx");
    idx = Number(idx);
    let NewSheet = document.createElement("div");
    NewSheet.setAttribute("class", "sheet");
    NewSheet.setAttribute("SheetIdx", idx + 1);
    NewSheet.innerText = `Sheet ${idx+1}`;
    sheetList.appendChild(NewSheet);
    NewSheet.addEventListener("click", handleActiveSheet)
})

function handleActiveSheet(e) {
    let MySheet = e.currentTarget;
    let sheetsArr = document.querySelectorAll(".sheet");
    sheetsArr.forEach(function (sheet) {
        sheet.classList.remove("active_sheet");
    })
    if (!MySheet.classList[1]) {
        MySheet.classList.add("active_sheet");
    }
}