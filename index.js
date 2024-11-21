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
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.append(heading);

  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  //table
  const table = document.createElement("table");
  rootContainer.append(table);

  const tHead = document.createElement("thead");
  table.append(tHead);

  //table row
  const row1 = document.createElement("tr");
  tHead.append(row1);

  //table headers
  const col1 = document.createElement("th");
  col1.textContent = "Name";
  row1.append(col1);

  const col2 = document.createElement("th");
  col2.textContent = "Occupation";
  row1.append(col2);

  const col3 = document.createElement("th");
  col3.textContent = "Starting Price";
  row1.append(col3);

  //Arrays
  // const name = ["Alice", "Bob", "Carol"];
  // const occupation = ["writer", "teacher", "engineer"];
  // const price = [30, 50, 70];
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

  const tBody = document.createElement("tbody");
  tBody.setAttribute("id", "tableBody");
  table.append(tBody);

  /**
   * 👉 STEP 4:
   *    Create a function to render the freelancers in our Freelance array
   */
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

    freelancers.push({name: addName, occupation: addJob, price: addPrice });

    printFreelancers(freelancers);
  }

  /**
   * 👉 STEP 7:
   *    Add an interval to add a new freelancer every second
   */

  setInterval(addFreelancer, 1000);

  //call init function
}
init();
