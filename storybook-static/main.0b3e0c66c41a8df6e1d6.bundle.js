(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"defaultTasks",(function(){return defaultTasks})),__webpack_require__.d(__webpack_exports__,"withPinnedTasks",(function(){return withPinnedTasks}));var _home_SROBAR22_www_projects_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(102),_home_SROBAR22_www_projects_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(73),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(53),_TaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(61),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(_home_SROBAR22_www_projects_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var defaultTasks=[_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"1",title:"Task 1"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"2",title:"Task 2"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"3",title:"Task 3"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"4",title:"Task 4"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"5",title:"Task 5"}),_objectSpread({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"6",title:"Task 6"})],withPinnedTasks=[].concat(Object(_home_SROBAR22_www_projects_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("TaskList",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:defaultTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("withPinnedTasks",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:withPinnedTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("loading",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({loading:!0,tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("empty",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}))}.call(this,__webpack_require__(89)(module))},194:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureInboxScreen}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74),_TaskList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(61);function PureInboxScreen(_ref){return _ref.error?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-face-sad"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title-message"},"Oh no!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title-page"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_2__.b,null))}PureInboxScreen.defaultProps={error:null};Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)((function(_ref2){return{error:_ref2.error}}))(PureInboxScreen);PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"})},292:function(module,exports,__webpack_require__){__webpack_require__(293),__webpack_require__(401),module.exports=__webpack_require__(402)},314:function(module,exports){},33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",(function(){return task})),__webpack_require__.d(__webpack_exports__,"actions",(function(){return actions}));var _home_SROBAR22_www_projects_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(53),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(101),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(195),_Task__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(60);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(_home_SROBAR22_www_projects_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.object)("task",_objectSpread({},task))},actions))})).add("pinned",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:_objectSpread({},task,{state:"TASK_PINNED"})},actions))})).add("archived",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:_objectSpread({},task,{state:"TASK_ARCHIVED"})},actions))})).add("long title",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:_objectSpread({},task,{title:"This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not"})},actions))}))}.call(this,__webpack_require__(89)(module))},402:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(53),req=(__webpack_require__(608),__webpack_require__(609));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(89)(module))},60:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title",style:{textOverflow:"ellipsis"}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})},608:function(module,exports,__webpack_require__){},609:function(module,exports,__webpack_require__){var map={"./InboxScreen.stories.js":610,"./Task.stories.js":33,"./TaskList.stories.js":192};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=609},61:function(module,__webpack_exports__,__webpack_require__){"use strict";var toConsumableArray=__webpack_require__(102),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Task=__webpack_require__(60),es=__webpack_require__(74),defineProperty=__webpack_require__(73),redux=__webpack_require__(140);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK";function taskStateReducer(taskState){return function(state,action){return _objectSpread({},state,{tasks:state.tasks.map((function(task){return task.id===action.id?_objectSpread({},task,{state:taskState}):task}))})}}Object(redux.b)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARCHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]});function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=react_default.a.createElement("div",{className:"loading-item"},react_default.a.createElement("span",{className:"glow-checkbox"}),react_default.a.createElement("span",{className:"glow-text"},react_default.a.createElement("span",null,"Loading")," ",react_default.a.createElement("span",null,"cool")," ",react_default.a.createElement("span",null,"state")));if(loading)return react_default.a.createElement("div",{className:"list-items"},LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow);if(0===tasks.length)return react_default.a.createElement("div",{className:"list-items"},react_default.a.createElement("div",{className:"wrapper-message"},react_default.a.createElement("span",{className:"icon-check"}),react_default.a.createElement("div",{className:"title-message"},"You have no tasks"),react_default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return react_default.a.createElement("div",{className:"list-items"},tasksInOrder.map((function(task){return react_default.a.createElement(Task.a,Object.assign({key:task.id,task:task},events))})))}__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList})),PureTaskList.defaultProps={loading:!1};__webpack_exports__.b=Object(es.b)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}}(id))},onPinTask:function onPinTask(id){return dispatch(function pinTask(id){return{type:actions_PIN_TASK,id:id}}(id))}}}))(PureTaskList);PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src/components/TaskList.js"})},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(74),_InboxScreen__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(194),_TaskList_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(192),store={getState:function getState(){return{tasks:_TaskList_stories__WEBPACK_IMPORTED_MODULE_5__.defaultTasks}},subscribe:function subscribe(){return 0},dispatch:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("dispatch")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("InboxScreen",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.a,{store:store},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_4__.a,null)})).add("error",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_4__.a,{error:"Something"})}))}.call(this,__webpack_require__(89)(module))}},[[292,1,2]]]);
//# sourceMappingURL=main.0b3e0c66c41a8df6e1d6.bundle.js.map