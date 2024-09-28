import Character from './Character';

class Bowerman extends Character {
    constructor(name) {
        const attack = 25;
        const defence = 25;
        super(name, 'Bowman', attack, defence);
    }
}

export default Bowerman;