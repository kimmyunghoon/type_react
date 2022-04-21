
export interface MemoType {
    Title: string;
    Contents: string;
    Id: string;
}


export interface ApiCommand {
    type:string;
    data:object;
    list?:MemoType[];
}
