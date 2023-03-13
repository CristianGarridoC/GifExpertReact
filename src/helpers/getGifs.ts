import {Gif} from "../interfaces/Gif";

const getGifs = async (category: string): Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Fd1Zy8WgER3Utdu0Y0h4NNhZ8WkfiJJT&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs: Gif[] = data
        .map((img: { id: string, title: string, images: { downsized_medium: { url: string } } }) => (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        ));
    return gifs;
};
export default getGifs;