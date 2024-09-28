import Character from './Character';

class Undead extends Character {
    constructor(name) {
        const attack = 25;
        const defence = 25;
        super(name, 'Undead', attack, defence);
    }
}

export default Undead;