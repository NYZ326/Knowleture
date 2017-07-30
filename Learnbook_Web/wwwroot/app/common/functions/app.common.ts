class AppCommon {
    // Is Null or Empty check
    isNullOrEmpty(obj: any) {
        if (obj == null || obj.length === 0 || typeof obj !== "object") {
            return true;
        }
        else {
            return false;
        }
    }
}
export { AppCommon };