const pot3 = [
  {
    name: "RB Leipzig",
    logo: "./assets/images/club-logos/RB Leipzig.png",
    country: "Germany",
  },
  {
    name: "Napoli",
    logo: "./assets/images/club-logos/Napoli.png",
    country: "Italy",
  },
  {
    name: "Tottenham Hotspur",
    logo: "./assets/images/club-logos/Tottenham.png",
    country: "England",
  },
  {
    name: "Sevilla",
    logo: "./assets/images/club-logos/Sevilla.png",
    country: "Spain",
  },
  {
    name: "Ajax",
    logo: "./assets/images/club-logos/Ajax.png",
    country: "Netherlands",
  },
  {
    name: "Sporting CP",
    logo: "./assets/images/club-logos/Sporting CP.png",
    country: "Portugal",
  },
  {
    name: "Lazio",
    logo: "./assets/images/club-logos/Lazio.png",
    country: "Italy",
  },
  {
    name: "Shakhtar Donetsk",
    logo: "./assets/images/club-logos/Shakhtar Donetsk.png",
    country: "Ukraine",
  },
  {
    name: "Marseille",
    logo: "./assets/images/club-logos/Marseille.png",
    country: "France",
  },
];

const pot4 = [
  {
    name: "Real Sociedad",
    logo: "./assets/images/club-logos/Real Sociedad.png",
    country: "Spain",
  },
  {
    name: "Brighton",
    logo: "./assets/images/club-logos/Brighton.png",
    country: "England",
  },
  {
    name: "Celtic",
    logo: "./assets/images/club-logos/Celtic.png",
    country: "Scotland",
  },
  {
    name: "Porto",
    logo: "./assets/images/club-logos/Porto.png",
    country: "Portugal",
  },
  {
    name: "PSV Eindhoven",
    logo: "./assets/images/club-logos/PSV.png",
    country: "Netherlands",
  },
  {
    name: "Galatasaray",
    logo: "./assets/images/club-logos/Galatasaray.png",
    country: "Turkey",
  },
  {
    name: "Red Star Belgrade",
    logo: "./assets/images/club-logos/Red Star.png",
    country: "Serbia",
  },
  {
    name: "FC Copenhagen",
    logo: "./assets/images/club-logos/FC Copenhagen.png",
    country: "Denmark",
  },
  {
    name: "Young Boys",
    logo: "./assets/images/club-logos/Young Boys.png",
    country: "Switzerland",
  },
];


const clubs = {
  pot1: [
    { name: "PSG", 
      logo: "./assets/images/club-logos/PSG.png", 
      country: "Spain" },
    {
      name: "Real Madrid",
      logo: "./assets/images/club-logos/Real Madrid.png",
      country: "Spain",
    },
    {
      name: "Manchester City",
      logo: "./assets/images/club-logos/Manchester City.png",
      country: "England",
    },
    {
      name: "Bayern Munich",
      logo: "./assets/images/club-logos/Bayern Munich.png",
      country: "Germany",
    },
    {
      name: "Liverpool",
      logo: "./assets/images/club-logos/Liverpool.png",
      country: "England",
    },
    {
      name: "Inter Milan",
      logo: "./assets/images/club-logos/Inter-Milan.png",
      country: "Italy",
    },
    { name: "Chelsea", 
      logo: "./assets/images/club-logos/Chelsea.png", 
      country: "England" },
    {
      name: "Borussia Dortmund",
      logo: "./assets/images/club-logos/Borussia Dortmund.png",
      country: "Germany",
    },
    {
      name: "FC Barcelona",
      logo: "./assets/images/club-logos/FC Barcelona.png",
      country: "Spain",
    },
  ],
  pot2: [
    {
      name: "Arsenal",
      logo: "./assets/images/club-logos/Arsenal.png",
      country: "England",
    },
    {
      name: "Atalanta",
      logo: "./assets/images/club-logos/Atalanta.png",
      country: "Italy",
    },
    {
      name: "Atletico Madrid",
      logo: "./assets/images/club-logos/Atletico Madrid.png",
      country: "Spain",
    },
    {
      name: "Bayer Leverkusen",
      logo: "./assets/images/club-logos/Bayer Leverkusen.png",
      country: "Germany",
    },
    {
      name: "Eintracht Frankfurt",
      logo: "./assets/images/club-logos/Eintrancht Frankfurt.png",
      country: "Germany",
    },
    {
      name: "Juventus",
      logo: "./assets/images/club-logos/Juventus.png",
      country: "Italy",
    },
    {
      name: "Villareal",
      logo: "./assets/images/club-logos/Villareal.png",
      country: "Spain",
    },
    {
      name:"Benfica",
      logo:"./assets/images/club-logos/Benfica.png",
      country:"Portugal"
    },
    {
      name:"Club Brugge",
      logo:"./assets/images/club-logos/Club Brugge.png",
      country:"Belgium"
    },
  ],
  pot3: pot3,
  pot4: pot4
};


let fixtures = {};

//Pseudo Code
//Rules : Every team has to face 2 teams in all available pots and also...
// ...teams of the same nationality are not supposed to clash...
// ...Each teams are suppose to face at least two teams from every pots which...
// ...will amount to all teams having 8 fixtures each.
//....And there should be a balance of home and away matches 
//Array one picks two teams from its own array 
//and then pick two random teams from the next arrays...

function generateFixturesForTeam(team) {
    let allOpponents = {
        team,
        opponents: {}
    };

    const allPots = Object.values(clubs);

    for (let i = 0; i < allPots.length; i++) {
        const notTeamCountries = allPots[i].filter(pot => pot.country !== team.country);
        allOpponents.opponents[`pot${i+1}`] = [];
        
        if (allPots[i].includes(team)) {
            while (allOpponents.opponents[`pot${i+1}`].length < 2) {
                const randomIndex = Math.floor(Math.random() * notTeamCountries.length);
                if (
                    !allOpponents.opponents[`pot${i+1}`].includes(notTeamCountries[randomIndex])
                ){
                    allOpponents.opponents[`pot${i+1}`].push(notTeamCountries[randomIndex]);
                }
            }
        } else {
            // const otherTeams = allPots[i];
            while (allOpponents.opponents[`pot${i+1}`].length < 2) {
                const selectedIndex = Math.floor(Math.random() * notTeamCountries.length);
                if (
                    !allOpponents.opponents[`pot${i+1}`].includes(notTeamCountries[selectedIndex])
                ){
                    allOpponents.opponents[`pot${i+1}`] = notTeamCountries[selectedIndex];
                }
            }
        }
    };
    
    return allOpponents;
}

const fixturesFromTeam1 = generateFixturesForTeam(clubs.pot1[0]);
console.log(fixturesFromTeam1);