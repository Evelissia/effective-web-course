import { Characters } from '../types/cardTypes';
import image1 from '../assets/characters/spiderman.jpg';
import image2 from '../assets/characters/ironman.jpg';
import image3 from '../assets/characters/punisher.jpg';
import image4 from '../assets/characters/hulk.jpg';
import image5 from '../assets/characters/thor.jpg';
import image6 from '../assets/characters/wolveriner.jpg';
import image7 from '../assets/characters/captain.jpg';
import image8 from '../assets/characters/deadpool.jpg';

export const charactersData: Array<Characters> = [

  {
    id: 'im_1',
    image: image1,
    name: 'Spider-Man',
    description:
      'Peter Parker was bitten by a radioactive spider as a teenager, granting him spider-like powers. After the death of his Uncle Ben, Peter learned that "with great power, comes great responsibility." Swearing to always protect the innocent from harm, Peter Parker became Spider-Man.',
    series: ["series-1", "series-2"],
    comics: ["comics-1", "comics-2"]
  },

  {
    id: 'im_2',
    image: image2,
    name: 'Iron-Man',
    description:
      'Tony Stark was the arrogant son of wealthy, weapon manufacturer Howard Stark. Tony cared only about himself, but he would have a change of heart after he was kidnapped by terrorists and gravely injured. Pressured to create a weapon of mass destruction, Stark instead created a suit of armor powerful enough for him to escape.',
    series: ["series-3", "series-4", "series-14"],
    comics: ["comics-3", "comics-4", "comics-5", "series-9"]
  },

  {
    id: 'im_3',
    image: image3,
    name: 'Punisher',
    description:
      "When U.S. Marine veteran Frank Castle's family's was murdered for witnessing a mob hit, the man vowed to avenge their deaths and became a one-man army in his personal war against the criminal underworld.",
    series: ["series-5", "series-6", "series-9"],
    comics: ["comics-6", "comics-7"]
  },

  {
    id: 'im_4',
    image: image4,
    name: 'Hulk',
    description:
      "After eing bombarded with a massive dose of gamma radiation while saving a young man's life during an experimental bomb testing, Dr. Robert Bruce Banner was transformed into the Incredible Hulk: a green behemoth who is the living personification of rage and pure physical strength.",
    series: ["series-7", "series-8", "series-9"],
    comics: ["comics-8", "comics-9"]
  },

  {
    id: 'im_5',
    image: image5,
    name: 'Thor',
    description:
      'Thor Odinson is the All-father of Asgard /God of Thunder, offspring of All-Father Odin & Elder-Goddess Gaea. Combining the powers of both realms makes him an elder-god hybrid and a being of no perceivable limits.',
    series: ["series-9", "series-10"],
    comics: ["comics-10", "comics-11"]
  },
  
  {
    id: 'im_6',
    image: image6,
    name: 'Wolverine',
    description:
      'A long-lived mutant with the rage of a beast and the soul of a Samurai, James "Logan" Howlett once mysterious past is filled with blood, war, and betrayal.',
    series: ["series-11", "series-12"],
    comics: ["comics-12", "comics-13"]
  },

  {
    id: 'im_7',
    image: image7,
    name: 'Captain',
    description:
      'During World War II, Steve Rogers volunteered to receive the experimental Super-Soldier Serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America. After a failed mission left him encased in ice for decades, he was found and revived by the Avengers',
    series: ["series-13", "series-14"],
    comics: ["comics-14", "comics-15"]

  },

  {
    id: 'im_8',
    image: image8,
    name: 'Deadpool',
    description:
      "Wade Wilson is a former test subject of the Weapon X program, where he received his regenerative healing factor through the scientific experiments conducted upon him. A prominent enemy, ally and later, member of X-Force. He's famous for breaking the Fourth Wall.",
      series: ["series-15", "series-16"],
      comics: ["comics-16"]
  },

];
