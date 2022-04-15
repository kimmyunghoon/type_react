import React from 'react';
import Memo from "./components/memo";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {memoListSelector} from "./recoil/selectors";
import {memoContents, memoTitle} from "./recoil/atoms";

import {Col, Row} from "antd";


const MemoContainer = () => {
    const [title, setTitle] = useRecoilState(memoTitle)
    const [contents, setContents] = useRecoilState(memoContents)
    const memoList = useRecoilValue(memoListSelector) as { title: string; contents: string; }[];
    const setMemoList = useSetRecoilState(memoListSelector);
    const onRemove = (memo: object) => setMemoList((old: { title: string; contents: string; }[]) => old.filter((m: object) => m != memo))

    const onCreateMemo = (memo: { title: string; contents: string; }) => setMemoList((old: any[]) => [...old, memo])

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

    const onChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContents(e.target.value)

    return (
        <>
            <div style={{display: "flex"}}>
                title :
                <input maxLength={10} value={title} placeholder={"title"} onChange={onChangeTitle}/>
                contents :
                <textarea style={{maxHeight: "300px", minHeight: "100px"}} value={contents} placeholder={"contents"}
                          onChange={onChangeContents}/>
                <button type="button" onClick={() => onCreateMemo({
                    title: title ? title : "none title",
                    contents: contents ? contents : "none contents"
                })}> 추가하기
                </button>
            </div>
            <Row gutter={[24, 24]}>
                {memoList && memoList.map(memo =>
                    (<>
                        <Col className="gutter-row" span={3}>
                            <Memo memo={memo} onRemove={onRemove}/>
                        </Col>
                    </>)
                )}
            </Row>
        </>
    );
}

export default MemoContainer;

