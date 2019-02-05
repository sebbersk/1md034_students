var myButton = document.getElementById('myButtonID');

// In JavaScript you can either trigger an event directly on an object
/*myButton.onclick = functionName;

// Or using the event handler function
myButton.addEventListener("click", functionName);

// You can pass a defined function as above (no parentheses), or provide an anonymous function
myButton.onclick = function () {
    ...
*/

function writeToConsole(){
  console.log("Button clicked");
}
//myButton.addEventListener("click",writeToConsole);
function getOrderInfo(){
  var fullName= document.getElementById('fullname').value;
  var eMail= document.getElementById('email').value;
  var str= document.getElementById('Street').value;
  var house= document.getElementById('House').value;
  var payment= document.getElementById('Payment').value;
  var genders = document.getElementsByName('gender');
  let gender= null;
  for (var i = 0; i < genders.length; i++)
{
 if (genders[i].checked)
 {
  gender=genders[i].value;
  break;
 }

 }


  var orderinfo=[];
  orderinfo[0]="Name : " +fullName;
  orderinfo[1]="Email : "+eMail;
  orderinfo[2]="Street : " +str;
  orderinfo[3]="House number : "+house;
  orderinfo[4]="Payment method : "+payment;
  orderinfo[5]="Gender : " +gender;
  let j=6;
  var burgers= document.getElementsByName('burger');
  for(var x= 0; x <burgers.length; x++){
    if(burgers[x].checked){
      orderinfo[j]= "Burger : "+ burgers[x].value;
      j++;
    }
  }
  orderinfo[j]="Order ID: #"+(Math.round(Math.random()*10000));
  //console.log(orderinfo);
  document.getElementById('fullname').value='';
  document.getElementById('email').value='';
  document.getElementById('Street').value='';
  document.getElementById('House').value='';
  return orderinfo;
}
