/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;
var FILLER_NAME = 'n.n';

if(!String.prototype.startsWith){
    String.prototype.startsWith = function (str) {
        return !this.indexOf(str);
    }
}

if(!Number.prototype.cutOff) {
	//using this because Number.toFixed() rounds
	Number.prototype.cutOff = function (precision) {
    var multiplier = Math.pow( 10, precision + 1 );
    //fix floating point precision
    var wholeNumber = Math.round( this * multiplier );
    return Math.floor( wholeNumber / 10 ) * 10 / multiplier;
	}
}


$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});
