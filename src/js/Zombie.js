import Character from './Character';

class Zombie extends Character {
    constructor(name) {
        const attack = 40;
        const defence = 10;
        super(name, 'Zombie', attack, defence);
    }
}

export default Zombie;