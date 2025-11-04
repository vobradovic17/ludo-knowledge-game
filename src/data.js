const track = [
  {x: 3.61, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 12.37, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 21, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 29.64, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 29.9, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 21.13, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 12.63, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 3.86, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 3.86, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 3.86, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 12.63, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 21.13, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 29.9, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 64.17, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 72.94, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 81.57, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 90.2, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 90.2, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 90.2, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 81.57, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 72.94, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 64.17, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 64.43, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 72.94, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 81.7, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 90.2, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 90.2, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 90.2, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 81.7, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 72.94, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 64.43, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 29.64, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 21, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 12.37, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 3.61, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 3.61, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
]

const redHouses = [
  {x: 12.37, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 21, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 29.64, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 37.88, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
]

const blueHouses = [
  {x: 81.57, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 72.94, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 64.17, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 56, y: 47.16, occupied: false, occupiedBy: {player: null, figure: null}},
]

const greenHouses = [
  {x: 46.91, y: 12.63, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 21.13, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 29.9, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 38.4, occupied: false, occupiedBy: {player: null, figure: null}},
]

const yellowHouses = [
  {x: 46.91, y: 81.7, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 72.94, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 64.43, occupied: false, occupiedBy: {player: null, figure: null}},
  {x: 46.91, y: 55.67, occupied: false, occupiedBy: {player: null, figure: null}},
]

const redTrack = track.concat(redHouses);

const blueTrack = track.slice(20).concat(track.slice(0,20)).concat(blueHouses);

const greenTrack = track.slice(10).concat(track.slice(0,10)).concat(greenHouses);

const yellowTrack = track.slice(30).concat(track.slice(0,30)).concat(yellowHouses);

const redPlayer = [
  { player: 0, figure: 0, position: -1, eligible: false, startingX: 3.61, startingY: 3.86, x: 3.61, y: 3.86 },
  { player: 0, figure: 1, position: -1, eligible: false, startingX: 12.37, startingY: 3.86, x: 12.37, y: 3.86 },
  { player: 0, figure: 2, position: -1, eligible: false, startingX: 3.61, startingY: 12.88, x: 3.61, y: 12.88 },
  { player: 0, figure: 3, position: -1, eligible: false, startingX: 12.37, startingY: 12.88, x: 12.37, y: 12.88 },
];

const bluePlayer = [
  {player: 1, figure: 0, position: -1, eligible: false, startingX: 81.57, startingY:  81.18, x: 81.57, y: 81.18 },
  {player: 1, figure: 1, position: -1, eligible: false, startingX: 90.2, startingY:  81.18, x: 90.2, y: 81.18 },
  {player: 1, figure: 2, position: -1, eligible: false, startingX: 81.57, startingY: 90.2, x: 81.57, y: 90.2 },
  {player: 1, figure: 3, position: -1, eligible: false, startingX: 90.2, startingY: 90.2, x: 90.2, y: 90.2 }
]

const greenPlayer = [
  {player: 2, figure: 0, position: -1, eligible: false, startingX: 81.57, startingY: 3.86, x: 81.57, y: 3.86 },
  {player: 2, figure: 1, position: -1, eligible: false, startingX: 90.2, startingY: 3.86, x: 90.2, y: 3.86 },
  {player: 2, figure: 2, position: -1, eligible: false, startingX: 81.57, startingY: 12.88, x: 81.57, y: 12.88 },
  {player: 2, figure: 3, position: -1, eligible: false, startingX: 90.2, startingY: 12.88, x: 90.2, y: 12.88 }
]

const yellowPlayer = [
  {player: 3, figure: 0, position: -1, eligible: false, startingX: 3.61, startingY:  81.18, x: 3.61, y: 81.18 },
  {player: 3, figure: 1, position: -1, eligible: false, startingX: 12.37, startingY:  81.18, x: 12.37, y: 81.18 },
  {player: 3, figure: 2, position: -1, eligible: false, startingX: 3.61, startingY: 90.2, x: 3.61, y: 90.2 },
  {player: 3, figure: 3, position: -1, eligible: false, startingX: 12.37, startingY: 90.2, x: 12.37, y: 90.2 }
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