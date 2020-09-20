function onFormSubmit(){
    var formData = ReadFormData();
    insertNewRecord(formData);
    
}


function  ReadFormData(){
    var formData = {};
    formData{"catagory"}= document.getElementById("catagory").value;
    formData{"product"}= document.getElementById("product").value;
    formData{"Quantity"}= document.getElementById("Quantity").value;
    formData{"Landingprice"}= document.getElementById("Landingprice").value;
    formData{"Discount"}= document.getElementById("Discount").value;
    formData{"Price"}= document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(Data){
    var table = document.getElementById("tabledetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML= data.category;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML= data.product;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML= data.Quantity;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML= data.Landingprice;
    cell1 = newRow.insertCell(4);
    cell1.innerHTML= data.Discount;
    cell1 = newRow.insertCell(5);
    cell1.innerHTML= data.Price;
    cell1 = newRow.insertCell(6);
    cell1.innerHTML= `<a>delete</a>`;
    
}