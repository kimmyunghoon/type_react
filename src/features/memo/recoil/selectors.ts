import { selector} from "recoil";
import {
    memoCollection,
    memoDataState,
    memoListState,
} from "./atoms";
import {ApiCommand, MemoType} from "../type/interface";
import {MemoInfo} from "../type/type_class";
import {modifyMemo, retrieveMemo} from "../memoActions";


export const currentMemoListSelector = selector<MemoType[]>({
    key: 'currentMemoListSelector', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        let collection = get(memoCollection)
        return await retrieveMemo(collection)
    },
    set: ({get, set, reset}, newValue) => {
        set(memoListState, newValue)
    }
});

export const updateMemoListSelector = selector<ApiCommand>({
    key: 'updateMemoListSelector',
    get: async ({get}) => {
        console.log("updateMemoListSelector")
        const memoData : ApiCommand = get(memoDataState)
        const collection = get(memoCollection)
        let type = memoData["type"]
        let values:ApiCommand  = {
            type:"result",
            data: new MemoInfo()
        }
        if(type !=="none") {

            let memo :MemoType  = memoData['data']

            values.list =  await modifyMemo(collection,type,memo);
        }
        return values
    },
    set: ({get, set, reset}, newValue) => {
        set(memoDataState, newValue)
    }
});
