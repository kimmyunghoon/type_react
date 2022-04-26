import React, {Suspense, useEffect, useMemo} from 'react';
import {Col, Spin} from "antd";
import Memo from "./memo";
import {
    useRecoilState,
    useRecoilStateLoadable,
    useRecoilValue,
    useRecoilValueLoadable,
    useSetRecoilState
} from "recoil";
import {currentMemoListSelector, updateMemoListSelector} from "../recoil/selectors";
import {memoListState} from "../recoil/atoms";
import {MemoType} from "../type/interface";
import {ApiCommandInfo} from "../type/type_class";

const Memos = () => {

    const userNameLoadable = useRecoilValueLoadable(memoListState)

    const setMemoList = useSetRecoilState(currentMemoListSelector)

    const onRemove = (memo: MemoType) => setUpdate(new ApiCommandInfo(memo, "delete"))

    const [updateLoadable, setUpdate] = useRecoilStateLoadable(updateMemoListSelector)

    useEffect(() => {
        if (updateLoadable && updateLoadable.state === "hasValue" && updateLoadable.contents.type === "result" && updateLoadable.contents.list) {
            setMemoList(updateLoadable.contents.list)
        }
    }, [updateLoadable])

    return (
        <>
            {(userNameLoadable.state === "loading" || updateLoadable.state === "loading") &&
                    <div style={{zIndex:1000,position:"absolute", backgroundColor:"gray", opacity:0.5, color:"white",width:"100%",height:"100%",fontSize:"32px",textAlign:"center"}}>데이터 갱신중</div>}
                 {
                    userNameLoadable.state === "hasValue" && (

                        userNameLoadable.contents.map((memo, index) =>
                            (
                                <Col key={index} className="gutter-row" span={3}>
                                    <Memo key={memo.Id} memo={memo} onRemove={onRemove}/>
                                </Col>
                            )
                        ))

                }
        </>
    );
}

export default Memos;
