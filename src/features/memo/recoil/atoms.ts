import {atom} from "recoil";
import {currentMemoListSelector, updateMemoListSelector} from "./selectors";


export const requestDateState = atom({
    key: 'requestDateState',
    default:Date.now(),
});


export const memoListState = atom({
    key: 'memoListState',
    default:currentMemoListSelector,
});
export const memoDataState = atom({
    key: 'memoDataState',
    default: {},
});


export const memoCollection = atom({
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


