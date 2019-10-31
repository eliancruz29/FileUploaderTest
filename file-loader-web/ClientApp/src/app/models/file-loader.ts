export class FileLoader {
    name: string;
    size: number;
    type: string;
    date: Date;
    user: string;

    constructor(data: any = {}) {
        this.name = data.name || '';
        this.size = data.size === undefined ? 0 : data.size;
        this.type = data.type || '';
        this.date = data.date === undefined ? new Date() : data.date;
        this.user = data.user || '';
    }
}
