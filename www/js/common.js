var commonUtils = {
    gotoPage(name, data){
        let str = '';
        if(data){
            str = '?name=' + data;
        }
        location.href = name + '.html' + str;
    },

    isNullOrEmpty(value) {
        return value === null || value === undefined || value === '';
    },

    getQueryString(name) {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const r = window.location.search.substr(1).match(reg);
        if (!this.isNullOrEmpty(r)) {
            return r[2];
        }
        return null;
    }
};