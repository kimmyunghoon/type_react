import {DefaultValue, selector} from "recoil";
import {
    memoCollection,
     memoDataState,
    memoListState,
    requestDateState,
} from "./atoms";
//

export const currentMemoListSelector = selector({
    key: 'currentMemoListSelector', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("currentMemoListSelector")
        let collection = get(memoCollection)

        return await fetch(`http://localhost:8080/firestore/${collection}/common`, {
            method: "GET",
            mode: 'cors', // no-cors, cors, *same-origin
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            if (!response.ok) {
                throw new Error('Bad status code from server.');
            }
            return response.json();
        }).then(function (myJson) {
            console.log("current ",myJson.message)
            return myJson.message
        }).catch((error) => {
            console.error('실패:', error);
            return []
        })
    },
    set: ({get, set, reset}, newValue) => {
        if(newValue instanceof Array ){
            console.log(newValue)
            set(memoListState, newValue)
        }
        else if(newValue instanceof Object){
            set(memoDataState, newValue)
        }
    }
});


export const updateMemoListSelector = selector({
    key: 'updateMemoListSelector',
    get: async ({get}) => {
        console.log("updateMemoListSelector")
        const memoData = get(memoDataState)
        const collection = get(memoCollection)
        let values =null
        if(memoData instanceof Object  &&"type" in memoData && "data" in memoData) {
            let type = memoData["type"]
            let memo: { Title: string; Contents: string; Id: string } = memoData['data']

            values=  await fetch(`http://localhost:8080/firestore/${collection}/${type}`, {
                method: "POST",
                mode: 'cors', // no-cors, cors, *same-origin
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: memo.Id, title: memo.Title, contents: memo.Contents}),
            }).then(function (response) {
                if (!response.ok) {
                    throw new Error('Bad status code from server.');
                }
                return response.json();
            }).then(function (myJson) {
                  return myJson.message
            });
        }
        return values
    },

});
