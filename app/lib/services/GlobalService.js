let globals = {
    connected_to_internet: false
};

const GlobalService = {

    set: function (key, value) {
        if (key in globals) {
            globals[key] = value;
        } else {
            throw('key: ' + key + " isn't defined as a global variable")
        }
    },
    get: function (key) {
        if (key in globals) {
            return globals[key];
        } else {
            throw('key: ' + key + " isn't defined as a global variable")
        }
    }
};

export default GlobalService;
