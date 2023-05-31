import getGifs from "../../src/helpers/getGifs";
import { Gif } from "../../src/interfaces/Gif";
import {act, renderHook, RenderHookResult} from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs";
import {FetchData} from "../../src/interfaces/FetchData";

jest.mock("../../src/helpers/getGifs");

describe('useFetchGifs testing custom hook', () => {


    test('should return an empty images array and isLoading as false at the beginning', async () => {
        jest.mocked(getGifs).mockResolvedValue([
            { id: 'abc', title: 'title', url: 'url' }
        ] as Gif[]);
        let hook:  RenderHookResult<FetchData<Gif>, unknown>;
        await act(async ()=> {
            hook = renderHook(() => useFetchGifs('Test'))
        });
        const { result } = hook!;
        const { data, isLoading } = result.current;

        expect(data.length).toBe(1);
        expect(isLoading).toBeFalsy();
    });
});