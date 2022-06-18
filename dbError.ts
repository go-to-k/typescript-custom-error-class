import { CustomBaseError } from "./customBaseError";

// DBのエラー系のカスタムサブクラス
export class DBError extends CustomBaseError {
    constructor(errorCode: string, e?: Error) {
        super(errorCode, e);
        this.doRecovery();
    }

    private doRecovery(){
        this.rollbackTransaction();
        this.releaseLock();
    }

    private rollbackTransaction(){
        console.error('~トランザクションのロールバック処理します。~');
    }

    private releaseLock(){
        console.error('~確保していたロックを解放します。~');
    }
}
