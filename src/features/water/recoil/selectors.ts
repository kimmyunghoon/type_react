import { selector} from "recoil";
import {getWaterRecord} from "../waterActions";
import {recordDateValue, recordDateWaterValue} from "./atoms";
import {WaterTypeInfo} from "../type/type_class";
import {WaterType} from "../type/interface";


export const currentRecordWater = selector<WaterType>({
    key: 'currentRecordWater', // unique ID (with respect to other atoms/selectors)
    get: async ({get}) => {
        return await getWaterRecord(new WaterTypeInfo(get(recordDateValue)))
    },
    set: ({get, set, reset}, newValue) => {
        set(recordDateWaterValue, newValue)
    }
});