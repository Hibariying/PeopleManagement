(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d311518"],{1276:function(t,e,a){"use strict";var n=a("d784"),r=a("44e7"),i=a("825a"),s=a("1d80"),o=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),h=a("d039"),m=[].push,p=Math.min,f=4294967295,b=!h((function(){return!RegExp(f,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(s(this)),i=void 0===a?f:a>>>0;if(0===i)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,i);var o,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,b=new RegExp(t.source,h+"g");while(o=d.call(b,n)){if(l=b.lastIndex,l>p&&(u.push(n.slice(p,o.index)),o.length>1&&o.index<n.length&&m.apply(u,o.slice(1)),c=o[0].length,p=l,u.length>=i))break;b.lastIndex===o.index&&b.lastIndex++}return p===n.length?!c&&b.test("")||u.push(""):u.push(n.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,a):n.call(String(r),e,a)},function(t,r){var s=a(n,t,this,r,n!==e);if(s.done)return s.value;var d=i(t),h=String(this),m=o(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),w=new m(b?d:"^(?:"+d.source+")",v),y=void 0===r?f:r>>>0;if(0===y)return[];if(0===h.length)return null===u(w,h)?[h]:[];var x=0,O=0,j=[];while(O<h.length){w.lastIndex=b?O:0;var D,k=u(w,b?h:h.slice(O));if(null===k||(D=p(c(w.lastIndex+(b?0:O)),h.length))===x)O=l(h,O,g);else{if(j.push(h.slice(x,O)),j.length===y)return j;for(var L=1;L<=k.length-1;L++)if(j.push(k[L]),j.length===y)return j;O=x=D}}return j.push(h.slice(x)),j}]}),!b)},6862:function(t,e,a){},acfc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("el-card",[a("h2",{staticClass:"centInfo"},[t._v(t._s(this.$route.params.month)+"月人事报表")]),a("el-tabs",{staticClass:"infoPosin",model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"first"}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("考勤统计")]),a(t.allList,{tag:"component",attrs:{"show-height":t.showHeight,month:this.$route.params.month},on:{archivingReportForm:t.archivingReportForm}})],1)],1)],1)],1)])},r=[],i=a("1da1"),s=(a("96cf"),a("f1e3")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boxInfo"},[a("div",{staticClass:"fr clearfix searchInfo"},[a("a",{staticClass:"el-button fr el-button--primary el-button--mini",attrs:{title:"导出"},on:{click:t.handelFileDownload}},[t._v("导出")])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],key:t.tableKey,staticStyle:{width:"100%","margin-top":"10px"},attrs:{data:t.dataList,"element-loading-text":"给我一点时间",fit:"","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"workNumber",label:"工号",width:"100"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机号",width:"200"}}),a("el-table-column",{attrs:{prop:"department",label:"部门",width:"200"}}),a("el-table-column",{attrs:{prop:"leaveDays",label:"事假",width:"100"}}),a("el-table-column",{attrs:{prop:"dayOffLeaveDays",label:"调休",width:"100"}}),a("el-table-column",{attrs:{prop:"normalDays",label:"正常",width:"100"}}),a("el-table-column",{attrs:{prop:"laterTimes",label:"迟到次数",width:"100"}}),a("el-table-column",{attrs:{prop:"earlyTimes",label:"早退次数",width:"100"}}),a("el-table-column",{attrs:{prop:"averageDailyNaturalDays",label:"日均时长",width:"150"}}),a("el-table-column",{attrs:{prop:"absenceDays",label:"旷工天数",width:"100"}}),a("el-table-column",{attrs:{prop:"whetherItIsFullOfWork",label:"是否全勤",width:"100"}}),a("el-table-column",{attrs:{prop:"actualAttendanceDaysAreOfficial",label:"实际出勤天数",width:"180"}}),a("el-table-column",{attrs:{prop:"attendanceDay",label:"应出勤工作日",width:"120"}}),a("el-table-column",{attrs:{prop:"salaryStandard",label:"计薪标准",width:"100"}}),a("el-table-column",{attrs:{prop:"officialSalaryDays",label:"计薪天数",width:"150"}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"page-size":t.requestParameters.pagesize,layout:"total, prev, pager, next",total:Number(t.counts)},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"butList"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"将当前报表存放至归档，归档可以多次，但只保留最后一次",placement:"top-start"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.archivingReportForm}},[t._v("归档"+t._s(t.month)+"月份报表")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"开始做下月考勤",placement:"top-start"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.createReportForm}},[t._v("新建报表")])],1)],1)],1)},l=[],c=(a("4de4"),a("d3b7"),a("b64b"),a("a9e3"),a("ac1f"),a("5319"),a("1276"),a("3ca3"),a("ddb0"),a("d81d"),{name:"RefortList",data:function(){return{dataList:[],seleList:[],text:"",tableKey:0,counts:"",barSearch:{alertText:""},requestParameters:{atteDate:""},isArchived:"",loading:!1,centerDialogVisible:!1,infoTip:"",month:this.$route.params.month}},computed:{list:function(){var t=this.requestParameters.keyword;return t?this.dataList.filter((function(e){return Object.keys(e).some((function(a){return String(e[a]).toLowerCase().indexOf(t)>-1}))})):this.dataList}},created:function(){this.requestParameters.atteDate=this.yearMonth,this.reportFormList()},methods:{reportFormList:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(s["p"])(e.requestParameters);case 3:e.dataList=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},handleLoadDataList:function(){this.reportFormList()},archivingReportForm:function(){var t=this,e=this.requestParameters.departmentId,a={departmentId:e,atteDate:this.month};this.$confirm("该月报表已归档过，重新归档将覆盖上一份报表，您确认要再次归档吗？","归档"+this.month+"报表").then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["a"])(a);case 2:t.$message.success("归档成功");case 3:case"end":return e.stop()}}),e)}))))},createReportForm:function(){var t=this;this.$confirm("新建报表会使得"+this.month+"月报表不能修改，且您上一次归档之后的修改将不会被保存。您确定现在就开始做下月考勤吗？","新建"+parseInt(Number(this.month)+Number(1))+"报表").then(Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.month.substring(0,4)+"-"+t.month.substring(4),a=t.getNextMonth(a).datas.replace("-",""),t.requestParameters.yearMonth=a,e.next=5,Object(s["n"])(t.requestParameters);case 5:t.$message.success("新建报表成功！"),t.$router.push("/attendances");case 7:case"end":return e.stop()}}),e)}))))},getNextMonth:function(t){var e=t.split("-"),a=e[0],n=e[1],r=a,i=parseInt(n)+1;13===i&&(r=parseInt(r)+1,i=1),i<10&&(i="0"+i);var s=r+"-"+i,o=i;return{datas:s,months:o}},handleSizeChange:function(t){this.requestParameters.pagesize=t,1===this.requestParameters.page&&this.reportFormList(this.requestParameters)},handleCurrentChange:function(t){this.requestParameters.page=t,this.reportFormList()},handelFileDownload:function(){var t=this;try{Promise.all([a.e("chunk-519483dc"),a.e("chunk-09290bef")]).then(a.bind(null,"4bf8")).then((function(e){var a=["姓名","工号","手机号","部门","事假","调休","正常","迟到次数","早退次数","日均时长","旷工天数","是否全勤","实际出勤天数","应出勤工作日","计薪标准","计薪天数"],n=["name","workNumber","mobile","department","leaveDays","dayOffLeaveDays","normalDays","laterTimes","earlyTimes","averageDailyNaturalDays","absenceDays","whetherItIsFullOfWork","actualAttendanceDaysAreOfficial","attendanceDay","salaryStandard","officialSalaryDays"],r=t.formatJson(n,t.dataList);e.export_json_to_excel({header:a,data:r,filename:"人事报表",autoWidth:!0,bookType:"xlsx"}),t.$message.success("导出报表成功！")}))}catch(e){this.$message.error(e)}},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))}}}),u=c,d=(a("dd21"),a("caf0"),a("2877")),h=Object(d["a"])(u,o,l,!1,null,"766b77b0",null),m=h.exports,p={name:"RefortList",components:{allList:m},data:function(){return{allList:"allList",activeName:"first",showHeight:40}},methods:{archivingReportForm:function(){var t=this;this.$confirm("报表归档将覆盖上一次归档记录，无法恢复。","归档确认").then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["d"])({month:t.$route.params.month});case 2:t.$message.success("归档报表成功");case 3:case"end":return e.stop()}}),e)}))))}}},f=p,b=Object(d["a"])(f,n,r,!1,null,null,null);e["default"]=b.exports},c3ba:function(t,e,a){},caf0:function(t,e,a){"use strict";a("6862")},dd21:function(t,e,a){"use strict";a("c3ba")},f1e3:function(t,e,a){"use strict";a.d(e,"i",(function(){return r})),a.d(e,"g",(function(){return i})),a.d(e,"q",(function(){return s})),a.d(e,"f",(function(){return o})),a.d(e,"e",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"n",(function(){return u})),a.d(e,"p",(function(){return d})),a.d(e,"m",(function(){return h})),a.d(e,"k",(function(){return m})),a.d(e,"c",(function(){return p})),a.d(e,"j",(function(){return f})),a.d(e,"o",(function(){return b})),a.d(e,"l",(function(){return g})),a.d(e,"b",(function(){return v})),a.d(e,"h",(function(){return w})),a.d(e,"d",(function(){return y}));a("99af");var n=a("b775");function r(t){return Object(n["a"])({url:"/attendances",params:t})}function i(t){return Object(n["a"])({url:"/attendances/archive/".concat(t.userId,"/").concat(t.yearMonth)})}function s(t){return Object(n["a"])({url:"/attendances/".concat(t.userId),method:"put",data:t})}function o(t){return Object(n["a"])({url:"/attendances/reports/year",params:t})}function l(t){return Object(n["a"])({url:"/attendances/reports/".concat(t.atteArchiveMonthlyId),params:t})}function c(t){return Object(n["a"])({url:"/attendances/archives",params:t})}function u(t){return Object(n["a"])({url:"/attendances/newReports",params:t})}function d(t){return Object(n["a"])({url:"/attendances/reports",params:t})}function h(t){return Object(n["a"])({url:"/cfg/leave",method:"put",data:t})}function m(t){return Object(n["a"])({url:"/cfg/leave/list",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/cfg/deduction",method:"put",data:t})}function f(t){return Object(n["a"])({url:"/cfg/ded/list",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/cfg/extDuty",method:"put",data:t})}function g(t){return Object(n["a"])({url:"/cfg/extDuty/item",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/cfg/atte",method:"put",data:t})}function w(t){return Object(n["a"])({url:"/cfg/atte/item",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/employees/archives/".concat(t.month),method:"put",data:t})}}}]);