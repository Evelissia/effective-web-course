import { cardTypes } from 'types/cardTypes';
import com1 from '../assets/comics/comics1.jpg';
import com2 from '../assets/comics/comics2.jpg';
import com3 from '../assets/comics/comics3.jpg';

export const comicsData: Array<cardTypes> = [
  {
    id: 'comics-1',
    image: com1,
    name: 'Amazing Fantasy',
    description:
      'The First Appearance of the Amazing Spider-Man! When young Peter Parker gains remarkable abilities from a radioactive spider, he must step up and try to become a hero — while also dealing with the fantastic pressures of an everyday teenager! For with great power, there must also come great responsibility!'
  },

  {
    id: 'comics-2',
    image: com2,
    name: 'infinity',
    description:
      "The oversized kickoff to the year's most anticipate Blockbuster summer event, chaning the way you view the Marvel Universe! The outbreak of war on two fronts: Earth and Space, with our heroes torn between them. The world-shattering return of Thanos! Includes material from FREE COMIC BOOK DAY: INFINITY."
  },

  {
    id: 'comics-3',
    image: com3,
    name: 'Infinity Gauntlet',
    description:
      "One of the biggest events ever to hit the Marvel Universe! For Thanos, the Infinity Gauntlet was the ultimate prize to be coveted above all else. With it came omnipotence. Now it's up to Earth's super heroes to make a desperate attempt to thwart this mad god's insane plunge into galactic self-destruction."
  }
];
