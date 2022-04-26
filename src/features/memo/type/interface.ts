
export interface MemoType {
    [key: string]: any;
    Title: string;
    Contents: string;
    Id: string;
}


export interface ApiCommand {
    type:string;
    data:MemoType;
    list?:MemoType[] | [];
}

