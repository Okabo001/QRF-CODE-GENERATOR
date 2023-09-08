const wrapper = document.querySelctor(".wrapper"),
qrInput =wrapper.querySelctor(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelctor("qr-code img");
let preValue;
generateBtn.addeventListener("click",()=> {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrvalue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generate QR code .....";
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}';
    qrImg.addeventListener("load", () =>{
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR code";
    });
});
qrInput.addeventListener("keyup", () =>{
    if (qrInput.value.trim()){
        wrapper.classList.remove("active");
        preValue = "";
    }
});
