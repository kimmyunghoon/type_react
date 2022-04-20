import React, {useEffect} from 'react';
import {Col} from "antd";
import Memo from "./memo";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {currentMemoListSelector, updateMemoListSelector} from "../recoil/selectors";
import {memoListState} from "../recoil/atoms";

const Memos = () => {

    const memoList = useRecoilValue(memoListState)
    const setMemoList =useSetRecoilState(currentMemoListSelector)
    const update = useRecoilValue(updateMemoListSelector)
    // const memoList = useRecoilValue(currentMemoListSelector) as { Title: string; Contents: string; }[];
    // const setMemoList =  useSetRecoilState(currentMemoListSelector);
    const onRemove = (memo: object) => setMemoList({
            type: "delete", data: memo
        }
    )
    useEffect(()=>{
        if(update){
            setMemoList(update)
        }
    },[update])

    return (
        <>
            {(memoList as { Title: string; Contents: string; Id: string }[]).map((memo, index) =>
                (<>
                    <Col key={index} className="gutter-row" span={3}>

                        <Memo key={memo.Id} memo={memo} onRemove={onRemove}/>

                    </Col>
                </>)
            )}
        </>
    );
}

export default Memos;
