import {atom} from "recoil";

export const memoListState = atom({
    key: 'memoListState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

export const memoTitle = atom({
    key: 'memoTitle', // unique ID (with respect to other atoms/selectors)
    default: "none title", // default value (aka initial value)
});
export const memoContents = atom({
    key: 'memoContents', // unique ID (with respect to other atoms/selectors)
    default: "none contents", // default value (aka initial value)
});
