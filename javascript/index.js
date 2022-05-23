// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises

// function getSteakInstructions(step) {
//   return new Promise (function (resolve, reject) {
//     // setTimeout(() => {
//       document.querySelector("#mashedPotatoes").innerHTML += `<li>${directions[step]}</li>`;

//       if (!directions[step]) reject("Recipe not found/incomplete.")
//       else resolve();
//     // }, 2000);

//   })
// };

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })

  .then((step2) => {
    obtainInstruction("steak", 2);
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })

  .then((step3) => {
    obtainInstruction("steak", 3);
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })

  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>Stake(sic!) is ready!</li>`;
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  let step;
  step = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  step = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  step = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  step = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  step = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  step = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
  step = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;

  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
}

// async function makeBrusselsSprouts() {
//   let step
//   step = await obtainInstruction('brusselsSprouts', 0)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 1)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 2)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 3)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 4)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 5)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 6)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//   step = await obtainInstruction('brusselsSprouts', 7)
//   document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`

//   document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels Sprouts are ready!</li>`

// }

const s0 = function () {
  obtainInstruction("brusselsSprouts", 0);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s0}</li>`;
};

const s1 = function () {
  obtainInstruction("brusselsSprouts", 1);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s1}</li>`;
};
const s2 = function () {
  obtainInstruction("brusselsSprouts", 2);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s2}</li>`;
};

const s3 = function () {
  obtainInstruction("brusselsSprouts", 3);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s3}</li>`;
};

const s4 = function () {
  obtainInstruction("brusselsSprouts", 4);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s4}</li>`;
};

const s5 = function () {
  obtainInstruction("brusselsSprouts", 5);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s5}</li>`;
};

const s6 = function () {
  obtainInstruction("brusselsSprouts", 6);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s6}</li>`;
};

const s7 = function () {
  obtainInstruction("brusselsSprouts", 7);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${s7}</li>`;
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
};

makeBroccoli();

Promise.all([obtainInstruction("brusselsSprouts", 0), obtainInstruction("brusselsSprouts", 1), obtainInstruction("brusselsSprouts", 2), obtainInstruction("brusselsSprouts", 3), obtainInstruction("brusselsSprouts", 4), obtainInstruction("brusselsSprouts", 5), obtainInstruction("brusselsSprouts", 6), obtainInstruction("brusselsSprouts", 7)])
  .then((value) => [document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[0]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[1]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[2]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[3]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[4]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[5]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[6]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>${value[7]}</li>`,
                  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`])

document.getElementById("mashedPotatoesImg").removeAttribute("hidden");
document.getElementById("steakImg").removeAttribute("hidden");
document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
document.getElementById("broccoliImg").removeAttribute("hidden");

// Bonus 2 - Promise all
// ...
