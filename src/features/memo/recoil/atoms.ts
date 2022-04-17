import {atom} from "recoil";

export const memoListState = atom({
    key: 'memoListState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export const memoCollection = atom({
    key: 'memoCollection', // unique ID (with respect to other atoms/selectors)
    default: "memos", // default value (aka initial value)
});
export const memoType = atom({
    key: 'memoType', // unique ID (with respect to other atoms/selectors)
    default: "common", // default value (aka initial value)
});


export const memoTitle = atom({
    key: 'memoTitle', // unique ID (with respect to other atoms/selectors)
    default: "none title", // default value (aka initial value)
});
export const memoContents = atom({
    key: 'memoContents', // unique ID (with respect to other atoms/selectors)
    default: "none contents", // default value (aka initial value)
});
