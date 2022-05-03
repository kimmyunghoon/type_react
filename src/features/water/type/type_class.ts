
import {MemoInfo} from "../../memo/type/type_class";
import {WaterType} from "./interface";

export class WaterTypeInfo implements WaterType {
    Date: string ;
    Value: number;
    constructor(Date: string,Value:number=0) {
        this.Date = Date
        this.Value = Value
    }


}
