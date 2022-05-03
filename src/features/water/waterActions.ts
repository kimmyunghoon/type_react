
import {WaterType} from "./type/interface";

export const setWaterRecord = async (water: WaterType): Promise<WaterType> =>
    await fetch(`http://localhost:8080/firestore/waters/set`, {
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
        return water
    })

export const getWaterRecord = async (water: WaterType): Promise<WaterType> =>
    await fetch(`http://localhost:8080/firestore/waters/get`, {
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
        return response.clone().json();
    }).then(function (myJson) {
        console.log(myJson.message)
        return myJson.message
    }).catch((error) => {
        console.error('실패:', error);
        return water
    })
