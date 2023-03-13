import {useEffect, useState} from "react";
import getGifs from "../helpers/getGifs";
import {Gif} from "../interfaces/Gif";
import {FetchData} from "../interfaces/FetchData";

export const useFetchGifs = (category: string): FetchData<Gif> => {
    const [state, setState] = useState<FetchData<Gif>>({
        data: [],
        isLoading: true,
    });

    const getFetchData = async () => {
        const images = await getGifs(category);
        setState({
            data: images,
            isLoading: false,
        });
    };

    useEffect(() => {
        getFetchData();
    }, [category]);

    return state;
};