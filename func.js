const logbtn = document.getElementById("logbtn");
const login = document.getElementById("login");
const email = document.getElementById("email");
const pw = document.getElementById("password");
if (logbtn) {    
    logbtn.addEventListener("click", () => {
        if (email.value === "mvscharan@gmail.com" && pw.value === "12345") {
            localStorage.setItem("logflag", true);
            window.location.href = "index.html";
        } else {
            localStorage.setItem("logflag", false);
            alert("Invalid Credentials");
        }
    })
}

if (login) {
    if (localStorage.getItem("logflag")) {
        login.innerHTML = "MV Sai Charan";
    } 
}


const confirmbtn = document.getElementById("confirmbtn");
if (confirmbtn) {
    const type = document.querySelectorAll(".type");
    const size = document.querySelectorAll(".size");
    const colour = document.querySelectorAll(".colour");
    const custdes = document.querySelectorAll(".custdes");
    const dispimg = document.getElementById("dispimg");
    const designReq = document.getElementById("designReq");
    const quantity = document.getElementById("quantity");

    colour.forEach(function (color) {
        color.addEventListener("change", function () {
            if (colour[0].checked) {
                dispimg.src = "images/round_red.jpg";
            }
            if (colour[1].checked) {
                dispimg.src = "images/round_blue.jpg";
            }
            if (colour[2].checked) {
                dispimg.src = "images/round_black.jpg";
            }
            if (colour[3].checked) {
                dispimg.src = "images/round_white.jpg";
            }
        });
    });
    confirmbtn.addEventListener("click", () => {
        type.forEach(type => {
            if (type.checked)
                localStorage.setItem("type", type.id);
        })
        size.forEach(size => {
            if (size.checked)
                localStorage.setItem("size", size.id);
        })
        colour.forEach(colour => {
            if (colour.checked)
                localStorage.setItem("colour", colour.id);
        })
        if(designReq.checked) {
            localStorage.setItem("designReq", true);
        } else {
            localStorage.setItem("designReq", false);
        }
        custdes.forEach(custdes => {
            if (custdes.checked)
                localStorage.setItem("custdes", custdes.id);
        })
        localStorage.setItem("quantity", quantity.value);
        window.location.href = "details.html"
    })
}

tshirttype = {
    rounded: 320,
    polo: 350,
    vneck: 330,
    henley: 380
}
const details = document.getElementsByClassName("details");

if(details){
    let type = localStorage.getItem("type");
    let size = localStorage.getItem("size");
    let colour = localStorage.getItem("colour");
    let designReq = localStorage.getItem("designReq");
    let custdes = localStorage.getItem("custdes");
    let quantity = localStorage.getItem("quantity");

    const typedet = document.getElementById("typedet");
    const sizedet = document.getElementById("sizedet");
    const colourdet = document.getElementById("colourdet");
    const designReqdet = document.getElementById("designReqdet");
    const custdesdet = document.getElementById("custdesdet");
    const pdet = document.getElementById("pdet");
    const quantitydet = document.getElementById("quantitydet");
    const fp = document.getElementById("fp");
    let price = 0;
    price += tshirttype
[type];
    typedet.innerHTML += type + " (Rs. " + tshirttype
[type] + ")";
    if (size === "L" || size === "XL") {
        price += 30;
        sizedet.innerHTML += size + " (Rs. " + 30 + ")";
    } else {
        sizedet.innerHTML += size + " (Rs. " + 0 + ")";
    }
    colourdet.innerHTML += colour;
    if (designReq) {
        designReqdet.innerHTML += "Yes";
    } else {
        designReqdet.innerHTML += "No";
    }
    if (custdes === "printed") {
        custdesdet.innerHTML += custdes + " (Rs. 150)";
        price += 150;
    } else {
        custdesdet.innerHTML += custdes + " (Rs. 250)";
        price += 250;
    }
    pdet.innerHTML += price;
    quantitydet.innerHTML += quantity;
    price *= quantity;
    fp.innerHTML += price;
}