import {render, screen } from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp";
import {useEffect} from "react";

const mockChild = jest.fn();
jest.mock('../src/components',
    () => ({
        AddCategory: (parameters: any) => {
            mockChild(parameters)
            return <div role="addCategory" />;
        },
        GifGrid: jest.fn().mockImplementation((parameters) => {
            return <span role="category" {...parameters} />;
        })
    })
);

describe('GiftExpertApp testing component', () => {
   test('should add new category', async () => {
       mockChild.mockImplementation((props: { onNewCategory: (category: string) => void }) => {
           useEffect(() => {
               props.onNewCategory('Test');
           }, []);
       });
       render(<GifExpertApp />);
       expect(screen.getByRole('addCategory')).toBeTruthy();
       expect(screen.getAllByRole('category').length).toBe(2);
       expect(screen.getAllByRole('category')[0].getAttribute('category')).toBe('Test');
   });
});