// function isPrimeChecker(num){                                                         
                                                                                      
//     if (                                  // This loop iteration needs by eliminating 
//       (num % 2 === 0 && num > 2) ||      //  all even numbers greater than 2 are not prime.
//       (num % 3 === 0 && num > 2) ||     //   Covers for multiples of 3 and 5 as well.
//       (num % 5 === 0 && num > 2)
//     ) {
//       return "false";
//     }
//     for(var i = 7; i < num/2; i += 2) {  //  Turns nums value into a "mirror" of sorts → lower factors | higher factors
//         if (num % i === 0) {            //   therefore it can take away all higher numbers from half 
//             return "false";            //    value of num, cutting iterations in half.
//         }
//         if ((i +=2) % 5 === 0) {     //      Prevents the loop checking for nums == 5, 
//             i += 2;                 //       reducing times needed to loop allowing to skip 5
//         }

//     }                             
//     return "true"; 
// }

// console.log(isPrimeChecker(31));   // should return true. loop only runs 3 times from what i can see!!!!

///////////////////////////////////////////////////////////
//////////raw js code for prime number check ↑ ////////////
///////////////////////////////////////////////////////////


///////// Determines if user input is a prime number//////////////////////////////////////////////////////////////////

function isPrimeChecker() {

  var num = document.getElementById("userInput").value;
  var isPrime = num + ' is a prime number.';
  var isNotPrime = num + ' is not a prime number.';
  var results = document.getElementById("result").innerHTML;

  if (
    (num % 2 === 0 && num > 2) ||
    (num % 3 === 0 && num > 2) ||
    (num % 5 === 0 && num > 2)
  ) {
    return isNotPrime;
  }

  for (var i = 7; i < num / 2; i += 2) {
    if (num % i === 0) {
      return isNotPrime;
    }
    if ((i += 2) % 5 === 0) {
      i += 2;
    }
  }
  return isPrime;

}

/////////////////////////// Takes in user input ////////////////////////////////////////////////////////////////////////

function submissionOfUserInput() { // grabs user input makes it equal to var num
  var num = document.getElementById("userInput").value;
  return num;
}

// var number = submissionOfUserInput();
// console.log(number);
/////////////////////////// Displays results to html ///////////////////////////////////////////////////////////////////

function displayResult(isPrimeChecker) {
  var results = document.getElementById("result").innerHTML;
  return results;
}


// function firstFunction() {
//   // do something
//   return "testing 123";
// }

// var test = firstFunction();  // this will grab you the return value from firstFunction();
// alert(test);