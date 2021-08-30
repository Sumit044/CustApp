export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger{
    Log(){

    }
}

export class ConsoleLogger extends BaseLogger {
    Log(){
        console.log("Using console logger");
    }
}

export class DBLogger extends BaseLogger {
    Log(){
        console.log("Using DB logger");
    }
}

export class FileLogger extends BaseLogger {
    Log(){
        console.log("Using File logger");
    }
}

