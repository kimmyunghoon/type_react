import {DefaultValue, selector} from "recoil";
import {memoCollection, memoContents, memoListState, memoTitle, memoType} from "./atoms";

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
            return myJson.message
        });
    }
});


export const updateMemoListSelector = selector({
    key: 'updateMemoListSelector', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        return get(currentMemoListSelector)
    },
    set: ({get, set}, newValue) => {
        console.log("updateMemoListSelector")
        const collection = get(memoCollection)
        const title = get(memoTitle)
        const contents = get(memoContents)
        let type = "none"
        let newList: object[] = []
        if(newValue instanceof Object &&"type" in newValue&&"array" in newValue)
        {
            type= newValue['type']
            newList = newValue['array']
        }


        const list = get(memoListState)
        let deleteId = "none"
        // Todo
        //  set delete action 분리하거나 모듈화 하는것이 좋아보임.
        if( list instanceof Array){
            if(type==="delete")
                deleteId = list.find(l=>newList.find(nl=>nl===l)===undefined).Id
        }

        // console.log({Title: title, Contents: contents})
        fetch(`http://localhost:8080/firestore/${collection}/${type}`, {
            method: "POST",
            mode: 'cors', // no-cors, cors, *same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:deleteId,title: title, contents: contents}),
        }).then(function (response) {
            if (!response.ok) {
                throw new Error('Bad status code from server.');
            }
            return response.json();
        }).then(function (myJson) {
            return myJson
        });
        set(memoListState, newList)
    }
});
