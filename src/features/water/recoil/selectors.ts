import { selector} from "recoil";
import {getWaterRecord, setWaterRecord} from "../waterActions";
import {recordDateValue, recordDateWaterValue} from "./atoms";
import {WaterTypeInfo} from "../type/type_class";
import {WaterType} from "../type/interface";


export const currentRecordWater = selector<WaterType>({
    key: 'currentRecordWater', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("currentRecordWater")
        const value = get(recordDateValue)
        return await getWaterRecord(new WaterTypeInfo(value.getTime()))
    },
    set: ({get, set, reset}, newValue) => {
        set(recordDateWaterValue, newValue)
    }
});

export const updateRecordWater = selector<WaterType>({
    key: 'updateRecordWater', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("updateRecordWater")
        const value = get(recordDateWaterValue)
        return await setWaterRecord(value)
    },
});
