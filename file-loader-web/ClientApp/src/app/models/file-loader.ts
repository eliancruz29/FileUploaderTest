export class FileLoader {
    constructor(
        public name: string = '',
        public size: number = 0,
        public type: string = '',
        public user: string = '',
        public date: Date = new Date()
    ) { }
}
