var appVersion = '1.01';

var store = window.localStorage;
//var domain = 'edu-20.com:3000';
var domain = 'www.matrixlms.com';
//var domain = 'www.neolms.com';
//var domainProtocol = 'http';
var domainProtocol = 'https';
var loginUrl = domainProtocol + '://' + domain + '/app/launch?version=' + appVersion + '&mobile_app=true&left_nav=true&new_left_nav=true&redirected=true';
var isFirst = true;
var wasOffline = false;
var isPageLoaded = false;
var pageReloadCount = 0;
var maxRetriesReached = false;
var fowardLink = '';
var schoolDomain = domain;
var schoolProtocol = domainProtocol;
var loggedIn = false;
var fileToUpload = '';
var pushToken = '';
var connectionTimeout = 1;
var connectionTimeoutSeconds = 300;
var loadedStylesheets = false;
var portalStylesheet = '';
var headerContent = '';
var leftNavContent = '';
var leftNavHeight = 0;
var mobileNavContent = '';
var addedMessageListener = false;
var pageHistory = [];
var pageHistoryMarker = -1;
var canGoBack = false;
var canGoForward = false;
var wentBack = false;
var wentForward = false;
var API = {};
var originalHeight = $(window).height();
var originalWidth = $(window).width();
var loadingOverlayTimeoutAmount = 2000;
var loadingOverlayShowAmount = 1500;
var loadingOverlayTimeout = 0;
var canHideLoadingOverlay = true;
var canShowLoadingOverlay = false;
var checkHideLoadingOverlay = 0;
var messages_box_offset = 0;
var canLogIn = true;
var headContent = '';
var bodyContent = '';
var editorContent = '';

(function($){
 $.fn.getStyleObject = function(){
 var dom = this.get(0);
 var style;
 var returns = {};
 if(window.getComputedStyle){
 var camelize = function(a,b){
 return b.toUpperCase();
 }
 style = window.getComputedStyle(dom, null);
 for(var i=0;i<style.length;i++){
 var prop = style[i];
 var camel = prop.replace(/\-([a-z])/g, camelize);
 var val = style.getPropertyValue(prop);
 returns[camel] = val;
 }
 return returns;
 }
 if(dom.currentStyle){
 style = dom.currentStyle;
 for(var prop in style){
 returns[prop] = style[prop];
 }
 return returns;
 }
 return this.css();
 }
 })(jQuery);

function isolatedScroll(element) {
	element.bind('mousewheel DOMMouseScroll', function(e) {
                 var delta = (e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail);
                 var bottomOverflow = ((this.scrollTop + $(this).outerHeight() - this.scrollHeight) >= 0);
                 var topOverflow = (this.scrollTop <= 0);
                 
                 if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
                 e.preventDefault();
                 }
                 });
    
	return element;
};