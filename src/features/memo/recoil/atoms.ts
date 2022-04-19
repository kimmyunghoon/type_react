import {atom} from "recoil";
import {currentMemoListSelector} from "./selectors";

export const requestState = atom({
    key: 'requestState', // unique ID (with respect to other atoms/selectors)
    default:false, // default value (aka initial value)
});

export const requestDateState = atom({
    key: 'requestDateState', // unique ID (with respect to other atoms/selectors)
    default:Date.now(), // default value (aka initial value)
});


export const memoListState = atom({
    key: 'memoListState', // unique ID (with respect to other atoms/selectors)
    default:currentMemoListSelector, // default value (aka initial value)
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
