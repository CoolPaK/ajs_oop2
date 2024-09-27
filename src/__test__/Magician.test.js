import Magician from '../js/Magician';

describe('Тесты для Magician', () => {

    test('Создание персонажа Magician', () => {
        const magician = new Magician('Merlin');
        expect(magician.name).toBe('Merlin');
        expect(magician.type).toBe('Magician');
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });

    test('Тестирование некорректного имени у Magician', () => {
        expect(() => new Magician('A')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Magician('')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Magician(123)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

});;