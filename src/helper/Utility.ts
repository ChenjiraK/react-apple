export default class Util {
    static normalObject(obj) {
        if (!obj) {
            return null;
        }
        var json = JSON.stringify(obj);
        var normalObj = JSON.parse(json);
        return normalObj;
    }
}