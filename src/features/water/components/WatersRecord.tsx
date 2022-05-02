import React from 'react';
import {Button, Progress} from "antd";
import Calendar from "react-calendar";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {recordDateValue, recordDateWaterValue} from "../recoil/atoms";
import {currentRecordWater} from "../recoil/selectors";
import {WaterTypeInfo} from "../type/type_class";

const WatersRecord =()=> {
    const [value, onChange] = useRecoilState(recordDateValue);
    const waters = useRecoilValue(recordDateWaterValue); // 추후 loadable로 바꾸기기
    const setWaterRecord = useSetRecoilState(currentRecordWater);
    return (
        <div id={"progress"}>
            Today : {Date()}
            <div style={{width: "50%", backgroundColor: "white", padding: "10px"}}>
                <Calendar onChange={onChange} value={value} maxDate={new Date()}/>
            </div>
            <div style={{width: "50%", backgroundColor: "white", padding: "10px"}}>
                물 섭취량(하루 1L 이상) :
                <React.Suspense>
                <Progress type="circle" percent={waters.Value}/>
                <Button onClick={()=>setWaterRecord(new WaterTypeInfo(value.getTime(),waters.Value>=100?100:waters.Value+10))}>+</Button>
                <Button onClick={()=>setWaterRecord(new WaterTypeInfo(value.getTime(),waters.Value<=0?0:waters.Value-10))}>-</Button>
                </React.Suspense>
            </div>
        </div>
    );
}

export default WatersRecord;
