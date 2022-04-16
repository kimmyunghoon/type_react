import React, {useEffect} from 'react';
import {Col} from "antd";
import Memo from "./memo";
import {useRecoilValue} from "recoil";
import {memoListSelector} from "../recoil/selectors";

const Memos = () => {
    const memoList = useRecoilValue(memoListSelector) as { Title: string; Contents: string; }[];
    const setMemoList =
        (old: object) => {
        }
    // useSetRecoilState(memoListSelector);
    const onRemove = (memo: object) => setMemoList((old: { Title: string; Contents: string; }[]) => old.filter((m: object) => m != memo))
    useEffect(() => {
        console.log(memoList)
    })

    return (
        <>
            {memoList.map((memo, index) =>
                (<>
                    <Col className="gutter-row" span={3}>

                        <Memo key={index} memo={memo} onRemove={onRemove}/>

                    </Col>
                </>)
            )}
        </>
    );
}

export default Memos;
