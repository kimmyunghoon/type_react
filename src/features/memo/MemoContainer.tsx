import React from 'react';
import {useRecoilState, useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {memoContents, memoTitle} from "./recoil/atoms";

import {Row} from "antd";
import Memos from "./components/memos";
import { updateMemoListSelector} from "./recoil/selectors";
import {ApiCommandInfo, MemoInfo} from "./type/type_class";
import {MemoType} from "./type/interface";


const MemoContainer = () => {
    const [title, setTitle] = useRecoilState(memoTitle)
    const [contents, setContents] = useRecoilState(memoContents)

    const setMemoList = useSetRecoilState(updateMemoListSelector)

    const onCreateMemo = (memo: MemoType) => setMemoList(new ApiCommandInfo(memo,"set"))

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContents(e.target.value)

    const updateLoadable = useRecoilValueLoadable(updateMemoListSelector)

    return (
        <div style={{pointerEvents:`${updateLoadable.state === "loading" ? "none":"auto"}`}}>
            <div style={{display: "flex"}}>
                Title :
                <input maxLength={10} value={title} placeholder={"title"} onChange={onChangeTitle}/>
                contents :
                <textarea style={{maxHeight: "300px", minHeight: "100px"}} value={contents} placeholder={"contents"}
                          onChange={onChangeContents}/>
                <button type="button" onClick={() => onCreateMemo(new MemoInfo(title ? title : "none title", contents ? contents : "none contents","new"))}> 추가하기
                </button>
            </div>
            <Row gutter={[24, 24]}>
                <Memos/>
            </Row>
        </div>
    );
}

export default MemoContainer;

