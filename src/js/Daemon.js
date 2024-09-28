import Character from './Character';

class Daemon extends Character {
    constructor(name) {
        const attack = 10;
        const defence = 40;
        super(name, 'Daemon', attack, defence);
    }
}

export default Daemon;