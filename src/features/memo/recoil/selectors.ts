import { selector} from "recoil";
import {
    memoCollection,
    memoContents,
    memoListState,
    memoTitle,
    memoType,
    requestDateState,
    requestState
} from "./atoms";

export const currentMemoListSelector = selector({
    key: 'currentMemoListSelector', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("currentMemoListSelector")
        // get(memoListState)
        get(requestDateState)
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
        let type = "none"
        let memo: { Title: string; Contents: string; Id:string } = {
            Title: "",
            Contents: "",
            Id: ""
        }
        if(newValue instanceof Object && "type" in newValue && "data" in newValue)
        {
            type= newValue['type']
            memo = newValue['data']
        }


        let list : { Title: string; Contents: string; Id:string }[] = get(memoListState)


        let newList = (t:string)=> {
            switch (t) {
                case 'set':
                    return [...list, { Title: memo.Title, Contents: memo.Contents, Id:memo.Id }]
                case 'delete':
                    return list.filter(l => l !== memo)
                default:
                    return "none"
            }
        }


        // console.log({Title: title, Contents: contents})
        fetch(`http://localhost:8080/firestore/${collection}/${type}`, {
            method: "POST",
            mode: 'cors', // no-cors, cors, *same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:memo.Id,title: memo.Title, contents: memo.Contents}),
        }).then(function (response) {
            if (!response.ok) {
                throw new Error('Bad status code from server.');
            }
            return response.json();
        }).then(function (myJson) {
            return myJson
        });
        set(requestDateState,Date.now())
    }
});
