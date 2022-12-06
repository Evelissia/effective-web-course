import { Comics } from '../types/cardTypes';
import com1 from '../assets/comics/comics1.jpg';
import com2 from '../assets/comics/comics2.jpg';
import com3 from '../assets/comics/comics3.jpg';
import com4 from '../assets/comics/comics4.jpg';
import com5 from '../assets/comics/comics5.jpg';
import com6 from '../assets/comics/comics6.jpg';
import com7 from '../assets/comics/comics7.jpg';
import com8 from '../assets/comics/comics8.jpg';
import com9 from '../assets/comics/comics9.jpg';
import com10 from '../assets/comics/comics10.jpg';
import com11 from '../assets/comics/comics11.jpg';
import com12 from '../assets/comics/comics12.jpg';
import com13 from '../assets/comics/comics13.jpg';
import com14 from '../assets/comics/comics14.jpg';
import com15 from '../assets/comics/comics15.jpg';
import com16 from '../assets/comics/comics16.jpg';

export const comicsData: Array<Comics> = [

  /*SPIDER-MAN*/
  {
    id: 'comics-1',
    image: com1,
    name: 'Amazing Fantasy',
    description:
      'The First Appearance of the Amazing Spider-Man! When young Peter Parker gains remarkable abilities from a radioactive spider, he must step up and try to become a hero — while also dealing with the fantastic pressures of an everyday teenager! For with great power, there must also come great responsibility!',
    characters: ["im_1"],
    series: ["series-1"]
  },

  {
    id: 'comics-2',
    image: com2,
    name: 'The Spectacular Spider-Man',
    description: 
    "The second monthly Spider-Man series and the second most popular volume next to the Amazing Spider-Man that started back in the 1970\'s. The cover-title started out as Peter Parker: The Spectacular Spider-Man, but the Peter Parker part was dropped with issue 134. The comic lasted until 1998 for a total of 263 issues. A second volume named Spectacular Spider-Man started in 2003.",
    characters: ['im_1'],
    series: ["series-1"]
  },

  /*IRON-MAN*/
  {
    id: 'comics-3',
    image: com3,
    name: 'The Infinity Gauntlet',
    description:
    "The Infinity Gauntlet is one of the most powerful objects in the Universe. It was designed to hold six of the soul gems, better known as the Infinity Gems. When used in combination their already impressive powers make the wearer able to do anything they want.",
    characters: ['im_2'],
    series: ["series-3"]
  },

  {
    id: 'comics-4',
    image: com4,
    name: 'The Return Of Tony Stark',
    description:
    "Tony Stark reclaims the iron mantle! But being dead has taken its toll on his body, and Tony must resort to extreme measures to keep being Iron Man. What does this mean for James Rhodes, who wore the armor in Tony's absence - and who's furious that his best friend lied to him? Tony must unravel the Controller's conspiracy, battle the Technovore aboard a Stark satellite and face M.O.D.A.M. and Omega Red while investigating a dangerous deal with A.I.M. But who - or what - is the Face Thief?! Plus: Celebrate Iron Man's 30th Anniversary with tales spanning his heroic career, including the classic debut of Squirrel Girl! And dive deep into Tony's creative process with the Iron Manual!",
    characters: ['im_2'],
    series: ["series-3", "series-4"]
  },

  {
    id: 'comics-5',
    image: com5,
    name: 'The Return Of Tony Stark',
    description:
    "It’s Iron Man Day in New York City, but not everyone is ready to celebrate the ongoing legacy of Tony Stark — least of all him. But a sudden crisis will once again test Tony’s heroism and challenge his commitment to the role he has assumed for himself. Must there be an Iron Man? Christopher Cantwell concludes his thought-provoking and powerful run as writer, as illustrated by Angel Unzueta. PLUS! Murewa Ayodele and Dotun Akande tell a tale of Iron Man’s quest to locate Thor amid the frozen wastelands of Niffleheim.",
    characters: ['im_2'],
    series: ["series-3", "series-4"]
  },  

  /*PUNISHER*/
  {
    id: 'comics-6',
    image: com6,
    name: 'Punisher War Journal: Blitz (2022)',
    description: 
    "THE TRICK IS TO INVENT A WAR WORTH FIGHTING.Finn Fratz knows that if you want people to hate each other, a Banner cannon in the right pair of hands goes a long way. The aging war profiteer earned his spot on the Punisher's kill list well before he adopted the moniker Hate-Monger, but he has proven an elusive man. Now, with the Hand at his disposal, Frank Castle is ready to smoke him out. But not only has Hate-Monger gone to ground, he's fighting back. Good for him. It's not going to change anything but the death toll. Torunn Grønbekk and Lan Medina join forces to bring you the first of three thrilling tales from between the pages of PUNISHER, exploring Frank's new modus operandi through some of his deadliest missions yet…",
    characters: ['im_3'],
    series: ["series-5"]
  },

  {
    id: 'comics-7',
    image: com7,
    name: 'Punisher (2022) #2',
    description: 
    "THE PUNISHER STORY TO END ALL PUNISHER STORIES CONTINUES! The Hand has lost its way. What was once the world’s most fearsome organization of ninjas and killers has found itself defeated time and again by lesser foes. One priestess believes it’s because the Hand hasn’t had the proper leadership, the living embodiment of their dark god, the Beast. Enter the Punisher, the most accomplished murderer who has ever lived. A man determined to end his war, no matter what it takes.",
    characters: ['im_3'],
    series: ["series-5", "series-6"]
  },

  /*HULK*/
  {
    id: 'comics-8',
    image: com8,
    name: 'Immortal Hulk Vol. 5 (Hardcover)',
    description: 
    "Collects Immortal Hulk #41-50. Al Ewing and Joe Bennett's acclaimed saga reaches its horrifying climax! The end begins with the rematch everybody wanted - but not like this! A broken and friendless Hulk is about to find out there's nothing like the real Thing! All the while, the Leader's dark designs are coming together - but will this be his greatest triumph at last, or will the horrific One Below All claim his due? As the gamma monsters all converge, one by one, on New York City, can anyone stop them? The Avengers give it their best shot - but the last time they fought the Hulk, they destroyed an entire town. And this Earth-shattering confrontation may be even more devastating! As horrible truths are revealed at last, what will it mean for Bruce Banner, his allies and the eternal life of the Immortal Hulk?!",
    characters: ['im_4'],
    series: ["series-7", "series-8"]
  },

  {
    id: 'comics-9',
    image: com9,
    name: 'Hulk Vs. Thor: Banner Of War (Trade Paperback)',
    description: 
    "Collects Hulk vs. Thor: Banner of War Alpha (2022) #1, Thor (2020) #25-26 and Hulk (2021) #7-8. A cataclysmic crossover destined to be a smash hit! Hulk and Thor have both undergone massive changes recently, but one thing remains constant: their heated rivalry! When mysterious circumstances bring them into conflict once more, will the God of Thunder be able to triumph against a Bruce Banner who can now control his rage? And will Iron Man regret coming between these two titans - even with his new Celestial Hulkbuster armor?! Celebrating the 60th Anniversary of both characters, writer Donny Cates pits the stars of his two titles against one another in his biggest blockbuster yet - and that's saying something! Key mysteries from HULK and THOR will be revealed, and this clash will have shocking consequences for the future of both characters!",
    characters: ['im_4'],
    series: ["series-7", "series-8"]
  },

  /*THOR*/
  {
    id: 'comics-10',
    image: com10,
    name: 'Thor Epic Collection: Blood And Thunder (Trade Paperback)',
    description: 
    "Collects Thor (1966) #468-475 and Annual #18, Silver Surfer (1987) #86-88, Warlock Chronicles #6-8 And Warlock and The Infinity Watch #23-25. Thor on a cosmic rampage! The God of Thunder has gone mad, and the most powerful heroes in the cosmos may not be able to stop him! Beta Ray Bill and Sif hope to talk him down. Adam Warlock, Doctor Strange and the Silver Surfer intend to cure him. And Thanos is always spoiling for a fight! But when the berserk Thor gets an immense power-up from an Infinity Gem, all bets are off - and even almighty Odin may be unable to save his son! When the dust settles, what comes next for Asgard? The High Evolutionary has some ideas - and they involve his new Godlings! From this cosmic crucible, Thor will emerge transformed - and come face-to-face with someone he never expected to see!",
    characters: ['im_5'],
    series: ["series-9", "series-10"]
  },

  {
    id: 'comics-11',
    image: com11,
    name: 'Jane Foster & the Mighty Thor (2022)',
    description: 
    "JANE VS. S'YM OF LIMBO FOR THE FATE OF ASGARD! The battle against the Dark Elves and their allies rages on in Asgard, and the warriors of the Golden City are losing - badly. Rúna the Valkyrie has managed to stave off total defeat, but Asgard desperately needs Thor. Can Jane find clues to the Thunder God's whereabouts in Limbo - or will she lose herself to S'ym's dark magics?",
    characters: ['im_5'],
    series: ["series-9", "series-10"]
  },

  /*Wolverine*/
  {
    id: 'comics-12',
    image: com12,
    name: 'Wolverine: Patch (Trade Paperback)',
    description: 
    "Collects Wolverine: Patch #1-5. Return to Madripoor with the man called Patch! All-new action, intrigue and espionage await you as legendary creator Larry Hama crafts a story set before his original run on WOLVERINE! Logan has donned an eyepatch and made a new name for himself on the cutthroat island of Madripoor. From their haunt at the Princess Bar, what starts as a simple recon mission lands Patch and his old pal Archie Corrigan knee-deep in a paramilitary struggle that will herald some surprise revelations! Who is the mutant Krasny Beth, and how does she figure into the plans of both General Coy and Dr. Malheur? And what are Nick Fury, S.H.I.E.L.D. and the Russians after? Jungle warfare is a nasty business - but luckily, Patch is the best there is at what he does!",
    characters: ['im_6'],
    series: ["series-11", "series-12"]
  },

  {
    id: 'comics-13',
    image: com13,
    name: 'X-Men: Days of Future Past (Trade Paperback)',
    description: 
    "Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?",
    characters: ['im_6'],
    series: ["series-11", "series-12"]
  },

  /*Captain*/
  {
    id: 'comics-14',
    image: com14,
    name: 'Captain America: Sentinel of Liberty',
    description: 
    "Steve Rogers tracks the mysterious organization known only as the Outer Circle to a lab in the heart of a volcano, where the original creator of the shield left behind a dire message. But the Outer Circle isn't going to let the information go without a fight. Who - or what - is the Redacted? And will Steve survive long enough to find out? Meanwhile, Bucky Barnes finds himself in a high-stakes battle with none other than the Dryad herself…Peggy Carter!",
    characters: ['im_7'],
    series: ["series-13", "series-14"]
  },

  {
    id: 'comics-15',
    image: com15,
    name: 'Captain America: Heroes Return - The Complete Collection Vol. 2',
    description: 
    "Collects Captain America (1998) #13-24 and Annual '99. Captain America is at his weakest! With his shield shattered and his powers drained, Cap finds himself trapped in the future, facing the Red Skull - who has the might of the Cosmic Cube at his fingertips! And waiting in the wings is the man who killed the Avengers: Korvac! Then, if the Sentinel of Liberty can somehow survive that, the destruction of his fabled shield has unleashed a Vibranium cancer wave that threatens to destroy every piece of the miracle metal on Earth! As Cap races to contain the invisible threat, the villainous Klaw prepares to capitalize on it! Writer Mark Waid wraps up his legendary Cap run in style! Plus: Steve Rogers goes undercover behind bars, faces Crossbones and the Absorbing Man and battles the terrorist threats of Hydra and Flag-Smasher!",
    characters: ['im_7'],
    series: ["series-13", "series-14"]
  },

  /*Deadpool*/
  {
    id: 'comics-16',
    image: com16,
    name: 'Deadpool: Bad Blood (2022) #2',
    description: 
    "Deadpool is on the hunt for a superweapon with ties to his past – but every time he gets close, the armored brute named Thumper kind of…kills him. Wade Wilson always gets better, but dying still sucks. Can he and Domino get to the bottom of things before Deadpool meets his maker again? Answers might lay in a secret mission from years ago that brought Deadpool and X-Force together. But what do today’s problems have to do with this firefight flashback? Garrison Kane, the cyborg called Weapon X, knows the truth about Thumper – and now it’s up to Deadpool and Domino to beat it out of him!",
    characters: ['im_8'],
    series: ["series-15", "series-16"]
  },
];
