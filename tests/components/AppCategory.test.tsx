import { render, screen, fireEvent } from '@testing-library/react';
import {AddCategory} from "../../src/components";
describe('AppCategory component tests', () => {
    test('should change the input value', () => {
        render(<AddCategory onNewCategory={ ()=> {} } />);
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    });

    test('should call onNewCategory function if input value is not empty', () => {
        const onNewCategory = jest.fn();
        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        expect(input.value).toBe('');
    });

    test('should not call onNewCategory when input is empty', () => {
       const onNewCategory = jest.fn();
       render(<AddCategory onNewCategory={onNewCategory} />);

       const form = screen.getByRole('form');
       fireEvent.submit(form);

       expect(onNewCategory).not.toHaveBeenCalled();
    });
});