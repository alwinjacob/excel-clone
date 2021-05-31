let addbtnContainer = document.querySelector(".add-sheet_container");
let sheetList = document.querySelector(".sheets_list");
let firstSheet = document.querySelector(".sheet");
let addressBar = document.querySelector(".address-box");
let Allcells = document.querySelectorAll(".grid .col");

let allAlignBtn = document.querySelectorAll(".alignment-container>*");
let leftButton = document.querySelector(".Left");
let rightButton = document.querySelector(".Right");
let centerButton = document.querySelector(".Center");

let boldBtn = document.querySelector(".bold");
// let boldBtn = document.querySelector(".fas.fa-bold");

let underlineBtn = document.querySelector(".underline");
// let underlineBtn = document.querySelector(".fas.fa-underline");

let italicBtn = document.querySelector(".italic");
// let italicBtn = document.querySelector(".fas.fa-italic");

let forColor = document.querySelector("#color");
let bgColor = document.querySelector("#bg-color");

let formulaInput = document.querySelector(".formula-box");
let gridContainer = document.querySelector(".grid_container");
let topLeftBlock = document.querySelector(".top-left-block");
// let topRow = document.querySelector(".top-row");
// let leftCol = document.querySelector(".top-col");


let sheetDB = workSheetDB[0];

//************************************************************************* */
//colors
bgColor.addEventListener("change", () => {
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  let bgcolorValue = bgColor.value;
  cell.style.backgroundColor = bgcolorValue;
  let cellObj = sheetDB[rid][cid];
  cellObj.bg_color = bgcolorValue;
});

forColor.addEventListener("change", () => {
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  let fcolor = forColor.value;
  cell.style.color = fcolor;
  let cellObj = sheetDB[rid][cid];
  cellObj.fg_color = fcolor;
});

//BUTTON FUNCTIONALITY
boldBtn.addEventListener("click", () => {
  let isActive = boldBtn.classList.contains("active-btn");
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  let cellObj = sheetDB[rid][cid];
  if (isActive == false) {
    cell.style.fontWeight = "bold";
    boldBtn.classList.add("active-btn");
    cellObj.bold = true;
  } else {
    cell.style.fontWeight = "normal";
    boldBtn.classList.remove("active-btn");
    cellObj.bold = false;
  }
});

// boldBtn.addEventListener("click", () => {
//     let cell = cellAddress();
//     cell.style.fontWeight = "bold";

// });

// boldBtn.addEventListener("dblclick", () => {
//     let cell = cellAddress();
//     cell.style.fontWeight = "normal";
//     console.log("none");

// });

italicBtn.addEventListener("click", () => {
  let isActive = italicBtn.classList.contains("active-btn");
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  let cellObj = sheetDB[rid][cid];
  if (isActive == false) {
    cell.style.fontStyle = "oblique";
    italicBtn.classList.add("active-btn");
    cellObj.italic = true;
  } else {
    cell.style.fontStyle = "normal";
    italicBtn.classList.remove("active-btn");
    cellObj.italic = false;
  }
});

// italicBtn.addEventListener("dblclick", () => {
//     let cell = cellAddress();
//     cell.style.fontStyle = "normal";
//     console.log("none")

// });

// italicBtn.addEventListener("click", () => {
//     let cell = cellAddress();
//     cell.style.fontStyle = "oblique";
// })

underlineBtn.addEventListener("click", () => {
  let isActive = underlineBtn.classList.contains("active-btn");
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  let cellObj = sheetDB[rid][cid];
  if (isActive == false) {
    cell.style.textDecorationLine = "underline";
    underlineBtn.classList.add("active-btn");
    cellObj.underline = true;
  } else {
    cell.style.textDecorationLine = "none";
    underlineBtn.classList.remove("active-btn");
    cellObj.underline = false;
  }
});

// underlineBtn.addEventListener("dblclick", () => {
//     let cell = cellAddress();
//     cell.style.textDecorationLine = "none";

// })
// underlineBtn.addEventListener("click", () => {
//     let cell = cellAddress();
//     cell.style.textDecorationLine = "underline";

// })

let fontFamilyBtn = document.querySelector(".font-family");
fontFamilyBtn.addEventListener("change", () => {
  let fontFamily = fontFamilyBtn.value;
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  cell.style.fontFamily = fontFamily;
  let cellObj = sheetDB[rid][cid];
  cellObj.fontFamily = fontFamily;
});

let fontSizeBtn = document.querySelector(".font-size");
fontSizeBtn.addEventListener("change", () => {
  let fontSize = fontSizeBtn.value;
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  cell.style.fontSize = fontSize + "px";
  let cellObj = sheetDB[rid][cid];
  cellObj.fontSize = fontSize;
});

leftButton.addEventListener("click", () => {
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  cell.style.textAlign = "left";
  for (let i = 0; i < allAlignBtn.length; i++) {
    allAlignBtn[i].classList.remove("active-btn");
  }
  leftButton.classList.add("active-btn");
  //updateDB
  let cellObj = sheetDB[rid][cid];
  cellObj.hAlign = "left";
});

rightButton.addEventListener("click", () => {
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  cell.style.textAlign = "right";
  for (let i = 0; i < allAlignBtn.length; i++) {
    allAlignBtn[i].classList.remove("active-btn");
  }
  rightButton.classList.add("active-btn");
  //updateDB
  let cellObj = sheetDB[rid][cid];
  cellObj.hAlign = "right";
});

centerButton.addEventListener("click", () => {
  let {
    cell,
    rid,
    cid
  } = cellAddress();
  cell.style.textAlign = "center";
  for (let i = 0; i < allAlignBtn.length; i++) {
    allAlignBtn[i].classList.remove("active-btn");
  }
  centerButton.classList.add("active-btn");
  //updateDB
  let cellObj = sheetDB[rid][cid];
  cellObj.hAlign = "center";
});

//************************************************************************* */

function cellAddress() {
  let address = addressBar.value;
  let {
    rid,
    cid
  } = getRidCidFromAddress(address);
  let cell = document.querySelector(`.col[cid="${cid}"][rid="${rid}"]`);
  return {
    cell,
    rid,
    cid,
  };
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
    //object styling set
    let cellObj = sheetDB[rid][cid];
    if (cellObj.bold == true) {
      boldBtn.classList.add("active-btn");
    } else {
      boldBtn.classList.remove("active-btn");
    }

    //italic
    if (cellObj.italic == true) {
      italicBtn.classList.add("active-btn");
    } else {
      italicBtn.classList.remove("active-btn");
    }

    //underline
    if (cellObj.underline == true) {
      underlineBtn.classList.add("active-btn");
    } else {
      underlineBtn.classList.remove("active-btn");
    }

    //alignment
    for (let i = 0; i < allAlignBtn.length; i++) {
      allAlignBtn[i].classList.remove("active-btn");
    }
    if (cellObj.hAlign == "left") {
      leftButton.classList.add("active-btn");
    } else if (cellObj.hAlign == "right") {
      rightButton.classList.add("active-btn");
    } else if (cellObj.hAlign == "center") {
      centerButton.classList.add("active-btn");
    }
    if (cellObj.formula != "") {
      formulaInput.value = cellObj.formula;
    } else {
      formulaInput.value = "";
    }
    //Bg-Colors
    bgColor.value = cellObj.bg_color;
    //fg-color
    forColor.value = cellObj.fg_color;

    //Font-Family
    fontFamilyBtn.value = cellObj.fontFamily;
    //Font-size
    fontSizeBtn.value = cellObj.fontSize;
    // formulaInput.value = cellObj.formula;
  });
  Allcells[i].addEventListener("keyup", () => {
    let obj = Allcells[i].getBoundingClientRect();
    // console.log(obj)
    let height = obj.height;
    let address = addressBar.value;
    let {
      rid,
      cid
    } = getRidCidFromAddress(address);
    let leftCol = document.querySelectorAll(".left-col .left-col_box")[rid];
    // console.log(leftCol)
    if (height == 30) {
      leftCol.style.height = 30 + "px";
    } else {
      leftCol.style.height = height + "px";
    }
    // console.log(height)
  })
}
gridContainer.addEventListener("scroll", (e) => {
  let top = gridContainer.scrollTop;
  let left = gridContainer.scrollLeft;
  topLeftBlock.style.top = top + "px";
  topRow.style.top = top + "px";
  leftCol.style.left = left + "px";
  topLeftBlock.style.left = left + "px";
})
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

  SheetArr.forEach(function (sheet) {
    sheet.classList.remove("active_sheet");
  });

  SheetArr = document.querySelectorAll(".sheet");
  SheetArr[SheetArr.length - 1].classList.add("active_sheet");
  initCurrentSheetDB();
  sheetDB = workSheetDB[idx];
  //empty the cells
  initUI();
  // console.log(workSheetDB)
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
  let sheetIdx = MySheet.getAttribute("SheetIdx");
  sheetDB = workSheetDB[sheetIdx - 1];
  setUI(sheetDB);
}

function initUI() {
  for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].style.fontWeight = "normal";
    Allcells[i].style.fontStyle = "normal";
    Allcells[i].style.textDecoration = "none";
    Allcells[i].style.fontFamily = "Arial";
    Allcells[i].style.fontSize = "16px";
    Allcells[i].style.textAlign = "left";
    Allcells[i].innerText = "";
  }
}

function setUI(sheetDB) {
  //2d array
  for (let i = 0; i < sheetDB.length; i++) {
    for (let j = 0; j < sheetDB[i].length; j++) {
      let cell = document.querySelector(`.col[cid="${j}"][rid="${i}"]`);
      let {
        bold,
        italic,
        underline,
        fontFamily,
        fontSize,
        hAlign,
        value,
        bg_color,
        fg_color,
      } = sheetDB[i][j];
      cell.innerText = value;
      cell.style.fontWeight = bold == true ? "bold" : "normal";
      cell.style.fontStyle = italic == true ? "italic" : "normal";
      cell.style.fontDecoration = underline == true ? "underline" : "none";
      cell.style.textAlign = hAlign;
      cell.style.backgroundColor = bg_color;
      cell.style.color = fg_color;
      cell.style.fontFamily = fontFamily;
      cell.style.fontSize = fontSize;

    }
  }
}

//Formula code
// *******************************FORMULA STUFF*******************************************************

for (let i = 0; i < Allcells.length; i++) {
  Allcells[i].addEventListener("blur", () => {
    let address = addressBar.value;
    let {
      col,
      rid,
      cid
    } = cellAddress();
    let cellObj = sheetDB[rid][cid];
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    //formula Stuff
    if (cellObj.value == cell.innerText) {
      return;
    }

    //Cycle detection using isFormulaValid?
    // # TODO

    if (cellObj.formula) {
      removeFormula(cellObj, address);
    }
    cellObj.value = cell.innerText;
    changeChildren(cellObj);
  });
  // Allcells[i].addEventListener("keydown", (e) => {
  //   if (e.key == "Tab" || e.key == "Enter") {
  //     let { col, rid, cid } = cellAddress();
  //     let address = addressBar.value;
  //     let cellObj = sheetDB[rid][cid];
  //     let cell = document.querySelector(`.col[cid="${cid}"][rid="${rid}"]`);
  //     cellObj.value = cell.innerText;
  //     if (cellObj.value == cell.innerText) {
  //       return;
  //     }
  //     if (cellObj.formula) {
  //       removeFormula(cellObj, address);
  //     }
  //     changeChildren(cellObj);
  //   }
  // });
}



formulaInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && formulaInput.value != "") {
    let address = addressBar.value;
    let newFormula = formulaInput.value;
    let {
      rid,
      cid
    } = getRidCidFromAddress(address);
    let cellObj = sheetDB[rid][cid];
    let previousFormula = cellObj.formula;
    if (previousFormula == newFormula) {
      return;
    }
    if (previousFormula != "" && previousFormula != newFormula) {
      removeFormula(cellObj, address);
    }
    //evaluate
    // console.log(newFormula);
    let evaluatedValue = evaluateFormula(newFormula);
    //Ui-change
    setUIByFormula(evaluatedValue, rid, cid);
    //db-> work
    setFormula(evaluatedValue, newFormula, rid, cid, address);
    changeChildren(cellObj);
  }
});

function setFormula(value, formula, rid, cid, address) {
  let cellObj = sheetDB[rid][cid];
  cellObj.value = value;
  cellObj.formula = formula;
  let formulaToken = formula.split(" ");
  for (let i = 0; i < formulaToken.length; i++) {
    let firstCarOfToken = formulaToken[i].charCodeAt(0);
    if (firstCarOfToken >= 65 && firstCarOfToken <= 90) {
      let parentRIDCID = getRidCidFromAddress(formulaToken[i]);
      let cellObj = sheetDB[parentRIDCID.rid][parentRIDCID.cid];
      cellObj.children.push(address);
    }
  }
}

function setUIByFormula(value, rid, cid) {
  document.querySelector(`.col[cid="${cid}"][rid="${rid}"]`).innerText = value;
}

function evaluateFormula(formula) {
  //"(A1 + A2)"
  //[(,A1, + ,A2,)]
  let formulaToken = formula.split(" ");
  for (let i = 0; i < formulaToken.length; i++) {
    let firstCarOfToken = formulaToken[i].charCodeAt(0);
    if (firstCarOfToken >= 65 && firstCarOfToken <= 90) {
      let {
        rid,
        cid
      } = getRidCidFromAddress(formulaToken[i]);
      let cellObj = sheetDB[rid][cid];
      let {
        value
      } = cellObj;
      formula = formula.replace(formulaToken[i], value);
    }
  }
  //infix evaluation will be a better approach
  let ans = eval(formula);
  return ans;
}

function removeFormula(cellObj, address) {
  let formula = cellObj.formula;
  let formulaToken = formula.split(" ");
  for (let i = 0; i < formulaToken.length; i++) {
    let firstCarOfToken = formulaToken[i].charCodeAt(0);
    if (firstCarOfToken >= 65 && firstCarOfToken <= 90) {
      let parentRIDCID = getRidCidFromAddress(formulaToken[i]);
      let parentcellObj = sheetDB[parentRIDCID.rid][parentRIDCID.cid];
      let children = parentcellObj.children;
      let idx = children.indexOf(address);
      children.splice(idx, 1);
    }
  }
  cellObj.formula = "";
}

function changeChildren(cellObj) {
  let children = cellObj.children;
  for (let i = 0; i < children.length; i++) {
    let chAddress = children[i];
    let chRICIobj = getRidCidFromAddress(chAddress);
    let chObj = sheetDB[chRICIobj.rid][chRICIobj.cid];
    let formula = chObj.formula;
    let evaluatedValue = evaluateFormula(formula);
    setUIByFormula(evaluatedValue, chRICIobj.rid, chRICIobj.cid);
    chObj.value = evaluatedValue;
    changeChildren(chObj);
  }
}


// NEW OPEN SAVE