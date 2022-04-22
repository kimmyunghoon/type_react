import {MemoType} from "./type/interface";

export const modifyMemo = async (collection: string, type: string, memo: MemoType): Promise<MemoType[]> =>
    await fetch(`http://localhost:8080/firestore/${collection}/${type}`, {
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
    }).catch((error) => {
        console.error('실패:', error);
        return []
    })



export const retrieveMemo = async (collection: string): Promise<MemoType[]> =>
    await fetch(`http://localhost:8080/firestore/${collection}/common`, {
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

