import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components";

describe('GifItem component tests', () => {
    test('should render the image correctly', () => {
        render(<GifItem title="Saitama" url="https://localhost/saitama.jpg" />);
        const img: HTMLImageElement = screen.getByRole('img') as HTMLImageElement;
        expect(img.alt).toBe('Saitama');
        expect(img.src).toBe('https://localhost/saitama.jpg');
    });

    test('should render the title correctly', () => {
        render(<GifItem title="Saitama" url="https://localhost/saitama.jpg" />);
        const paragraphElement: HTMLParagraphElement = screen.getByRole('title') as HTMLParagraphElement;
        expect(paragraphElement.textContent).toBe('Saitama');
    });
});