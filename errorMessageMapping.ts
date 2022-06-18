export class ErrorMessageMapping {
    private mapping: { [key: string]: string; } = {};

    constructor(){
        this.mapping['A001'] = 'エラーメッセージA001になります。'; 
        this.mapping['A002'] = 'エラーメッセージA002になります。'; 
        this.mapping['A003'] = 'エラーメッセージA003になります。'; 
        this.mapping['A004'] = 'エラーメッセージA004になります。'; 
        this.mapping['A005'] = 'エラーメッセージA005になります。'; 
    }

    public getErrorMessage(mapKey: string): string {
        return mapKey in this.mapping ? this.mapping[mapKey] : 'Other Error.';
    }
}