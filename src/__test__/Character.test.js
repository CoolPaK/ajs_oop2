import Character from '../js/Character';
import Bowman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Daemon from '../js/Daemon';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

describe('Character', () => {

    // Test for successful creation of Character instance
    it('should create a Character instance with valid parameters', () => {
        const character = new Character('Test', 'Bowman');
        expect(character.name).toBe('Test');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    });

    // Test for error when name is too short
    it('should throw an error for invalid name (less than 2 characters)', () => {
        expect(() => new Character('A', 'Bowman')).toThrowError('name должен быть строкой от 2 до 10 символов');
    });

    // Test for error when name is too long
    it('should throw an error for invalid name (more than 10 characters)', () => {
        expect(() => new Character('VeryLongCharacterName', 'Bowman')).toThrowError('name должен быть строкой от 2 до 10 символов');
    });

    // Test for error when type is invalid
    it('should throw an error for invalid type', () => {
        expect(() => new Character('Test', 'InvalidType')).toThrowError('Недопустимый тип');
    });

    // Test for successful level up
    it('should level up a character correctly', () => {
        const character = new Character('Test', 'Bowman');
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBeCloseTo(30); // 25 * 1.2
        expect(character.defence).toBeCloseTo(30); // 25 * 1.2
        expect(character.health).toBe(100);
    });

    // Test for error when leveling up a dead character
    it('should throw an error when leveling up a dead character', () => {
        const character = new Character('Test', 'Bowman');
        character.health = 0;
        expect(() => character.levelUp()).toThrowError('Cannot level up a dead character');
    });

    // Test for correct damage calculation
    it('should calculate damage correctly', () => {
        const character = new Character('Test', 'Bowman');
        character.damage(20);
        expect(character.health).toBe(85); // 100 - (20 * (1 - 25 / 100))
    });

    // Test to prevent health from going below 0
    it('should not allow health to go below 0', () => {
        const character = new Character('Test', 'Bowman');
        character.damage(120); // Inflicting damage exceeding current health
        expect(character.health).toBe(10); // health should not be negative
    });

    // Additional tests for edge cases
    // Test for handling negative damage correctly
    it('should handle negative damage correctly', () => {
        const character = new Character('Test', 'Bowman');
        character.damage(-10); // Apply negative damage
        expect(character.health).toBe(107.5); // Health should not change
    });

    // Test for handling damage exceeding maximum health
    it('should handle damage exceeding maximum health correctly', () => {
        const character = new Character('Test', 'Bowman');
        character.health = 5; // Set current health
        character.damage(10); // Damage exceeds health
        expect(character.health).toBe(0); // Health should not be negative
    });

    // Tests for getAttack and getDefence methods
    it('should throw an error for invalid type in getAttack', () => {
        const character = new Character('Test', 'Bowman');
        expect(() => character.getAttack('InvalidType')).toThrowError('Invalid type');
    });

    it('should throw an error for invalid type in getDefence', () => {
        const character = new Character('Test', 'Bowman');
        expect(() => character.getDefence('InvalidType')).toThrowError('Invalid type');
    });
});

describe('Bowman', () => {
    it('should create a Bowman instance with correct attributes', () => {
        const bowman = new Bowman('Archer');
        expect(bowman.name).toBe('Archer');
        expect(bowman.type).toBe('Bowman');
        expect(bowman.health).toBe(100);
        expect(bowman.level).toBe(1);
        expect(bowman.attack).toBe(25);
        expect(bowman.defence).toBe(25);
    });
});

describe('Swordsman', () => {
    it('should create a Swordsman instance with correct attributes', () => {
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
    it('should create a Magician instance with correct attributes', () => {
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
    it('should create a Daemon instance with correct attributes', () => {
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
    it('should create an Undead instance with correct attributes', () => {
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
    it('should create a Zombie instance with correct attributes', () => {
        const zombie = new Zombie('Walker');
        expect(zombie.name).toBe('Walker');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });
});