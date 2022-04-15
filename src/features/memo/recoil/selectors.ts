import {selector} from "recoil";
import {memoListState} from "./atoms";

export const memoListSelector= selector({
    key: 'memoListSelector', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const list = get(memoListState)
        // Todo
        //  사용자가 추가되면 해당 사용자 키값에 해당하는 메모를 가져오는 방법으로 변경해야할지도 모르겟음.
        return list;
    },
    set: ({set}, newValue) =>{
             set(memoListState,newValue as [])
    }
});
