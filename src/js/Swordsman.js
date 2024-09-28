import Character from './Character';

class Swordsman extends Character {
    constructor(name) {
        const attack = 40;
        const defence = 10;
        super(name, 'Swordsman', attack, defence);
    }
}

export default Swordsman;