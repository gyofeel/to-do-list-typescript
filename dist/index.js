!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";e.__esModule=!0,e.updateListChildElements=e.getEl=void 0,e.getEl=function(t){return document.querySelector(t)};e.updateListChildElements=function(t,n){if(t&&n&&!n.length){var i=e.getEl(t),r=n.map((function(t){return function(t){var e=t.content,n=t.priority,i=t.isDone;return'\n        <div class="item" id="'+t.getId()+'">\n            <span class="is-done '+(i?"ok":"")+'">\n            <span class="content">'+e+'</span>\n            <span class="priority '+n+'"></span>\n            <span class="remove">삭제</span>\n        </div>\n    '}(t)})).join("");i.innerHTML="",i.innerHTML=r}}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(2),r=n(3),o=new i.Store("todolisttypescriptstoreid");new r.Controller(o).initialize()},function(t,e,n){"use strict";e.__esModule=!0,e.Store=void 0;var i=n(0),r=function(){function t(t){this.id="",this.progressList=[],this.doneList=[],this.inputPriority="medium",this.id=t}return t.prototype.getProgressItem=function(t){return this.progressList.find((function(e){return e.getId()===t}))},t.prototype.getDoneItem=function(t){return this.doneList.find((function(e){return e.getId()===t}))},t.prototype.getProgressList=function(){return this.progressList},t.prototype.getDoneList=function(){return this.doneList},t.prototype.addProgressItem=function(t){if(t)return this.progressList.push(t),this.progressList.sort((function(t,e){return t.getDate()-e.getDate()})),i.updateListChildElements(".in-progress",this.progressList),t},t.prototype.addDoneItem=function(t){if(t)return this.doneList.push(t),this.doneList.sort((function(t,e){return t.getDate()-e.getDate()})),i.updateListChildElements(".done",this.doneList),t},t.prototype.moveProgressToDone=function(t){var e=this.getProgressItem(t);if(e)return this.addDoneItem(e),this.removeProgressItem(t),e},t.prototype.moveDoneToProgress=function(t){var e=this.getDoneItem(t);if(e)return this.addDoneItem(e),this.removeProgressItem(t),e},t.prototype.removeProgressItem=function(t){var e=this.progressList.findIndex((function(e){return e.getId()===t}));if(-1!==e)return this.progressList.splice(e,1),i.updateListChildElements(".done",this.progressList),this.progressList},t.prototype.removeDoneItem=function(t){var e=this.doneList.findIndex((function(e){return e.getId()===t}));if(-1!==e)return this.doneList.splice(e,1),i.updateListChildElements(".done",this.doneList),this.doneList},t.prototype.clearProgressList=function(){this.progressList=[]},t.prototype.clearDoneList=function(){this.doneList=[]},t}();e.Store=r},function(t,e,n){"use strict";e.__esModule=!0,e.Controller=void 0;var i=n(4),r=n(0),o=function(){function t(t){this.store=null,this.progressIdList=[],this.doneIdList=[],this.store=t}return t.prototype.initialize=function(){var t,e,n=this;if(console.log("test"),this.store){null===(t=r.getEl(".input-button"))||void 0===t||t.addEventListener("click",this.clickAddItemEventHandler,!1),null===(e=r.getEl(".priority-buttons"))||void 0===e||e.addEventListener("click",this.clickPriorityEventHandler,!0);var i=this.store.getProgressList(),o=this.store.getDoneList();i&&i.length&&(this.progressIdList=i.map((function(t){return t.getId()}))),o&&o.length&&(this.doneIdList=o.map((function(t){return t.getId()}))),this.progressIdList.forEach((function(t){var e=r.getEl("#"+t).children;e[0].addEventListener("click",n.clickToggleDoneEventHandler,!1),e[3].addEventListener("click",n.clickRemoveEventHandler,!1)})),this.doneIdList.forEach((function(t){var e=r.getEl("#"+t).children;e[0].addEventListener("click",n.clickToggleDoneEventHandler,!1),e[3].addEventListener("click",n.clickRemoveEventHandler,!1)}))}else console.error("this.store is null!")},t.prototype.clickToggleDoneEventHandler=function(t){},t.prototype.clickRemoveEventHandler=function(t){},t.prototype.clickAddItemEventHandler=function(t){console.log(t);var e=r.getEl(".item-input");console.log(e.value);var n=e.value;this.store.addProgressItem(new i.Item(n,this.store.inputPriority))},t.prototype.clickPriorityEventHandler=function(t){console.log(t)},t}();e.Controller=o},function(t,e,n){"use strict";e.__esModule=!0,e.Item=void 0;var i=function(){function t(t,e){this.content="",this.priority="medium",this.isDone=!1,this.date=Date.now(),this.id="id-"+this.date,this.content=t,this.priority=e}return t.prototype.getDate=function(){return this.date},t.prototype.getId=function(){return this.id},t}();e.Item=i}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWxzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9TdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvSXRlbS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImdldEVsIiwic2VsZWN0b3JzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXBkYXRlTGlzdENoaWxkRWxlbWVudHMiLCJzZWxlY3RvciIsImxpc3QiLCJsZW5ndGgiLCJ3cmFwRWxlbWVudCIsIml0ZW1FbGVtZW50cyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwicHJpb3JpdHkiLCJpc0RvbmUiLCJnZXRJZCIsImNyZWF0ZUl0ZW1FbGVtZW50Iiwiam9pbiIsImlubmVySFRNTCIsInN0b3JlIiwiU3RvcmUiLCJDb250cm9sbGVyIiwiaW5pdGlhbGl6ZSIsImlkIiwicHJvZ3Jlc3NMaXN0IiwiZG9uZUxpc3QiLCJpbnB1dFByaW9yaXR5IiwidGhpcyIsImdldFByb2dyZXNzSXRlbSIsImZpbmQiLCJlbCIsImdldERvbmVJdGVtIiwiZ2V0UHJvZ3Jlc3NMaXN0IiwiZ2V0RG9uZUxpc3QiLCJhZGRQcm9ncmVzc0l0ZW0iLCJwdXNoIiwic29ydCIsImEiLCJiIiwiZ2V0RGF0ZSIsImFkZERvbmVJdGVtIiwibW92ZVByb2dyZXNzVG9Eb25lIiwicmVtb3ZlUHJvZ3Jlc3NJdGVtIiwibW92ZURvbmVUb1Byb2dyZXNzIiwidGFyZ2V0SWR4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwicmVtb3ZlRG9uZUl0ZW0iLCJjbGVhclByb2dyZXNzTGlzdCIsImNsZWFyRG9uZUxpc3QiLCJwcm9ncmVzc0lkTGlzdCIsImRvbmVJZExpc3QiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrQWRkSXRlbUV2ZW50SGFuZGxlciIsImNsaWNrUHJpb3JpdHlFdmVudEhhbmRsZXIiLCJmb3JFYWNoIiwiY2hpbGROb2Rlc0xpc3QiLCJjaGlsZHJlbiIsImNsaWNrVG9nZ2xlRG9uZUV2ZW50SGFuZGxlciIsImNsaWNrUmVtb3ZlRXZlbnRIYW5kbGVyIiwiZXJyb3IiLCJlIiwiaW5wdXRFbCIsIml0ZW1Db250ZW50IiwiSXRlbSIsImRhdGUiLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNT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QmQsWUFBQUYsNEJBQVIsU0FBb0NHLEtBRzVCLFlBQUFGLHdCQUFSLFNBQWdDRSxLQUd4QixZQUFBUix5QkFBUixTQUFpQ1EsR0FDN0JYLFFBQVFDLElBQUlVLEdBRVosSUFBTUMsRUFBVSxFQUFBaEUsTUFBTSxlQUN0Qm9ELFFBQVFDLElBQUlXLEVBQVEvRSxPQUNwQixJQUFNZ0YsRUFBY0QsRUFBUS9FLE1BQzVCMEMsS0FBS1IsTUFBTWUsZ0JBQWdCLElBQUksRUFBQWdDLEtBQUtELEVBQWF0QyxLQUFLUixNQUFNTyxpQkFHeEQsWUFBQThCLDBCQUFSLFNBQWtDTyxHQUM5QlgsUUFBUUMsSUFBSVUsSUFFcEIsRUF2REEsR0FBYSxFQUFBMUMsYywyRENGYixpQkFDSSxXQUFtQlQsRUFBU0MsR0FLckIsS0FBQUQsUUFBaUIsR0FDakIsS0FBQUMsU0FBb0IsU0FDcEIsS0FBQUMsUUFBaUIsRUFDaEIsS0FBQXFELEtBQWNDLEtBQUtDLE1BQ25CLEtBQUE5QyxHQUFZLE1BQU1JLEtBQUt3QyxLQVIzQnhDLEtBQUtmLFFBQVVBLEVBQ2ZlLEtBQUtkLFNBQVdBLEVBZXhCLE9BTkksWUFBQTBCLFFBQUEsV0FDSSxPQUFPWixLQUFLd0MsTUFFaEIsWUFBQXBELE1BQUEsV0FDSSxPQUFPWSxLQUFLSixJQUVwQixFQWxCQSxHQUFhLEVBQUEyQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9JdGVtJztcblxuZXhwb3J0IGNvbnN0IGdldEVsID0gKHNlbGVjdG9yczpzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpO1xufVxuXG4vLyBleHBvcnQgY29uc3QgYWRkRXZlbnQgPSAoc2VsZWN0b3JzOnN0cmluZywgdHlwZTpzdHJpbmcsIGNhbGxiYWNrOkZ1bmN0aW9uLCB1c2VDYXB0dXJlOmJvb2xlYW4pID0+IHtcbi8vICAgICBjb25zdCB0YXJnZXQgPSBnZXRFbChzZWxlY3RvcnMpO1xuLy8gICAgIGlmICghdGFyZ2V0KSB7XG4vLyAgICAgICAgIHJldHVybjtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gKHNlbGVjdG9yczpzdHJpbmcsIHR5cGU6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbiwgdXNlQ2FwdHVyZTpib29sZWFuKSA9PiB7XG4vLyAgICAgcmV0dXJuIGdldEVsKHNlbGVjdG9ycykucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4vLyB9XG5cbmNvbnN0IGNyZWF0ZUl0ZW1FbGVtZW50ID0gKGl0ZW06SXRlbSkgPT4ge1xuICAgIGNvbnN0IHsgY29udGVudCwgcHJpb3JpdHksIGlzRG9uZSB9ID0gaXRlbTtcbiAgICBjb25zdCBpZCA9IGl0ZW0uZ2V0SWQoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIGlkPVwiJHtpZH1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtZG9uZSAke2lzRG9uZSA/ICdvaycgOiAnJ31cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29udGVudFwiPiR7Y29udGVudH08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5ICR7cHJpb3JpdHl9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZW1vdmVcIj7sgq3soJw8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlTGlzdENoaWxkRWxlbWVudHMgPSAoc2VsZWN0b3I6c3RyaW5nLCBsaXN0OkFycmF5PEl0ZW0+KSA9PiB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhbGlzdCB8fCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHdyYXBFbGVtZW50ID0gZ2V0RWwoc2VsZWN0b3IpO1xuXG4gICAgY29uc3QgaXRlbUVsZW1lbnRzID0gbGlzdC5tYXAoKGl0ZW0pID0+IGNyZWF0ZUl0ZW1FbGVtZW50KGl0ZW0pKS5qb2luKCcnKTtcbiAgICB3cmFwRWxlbWVudCEuaW5uZXJIVE1MID0gJyc7XG4gICAgd3JhcEVsZW1lbnQhLmlubmVySFRNTCA9IGl0ZW1FbGVtZW50czsgICAgXG59IiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3RzL1N0b3JlJztcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL3RzL0NvbnRyb2xsZXInO1xuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgndG9kb2xpc3R0eXBlc2NyaXB0c3RvcmVpZCcpO1xuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHN0b3JlKTtcblxuY29udHJvbGxlci5pbml0aWFsaXplKCk7IiwiaW1wb3J0IHsgUHJpb3JpdHkgfSBmcm9tICcuL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCB7IHVwZGF0ZUxpc3RDaGlsZEVsZW1lbnRzIH0gZnJvbSAnLi91dGlscy92aWV3JztcblxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcihpZDpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgaWQ6c3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBwcm9ncmVzc0xpc3Q6QXJyYXk8SXRlbT4gPSBbXTtcbiAgICBwcml2YXRlIGRvbmVMaXN0OkFycmF5PEl0ZW0+ID0gW107XG4gICAgcHVibGljIGlucHV0UHJpb3JpdHk6UHJpb3JpdHkgPSAnbWVkaXVtJztcblxuICAgIHB1YmxpYyBnZXRQcm9ncmVzc0l0ZW0oaWQ6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzTGlzdC5maW5kKGVsID0+IGVsLmdldElkKCkgPT09IGlkKTtcbiAgICB9XG4gICAgcHVibGljIGdldERvbmVJdGVtKGlkOnN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5kb25lTGlzdC5maW5kKGVsID0+IGVsLmdldElkKCkgPT09IGlkKTtcbiAgICB9XG4gICAgcHVibGljIGdldFByb2dyZXNzTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NMaXN0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0RG9uZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbmVMaXN0O1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUHJvZ3Jlc3NJdGVtKGl0ZW06SXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2dyZXNzTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnByb2dyZXNzTGlzdC5zb3J0KChhLCBiKSA9PiBhLmdldERhdGUoKSAtIGIuZ2V0RGF0ZSgpKTtcblxuICAgICAgICB1cGRhdGVMaXN0Q2hpbGRFbGVtZW50cygnLmluLXByb2dyZXNzJywgdGhpcy5wcm9ncmVzc0xpc3QpO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkRG9uZUl0ZW0oaXRlbTpJdGVtKSB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9uZUxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5kb25lTGlzdC5zb3J0KChhLCBiKSA9PiBhLmdldERhdGUoKSAtIGIuZ2V0RGF0ZSgpKTtcblxuICAgICAgICB1cGRhdGVMaXN0Q2hpbGRFbGVtZW50cygnLmRvbmUnLCB0aGlzLmRvbmVMaXN0KTtcblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcHVibGljIG1vdmVQcm9ncmVzc1RvRG9uZShpZDpzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0UHJvZ3Jlc3NJdGVtKGlkKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGREb25lSXRlbShpdGVtKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9ncmVzc0l0ZW0oaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSAgIFxuICAgIHB1YmxpYyBtb3ZlRG9uZVRvUHJvZ3Jlc3MoaWQ6c3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdldERvbmVJdGVtKGlkKTtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGREb25lSXRlbShpdGVtKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQcm9ncmVzc0l0ZW0oaWQpO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlUHJvZ3Jlc3NJdGVtKGlkOnN0cmluZykge1xuICAgICAgICBjb25zdCB0YXJnZXRJZHggPSB0aGlzLnByb2dyZXNzTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZ2V0SWQoKSA9PT0gaWQpO1xuICAgICAgICBpZiAodGFyZ2V0SWR4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NMaXN0LnNwbGljZSh0YXJnZXRJZHgsIDEpO1xuXG4gICAgICAgIHVwZGF0ZUxpc3RDaGlsZEVsZW1lbnRzKCcuZG9uZScsIHRoaXMucHJvZ3Jlc3NMaXN0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9ncmVzc0xpc3Q7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVEb25lSXRlbShpZDpzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWR4ID0gdGhpcy5kb25lTGlzdC5maW5kSW5kZXgoZWwgPT4gZWwuZ2V0SWQoKSA9PT0gaWQpO1xuICAgICAgICBpZiAodGFyZ2V0SWR4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9uZUxpc3Quc3BsaWNlKHRhcmdldElkeCwgMSk7XG4gICAgICAgIFxuICAgICAgICB1cGRhdGVMaXN0Q2hpbGRFbGVtZW50cygnLmRvbmUnLCB0aGlzLmRvbmVMaXN0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kb25lTGlzdDtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyUHJvZ3Jlc3NMaXN0KCkge1xuICAgICAgICB0aGlzLnByb2dyZXNzTGlzdCA9IFtdO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJEb25lTGlzdCgpIHtcbiAgICAgICAgdGhpcy5kb25lTGlzdCA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgeyBnZXRFbCB9IGZyb20gJy4vdXRpbHMvdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTpTdG9yZSkge1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgfVxuICAgIHByaXZhdGUgc3RvcmU6U3RvcmUgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHByb2dyZXNzSWRMaXN0OkFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIGRvbmVJZExpc3Q6QXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgIGlmICghdGhpcy5zdG9yZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGhpcy5zdG9yZSBpcyBudWxsIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdldEVsKCcuaW5wdXQtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0FkZEl0ZW1FdmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgZ2V0RWwoJy5wcmlvcml0eS1idXR0b25zJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1ByaW9yaXR5RXZlbnRIYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NMaXN0ID0gdGhpcy5zdG9yZS5nZXRQcm9ncmVzc0xpc3QoKTtcbiAgICAgICAgY29uc3QgZG9uZUxpc3QgPSB0aGlzLnN0b3JlLmdldERvbmVMaXN0KCk7XG4gICAgICAgIGlmIChwcm9ncmVzc0xpc3QgJiYgcHJvZ3Jlc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0lkTGlzdCA9IHByb2dyZXNzTGlzdC5tYXAoZWwgPT4gZWwuZ2V0SWQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRvbmVMaXN0ICYmIGRvbmVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kb25lSWRMaXN0ID0gZG9uZUxpc3QubWFwKGVsID0+IGVsLmdldElkKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc0lkTGlzdC5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNMaXN0ID0gZ2V0RWwoYCMke2lkfWApIS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkTm9kZXNMaXN0WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1RvZ2dsZURvbmVFdmVudEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIGNoaWxkTm9kZXNMaXN0WzNdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja1JlbW92ZUV2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kb25lSWRMaXN0LmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2Rlc0xpc3QgPSBnZXRFbChgIyR7aWR9YCkhLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGROb2Rlc0xpc3RbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrVG9nZ2xlRG9uZUV2ZW50SGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgY2hpbGROb2Rlc0xpc3RbM10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrUmVtb3ZlRXZlbnRIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xpY2tUb2dnbGVEb25lRXZlbnRIYW5kbGVyKGU6RXZlbnQpIHtcblxuICAgIH1cbiAgICBwcml2YXRlIGNsaWNrUmVtb3ZlRXZlbnRIYW5kbGVyKGU6RXZlbnQpIHtcblxuICAgIH1cbiAgICBwcml2YXRlIGNsaWNrQWRkSXRlbUV2ZW50SGFuZGxlcihlOkV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAvLyBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgaW5wdXRFbCA9IGdldEVsKCcuaXRlbS1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RWwudmFsdWUpO1xuICAgICAgICBjb25zdCBpdGVtQ29udGVudCA9IGlucHV0RWwudmFsdWU7XG4gICAgICAgIHRoaXMuc3RvcmUuYWRkUHJvZ3Jlc3NJdGVtKG5ldyBJdGVtKGl0ZW1Db250ZW50LCB0aGlzLnN0b3JlLmlucHV0UHJpb3JpdHkpKTtcbiAgICAgICAgXG4gICAgfVxuICAgIHByaXZhdGUgY2xpY2tQcmlvcml0eUV2ZW50SGFuZGxlcihlOkV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4vY29uZmlnL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIEl0ZW0ge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZW50LCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRlbnQ6c3RyaW5nID0gJyc7XG4gICAgcHVibGljIHByaW9yaXR5OlByaW9yaXR5ID0gJ21lZGl1bSc7XG4gICAgcHVibGljIGlzRG9uZTpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkYXRlOm51bWJlciA9IERhdGUubm93KCk7XG4gICAgcHJpdmF0ZSBpZDpzdHJpbmcgPSBgaWQtJHt0aGlzLmRhdGV9YDtcblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGU7XG4gICAgfVxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==