(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6758fd78"],{2506:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"j",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return d}));n("99af");var a=n("b775");function r(t){return Object(a["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function s(t){return Object(a["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(a["a"])({url:"/approvals/flows/".concat(t)})}function i(t){return Object(a["a"])({url:"/approvals/setting",method:"put",data:t})}function o(t){return Object(a["a"])({url:"/user/process/instance/".concat(t)})}function u(t){return Object(a["a"])({url:"/user/process/instance/tasks/".concat(t)})}function p(t){return Object(a["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function f(t){return Object(a["a"])({url:"/user/process/definition",params:t})}function d(t){return Object(a["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}},"616f":function(t,e,n){t.exports=n.p+"static/img/img.0615818f.jpeg"},c7e1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quitApproval"},[a("div",{staticClass:"contLeft"},[a("h2",[t._v(t._s(t.information.user_name)+"申请离职")]),a("div",{staticClass:"topTit"},[a("img",{attrs:{src:n("616f"),alt:""}}),a("div",{staticClass:"info"},[a("p",{staticClass:"name"},[a("strong",[t._v(t._s(t.information.username))])]),a("p",[a("span",[t._v("部门："+t._s(t.information.departmentName))])]),a("p",[a("span",[t._v("入职时间： "+t._s(t._f("formatDate")(t.information.timeOfEntry)))])])])]),a("div",{staticClass:"content"},[t._m(0),a("p",[a("span",[t._v("期望离职时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.exceptTime))+" ")]),a("p",[a("span",[t._v("离职原因：")]),t._v(" "+t._s(t.information.data.reason)+" ")])])]),a("div",{staticClass:"contRit"},[t._m(1),a("div",{staticClass:"Items"},[t._l(t.taskInstanceOutList,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"name"},[a("p",[t._v(t._s(t._f("formatDate")(e.handleTime)))])]),a("div",{staticClass:"act"},[a("strong",[t._v(t._s(e.shouldUserName))]),"3"==e.handleType?a("span",[t._v("审批驳回")]):"4"==e.handleType?a("span",[t._v("已撤销")]):"1"==e.handleType?a("span",[t._v("未开始")]):"2"==e.handleType?a("span",[t._v("审批通过")]):a("span",[t._v("审批中")])])])})),a("li")],2)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("申请类型：")]),t._v("离职 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topTit"},[n("strong",[t._v("审批记录")])])}],s=n("1da1"),c=(n("d3b7"),n("ace4"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("2506")),i={name:"UsersTableIndex",data:function(){return{approvalId:this.$route.params.id,information:{data:{}},taskInstanceOutList:[],imgs:""}},created:function(){this.getApprovalsDetail(),this.getApprovalsTaskDetail()},methods:{getApprovalsDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])(t.approvalId);case 2:t.information=e.sent,t.information.data=JSON.parse(t.information.procData);case 4:case"end":return e.stop()}}),e)})))()},getApprovalsTaskDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])(t.approvalId);case 2:t.taskInstanceOutList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},getReviewHistory:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["a"])(t);case 2:a=n.sent,e.imgs="data:image/png;base64,"+btoa(new Uint8Array(a.request.response).reduce((function(t,e){return t+String.fromCharCode(e)}),""));case 4:case"end":return n.stop()}}),n)})))()}}},o=i,u=n("2877"),p=Object(u["a"])(o,a,r,!1,null,null,null);e["default"]=p.exports}}]);