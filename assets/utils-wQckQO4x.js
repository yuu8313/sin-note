function T(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function _(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const K=6048e5,rt=864e5;let at={};function N(){return at}function C(t,e){var m,o,s,f,u,c,y,x;const n=N(),r=(x=(y=(f=(s=e==null?void 0:e.weekStartsOn)!=null?s:(o=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:o.weekStartsOn)!=null?f:n.weekStartsOn)!=null?y:(c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)!=null?x:0,a=T(t),d=a.getDay(),g=(d<r?7:0)+d-r;return a.setDate(a.getDate()-g),a.setHours(0,0,0,0),a}function j(t){return C(t,{weekStartsOn:1})}function tt(t){const e=T(t),n=e.getFullYear(),r=_(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=j(r),d=_(t,0);d.setFullYear(n,0,4),d.setHours(0,0,0,0);const g=j(d);return e.getTime()>=a.getTime()?n+1:e.getTime()>=g.getTime()?n:n-1}function G(t){const e=T(t);return e.setHours(0,0,0,0),e}function I(t){const e=T(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function it(t,e){const n=G(t),r=G(e),a=+n-I(n),d=+r-I(r);return Math.round((a-d)/rt)}function ot(t){const e=tt(t),n=_(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),j(n)}function st(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ut(t){if(!st(t)&&typeof t!="number")return!1;const e=T(t);return!isNaN(Number(e))}function ct(t){const e=T(t),n=_(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const dt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ft=(t,e,n)=>{let r;const a=dt[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function L(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const lt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ht={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},mt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},gt={date:L({formats:lt,defaultWidth:"full"}),time:L({formats:ht,defaultWidth:"full"}),dateTime:L({formats:mt,defaultWidth:"full"})},wt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},yt=(t,e,n,r)=>wt[t];function F(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const g=t.defaultFormattingWidth||t.defaultWidth,m=n!=null&&n.width?String(n.width):g;a=t.formattingValues[m]||t.formattingValues[g]}else{const g=t.defaultWidth,m=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[m]||t.values[g]}const d=t.argumentCallback?t.argumentCallback(e):e;return a[d]}}const bt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},pt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},vt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Mt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},xt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ot={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kt=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Pt={ordinalNumber:kt,era:F({values:bt,defaultWidth:"wide"}),quarter:F({values:pt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:F({values:vt,defaultWidth:"wide"}),day:F({values:Mt,defaultWidth:"wide"}),dayPeriod:F({values:xt,defaultWidth:"wide",formattingValues:Ot,defaultFormattingWidth:"wide"})};function q(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],d=e.match(a);if(!d)return null;const g=d[0],m=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],o=Array.isArray(m)?St(m,u=>u.test(g)):Dt(m,u=>u.test(g));let s;s=t.valueCallback?t.valueCallback(o):o,s=n.valueCallback?n.valueCallback(s):s;const f=e.slice(g.length);return{value:s,rest:f}}}function Dt(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function St(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Wt(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],d=e.match(t.parsePattern);if(!d)return null;let g=t.valueCallback?t.valueCallback(d[0]):d[0];g=n.valueCallback?n.valueCallback(g):g;const m=e.slice(a.length);return{value:g,rest:m}}}const Tt=/^(\d+)(th|st|nd|rd)?/i,Yt=/\d+/i,Et={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_t={any:[/^b/i,/^(a|c)/i]},At={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ft={any:[/1/i,/2/i,/3/i,/4/i]},qt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ct={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Nt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ht={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Lt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Rt={ordinalNumber:Wt({matchPattern:Tt,parsePattern:Yt,valueCallback:t=>parseInt(t,10)}),era:q({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any"}),quarter:q({matchPatterns:At,defaultMatchWidth:"wide",parsePatterns:Ft,defaultParseWidth:"any",valueCallback:t=>t+1}),month:q({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:Ct,defaultParseWidth:"any"}),day:q({matchPatterns:jt,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),dayPeriod:q({matchPatterns:Ht,defaultMatchWidth:"any",parsePatterns:Lt,defaultParseWidth:"any"})},Bt={code:"en-US",formatDistance:ft,formatLong:gt,formatRelative:yt,localize:Pt,match:Rt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Qt(t){const e=T(t);return it(e,ct(e))+1}function Ut(t){const e=T(t),n=+j(e)-+ot(e);return Math.round(n/K)+1}function et(t,e){var f,u,c,y,x,k,D,v;const n=T(t),r=n.getFullYear(),a=N(),d=(v=(D=(y=(c=e==null?void 0:e.firstWeekContainsDate)!=null?c:(u=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)!=null?y:a.firstWeekContainsDate)!=null?D:(k=(x=a.locale)==null?void 0:x.options)==null?void 0:k.firstWeekContainsDate)!=null?v:1,g=_(t,0);g.setFullYear(r+1,0,d),g.setHours(0,0,0,0);const m=C(g,e),o=_(t,0);o.setFullYear(r,0,d),o.setHours(0,0,0,0);const s=C(o,e);return n.getTime()>=m.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Xt(t,e){var m,o,s,f,u,c,y,x;const n=N(),r=(x=(y=(f=(s=e==null?void 0:e.firstWeekContainsDate)!=null?s:(o=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:o.firstWeekContainsDate)!=null?f:n.firstWeekContainsDate)!=null?y:(c=(u=n.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)!=null?x:1,a=et(t,e),d=_(t,0);return d.setFullYear(a,0,r),d.setHours(0,0,0,0),C(d,e)}function Gt(t,e){const n=T(t),r=+C(n,e)-+Xt(n,e);return Math.round(r/K)+1}function p(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return p(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):p(n+1,2)},d(t,e){return p(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return p(t.getHours()%12||12,e.length)},H(t,e){return p(t.getHours(),e.length)},m(t,e){return p(t.getMinutes(),e.length)},s(t,e){return p(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return p(a,e.length)}},A={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},J={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return Y.y(t,e)},Y:function(t,e,n,r){const a=et(t,r),d=a>0?a:1-a;if(e==="YY"){const g=d%100;return p(g,2)}return e==="Yo"?n.ordinalNumber(d,{unit:"year"}):p(d,e.length)},R:function(t,e){const n=tt(t);return p(n,e.length)},u:function(t,e){const n=t.getFullYear();return p(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return p(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return p(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return p(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Gt(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):p(a,e.length)},I:function(t,e,n){const r=Ut(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):p(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Y.d(t,e)},D:function(t,e,n){const r=Qt(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):p(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),d=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(d);case"ee":return p(d,2);case"eo":return n.ordinalNumber(d,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),d=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(d);case"cc":return p(d,e.length);case"co":return n.ordinalNumber(d,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return p(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=A.noon:r===0?a=A.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=A.evening:r>=12?a=A.afternoon:r>=4?a=A.morning:a=A.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Y.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):p(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):p(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Y.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Y.s(t,e)},S:function(t,e){return Y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return $(r);case"XXXX":case"XX":return E(r);case"XXXXX":case"XXX":default:return E(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return $(r);case"xxxx":case"xx":return E(r);case"xxxxx":case"xxx":default:return E(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+V(r,":");case"OOOO":default:return"GMT"+E(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+V(r,":");case"zzzz":default:return"GMT"+E(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return p(r,e.length)},T:function(t,e,n){const r=t.getTime();return p(r,e.length)}};function V(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),d=r%60;return d===0?n+String(a):n+String(a)+e+p(d,2)}function $(t,e){return t%60===0?(t>0?"-":"+")+p(Math.abs(t)/60,2):E(t,e)}function E(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=p(Math.trunc(r/60),2),d=p(r%60,2);return n+a+e+d}const z=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},nt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},It=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return z(t,e);let d;switch(r){case"P":d=e.dateTime({width:"short"});break;case"PP":d=e.dateTime({width:"medium"});break;case"PPP":d=e.dateTime({width:"long"});break;case"PPPP":default:d=e.dateTime({width:"full"});break}return d.replace("{{date}}",z(r,e)).replace("{{time}}",nt(a,e))},Jt={p:nt,P:It},Vt=/^D+$/,$t=/^Y+$/,zt=["D","DD","YY","YYYY"];function Zt(t){return Vt.test(t)}function Kt(t){return $t.test(t)}function te(t,e,n){const r=ee(t,e,n);if(console.warn(r),zt.includes(t))throw new RangeError(r)}function ee(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ne=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,re=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ae=/^'([^]*?)'?$/,ie=/''/g,oe=/[a-zA-Z]/;function le(t,e,n){var f,u,c,y,x,k,D,v,O,M,w,b,i,h,l,Q,U,X;const r=N(),a=(u=(f=n==null?void 0:n.locale)!=null?f:r.locale)!=null?u:Bt,d=(M=(O=(k=(x=n==null?void 0:n.firstWeekContainsDate)!=null?x:(y=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:y.firstWeekContainsDate)!=null?k:r.firstWeekContainsDate)!=null?O:(v=(D=r.locale)==null?void 0:D.options)==null?void 0:v.firstWeekContainsDate)!=null?M:1,g=(X=(U=(h=(i=n==null?void 0:n.weekStartsOn)!=null?i:(b=(w=n==null?void 0:n.locale)==null?void 0:w.options)==null?void 0:b.weekStartsOn)!=null?h:r.weekStartsOn)!=null?U:(Q=(l=r.locale)==null?void 0:l.options)==null?void 0:Q.weekStartsOn)!=null?X:0,m=T(t);if(!ut(m))throw new RangeError("Invalid time value");let o=e.match(re).map(W=>{const S=W[0];if(S==="p"||S==="P"){const H=Jt[S];return H(W,a.formatLong)}return W}).join("").match(ne).map(W=>{if(W==="''")return{isToken:!1,value:"'"};const S=W[0];if(S==="'")return{isToken:!1,value:se(W)};if(J[S])return{isToken:!0,value:W};if(S.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:W}});a.localize.preprocessor&&(o=a.localize.preprocessor(m,o));const s={firstWeekContainsDate:d,weekStartsOn:g,locale:a};return o.map(W=>{if(!W.isToken)return W.value;const S=W.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Kt(S)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Zt(S))&&te(S,e,String(t));const H=J[S[0]];return H(m,S,a.localize,s)}).join("")}function se(t){const e=t.match(ae);return e?e[1].replace(ie,"'"):t}const P=[];for(let t=0;t<256;++t)P.push((t+256).toString(16).slice(1));function ue(t,e=0){return(P[t[e+0]]+P[t[e+1]]+P[t[e+2]]+P[t[e+3]]+"-"+P[t[e+4]]+P[t[e+5]]+"-"+P[t[e+6]]+P[t[e+7]]+"-"+P[t[e+8]]+P[t[e+9]]+"-"+P[t[e+10]]+P[t[e+11]]+P[t[e+12]]+P[t[e+13]]+P[t[e+14]]+P[t[e+15]]).toLowerCase()}let R;const ce=new Uint8Array(16);function de(){if(!R){if(typeof crypto=="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");R=crypto.getRandomValues.bind(crypto)}return R(ce)}const fe=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Z={randomUUID:fe};function he(t,e,n){var a,d,g;if(Z.randomUUID&&!e&&!t)return Z.randomUUID();t=t||{};const r=(g=(d=t.random)!=null?d:(a=t.rng)==null?void 0:a.call(t))!=null?g:de();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,ue(r)}var B={exports:{}};B.exports;(function(t){var e=function(){var n=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",d={};function g(o,s){if(!d[o]){d[o]={};for(var f=0;f<o.length;f++)d[o][o.charAt(f)]=f}return d[o][s]}var m={compressToBase64:function(o){if(o==null)return"";var s=m._compress(o,6,function(f){return r.charAt(f)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:m._decompress(o.length,32,function(s){return g(r,o.charAt(s))})},compressToUTF16:function(o){return o==null?"":m._compress(o,15,function(s){return n(s+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:m._decompress(o.length,16384,function(s){return o.charCodeAt(s)-32})},compressToUint8Array:function(o){for(var s=m.compress(o),f=new Uint8Array(s.length*2),u=0,c=s.length;u<c;u++){var y=s.charCodeAt(u);f[u*2]=y>>>8,f[u*2+1]=y%256}return f},decompressFromUint8Array:function(o){if(o==null)return m.decompress(o);for(var s=new Array(o.length/2),f=0,u=s.length;f<u;f++)s[f]=o[f*2]*256+o[f*2+1];var c=[];return s.forEach(function(y){c.push(n(y))}),m.decompress(c.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":m._compress(o,6,function(s){return a.charAt(s)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),m._decompress(o.length,32,function(s){return g(a,o.charAt(s))}))},compress:function(o){return m._compress(o,16,function(s){return n(s)})},_compress:function(o,s,f){if(o==null)return"";var u,c,y={},x={},k="",D="",v="",O=2,M=3,w=2,b=[],i=0,h=0,l;for(l=0;l<o.length;l+=1)if(k=o.charAt(l),Object.prototype.hasOwnProperty.call(y,k)||(y[k]=M++,x[k]=!0),D=v+k,Object.prototype.hasOwnProperty.call(y,D))v=D;else{if(Object.prototype.hasOwnProperty.call(x,v)){if(v.charCodeAt(0)<256){for(u=0;u<w;u++)i=i<<1,h==s-1?(h=0,b.push(f(i)),i=0):h++;for(c=v.charCodeAt(0),u=0;u<8;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1}else{for(c=1,u=0;u<w;u++)i=i<<1|c,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=0;for(c=v.charCodeAt(0),u=0;u<16;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1}O--,O==0&&(O=Math.pow(2,w),w++),delete x[v]}else for(c=y[v],u=0;u<w;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1;O--,O==0&&(O=Math.pow(2,w),w++),y[D]=M++,v=String(k)}if(v!==""){if(Object.prototype.hasOwnProperty.call(x,v)){if(v.charCodeAt(0)<256){for(u=0;u<w;u++)i=i<<1,h==s-1?(h=0,b.push(f(i)),i=0):h++;for(c=v.charCodeAt(0),u=0;u<8;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1}else{for(c=1,u=0;u<w;u++)i=i<<1|c,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=0;for(c=v.charCodeAt(0),u=0;u<16;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1}O--,O==0&&(O=Math.pow(2,w),w++),delete x[v]}else for(c=y[v],u=0;u<w;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1;O--,O==0&&(O=Math.pow(2,w),w++)}for(c=2,u=0;u<w;u++)i=i<<1|c&1,h==s-1?(h=0,b.push(f(i)),i=0):h++,c=c>>1;for(;;)if(i=i<<1,h==s-1){b.push(f(i));break}else h++;return b.join("")},decompress:function(o){return o==null?"":o==""?null:m._decompress(o.length,32768,function(s){return o.charCodeAt(s)})},_decompress:function(o,s,f){var u=[],c=4,y=4,x=3,k="",D=[],v,O,M,w,b,i,h,l={val:f(0),position:s,index:1};for(v=0;v<3;v+=1)u[v]=v;for(M=0,b=Math.pow(2,2),i=1;i!=b;)w=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=f(l.index++)),M|=(w>0?1:0)*i,i<<=1;switch(M){case 0:for(M=0,b=Math.pow(2,8),i=1;i!=b;)w=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=f(l.index++)),M|=(w>0?1:0)*i,i<<=1;h=n(M);break;case 1:for(M=0,b=Math.pow(2,16),i=1;i!=b;)w=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=f(l.index++)),M|=(w>0?1:0)*i,i<<=1;h=n(M);break;case 2:return""}for(u[3]=h,O=h,D.push(h);;){if(l.index>o)return"";for(M=0,b=Math.pow(2,x),i=1;i!=b;)w=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=f(l.index++)),M|=(w>0?1:0)*i,i<<=1;switch(h=M){case 0:for(M=0,b=Math.pow(2,8),i=1;i!=b;)w=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=f(l.index++)),M|=(w>0?1:0)*i,i<<=1;u[y++]=n(M),h=y-1,c--;break;case 1:for(M=0,b=Math.pow(2,16),i=1;i!=b;)w=l.val&l.position,l.position>>=1,l.position==0&&(l.position=s,l.val=f(l.index++)),M|=(w>0?1:0)*i,i<<=1;u[y++]=n(M),h=y-1,c--;break;case 2:return D.join("")}if(c==0&&(c=Math.pow(2,x),x++),u[h])k=u[h];else if(h===y)k=O+O.charAt(0);else return null;D.push(k),u[y++]=O+k.charAt(0),c--,O=k,c==0&&(c=Math.pow(2,x),x++)}}};return m}();t!=null?t.exports=e:typeof angular!="undefined"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})})(B);var me=B.exports;export{F as a,L as b,Wt as c,q as d,le as f,me as l,he as v};
