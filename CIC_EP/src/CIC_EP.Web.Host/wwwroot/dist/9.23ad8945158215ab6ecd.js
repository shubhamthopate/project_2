(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+S4V":function(e,n,t){"use strict";t.r(n),t.d(n,"caLocale",(function(){return d}));var r=t("AgnY"),i="gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.".split("_"),o="ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des".split("_"),u=[/^gen/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^oct/i,/^nov/i,/^des/i],s=/^(gener|febrer|mar\xe7|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,d={abbr:"ca",months:"gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:function(e,n,t){return e?/-MMM-/.test(n)?o[Object(r.g)(e,t)]:i[Object(r.g)(e,t)]:i},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(gener|febrer|mar\xe7|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,monthsShortStrictRegex:/^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,monthsParse:u,longMonthsParse:u,shortMonthsParse:u,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"diu._dil._dim._dix._dij._div._dis.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(e){return"[avui a les] LT"},nextDay:function(e){return"[dema a les] LT"},nextWeek:function(e){return"dddd [a les] LT"},lastDay:function(e){return"[ahir a les] LT"},lastWeek:function(e){return"[el] dddd [passades les] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(er|on|er|rt|\xe9)/,ordinal:function(e){var n=Number(e);return n+(n>4?"\xe9":1===n||3===n?"r":2===n?"n":4===n?"t":"\xe9")},week:{dow:1,doy:4}}},"2EK0":function(e,n,t){"use strict";function r(e,n,t){var r=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e),r}function i(e,n,t,r,i,o,u){void 0===n&&(n=0),void 0===t&&(t=1),void 0===r&&(r=0),void 0===i&&(i=0),void 0===o&&(o=0),void 0===u&&(u=0);var s=new Date(e,n,t,r,i,o,u);return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),s}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))},AgnY:function(e,n,t){"use strict";function r(e,n){return void 0===n&&(n=!1),n?e.getUTCHours():e.getHours()}function i(e,n){return void 0===n&&(n=!1),n?e.getUTCMinutes():e.getMinutes()}function o(e,n){return void 0===n&&(n=!1),n?e.getUTCSeconds():e.getSeconds()}function u(e,n){return void 0===n&&(n=!1),n?e.getUTCMilliseconds():e.getMilliseconds()}function s(e){return e.getTime()}function d(e,n){return void 0===n&&(n=!1),n?e.getUTCDay():e.getDay()}function a(e,n){return void 0===n&&(n=!1),n?e.getUTCDate():e.getDate()}function c(e,n){return void 0===n&&(n=!1),n?e.getUTCMonth():e.getMonth()}function l(e,n){return void 0===n&&(n=!1),n?e.getUTCFullYear():e.getFullYear()}function m(e){return Math.floor(e.valueOf()/1e3)}t.d(n,"d",(function(){return r})),t.d(n,"f",(function(){return i})),t.d(n,"h",(function(){return o})),t.d(n,"e",(function(){return u})),t.d(n,"i",(function(){return s})),t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return a})),t.d(n,"g",(function(){return c})),t.d(n,"c",(function(){return l})),t.d(n,"j",(function(){return m})),t("2EK0")}}]);