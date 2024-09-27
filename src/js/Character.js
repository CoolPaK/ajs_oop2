class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('name должен быть строкой от 2 до 10 символов');
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Недопустимый тип');
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = this.getAttack(type);
        this.defence = this.getDefence(type);
    }

    getAttack(type) {
        switch (type) {
            case 'Bowman':
                return 25;
            case 'Swordsman':
                return 40;
            case 'Magician':
                return 10;
            case 'Undead':
                return 25;
            case 'Zombie':
                return 40;
            case 'Daemon':
                return 10;
            default:
                throw new Error('Invalid type');
        }
    }

    getDefence(type) {
        switch (type) {
            case 'Bowman':
                return 25;
            case 'Swordsman':
                return 10;
            case 'Magician':
                return 40;
            case 'Undead':
                return 25;
            case 'Zombie':
                return 10;
            case 'Daemon':
                return 40;
            default:
                throw new Error('Invalid type');
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Cannot level up a dead character');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

export default Character;