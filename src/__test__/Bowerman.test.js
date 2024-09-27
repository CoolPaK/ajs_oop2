import Bowerman from '../js/Bowerman';

describe('Тесты для Bowerman', () => {

    test('Создание персонажа Bowerman', () => {
        const bowerman = new Bowerman('Robin');
        expect(bowerman.name).toBe('Robin');
        expect(bowerman.type).toBe('Bowman');
        expect(bowerman.health).toBe(100);
        expect(bowerman.level).toBe(1);
        expect(bowerman.attack).toBe(25);
        expect(bowerman.defence).toBe(25);
    });

    test('Тестирование некорректного имени у Bowerman', () => {
       expect(() => new Bowerman('A')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Bowerman('')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Bowerman(123)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

});