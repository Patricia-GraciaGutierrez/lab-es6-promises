// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
 }, (error) => console.log(error));
 
 getInstruction("mashedPotatoes", 1, (step2) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
 }, (error) => console.log(error));
 
 getInstruction("mashedPotatoes", 2, (step3) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
 }, (error) => console.log(error));
 
 getInstruction("mashedPotatoes", 3, (step4) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
 }, (error) => console.log(error));
 
 getInstruction("mashedPotatoes", 4, (step5) => {
   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
 }, (error) => console.log(error)); */



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; //añado otro li

          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden"); //muestra la imagen
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;

    document.querySelector("#steakImg").removeAttribute("hidden"); //muestra imagen
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
async function makeBroccoli(step) {
  return obtainInstruction('broccoli', step).then((instruction)  =>{
  document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
  })
}


async function getSteps() {
  try {
    await makeBroccoli(0)
    await makeBroccoli(1)
    await makeBroccoli(2)
    await makeBroccoli(3)
    await makeBroccoli(4)
    await makeBroccoli(5)
    await makeBroccoli(6)

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

    
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
  catch (err){
    console.log (err)
  }
}

getSteps();


// Bonus 2 - Promise all
const brusselsSproutsSteps= [
obtainInstruction ("brusselsSprouts", 0),
obtainInstruction ("brusselsSprouts", 1),
obtainInstruction ("brusselsSprouts", 2),
obtainInstruction ("brusselsSprouts", 3),
obtainInstruction ("brusselsSprouts", 4),
obtainInstruction ("brusselsSprouts", 5),
obtainInstruction ("brusselsSprouts", 6)
];

Promise.all(brusselsSproutsSteps)
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });

    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));