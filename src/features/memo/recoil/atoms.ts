import {atom} from "recoil";
import {currentMemoListSelector, updateMemoListSelector} from "./selectors";
import {ApiCommand, MemoType} from "../type/interface";
import {MemoInfo} from "../type/type_class";

export const memoListState = atom<MemoType[]>({
    key: 'memoListState',
    default:currentMemoListSelector,
});
export const memoDataState = atom<ApiCommand>({
    key: 'memoDataState',
    default: {
        type:"none",
        data: new MemoInfo("","","")
    },
});


export const memoCollection = atom<string>({
    key: 'memoCollection',
    default: "memos",
});
export const memoType = atom({
    key: 'memoType',
    default: "common",
});

export const memoTitle = atom({
    key: 'memoTitle',
    default: "none title",
});
export const memoContents = atom({
    key: 'memoContents',
    default: "none contents",
});


