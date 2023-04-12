
// Calculator
// function cal(){
// var oper1 = document.getElementById('first').value;
// var oper2 = document.getElementById('second').value;
// var operator = document.getElementById('operator').value;

// if(operator== '+'){
//     var result = parseInt(oper1) + parseInt(oper2);
// }
// if(operator== '-'){
//     var result = parseInt(oper1) - parseInt(oper2);
// }
// if(operator== '*'){
//     var result = parseInt(oper1) * parseInt(oper2);
// }
// if(operator== '/'){
//     var result = parseInt(oper1) / parseInt(oper2);
// }
// document.getElementById('result').value = result;
// }




// Date command

// var date= new Date();
// function getDate() {
//  document.getElementById('res').innerText = date;
// }

// function year() {
//     document.getElementById('res').innerText = date.getFullYear();
//    }

//    function month() {
//        var month = ["January", "Feb", "March", "April", "May", "June", "July", "August", "September", 
//        "October", "Nov", "Dec" ]
//     document.getElementById('res').innerText = month[date.getMonth()];
//    }

//    function hour() {
//     document.getElementById('res').innerText = date.getHours();
//    }
   
//    function todate() {
//     document.getElementById('res').innerText = date.getDate(); 
//    }





// Array Methods

// var fruits = [ "Mango" , "Apple" , "Pineapple" , "Banana"];
// var vegitables = ["Potato", "Tomato", "Ginger"]
// var shop = fruits.concat(vegitables);
// // for checking array is true or false
// // var flag=  Array.isArray(fruits);

// // var flag = fruits.valueof();

// // var flag = fruits.join(" | ");

// // document.write("<h1>" + shop + "</h1>");
// var index = shop.indexOf("Tomato");
// document.write("<h1>" + index + "</h1>");
var fruits = [ "Mango" , "Apple" , "Pineapple" , "Banana"];
var demo = fruits;
document.getElementById('result').innerHTML= demo;
// function pop(){
//     demo.pop();
//     document.getElementById('rer').innerText= demo;
// }
// function push(){
//     demo.push();
//     document.getElementById('res').innerText= demo;
// }