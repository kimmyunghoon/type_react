import {selector} from "recoil";
import {memoCollection, memoListState, memoType} from "./atoms";

export const memoListSelector = selector({
    key: 'memoListSelector', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("memoListSelector")
        // atom 가져오기
         // let list = get(memoListState)
        let collection = get(memoCollection)
        let type = get(memoType)
         //    return get(memoListState)
        // Todo
        //  사용자가 추가되면 해당 사용자 키값에 해당하는 메모를 가져오는 방법으로 변경해야할지도 모르겟음.
        //  서버에서 리스트 가져오기
        return await fetch(`http://localhost:8080/firestore/${collection}/${type}`, {
            method:"GET",
            mode: 'cors', // no-cors, cors, *same-origin
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            // if (!response.ok) {
            //     throw new Error('Bad status code from server.');
            // }
            return response.json();
        }).then(function(myJson) {
            return [JSON.parse(myJson.message)]
        });
    },
    set: ({set}, newValue) => {
        set(memoListState, newValue as [])
    }
});
