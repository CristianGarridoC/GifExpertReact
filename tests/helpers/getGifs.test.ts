import getGifs from "../../src/helpers/getGifs";

describe('should get an array of gifs', () => {
    function mockFetch(fakeData: any[]): jest.Mock {
        return jest.fn().mockImplementation(() =>
            (
                new Promise((resolve) => {
                    resolve({
                        json: () => Promise.resolve({
                            data: fakeData
                        })
                    });
                })
            )
        );
    }

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should get the gifs', async () => {
        const fakeGifs: any[] = [{
            id: 'ABC',
            title: 'Whatever thing',
            images: {
                downsized_medium: {
                    url: 'https://localhost/whatever.jpg'
                }
            }
        }];
        global.fetch = mockFetch(fakeGifs);
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});