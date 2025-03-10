document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", getUserInfo);
    }

    const calculateBtn = document.getElementById("calculateBtn");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", myExcelFuns);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", getUserInfo);
});

function getUserInfo() {
    
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let province = document.getElementById("province").value.trim();

   
    if (!firstName || !lastName || !email || !address || !city || !province) {
        alert("Please fill out all fields.");
        return;
    }

   
    let membership = document.querySelector('input[name="membership"]:checked').value;

    
    document.getElementById("output").innerHTML = `
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
        <p><strong>Membership:</strong> ${membership}</p>
    `;
}



function myExcelFuns() {
    let numberStr = document.getElementById("numbers").value.trim();

   
    if (!numberStr) {
        alert("Please enter numbers separated by spaces.");
        return;
    }

   
    let numberArr = numberStr.split(/\s+/)  
                             .map(Number)  
                             .filter(num => !isNaN(num)); 

    
    if (numberArr.length === 0) {
        alert("Please enter valid numeric values.");
        return;
    }

    let result;

    if (document.getElementById("sum").checked) {
        result = numberArr.reduce((acc, num) => acc + num, 0);
    } else if (document.getElementById("avg").checked) {
        result = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length;
    } else if (document.getElementById("max").checked) {
        result = Math.max(...numberArr);
    } else if (document.getElementById("min").checked) {
        result = Math.min(...numberArr);
    }

  
    document.getElementById("result").innerHTML = `<strong>Result: ${result}</strong>`;
}


