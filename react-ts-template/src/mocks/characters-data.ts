import { cardTypes } from 'types/cardTypes';
import image1 from '../assets/characters/hulk.jpg';
import image2 from '../assets/characters/ironman.jpg';
import image3 from '../assets/characters/punisher.jpg';
import image4 from '../assets/characters/spiderman.jpg';
import image5 from '../assets/characters/thor.jpg';
import image6 from '../assets/characters/wolveriner.jpg';

export const charactersData: Array<cardTypes> = [
  {
    id: 'im_1',
    image: image1,
    name: 'Hulk',
    description:
      "After being bombarded with a massive dose of gamma radiation while saving a young man's life during an experimental bomb testing, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength."
  },

  {
    id: 'im_2',
    image: image2,
    name: 'Iron-Man',
    description:
      'Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself, but he would have a change of heart after he was kidnapped by terrorists and gravely injured. Pressured to create a weapon of mass destruction, Stark instead created a suit of armor powerful enough for him to escape.'
  },

  {
    id: 'im_3',
    image: image3,
    name: 'Punisher',
    description:
      "When U.S. Marine veteran Frank Castle's family's was murdered for witnessing a mob hit, the man vowed to avenge their deaths and became a one-man army in his personal war against the criminal underworld."
  },

  {
    id: 'im_4',
    image: image4,
    name: 'Spider-Man',
    description:
      'Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, Peter learned that "with great power, comes great responsibility." Swearing to always protect the innocent from harm, Peter Parker became Spider-Man.'
  },

  {
    id: 'im_5',
    image: image5,
    name: 'Thor',
    description:
      'Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & Elder-Goddess Gaea. Combining the powers of both realms makes him an elder-god hybrid and a being of no perceivable limits.'
  },

  {
    id: 'im_6',
    image: image6,
    name: 'Wolveriner',
    description:
      'A long-lived mutant with the rage of a beast and the soul of a Samurai, James "Logan" Howlett once mysterious past is filled with blood, war, and betrayal.'
  }
];
