console.log("Hello, World!");

document.getElementById("alertButton").onclick = function() {
    alert("Button clicked!");
}
document.getElementById("contactForm").onsubmit = function(e){

    e.preventDefault(); // Prevent page refresh

let vartxtName = document.getElementById("txtname").value;
let varMessage = document.getElementById("txtmessage").value;
let varEmail = document.getElementById("txtemail").value;
let varPhone = document.getElementById("txtphone").value;

if(!vartxtName) {
    alert("Please enter your name.");
    return;
}
if(!varMessage) {
    alert("Please enter your message.");
    return;
}

if(!varEmail.includes("@")) {
    alert("Please enter a valid email address.");
    return;
}

    if(isNaN(varPhone) || varPhone.length < 10) {
        alert("Please enter a valid phone number.");
        return;

}
    
alert(vartxtName + "\n" + varMessage + "\n" + varEmail + "\n" + varPhone);

let varTable = document.getElementById("submissionTable");
let varNewRow = varTable.insertRow(-1);

varNewRow.insertCell(0).innerText = vartxtName;
varNewRow.insertCell(1).innerText = varMessage;
varNewRow.insertCell(2).innerText = varEmail;
varNewRow.insertCell(3).innerText = varPhone;  


    // Add actions (Edit/Delete)
    let actionsCell = varNewRow.insertCell(4);

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function() {
        document.getElementById("txtname").value = vartxtName;
        document.getElementById("txtemail").value = varEmail;
        document.getElementById("txtphone").value = varPhone;
        document.getElementById("txtmessage").value = varMessage;
        varTable.deleteRow(varNewRow.rowIndex); // Remove row for editing
    }
    actionsCell.appendChild(editBtn);

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.style.marginLeft = "5px";
    delBtn.onclick = function() {
        varTable.deleteRow(varNewRow.rowIndex);
    }
    actionsCell.appendChild(delBtn);

    // Clear form
    this.reset();

}

// if(!vartxtName || !varMessage || !varEmail) {
//     alert("Please fill in all fields.");
//     return;
// }

// if(!varEmail.includes("@")) {
//     alert("Please enter a valid email address.");
//     return;
// }
// if(varMessage.length < 10) {
//     alert("Message must be at least 10 characters long.");
//     return;
// }





// document.getElementById("submit1").onsubmit = function(e) {
//     e.preventDefault(); // Prevent page refresh

// let vartxtName = document.getElementById("txtname").value;
// let varMessage = document.getElementById("txtmessage").value;
// let varEmail = document.getElementById("txtemail").value;   

// if(!vartxtName || !varMessage || !varEmail) {
//     alert("Please fill in all fields.");
//     return;
// }

// alert(vartxtName + "\n" + varMessage + "\n" + varEmail);
// }