import Bowerman from './js/Bowerman';
import Swordsman from './js/Swordsman';
import Magician from './js/Magician';
import Daemon from './js/Daemon';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

const bowman = new Bowerman('Robin');
const swordsman = new Swordsman('Arthur');
const magician = new Magician('Merlin');
const daemon = new Daemon('Lucifer');
const undead = new Undead('Tarantulas');
const zombie = new Zombie('Braindead');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);