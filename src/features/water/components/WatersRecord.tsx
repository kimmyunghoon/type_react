import React from 'react';
import {Button, Progress} from "antd";
import Calendar from "react-calendar";
import {useRecoilState} from "recoil";
import {currentDateState, waterState} from "../recoil/atoms";

const WatersRecord = () => {

    const [date, setDate] = useRecoilState(currentDateState);
    const [waterValue, setWaterValue] = useRecoilState(waterState);

    return (
        <div id={"progress"}>
            <div style={{width: "50%", backgroundColor: "white", padding: "10px"}}>
                <Calendar onChange={setDate} value={date}/>
            </div>
            <div style={{width: "50%", backgroundColor: "white", padding: "10px"}}>
                물 섭취량 :
                <Button />
                <Button/>
                <Progress type="circle" percent={waterValue}/>
            </div>
        </div>
    );
}

export default WatersRecord;
