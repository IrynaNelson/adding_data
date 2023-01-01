const team = {
    _players: [
      { firstName: "Mike", lastName: "Big", age: 36 },
      { firstName: "Alison", lastName: "Lady", age: 16 },
      { firstName: "Layla", lastName: "Nelson", age: 2 },
    ],
    _games: [
      { opponent: "Uncle Bruce", teamPoints: 2, opponentPoints: 12 },
      { opponent: "King Gourge", teamPoints: 14, opponentPoints: 78 },
      { opponent: "Mishka", teamPoints: 4, opponentPoints: 6 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
    addGame(newOpponents, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponents,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer("Yoshi", "Peaches", 43);
  
  console.log(team.players);
  
  team.addGame('Titans', 100, 98)
  console.log(team.games);