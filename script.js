// ======================================Alert Functions=============================
let toastError = () => {
    Toastify({
        text: "Error! Your action was not completed.",
        duration: 3000,          // Time in milliseconds before hiding
        close: true,             // Shows the close (x) button
        gravity: "bottom",          // `top` or `bottom`
        position: "right",       // `left`, `center` or `right`
        stopOnFocus: true,       // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #ff0000, #ff8800)", // Custom CSS styling
            borderRadius: "8px",
            fontWeight: "bold"
        }
    }).showToast();
}
let toastSuccess = () => {
    Toastify({
        text: "Success! Your action was completed.",
        duration: 3000,          // Time in milliseconds before hiding
        close: true,             // Shows the close (x) button
        gravity: "bottom",          // `top` or `bottom`
        position: "left",       // `left`, `center` or `right`
        stopOnFocus: true,       // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)", // Custom CSS styling
            borderRadius: "8px",
            fontWeight: "bold"
        }
    }).showToast();
}

// ========================================clear input and output=====================
let clearIn = () => {
    document.getElementById("input").value = ""
    toastSuccess()
}
let clearOut = () => {
    document.getElementById("output").innerHTML = ""
    toastSuccess()
}

// =============================round================================
let roundNum = () => {
    let input = document.getElementById("input").value
    if (input === "" || isNaN(input)) {
        toastError()
    }
    else {
        document.getElementById("output").innerHTML = Math.round(input)
        toastSuccess()
    }
}

// =====================================ceil==============================
let ceilNum = () => {
    let input = document.getElementById("input").value
    if (input === "" || isNaN(input)) {
        toastError()
    }
    else {
        document.getElementById("output").innerHTML = Math.ceil(input)
        toastSuccess()
    }
}

// =======================================floor============================
let floorNum = () => {
    let input = document.getElementById("input").value
    if (input === "" || isNaN(input)) {
        toastError()
    }
    else {
        document.getElementById("output").innerHTML = Math.floor(input)
        toastSuccess()
    }
}

// =============================Generate A Random Number=======================
let randomNum = () => {
    // let input = document.getElementById("input").value
    // if (input === "" || isNaN(input)) {
    //     toastError()
    // }
    // else {
        document.getElementById("output").innerHTML =Math.round( Math.random()*100)
    document.getElementById("input").value =document.getElementById("output").innerHTML
    toastSuccess()
    // }
}


// ==============================throw dice===============================
let dice = () => {
    let throwNum = Math.round(Math.random()*6)
    document.getElementById("output").innerHTML = "Your throw: "+throwNum
    // console.log(throwNum);
    
    document.getElementById("input").value =throwNum
    toastSuccess()
}

// =====================random password====================
let password = () => {
    let  lenght = 9
    let randomPassword = Math.random().toString(36).slice(-lenght)
    document.getElementById("output").innerHTML = randomPassword
    document.getElementById("input").value = randomPassword
    toastSuccess()
}


// ==============================gst=====================
let gst = () => {
   let cost = document.getElementById("input").value
   cost = Number(cost)
   let tax = 15
   let taxToTal = (cost / 100) * tax 
   let tcost = cost + taxToTal
   let taxtotal = Math.round(tcost)
   if (cost === "" || isNaN(cost)) {
    toastError()
   }
   else {
    document.getElementById("output").innerHTML ="Total Amount With Tax = "+ taxtotal + "<br/>" + "<br/>" + "Tax = " + tax+ "%" + "<br/>" + "<br/>" + "Original Cost = " + cost
    toastSuccess()
   }
}
