import {atom} from "recoil";
import {WaterType} from "../type/interface";
import {WaterTypeInfo} from "../type/type_class";
import {currentRecordWater} from "./selectors";

export const recordDateValue = atom<Date>({
    key: 'recordDateValue',
    default:new Date(),
});
export const recordDateWaterValue = atom<WaterType>({
    key: 'recordDateWaterValue',
    default:currentRecordWater,
});
