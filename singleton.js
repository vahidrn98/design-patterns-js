let instance = null;
class ConfigureVals{
    constructor(obj){
        this.xpoint = obj.xpoint || 0;
        this.ypoint = obj.ypoint || 0;
        this.shape = obj.shape || null;
    }

    static getConfiguration(obj){

        if(!instance){
            instance = new ConfigureVals(obj);
        }
        return instance;
    }
}