import {classNames} from './classNames';

describe('ClassNames' , () => {
    test('with only one param', () => {
        const expected = 'class';
        expect(classNames('class', {}, [])).toBe(expected);
    });
    test('with two params', () => {
        const expected = 'class class1';
        expect(classNames('class', {}, ['class1'])).toBe(expected);
    });
    test('with only all params', () => {
        const expected = 'class class1 hovered';
        expect(classNames('class', {hovered: true, scrollable: false}, ['class1'])).toBe(expected);
    });
    test('with only undefined', () => {
        const expected = 'class ';
        expect(classNames('class', {}, [undefined])).toBe(expected);
    });
});