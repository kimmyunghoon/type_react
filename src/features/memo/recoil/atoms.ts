import {atom} from "recoil";
import {ApiCommand, MemoType} from "../type/interface";
import {ApiCommandInfo, MemoInfo} from "../type/type_class";
import {currentMemoListSelector} from "./selectors";



export const memoListState = atom<MemoType[]>({
    key: 'memoListState',
    default:currentMemoListSelector,
});

export const memoDataState = atom<ApiCommand>({
    key: 'memoDataState',
    default: new ApiCommandInfo(),
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


