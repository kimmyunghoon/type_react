
import {WaterType} from "./type/interface";

export const setWaterRecord = async (collection: string, type: string, water: WaterType): Promise<WaterType> =>
    await fetch(`http://localhost:8080/firestore/${collection}/${type}`, {
        method: "POST",
        mode: 'cors', // no-cors, cors, *same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(water),
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

export const getWaterRecord = async (water: WaterType): Promise<WaterType> =>
    await fetch(`http://localhost:8080/firestore/waters`, {
        method: "POST",
        mode: 'cors', // no-cors, cors, *same-origin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(water),
    }).then(function (response) {
        if (!response.ok) {
            throw new Error('Bad status code from server.');
        }
        return response.json();
    }).then(function (myJson) {
        return myJson.message
    }).catch((error) => {
        console.error('실패:', error);
        return 0
    })
