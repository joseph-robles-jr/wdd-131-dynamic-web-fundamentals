import participantTemplate from "./template.mjs";


var i = 2; //counter


function addparticipant(){
  var i_work = participantTemplate(i++);
  button_event.insertAdjacentHTML("beforebegin", i_work);

}


var button_event = document.querySelector("#add");
button_event.addEventListener("click", addparticipant);

var submit_button = document.querySelector("form");
submit_button.addEventListener("submit", submitForm);// when click is submited, submit form



function submitForm(event) {
  event.preventDefault();
  //total fees
  var returned_total_fees = totalFees();
  console.log(returned_total_fees);


  function return_recipt(){ // Create a function like participantTemplate above, where we return a string representation of a receipt page
    // Just the total number of participants with the summed fee amount
    let reciptPage = `There are ${i-1} participants. Total: $${returned_total_fees}`; 
     // display reciptPage in html

     document.getElementById('summary').innerHTML = reciptPage;
     return reciptPage;
  }
  document.querySelector('form').style.display = 'none';

  return_recipt();
  // Hide the form with form.style.display = 'none'


  }


function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  
  let sum = 0;
  for (let item of feeElements)
  {
   sum+= parseFloat(item.value);
  
  }
  return sum;
  
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  
  // once you have your total make sure to return it!
  
  }





