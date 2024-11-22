function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  //headers
  // const heading = document.createElement("h1");
  // heading.textContent = "Freelancer Forum";
  // rootContainer.append(heading);

  let freelancers = [
    {
      name: "Alice",
      occupation: "writer",
      price: 30,
    },

    {
      name: "Bob",
      occupation: "teacher",
      price: 50,
    },

    {
      name: "Carol",
      occupation: "engineer",
      price: 70,
    },
  ];

  let avgPrice = 30;

  // /**
  //  * 👉 STEP 3:
  //  *    Create a table to hold our freelancers in
  //  */

  //on HTML page

  /**
   * 👉 STEP 4:
   *    Create a function to render the freelancers in our Freelance array
   */
  let newPrice = document.getElementById("newPrice");
  newPrice = calAvgPrice(freelancers);
  newPrice.innerText = `$$(newAverage)`;

  function calAvgPrice(freelancers) {
    const totalPrice = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,
      0
    );

    return totalPrice / freelancers.length;
  };

  function printFreelancers(freelancerArray) {
    tBody.innerHTML = "";

    const printedTable = freelancerArray.map((newFreelancer) => {
      const newRow = document.createElement("tr");

      const freelancerName = document.createElement("td");
      freelancerName.textContent = newFreelancer.name;

      const freelancerJob = document.createElement("td");
      freelancerJob.textContent = newFreelancer.occupation;

      const freelancerPrice = document.createElement("td");
      freelancerPrice.textContent = newFreelancer.price;

      newRow.append(freelancerName, freelancerJob, freelancerPrice);
      tBody.append(newRow);

      calAvgPrice(freelancerArray);
      console.log(calAvgPrice(freelancerArray));
    });
  }

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */

  printFreelancers(freelancers);

  /**
   * 👉 STEP 6:
   *    Create a function to add a new freelancer to the Freelance array
   */
  function addFreelancer() {
    const funNames = [
      "Pottery",
      "Kettle",
      "Muscle",
      "Beeper",
      "Luffy",
      "Zoro",
      "Klondike",
      "Punkin",
      "Dana",
    ];
    const funJobs = [
      "candle lighter",
      "clapper",
      "doctor",
      "monkey D. Luffy trainer",
      "special specialist",
      "swordsman",
      "pirate",
    ];
    const addPrice = Math.floor(Math.random() * 8) * 10 + 20;
    const addName = funNames[Math.floor(Math.random() * funNames.length)];
    const addJob = funJobs[Math.floor(Math.random() * funJobs.length)];

    freelancers.push({ name: addName, occupation: addJob, price: addPrice });

    printFreelancers(freelancers);
  }

  /**
   * 👉 STEP 7:
   *    Add an interval to add a new freelancer every second
   */

  let newFreelancer = setInterval(addFreelancer, 1000);

setTimeout(() => {

  clearInterval(newFreelancer);
}, 5000);
}


  //call init function
init();
