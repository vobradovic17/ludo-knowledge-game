const track = [
  {x: 28, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 96, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 163, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 230, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 232, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 164, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 98, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 30, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 30, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 30, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 98, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 164, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 232, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 498, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 566, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 633, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 700, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 700, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 700, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 633, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 566, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 498, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 500, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 566, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 634, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 700, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 700, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 700, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 634, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 566, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 500, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 230, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 163, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 96, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 28, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 28, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
]

const redHouses = [
  {x: 96, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 163, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 230, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 294, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
]

const blueHouses = [
  {x: 633, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 566, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 498, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 435, y: 366, occupied: false, occupiedBy: {player: null, figure: null}},
]

const greenHouses = [
  {x: 364, y: 98, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 164, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 232, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 298, occupied: false, occupiedBy: {player: null, figure: null}},
]

const yellowHouses = [
  {x: 364, y: 634, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 566, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 500, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 364, y: 432, occupied: false, occupiedBy: {player: null, figure: null}},
]

const redTrack = track.concat(redHouses);

const blueTrack = track.slice(20).concat(track.slice(0,20)).concat(blueHouses);

const greenTrack = track.slice(10).concat(track.slice(0,10)).concat(greenHouses);

const yellowTrack = track.slice(30).concat(track.slice(0,30)).concat(yellowHouses);

const redPlayer = [
  { player: 0, figure: 0, position: -1, eligible: false, startingX: 28, startingY: 30, x: 28, y: 30 },
  { player: 0, figure: 1, position: -1, eligible: false, startingX: 96, startingY: 30, x: 96, y: 30 },
  { player: 0, figure: 2, position: -1, eligible: false, startingX: 28, startingY: 100, x: 28, y: 100 },
  { player: 0, figure: 3, position: -1, eligible: false, startingX: 96, startingY: 100, x: 96, y: 100  },
];

const bluePlayer = [
  {player: 1, figure: 0, position: -1, eligible: false, startingX: 633, startingY: 630, x: 633, y: 630 },
  {player: 1, figure: 1, position: -1, eligible: false, startingX: 700, startingY: 630, x: 700, y: 630 },
  {player: 1, figure: 2, position: -1, eligible: false, startingX: 633, startingY: 700, x: 633, y: 700 },
  {player: 1, figure: 3, position: -1, eligible: false, startingX: 700, startingY: 700, x: 700, y: 700 }
]

const greenPlayer = [
  {player: 2, figure: 0, position: -1, eligible: false, startingX: 633, startingY: 30, x: 633, y: 30  },
  {player: 2, figure: 1, position: -1, eligible: false, startingX: 700, startingY: 30, x: 700, y: 30  },
  {player: 2, figure: 2, position: -1, eligible: false, startingX: 633, startingY: 100, x: 633, y: 100 },
  {player: 2, figure: 3, position: -1, eligible: false, startingX: 700, startingY: 100, x: 700, y: 100 }
]

const yellowPlayer = [
  {player: 3, figure: 0, position: -1, eligible: false, startingX: 28, startingY: 630, x: 28, y: 630 },
  {player: 3, figure: 1, position: -1, eligible: false, startingX: 96, startingY: 630, x: 96, y: 630  },
  {player: 3, figure: 2, position: -1, eligible: false, startingX: 28, startingY: 700, x: 28, y: 700 },
  {player: 3, figure: 3, position: -1, eligible: false, startingX: 96, startingY: 700, x: 96, y: 700 }
]

export const playersData = [
    redPlayer,
    bluePlayer,
    greenPlayer,
    yellowPlayer
]

export const playerTracksData = [
    redTrack,
    blueTrack,
    greenTrack,
    yellowTrack
]