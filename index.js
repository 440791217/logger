/**
 * Created by mark on 2017/1/20.
 */
var colors = require('colors/safe');


function logger() {
    var debug=true;

    function install(Vue) {
        Vue.Logger = f();
    }


    function e(msg) {
        if (debug)
            console.error(colors.red(msg));
    }

    function i(msg) {
        if (debug)
            console.info(colors.blue(msg));
    }

    function d(msg) {
        if (debug)
            console.log(msg);
    }

    function open(can) {
        debug=can;
    }

    function f() {
        return {
            install:install,
            i: i,
            d: d,
            e: e,
            open:open,
            isDebug:debug,
        }
    }

    return f();
}
// var a=new logger();
// a.d("test");
module.exports=new logger();
