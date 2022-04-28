import React, {useEffect, useState} from 'react';
import {Progress} from "antd";
import Calendar from "react-calendar";

const WatersRecord =()=> {

    const [value, onChange] = useState(new Date());

    return (
        <div id={"progress"}>
            <Calendar onChange={onChange} value={value} />
            <Progress type="circle" percent={75} />
        </div>
    );
}

export default WatersRecord;
