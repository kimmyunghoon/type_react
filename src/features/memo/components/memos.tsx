import React, {Suspense, useEffect, useMemo} from 'react';
import {Col} from "antd";
import Memo from "./memo";
import {useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {currentMemoListSelector, updateMemoListSelector} from "../recoil/selectors";
import {memoListState} from "../recoil/atoms";
import {MemoType} from "../type/interface";
import {ApiCommandInfo} from "../type/type_class";

const Memos = () => {

    const memoList = useRecoilValue(memoListState)
    const setMemoList = useSetRecoilState(currentMemoListSelector)
    // const update = useRecoilValueLoadable(updateMemoListSelector)

    // const memoList = useRecoilValue(currentMemoListSelector) as { Title: string; Contents: string; }[];
    // const setMemoList =  useSetRecoilState(currentMemoListSelector);
    const onRemove = (memo: MemoType) => setUpdate(new ApiCommandInfo(memo,"delete"))

    const [update,setUpdate] = useRecoilState(updateMemoListSelector)

    useEffect(() => {
        if (update && update.type === "result" && update.list) {
                setMemoList(update.list)
        }
    }, [update])

    return (
        <>
            {memoList.map((memo, index) =>
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
