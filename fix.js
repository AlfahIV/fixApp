// const button = document.getElementById("button");
// const potDisplay = document.getElementById("potDisplay");
// const message = document.getElementById("message");
// const PSG = document.getElementById('PSG');
// const RealMadrid = document.getElementById('RealMadrid');
// const ManchesterCity = document.getElementById('ManchesterCity');
// const BayernMunich = document.getElementById('BayernMunich');
// const Liverpool = document.getElementById('Liverpool');
// const InterMilan = document.getElementById('Inter Milan');
// const Chelsea = document.getElementById('Chelsea');
// const BorussiaDortmund = document.getElementById('BorussiaDortmund');
// const FCBarçelona = document.getElementById('FCBarcelona');

// const generatePots = () => {
//   message.textContent = "Generating pots...";
//   setTimeout(() => {
//     potDisplay.style.display = "flex";
//     potDisplay.style.animation =
//       "fadeIn 3s ease-in-out 2s 1 alternate forwards";
//   }, 1000);

//   setTimeout(() => {
//     message.style.display = "none";
//   }, 6300);

// // PSG.textContent = clubs.pot1[0].name;

// const psgClub = clubs.pot1[0];
// const realMadridClub = clubs.pot1[1];
// const manchesterCityClub = clubs.pot1[2];
// const bayernMunichClub = clubs.pot1[3];
// const liverpoolClub = clubs.pot1[4];
// const interMilanClub = clubs.pot1[5];
// const chelseaClub = clubs.pot1[6];
// const borussiaDortmundClub = clubs.pot1[7];
// const fcbarçelonaClub = clubs.pot1[8];

// PSG.innerHTML = `
// <img src=${psgClub.logo} alt=${psgClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${psgClub.name} </span>
// `
// RealMadrid.innerHTML = `
// <img src=${realMadridClub.logo} alt=${realMadridClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${realMadridClub.name} </span>
// `
// ManchesterCity.innerHTML = `
// <img src=${manchesterCityClub.logo} alt=${manchesterCityClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${manchesterCityClub.name} </span>
// `
// BayernMunich.innerHTML = `
// <img src=${bayernMunichClub.logo} alt=${bayernMunichClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${bayernMunichClub.name} </span>
// `
// Liverpool.innerHTML = `
// <img src=${liverpoolClub.logo} alt=${liverpoolClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${liverpoolClub.name} </span>
// `
// InterMilan.innerHTML = `
// <img src=${interMilanClub.logo} alt=${interMilanClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${interMilanClub.name} </span>
// `
// Chelsea.innerHTML = `
// <img src=${chelseaClub.logo} alt=${chelseaClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${chelseaClub.name} </span>
// `
// BorussiaDortmund.innerHTML = `
// <img src=${borussiaDortmundClub.logo} alt=${borussiaDortmundClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${borussiaDortmundClub.name} </span>
// `
// FCBarçelona.innerHTML = `
// <img src=${fcbarçelonaClub.logo} alt=${fcbarçelonaClub.name} style= width:30px; height:30px; display:flex; justify-content:center; align-items:center/>
// <span> ${fcbarçelonaClub.name} </span>
// `
// };

// button.addEventListener("click", generatePots);

// const clubs = {
//   pot1: [
//     {
//         name:"PSG",
//         logo:'./assets/POT-1/PSG.png'
//     },
//     {
//         name:"Real Madrid",
//         logo:'./assets/POT-1/Real Madrid.png'
//     },
//     {
//         name:"Manchester City",
//         logo:"./assets/POT-1/Manchester City.png"
//     },
//     {
//         name:"Bayern Munich",
//         logo:"./assets/POT-1/Bayern Munich.png"
//     },
//     {
//       name:"Liverpool",
//       logo:"./assets/POT-1/Liverpool.png"
//     },
//     {
//       name:"Inter Milan",
//       logo:"./assets/POT-1/Inter-Milan.png"
//     },
//     {
//       name:"Chelsea",
//       logo:"./assets/POT-1/Chelsea.png"
//     },
//     {
//       name:"Borussia Dortmund",
//       logo:"./assets/POT-1/Borussia Dortmund.png"
//     },
//     {
//       name:"FC Barçelona",
//       logo:"./assets/POT-1/FC Barçelona.png"
//     }
//   ],
//   pot2: [],
//   pot3: [],
//   pot4: [],
// };

// const generateFixtures = () =>{

// }

// const button = document.getElementById("button");
// const potDisplay = document.getElementById("potDisplay");
// const message = document.getElementById("message");
// const pot1List = document.getElementById("pot-1-list");

// const clubs = {
//   pot1: [
//     { name: "PSG", logo: './assets/POT-1/PSG.png' },
//     { name: "Real Madrid", logo: './assets/POT-1/Real Madrid.png' },
//     { name: "Manchester City", logo: "./assets/POT-1/Manchester City.png" },
//     { name: "Bayern Munich", logo: "./assets/POT-1/Bayern Munich.png" },
//     { name: "Liverpool", logo: "./assets/POT-1/Liverpool.png" },
//     { name: "Inter Milan", logo: "./assets/POT-1/Inter-Milan.png" },
//     { name: "Chelsea", logo: "./assets/POT-1/Chelsea.png" },
//     { name: "Borussia Dortmund", logo: "./assets/POT-1/Borussia Dortmund.png" },
//     { name: "FC Barcelona", logo: "./assets/POT-1/FC Barcelona.png" }
//   ]
// };

// const generatePots = () => {
//   console.log("Button clicked!"); // Check console
//   message.textContent = "Generating pots...";

//   // Clear previous content
//   pot1List.innerHTML = "";

//   setTimeout(() => {
//     potDisplay.style.display = "flex";

//     // LOOP through the clubs instead of writing them one by one
//     clubs.pot1.forEach(club => {
//       const row = document.createElement("div");
//       row.style.display = "flex";
//       row.style.alignItems = "center";
//       row.style.marginBottom = "8px";

//       // Important: Ensure paths are wrapped in quotes ""
//       row.innerHTML = `
//         <img src="${club.logo}" alt="${club.name}" style="width:30px; height:30px; margin-right:10px;">
//         <span>${club.name}</span>
//       `;

//       pot1List.appendChild(row);
//     });
//   }, 1000);

//   setTimeout(() => {
//     message.style.display = "none";
//   }, 4000);
// };

// button.addEventListener("click", generatePots);

const button = document.getElementById("button");
const potDisplay = document.getElementById("potDisplay");
const message = document.getElementById("message");
const pot1List = document.getElementById("pot-1-list");
const pot2List = document.getElementById("pot-2-list");
const fixBtn = document.getElementById("fix");
const fixDisplay = document.getElementById("fixDisplay");
// const pot2List = document.getElementById("pot-2-list");
// const pot2List = document.getElementById("pot-2-list");

const clubs = {
  pot1: [
    { name: "PSG", 
      logo: "./assets/POT-1/PSG.png", 
      country: "Spain" },
    {
      name: "Real Madrid",
      logo: "./assets/POT-1/Real Madrid.png",
      country: "Spain",
    },
    {
      name: "Manchester City",
      logo: "./assets/POT-1/Manchester City.png",
      country: "England",
    },
    {
      name: "Bayern Munich",
      logo: "./assets/POT-1/Bayern Munich.png",
      country: "Germany",
    },
    {
      name: "Liverpool",
      logo: "./assets/POT-1/Liverpool.png",
      country: "England",
    },
    {
      name: "Inter Milan",
      logo: "./assets/POT-1/Inter-Milan.png",
      country: "Italy",
    },
    { name: "Chelsea", 
      logo: "./assets/POT-1/Chelsea.png", 
      country: "England" },
    {
      name: "Borussia Dortmund",
      logo: "./assets/POT-1/Borussia Dortmund.png",
      country: "Germany",
    },
    {
      name: "FC Barcelona",
      logo: "./assets/POT-1/FC Barcelona.png",
      country: "Spain",
    },
  ],
  pot2: [
    {
      name: "Arsenal",
      logo: "./assets/POT-2/Arsenal.png",
      country: "England",
    },
    {
      name: "Atalanta",
      logo: "./assets/POT-2/Atalanta.png",
      country: "Italy",
    },
    {
      name: "Atletico Madrid",
      logo: "./assets/POT-2/Atletico Madrid.png",
      country: "Spain",
    },
    {
      name: "Bayer Leverkusen",
      logo: "./assets/POT-2/Bayer Leverkusen.png",
      country: "Germany",
    },
    {
      name: "Eintracht Frankfurt",
      logo: "./assets/POT-2/Eintrancht Frankfurt.png",
      country: "Germany",
    },
    {
      name: "Juventus",
      logo: "./assets/POT-2/Juventus.png",
      country: "Italy",
    },
    {
      name: "Villareal",
      logo: "./assets/POT-2/Villareal.png",
      country: "Spain",
    },
    {
      name:"Benfica",
      logo:"./assets/POT-2/Benfica.png",
      country:"Portugal"
    },
    {
      name:"Club Brugge",
      logo:"./assets/POT-2/Club Brugge.png",
      country:"Belgium"
    },
  ],
};

const generatePots = () => {
  // 1. Show loading message
  message.style.display = "block";
  message.textContent = "Generating pots...";

  // 2. Reset UI
  pot1List.innerHTML = "";
  potDisplay.classList.remove("show-pots");

  setTimeout(() => {
    // 3. Trigger Visibility
    potDisplay.classList.add("show-pots");

    // 4. Fill Data
    clubs.pot1.forEach((club) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.marginBottom = "8px";

      row.innerHTML = `
        <img src="${club.logo}" alt="${club.name}" class="img" style="width:30px; height:30px; margin-right:10px;">
        <span style="color: white;">${club.name}</span>
      `;

      pot1List.appendChild(row);
    });

    // 5. Hide message after pots appear
    message.style.display = "none";
  }, 1500); // 1.5 second delay for effect

  setTimeout(() => {
    // 3. Trigger Visibility
    potDisplay.classList.add("show-pots");

    // 4. Fill Data
    clubs.pot2.forEach((club) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.marginBottom = "8px";

      row.innerHTML = `
        <img src="${club.logo}" alt="${club.name}" class="img" style="width:30px; height:30px; margin-right:10px;">
        <span style="color: white;">${club.name}</span>
      `;

      pot2List.appendChild(row);
    });

    // 5. Hide message after pots appear
    message.style.display = "none";
  }, 1500); // 1.5 second delay for effect

  button.style.display = "none";
  fixBtn.style.display = "block";
};

const generateFixs = () => {
  fixDisplay.innerHTML = " ";
  
  for (let i = 0; i < clubs.pot1.length; i++) {
    let opponent;
    
    do{
      const randomIndex = Math.floor(Math.random() * clubs.pot1.length);
         opponent = clubs.pot2[randomIndex]; 
    }
    while(
      opponent.name === clubs.pot1[i].name ||
      opponent.country === clubs.pot1[i].country
    );

    fixDisplay.innerHTML += `
    <div class="fixture">
    <img src="${clubs.pot1[i].logo}" alt="${clubs.pot1[i].name}" width="30px" height="30px"/>
    <strong>${clubs.pot1[i].name}</strong>
    vs
     <img src="${opponent.logo}" alt="${opponent.name}" width="30px" height="30px"/>
    <strong>${opponent.name}</strong>
    <div/>`

    fixDisplay.style.display = "block";
    fixDisplay.style.backgroundColor = "yellow";

  }
};

button.addEventListener("click", generatePots);
fixBtn.addEventListener("click", generateFixs);
