import { DanceStyle } from "../../models/dancestyle.model";
import { timeline } from "../../models/timeline.model";
import { Costume } from "../../models/costumes.model";
import { video } from "../../models/video.model";

export const dummy_DATA: DanceStyle[] = [
  {
    id: 1,
    name: 'HIP-HOP',
    image: require('../images/butkica.jpg')
  },
  {
    id: 2,
    name: 'REP',
    image: require('../images/butkica.jpg')
  },
  {
    id: 3,
    name: 'TREP',
    image: require('../images/butkica.jpg')
  },
  {
    id: 4,
    name: 'TREP',
    image: require('../images/butkica.jpg')
  }
  , {
    id: 5,
    name: 'TREP',
    image: require('../images/butkica.jpg')
  }
];

export const popularData: DanceStyle[] = [
  {
    id: 6,
    name: 'HIP-HOP',
    image: require('../images/butkica.jpg')
  },
  {
    id: 7,
    name: 'REP',
    image: require('../images/butkica.jpg')
  },
  {
    id: 8,
    name: 'TREP',
    image: require('../images/butkica.jpg')
  }
];

export const Timeline: timeline[] = [
  {
    id: 1,
    date: '01',
    day: 'Ponedeljak',
    time: '12h  14h  16h  18h  20h'
  },
  {
    id: 2,
    date: '02',
    day: 'Utorak',
    time: '12h  14h  16h  18h  20h'
  },
  {
    id: 3,
    date: '03',
    day: 'Srijeda',
    time: '12h  14h  16h  18h  20h'
  },
  {
    id: 4,
    date: '04',
    day: 'Cetvrtak',
    time: '12h  14h  16h  18h  20h'
  },
  {
    id: 5,
    date: '05',
    day: 'Petak',
    time: '12h  14h  16h  18h  20h'
  },
  {
    id: 6,
    date: '06',
    day: 'Subota',
    time: '12h  14h  16h  18h  20h'
  },
  {
    id: 7,
    date: '07',
    day: 'Nedelja',
    time: '12h  14h  16h  18h  20h'
  },
]

export const costumess: Costume[] = [
  {
    id: 1,
    date: '01',
    foundation: 'Led',
    outfit: 'Robot'
  },
  {
    id: 2,
    date: '02',
    foundation: 'Led',
    outfit: 'Vampir'
  },
  {
    id: 3,
    date: '03',
    foundation: 'Led',
    outfit: 'Drakula'
  },
  {
    id: 4,
    date: '04',
    foundation: 'Led',
    outfit: 'Spajdermen'
  },
  {
    id: 5,
    date: '05',
    foundation: 'Led',
    outfit: 'Robot'
  },
  {
    id: 6,
    date: '06',
    foundation: 'Led',
    outfit: 'Robot'
  },
  {
    id: 7,
    date: '07',
    foundation: 'Led',
    outfit: 'Robot'
  },
]

export const Videos : video[] = [
  {
    id: 1,
    value: 'iee2TATGMyI'
  },
  {
    id: 2,
    value: 'iee2TATGMyI'
  },
  {
    id: 3,
    value: 'iee2TATGMyI'
  },
  {
    id: 4,
    value: 'iee2TATGMyI'
  },
  {
    id: 5,
    value: 'iee2TATGMyI'
  },
  {
    id: 6,
    value: 'iee2TATGMyI'
  },
  {
    id: 7,
    value: 'iee2TATGMyI'
  }
]