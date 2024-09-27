import Undead from '../js/Undead';

describe('Тесты для Undead', () => {

    test('Создание персонажа Undead', () => {
        const undead = new Undead('Vlad');
        expect(undead.name).toBe('Vlad');
        expect(undead.type).toBe('Undead');
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });

    test('Тестирование некорректного имени у Undead', () => {
        expect(() => new Undead('A')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Undead('')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Undead(123)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

});