function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// console.log(gameObject());

// function homeTeamName() {
//   let object = gameObject();
//   return object["home"]["teamName"];
// }

// console.log(homeTeamName()); // Brooklyn Nets

// FUNCTION TO FIND POINTS SCORED BY A PLAYER
// TAKES THE PLAYERS NAME AS AN ARGUMENT
function numPointsScored(name) {
  let object = gameObject();
  for (let key in object) {
    let team = object[key];
    let teamPlayers = team.players;
    // console.log(teamPlayers);
    for (let key in teamPlayers) {
      if (key === name) {
        let player = teamPlayers[key];
        return player.points;
      }
    }
  }
}
// console.log(numPointsScored("Bismak Biyombo"));

// FUNCTION TO FIND SHOE SIZE OF A PLAYER
// TAKES THE PLAYERS NAME AS AN ARGUMENT
function shoeSize(name) {
  let object = gameObject();
  for (let key in object) {
    let team = object[key];
    let teamPlayers = team.players;
    for (let key in teamPlayers) {
      if (key === name) {
        let player = teamPlayers[key];
        return player.shoe;
      }
    }
  }
}

// console.log(shoeSize("Jeff Adrien"));

// FUNCTION TO A TEAMS COLORS
// TAKES THE TEAMS NAME AS AN ARGUMENT
function teamColors(teamName) {
  let object = gameObject();
  for (let key in object) {
    const team = object[key];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

// console.log(teamColors("Charlotte Hornets"));

// FUNCTION TO FIND TEAMS NAMES - RETURN ARRAY OF TEAMS
function teamNames() {
  let object = gameObject();
  let array = [];
  for (let key in object) {
    let team = object[key];
    let theTeam = team.teamName;
    array.push(theTeam);
  }
  return array;
}

// console.log(teamNames());

// FUNCTION TO FIND TEAMS NUMBERS
// TEAMNAME AS ARGUMENT
function playerNumbers(nameOfTeam) {
  let object = gameObject();
  let numbers = [];
  for (let key in object) {
    let team = object[key];
    let theTeamsName = team.teamName;
    if (theTeamsName === nameOfTeam) {
      let players = team.players;
      for (let key in players) {
        let player = players[key];
        numbers.push(player.number);
      }
    }
  }
  return numbers;
}

// console.log(playerNumbers("Brooklyn Nets"));

// BUILD A FUNCTION TO GET PLAYER STATS
// ONE ARGUMENT - PLAYER'S NAME

function playerStats(playerName) {
  let object = gameObject();
  for (let key in object) {
    let teams = object[key];
    let players = teams.players;
    let playerKeys = Object.keys(players);
    if (playerKeys.includes(playerName)) {
      let player = players[playerName];
      return player;
    }
  }
}

// console.log(playerStats("Brook Lopez"));

// FUNCTION TO RETURN HOW MANY REBOUNDS FOR PLAYER WITH BIGGEST SHOES

function bigShoeRebounds() {
  let object = gameObject();
  let allShoeSizes = [];

  for (let key in object) {
    let team = object[key];
    let players = team.players;

    for (let key in players) {
      let eachPlayer = players[key];
      let shoeSize = eachPlayer.shoe;
      allShoeSizes.push(shoeSize);
    }
  }
  // find max shoe size of all players
  let biggestShoeSize = Math.max(...allShoeSizes);

  for (let key in object) {
    let team = object[key];
    let players = team.players;

    // compare player shoes
    for (let key in players) {
      let player = players[key];
      if (player.shoe === biggestShoeSize) {
        return player.rebounds;
      }
    }
  }
}

// console.log(bigShoeRebounds());

// FUNCTION - MOST POINTS SCORED
function mostPointsScored() {
  let object = gameObject();
  let pointsScored = [];

  //
  for (let key in object) {
    let teams = object[key];
    let players = teams.players;

    for (let key in players) {
      let player = players[key];
      pointsScored.push(player.points);
    }
  }

  let maxScore = Math.max(...pointsScored);

  for (let key in object) {
    let teams = object[key];
    let players = teams.players;

    for (let key in players) {
      let player = players[key];
      if (player.points === maxScore) {
        return key;
      }
    }
  }
}

// console.log(mostPointsScored());

// FUNCTION - FIND MOST POINTS BY TEAM
// RETURNS WINNING TEAM

function winningTeam() {
  let object = gameObject();
  let pointsTeamOne = [];
  let pointsTeamTwo = [];

  for (let key in object) {
    let teams = object[key];
    if (teams.teamName === "Brooklyn Nets") {
      let players = teams.players;

      for (let key in players) {
        let player = players[key];
        pointsTeamOne.push(player.points);
      }
    }
    if (teams.teamName === "Charlotte Hornets") {
      let players = teams.players;

      for (let key in players) {
        let player = players[key];
        pointsTeamTwo.push(player.points);
      }
    }
  }

  let sumTeamOne = 0;
  let sumTeamTwo = 0;

  for (let i = 0; i < pointsTeamOne.length; i++) {
    sumTeamOne += pointsTeamOne[i];
  }
  for (let i = 0; i < pointsTeamTwo.length; i++) {
    sumTeamTwo += pointsTeamTwo[i];
  }

  return sumTeamOne > sumTeamTwo ? "Brooklyn Nets" : "Charlotte Hornets";
}

// console.log(winningTeam());

// FUNCTION - RETURN PLAYER WITH LONGEST NAME
function playerWithLongestName() {
  let object = gameObject();

  // set longest name object
  let longestName = { name: "", length: 0 };

  for (let key in object) {
    let teams = object[key];
    let players = teams.players;

    for (let key in players) {
      // set player name length
      let nameLength = key.length;
      // set longest name to longestName object
      if (nameLength > longestName.length) {
        longestName.name = key;
        longestName.length = nameLength;
      }
    }
  }
  return longestName.name;
}

// console.log(playerWithLongestName());

// FUNCTION - RETURN TRUE IF PLAYER WITH LONGEST NAME HAD MOST STEALS

function doesLongNameStealATon() {
  let object = gameObject();

  let longestName = { name: "", length: 0 };
  let mostSteals = { name: "", steals: 0 };

  for (let key in object) {
    let teams = object[key];
    let players = teams.players;
    // console.log(players);

    for (let key in players) {
      let nameLength = key.length;
      if (nameLength > longestName.length) {
        longestName.name = key;
        longestName.length = nameLength;
      }
      let player = players[key];
      if (player.steals > mostSteals.steals) {
        mostSteals.name = key;
        mostSteals.steals = player.steals;
      }
    }
  }
  // console.log(mostSteals.name);
  return longestName.name === mostSteals.name;
}

console.log(doesLongNameStealATon());
