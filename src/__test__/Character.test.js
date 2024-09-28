import Character from '../js/Character';
import Bowerman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

describe('Character', () => {

    // Тест на успешное создание экземпляра Character
    it('должен создать экземпляр Character с корректными параметрами', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        expect(character.name).toBe('Test');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    });

    // Тест на ошибку при слишком коротком имени
    it('должен выбросить ошибку за недопустимое имя (менее 2 символов)', () => {
        expect(() => new Character('A', 'Bowman', 25, 25)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

    // Тест на ошибку при слишком длинном имени
    it('должен выбросить ошибку за недопустимое имя (более 10 символов)', () => {
        expect(() => new Character('VeryLongCharacterName', 'Bowman', 25, 25)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

    // Тест на ошибку при недопустимом типе
    it('должен выбросить ошибку за недопустимый тип', () => {
        expect(() => new Character('Test', 'InvalidType', 25, 25)).toThrow('Недопустимый тип');
    });

    // Тест на успешное повышение уровня
    it('должен правильно повысить уровень персонажа', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBeCloseTo(30); // 25 * 1.2
        expect(character.defence).toBeCloseTo(30); // 25 * 1.2
        expect(character.health).toBe(100);
    });

    // Тест на ошибку при попытке повысить уровень мертвого персонажа
    it('должен выбросить ошибку при повышении уровня мертвого персонажа', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        character.health = 0;
        expect(() => character.levelUp()).toThrow('Невозможно повысить уровень мертвого персонажа');
    });

    // Тест на правильный расчет урона
    it('должен правильно рассчитать урон', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        character.damage(20);
        expect(character.health).toBe(85); // 100 - (20 * (1 - 25 / 100))
    });

    // Тест на предотвращение ухода здоровья ниже 0
    it('не должен позволять здоровью опуститься ниже 0', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        character.damage(120); // Наносим урон, превышающий текущее здоровье
        expect(character.health).toBe(10); // Здоровье не должно быть отрицательным
    });

    // Тест на правильную обработку отрицательного урона
    it('должен правильно обрабатывать отрицательный урон', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        character.health = 100; // Сбрасываем здоровье для ясности
        character.damage(-10); // Применяем отрицательный урон
        expect(character.health).toBe(107.5); // Здоровье должно остаться неизменным
    });

    // Тест на обработку урона, превышающего максимальное здоровье
    it('должен правильно обрабатывать урон, превышающий максимальное здоровье', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        character.health = 5; // Устанавливаем текущее здоровье
        character.damage(10); // Урон превышает здоровье
        expect(character.health).toBe(0); // Здоровье не должно быть отрицательным
    });

    // Тест на получение значения атаки
    it('должен возвращать корректное значение атаки', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        const attackValue = character.getAttack();
        expect(attackValue).toBe(25); // Убедимся, что getAttack возвращает ожидаемое значение
    });

    // Тест на получение значения защиты
    it('должен возвращать корректное значение защиты', () => {
        const character = new Character('Test', 'Bowman', 25, 25);
        const defenceValue = character.getDefence();
        expect(defenceValue).toBe(25); // Убедимся, что getDefence возвращает ожидаемое значение
    });
});

describe('Bowerman', () => {
    it('должен создать экземпляр Bowerman с корректными атрибутами', () => {
        const bowman = new Bowerman('Archer');
        expect(bowman.name).toBe('Archer');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
    });
});

describe('Swordsman', () => {
    it('должен создать экземпляр Swordsman с корректными атрибутами', () => {
        const swordsman = new Swordsman('Knight');
        expect(swordsman.name).toBe('Knight');
        expect(swordsman.type).toBe('Swordsman');
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });
});

describe('Magician', () => {
    it('должен создать экземпляр Magician с корректными атрибутами', () => {
        const magician = new Magician('Mage');
        expect(magician.name).toBe('Mage');
        expect(magician.type).toBe('Magician');
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });
});

describe('Daemon', () => {
    it('должен создать экземпляр Daemon с корректными атрибутами', () => {
        const daemon = new Daemon('DarkSpirit');
        expect(daemon.name).toBe('DarkSpirit');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });
});

describe('Undead', () => {
    it('должен создать экземпляр Undead с корректными атрибутами', () => {
        const undead = new Undead('Zombie');
        expect(undead.name).toBe('Zombie');
        expect(undead.type).toBe('Undead');
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });
});

describe('Zombie', () => {
    it('должен создать экземпляр Zombie с корректными атрибутами', () => {
        const zombie = new Zombie('Walker');
        expect(zombie.name).toBe('Walker');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });
});