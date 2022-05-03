import React, {useEffect} from 'react';
import {Button, Progress} from "antd";
import Calendar from "react-calendar";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useRecoilValueLoadable,
    useSetRecoilState
} from "recoil";
import {recordDateValue, recordDateWaterValue} from "../recoil/atoms";
import {WaterTypeInfo} from "../type/type_class";
import {currentRecordWater, updateRecordWater} from "../recoil/selectors";

const WatersRecord = () => {
    const [value, onChange] = useRecoilState(recordDateValue);
    const currentWaterInfo = useRecoilValueLoadable(currentRecordWater);
    const waterRecord = useRecoilValue(recordDateWaterValue);
    const [updateWaterInfo,setWaterRecord] = useRecoilStateLoadable(updateRecordWater);

    useEffect(()=>{
        if(currentWaterInfo.state==="hasValue"){
            setWaterRecord(currentWaterInfo.contents)
        }
    },[currentWaterInfo])
    // useEffect(()=>{
    //     if(updateWaterInfo.state==="hasValue"){
    //         setWaterRecord(updateWaterInfo.contents)
    //     }
    // },[updateWaterInfo])
    return (
        <div id={"progress"}>
            Today : {Date()}
            <div style={{width: "50%", backgroundColor: "white", padding: "10px"}}>
                <Calendar onChange={onChange} value={value} maxDate={new Date()}/>
                Select : {value.toISOString().substring(0, 10)}
            </div>
            <div style={{pointerEvents: `${currentWaterInfo.state === "hasValue" ? "auto" : "none"}`}}>
                <div style={{width: "50%", backgroundColor: "white", padding: "10px"}}>
                    물 섭취량(하루 1L 이상) :
                    <div style={{pointerEvents: `${updateWaterInfo.state === "hasValue" ? "auto" : "none"}`}}>
                    <Progress type="circle" percent={waterRecord.Value}/>
                    <Button
                        onClick={() => setWaterRecord(new WaterTypeInfo(value.toISOString().substring(0, 10), waterRecord.Value >= 100 ? 100 : waterRecord.Value + 10))}>+</Button>
                    <Button
                        onClick={() => setWaterRecord(new WaterTypeInfo(value.toISOString().substring(0, 10), waterRecord.Value <= 0 ? 0 : waterRecord.Value - 10))}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatersRecord;
