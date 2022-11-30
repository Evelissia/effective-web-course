import {cardTypes} from 'types/cardTypes'
import ser1 from '../assets/series/series1.jpg';
import ser2 from '../assets/series/series2.jpg';
import ser3 from '../assets/series/series3.jpg';

export const seriesData: Array<cardTypes> = [
    {
        id: 'series-1',
        image: ser1,
        name: 'Spider-Man: Homecoming',
        description: 'A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall back into his normal daily routine – distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man – but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened.'
    },

    {
        id: 'series-2',
        image: ser2,
        name: 'Loki | Season 1',
        description: 'In Marvel Studios’ “Loki,” the mercurial villain Loki (Tom Hiddleston) resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.” Kate Herron directs and Michael Waldron is head writer. Debuts on Disney+ in June 9, 2021.'
    },

    {
        id: 'series-3',
        image: ser3,
        name: 'Deadpool',
        description: 'Based upon Marvel Comics’ most unconventional anti-hero, DEADPOOL tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.'
    },

];

