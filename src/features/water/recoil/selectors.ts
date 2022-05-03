import {DefaultValue, selector} from "recoil";
import {getWaterRecord, setWaterRecord} from "../waterActions";
import {recordDateValue, recordDateWaterValue} from "./atoms";
import {WaterTypeInfo} from "../type/type_class";
import {WaterType} from "../type/interface";


export const currentRecordWater = selector({
    key: 'currentRecordWater', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("currentRecordWater")
        const value = get(recordDateValue);
        return await getWaterRecord(new WaterTypeInfo(value.toISOString().substring(0, 10)))
    },
    // set: ({get, set, reset}, newValue) => {
    //     console.log("updateRecordWater set")
    //     set(recordDateValue, newValue instanceof DefaultValue ? newValue :newValue)
    // }
});

export const updateRecordWater = selector<WaterType>({
    key: 'updateRecordWater', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        console.log("updateRecordWater get")
        const value = get(recordDateWaterValue);
        return await setWaterRecord(value)
    },
    // set: ({get, set, reset}, newValue) => {
    //     console.log("updateRecordWater set")
    //     set(recordDateWaterValue, newValue instanceof DefaultValue ? newValue :newValue)
    // }
});
