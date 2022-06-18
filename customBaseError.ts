import { ErrorMessageMapping } from "./errorMessageMapping";

export abstract class CustomBaseError extends Error {
    private errorCode: string;
    private moduleError: Error | null;

    constructor(errorCode: string, e?: Error) {
        super(); //this.messageはここではいれないが、super()は必須なので空で初期化
        this.errorCode = errorCode;
        this.moduleError = e ? e : null;
        this.message = this.getMessageByErrorCode();

        this.describeMessage();
    }

    // アプリケーションのエラー仕様に合わせて出力形式を整える
    // logger使って構造化ログ(json)で出力するのが本当はオススメ
    // そこらへんの形式などもここで統一化し、各エラークラスで共通化する
    private describeMessage(){
        const errorCode = this.errorCode;
        const errorType = this.constructor.name;
        const errorCategory = this.moduleError ? 'ModuleError' : 'ApplicationError';
        const moduleErrorMessage =  this.moduleError ? this.moduleError.message : '';
        const errorMessage =  this.message;

        console.error('ErrorCode: ' + errorCode);
        console.error('ErrorType: ' + errorType);
        console.error('ErrorCategory: ' + errorCategory);
        console.error('ModuleErrorMessage: ' + moduleErrorMessage);
        console.error('ErrorMessage: ' + errorMessage);
    }

    private getMessageByErrorCode(): string {
        const errorMessageMapping = new ErrorMessageMapping();

        const message = errorMessageMapping.getErrorMessage(this.errorCode);

        return message;
    }
} 