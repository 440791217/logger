/**
 * Created by mark on 2017/1/20.
 */
var log=require("../index.js")
log.open(false)
require('./test1')
log.d("log is "+log.isDebug);
log.open(false);
log.d("log is "+log.isDebug);