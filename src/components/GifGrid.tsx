import {useFetchGifs} from "../hooks/useFetchGifs";
import { Gif } from "../interfaces/Gif";
import {GifItem} from "./GifItem";

export const GifGrid = ({ category }: { category: string }) => {
    const { data: images, isLoading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            { isLoading && (<h2>Loading...</h2>) }
            <div className="card-grid">
                {
                    images.map( (image: Gif) => <GifItem key={image.id} {...image} /> )
                }
            </div>
        </>
    );
};