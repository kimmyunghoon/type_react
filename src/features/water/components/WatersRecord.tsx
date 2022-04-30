import React from 'react';
import {Progress} from "antd";
import Calendar from "react-calendar";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {recordDateValue, recordDateWaterValue} from "../recoil/atoms";
import {currentRecordWater} from "../recoil/selectors";

const WatersRecord =()=> {

    const [value, onChange] = useRecoilState(recordDateValue);
    const waters = useRecoilValue(recordDateWaterValue); // 추후 loadable로 바꾸기기
    const setWaterRecord = useSetRecoilState(currentRecordWater);
    return (
        <div id={"progress"}>
            <Calendar onChange={onChange} maxDate={new Date()} value={value} />
            <Progress type="circle" percent={waters.Value} />
        </div>
    );
}

export default WatersRecord;
