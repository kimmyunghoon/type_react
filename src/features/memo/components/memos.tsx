import React, {useEffect} from 'react';
import {Col} from "antd";
import Memo from "./memo";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {currentMemoListSelector, updateMemoListSelector} from "../recoil/selectors";
import {memoListState} from "../recoil/atoms";

const Memos = () => {

    const memoList = useRecoilValue(memoListState)
    const setMemoList =useSetRecoilState(updateMemoListSelector)
    // const memoList = useRecoilValue(currentMemoListSelector) as { Title: string; Contents: string; }[];
    // const setMemoList =  useSetRecoilState(currentMemoListSelector);
    const onRemove = (memo: object) => setMemoList((old: object[]) => old.filter((m: object) => m !== memo))

    return (
        <>
            {(memoList as { Title: string; Contents: string; Id:string }[]).map((memo, index) =>
                (<>
                    <Col className="gutter-row" span={3}>

                        <Memo key={memo.Id} memo={memo} onRemove={onRemove}/>

                    </Col>
                </>)
            )}
        </>
    );
}

export default Memos;
