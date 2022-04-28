import {atom} from "recoil";
import {MemoType} from "../../memo/type/interface";
import {currentMemoListSelector} from "../../memo/recoil/selectors";

export const currentDateState = atom<Date>({
    key: 'currentDateState',
    default:new Date(),
});

export const waterState = atom<number>({
    key: 'waterState',
    default:0,
});
