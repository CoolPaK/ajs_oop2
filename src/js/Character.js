class Character {
    constructor(name, type, attack, defence) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('name должен быть строкой от 2 до 10 символов');
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Недопустимый тип');
        }
        this.name = name;
        this.type = type;
        this.health = 100; // Изначальное здоровье
        this.level = 1; // Начальный уровень
        this.attack = attack; // Значение атаки
        this.defence = defence; // Значение защиты
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Невозможно повысить уровень мертвого персонажа');
        }
        this.level += 1;
        this.attack = Math.floor(this.attack * 1.2); // Увеличиваем атаку на 20%
        this.defence = Math.floor(this.defence * 1.2); // Увеличиваем защиту на 20%
        this.health = 100; // Восстанавливаем здоровье
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0; // Здоровье не может быть отрицательным
        }
    }

    getAttack() {
        return this.attack; // Возвращение значения атаки
    }

    getDefence() {
        return this.defence; // Возвращение значения защиты
    }
}

export default Character;