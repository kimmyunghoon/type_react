import React from 'react';
import {MemoType} from "../type/interface";

const Memo = ({
                  width = 300,
                  height = 300,
                  memo = {
                      Title: "none title",
                      Contents: "none contents",
                      Id: "none"
                  },
                  onRemove = (memo: MemoType) => {
                  }
              }) => {
    return (
        <div style={{
            border: "1px solid black",
            width: `${width}px`,
            height: `${height}px`,
            padding: "25px",
            margin: "25px"
        }}>
            <div style={{
                overflowY: "hidden",
                maxHeight: `${40}px`,
                maxWidth: `${width}px`,
            }}>
                <h2 style={{
                    display: "inline",
                    lineBreak: "anywhere"
                }}>{memo.Title}
                </h2>
            </div>

            <div style={{
                height: `${height / 5 * 3}px`,
                overflowY: "auto",
                overflowX: "hidden"
            }}>{memo.Contents}</div>
            <button style={{
                position: "relative",
                float: "right",
                zIndex:100,
            }} type="button" onClick={() => onRemove(memo)}>메모제거
            </button>
        </div>
    );
}

export default Memo;
