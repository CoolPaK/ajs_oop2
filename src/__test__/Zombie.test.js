import Zombie from '../js/Zombie';

describe('Тесты для Zombie', () => {

    test('Создание персонажа Zombie', () => {
        const zombie = new Zombie('Braindead');
        expect(zombie.name).toBe('Braindead');
        expect(zombie.type).toBe('Zombie');
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });

    test('Тестирование некорректного имени у Zombie', () => {
        expect(() => new Zombie('A')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Zombie('')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Zombie(123)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

});