let newButtonEl = document.querySelector(".new");
let openButton = document.querySelector(".open");
let downloadButton = document.querySelector(".save");
let file_NameEl = document.querySelector(".filename");


let file_Name = "untitled";

downloadButton.addEventListener("click", () => {
    const data = JSON.stringify(workSheetDB);
    const blob = new Blob([data], {
        type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = `${file_Name}.json`;
    a.click();
    console.log(workSheetDB);

})

file_NameEl.addEventListener("blur", () => {
    if (!!file_NameEl.value) {
        file_Name = file_NameEl.value;
    }else{
        file_Name ="Untitled"
    }
    console.log(file_Name);
})

newButtonEl.addEventListener("click", () => {
    location.reload();
})

openButton.addEventListener("click", async () => {
    const {
        value: file
    } = await Swal.fire({
        title: 'Select Your File',
        input: 'file',
        inputAttributes: {
            'accept': 'json/*',
            'aria-label': 'Upload your File'
        }
    })
    if (file) {
        const reader = new FileReader()
        reader.readAsText(file);
        reader.addEventListener("load", function () {
            sheetArr = JSON.parse(reader.result);
            sheetDB = sheetArr[0];
            setUI(sheetDB);
        })
    }
})