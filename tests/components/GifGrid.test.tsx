import { screen, render } from "@testing-library/react";
import {GifGrid} from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { FetchData } from "../../src/interfaces/FetchData";
import { Gif } from "../../src/interfaces/Gif";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid component tests', () => {
    test('should display loading at the beginning', () => {
        const category = 'One Punch';
        jest.mocked(useFetchGifs).mockReturnValue({
            data: [],
            isLoading: true
        } as FetchData<Gif>);

        render(<GifGrid category={category} />);

        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
        screen.debug();
    });

    test('should display the data', () => {
        const category = 'One Punch';
        jest.mocked(useFetchGifs).mockReturnValue({
            data: [
                {
                    id: "ABC",
                    title: "Title",
                    url: "url"
                }
            ],
            isLoading: false
        } as FetchData<Gif>);


        render(<GifGrid category={category} />);
        expect(screen.getByText(category)).toBeTruthy();
        expect(screen.getAllByRole('img').length).toBe(1);
    })
});