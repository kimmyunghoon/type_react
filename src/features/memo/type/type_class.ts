import {ApiCommand, MemoType} from "./interface";

export class MemoInfo implements MemoType {
    Contents: string;
    Id: string;
    Title: string;
    constructor(Title: string = "",Contents: string= "",Id: string= "") {
        this.Id = Id
        this.Title = Title
        this.Contents = Contents
    }
}

export class ApiCommandInfo implements ApiCommand {
    data: MemoType;
    list?: MemoType[];
    type: string;
    constructor(data: MemoType = new MemoInfo(),type: string= "none",list: MemoType[] = []) {
        this.data = data
        this.list = list
        this.type = type
    }
}