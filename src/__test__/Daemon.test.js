import Daemon from '../js/Daemon';

describe('Тесты для Daemon', () => {

    test('Создание персонажа Daemon', () => {
        const daemon = new Daemon('Lucifer');
        expect(daemon.name).toBe('Lucifer');
        expect(daemon.type).toBe('Daemon');
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });

    test('Тестирование некорректного имени у Daemon', () => {
        expect(() => new Daemon('A')).toThrow('name должен быть строкой от 2 до 10 символов');
       expect(() => new Daemon('')).toThrow('name должен быть строкой от 2 до 10 символов');
        expect(() => new Daemon(123)).toThrow('name должен быть строкой от 2 до 10 символов');
    });

});