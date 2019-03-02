define(function() {
    function getParms() {
        var parmas = location.search;

        if (!parmas) {
            return
        }
        parmas = parmas.slice(1);

        return JSON.parse('{"' + parmas.replace(/=/g, '":"').replace(/&/g, '","') + '"}')
    }
    return getParms

})