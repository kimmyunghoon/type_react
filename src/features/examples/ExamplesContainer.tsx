import React from 'react';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";
import {charCountState} from "./recoil/selectors";
import {textState} from "./recoil/atoms";

const ExamplesContainer = () => {




    function CharacterCount() {
        const count = useRecoilValue(charCountState);

        return <>Character Count: {count}</>;
    }

    function TextInput() {
        const [text, setText] = useRecoilState(textState);

        const onChange = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
            setText(event.target.value);
        };

        return (
            <div>
                <input type="text" value={text} onChange={onChange}/>
                <br/>
                Echo: {text}
            </div>
        );
    }

    function CharacterCounter() {
        return (
            <div>
                <TextInput/>
                <CharacterCount/>
            </div>
        );
    }

    return (
        <div>
            {CharacterCounter()}
        </div>
    );
}

export default ExamplesContainer;

