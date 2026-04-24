"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(w,o){
function m(e,r,i,a,j){var u,t;if(e<=0)return i;for(u=j,t=0;t<e;t++)i[u]=r+t,u+=a;return i}o.exports=m
});var q=s(function(z,c){
var x=require('@stdlib/strided-base-stride2offset/dist'),l=n();function R(e,r,i,a){return l(e,r,i,a,x(e,a))}c.exports=R
});var f=s(function(A,p){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),E=n();_(d,"ndarray",E);p.exports=d
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=f(),v,y=b(O(__dirname,"./native.js"));g(y)?v=h:v=y;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
