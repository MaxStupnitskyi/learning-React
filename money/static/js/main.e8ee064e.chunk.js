(this.webpackJsonpmoney=this.webpackJsonpmoney||[]).push([[0],{32:function(t,e,a){},33:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),s=a(26),i=a.n(s),r=a(24),o=a(4),l=a(16),d=a(6),u=a(7),h=a(9),j=a(8),b=a(13),p=a(3),v=(a(32),a(33),a(0)),g=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"header",children:Object(v.jsxs)("nav",{className:"nav",children:[Object(v.jsx)(b.b,{className:"nav__item",activeClassName:"selected",to:"/",exact:!0,children:"Today"}),Object(v.jsx)(b.b,{className:"nav__item",activeClassName:"selected",to:"/balance",children:"Balance"}),Object(v.jsx)(b.b,{className:"nav__item",activeClassName:"selected",to:"/budget",children:"Budget"}),Object(v.jsx)(b.b,{className:"nav__item",activeClassName:"selected",to:"/report",children:"Report"})]})})}}]),a}(c.a.Component),m=a(18),O=(a(40),a(41),new Date),f=(new Date).getTimezoneOffset(),x=O.getTime()-1e3*f*60,y=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={date:new Date(x).toISOString().slice(0,16),sum:"",category:t.props.categories.expences[0],account:t.props.accounts[0],type:"expences"},t}return Object(u.a)(a,[{key:"onAddedTransaction",value:function(t){t.preventDefault(),this.props.onAddedTransaction({cat:this.state.category,price:"expences"===this.state.type?Number(-"".concat(this.state.sum)):+this.state.sum,date:new Date(this.state.date).toISOString(),id:this.props.lastestID,account:this.state.account.id}),this.setState({sum:"",category:this.props.categories.expences[0],account:this.props.accounts[0],type:"expences"})}},{key:"changeType",value:function(t){this.setState({type:t.target.value,category:this.props.categories[t.target.value]&&this.props.categories[t.target.value][0]})}},{key:"render",value:function(){var t=this,e=this.props.categories[this.state.type]&&this.props.categories[this.state.type].map((function(t){return Object(v.jsx)("option",{value:t,children:t},t)})),a=this.props.accounts.map((function(t){return Object(v.jsx)("option",{value:t.title,children:t.title},t.title)}));return Object(v.jsxs)("div",{className:"add-expences",children:[Object(v.jsx)("h1",{className:"title",children:"New Transaction"}),this.props.accounts.length>0?Object(v.jsxs)("form",{onSubmit:function(e){return t.onAddedTransaction(e)},children:[Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Type:"}),Object(v.jsxs)("select",{className:"add-expences__input",value:this.state.type,onChange:function(e){return t.changeType(e)},children:[Object(v.jsx)("option",{value:"expences",children:"Expence"},"expences"),Object(v.jsx)("option",{value:"incomes",children:"Income"},"incomes")]})]}),Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Account:"}),Object(v.jsx)("select",{className:"add-expences__input",value:this.state.account.title,onChange:function(e){return t.setState({account:t.props.accounts.find((function(t){return t.title===e.target.value}))})},children:a})]}),Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Sum:"}),Object(v.jsx)("input",{required:!0,className:"add-expences__input",type:"text",value:this.state.sum,placeholder:"Enter the sum",onChange:function(e){"0"!==e.target.value.slice(0,1)&&e.target.value.match(/^[0-9]*\.?[0-9]{0,2}$/)&&t.setState({sum:e.target.value})}})]}),"transfer"!==this.state.type&&Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Category:"}),Object(v.jsx)("select",{className:"add-expences__input",value:this.state.category,onChange:function(e){return t.setState({category:e.target.value})},children:e})]}),Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Date:"}),Object(v.jsx)("input",{className:"add-expences__input",type:"datetime-local",value:this.state.date,onChange:function(e){return t.setState({date:e.target.value})}})]}),Object(v.jsx)("button",{className:"button add-expences__button",children:"Add"})]}):Object(v.jsx)("div",{children:"Please, create new account"})]})}}]),a}(c.a.Component),_=(a(42),(new Date).getTimezoneOffset()),S=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).transaction=[],t.state={edit:null,editAccount:"",editSum:"",editCategory:"",editDate:""},t.showPopover=function(e,a){var n=new Date(a.date).getTime()-1e3*_*60;e.currentTarget.contains(e.target)&&!e.target.closest(".transactions__popover")&&t.setState({edit:a.id,editAccount:a.account,editSum:Math.abs(a.price),editCategory:a.cat,editDate:new Date(n).toISOString().slice(0,16)})},t.hidePopover=function(e){!t.state.edit&&0!==t.state.edit||t.transaction.map((function(t){return null===t||void 0===t?void 0:t.contains(e.target)})).includes(!0)||t.setState({edit:null})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.hidePopover)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.hidePopover)}},{key:"filteredTransactions",value:function(t){var e=this;switch(this.props.filter){case"date":return t.filter((function(t){var a,n=new Date(t.date).setHours(0,0,0,0);return new Date(n).toISOString()===(null===(a=e.props.selectedDate)||void 0===a?void 0:a.toISOString())})).sort((function(t,e){return new Date(e.date)-new Date(t.date)}));case"acc":return t.filter((function(t){return t.account===e.props.filterAcc})).sort((function(t,e){return new Date(e.date)-new Date(t.date)}));default:return t.sort((function(t,e){return new Date(e.date)-new Date(t.date)}))}}},{key:"showedTransactions",value:function(t){var e=this;return t.filter((function(t){return t.date>=e.props.activeStartDate&&t.date<new Date(e.props.activeEndDate).toISOString()}))}},{key:"render",value:function(){var t=this,e=this.showedTransactions(this.filteredTransactions(this.props.transactions)),a={month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},n=e.map((function(e){var n=Object(v.jsxs)("div",{className:"transactions__popover".concat(t.state.edit===e.id?" visible":""),children:[Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Account:"}),Object(v.jsx)("select",{className:"add-expences__input",value:t.state.editAccount,onChange:function(e){return t.setState({editAccount:t.props.accounts.find((function(t){return t.id===+e.target.value})).id})},children:t.props.accounts.map((function(t){return Object(v.jsx)("option",{value:t.id,children:t.title},t.id)}))})]}),Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Sum:"}),Object(v.jsx)("input",{className:"add-expences__input",type:"text",value:t.state.editSum,placeholder:"Enter the sum",onChange:function(e){"0"!==e.target.value.slice(0,1)&&e.target.value.match(/^[0-9]*\.?[0-9]{0,2}$/)&&t.setState({editSum:e.target.value})}})]}),Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Category:"}),Object(v.jsx)("select",{className:"add-expences__input",value:t.state.editCategory,onChange:function(e){return t.setState({editCategory:e.target.value})},children:t.props.categories["".concat(e.price>0?"incomes":"expences")].map((function(t){return Object(v.jsx)("option",{value:t,children:t},t)}))})]}),Object(v.jsxs)("div",{className:"add-expences__item",children:[Object(v.jsx)("label",{className:"add-expences__label",children:"Date:"}),Object(v.jsx)("input",{className:"add-expences__input",type:"datetime-local",value:t.state.editDate,onChange:function(e){return t.setState({editDate:e.target.value})}})]}),Object(v.jsx)("button",{onClick:function(){t.props.onEditTransaction([t.state.edit,t.state.editAccount,t.state.editSum,t.state.editCategory,t.state.editDate]),t.setState({edit:null})},className:"button transactions__popover__button",children:"Save Changes"}),Object(v.jsx)("button",{onClick:function(){t.props.onEditTransaction([t.state.edit,t.state.editAccount,t.state.editSum,t.state.editCategory,t.state.editDate,!0]),t.setState({edit:null})},className:"button transactions__popover__button danger",children:"Delete"})]});return Object(v.jsxs)("div",{ref:function(a){return t.transaction[e.id]=a},onClick:function(a){return t.showPopover(a,e)},className:"transactions__item",children:[Object(v.jsxs)("div",{className:"transactions__item__main",children:[Object(v.jsx)("div",{className:"transactions__item__cat",children:e.cat}),Object(v.jsx)("div",{className:"transactions__item__date",children:new Date(e.date).toLocaleString(window.navigator.language,a)})]}),Object(v.jsx)("div",{className:"transactions__item__price ".concat(e.price>0?"income":"expence"),children:String(e.price).includes(".")?Math.abs(e.price).toFixed(2):Math.abs(e.price)}),n]},e.id)}));return Object(v.jsx)("div",{className:"transactions",children:n.length>0?n:Object(v.jsx)("h4",{className:"transactions__none",children:"You don't have any transactions yet"})})}}]),a}(c.a.Component),D=(a(43),new Date((new Date).setDate(1)).toISOString()),N=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={selectedDate:null,filter:null,activeStartDate:D,activeEndDate:new Date(new Date(D).setMonth(new Date(D).getMonth()+1)).toISOString()},t}return Object(u.a)(a,[{key:"onChangeDate",value:function(t){this.setState({selectedDate:t})}},{key:"onSelectDay",value:function(t,e){e.currentTarget.classList.contains("react-calendar__tile--active")?(this.setState({filter:null}),e.currentTarget.classList.remove("react-calendar__tile--active")):(e.currentTarget.classList.add("react-calendar__tile--active"),this.setState({filter:"date"}))}},{key:"changeMonth",value:function(t){var e=new Date(t).setMonth(t.getMonth()+1);this.setState({activeStartDate:new Date(t).toISOString(),activeEndDate:new Date(e).toISOString(),filter:null})}},{key:"markActiveDays",value:function(t,e){var a=new Set;return this.props.transactions.forEach((function(t){a.add(new Date(t.date).setHours(0,0,0,0))})),"month"===e&&Array.from(a).map((function(e){return new Date(t).getTime()===new Date(new Date(e)).getTime()?Object(v.jsx)("div",{className:"mark"},t):null}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("transactions",JSON.stringify(this.props.transactions)),localStorage.setItem("accounts",JSON.stringify(this.props.accounts))}},{key:"render",value:function(){var t=this;return Object(v.jsxs)("div",{className:"today",children:[Object(v.jsx)(m.a,{minDetail:"year",showNeighboringMonth:!1,onChange:function(e){return t.onChangeDate(e)},onClickDay:function(e,a){return t.onSelectDay(e,a)},value:this.state.selectedDate,onActiveStartDateChange:function(e){var a=e.activeStartDate;return t.changeMonth(a)},tileContent:function(e){var a=e.date,n=e.view;return t.markActiveDays(a,n)}}),Object(v.jsxs)("div",{className:"today__transactions",children:[Object(v.jsx)("h1",{className:"title",children:"Transactions"}),Object(v.jsx)(S,{activeStartDate:this.state.activeStartDate,activeEndDate:this.state.activeEndDate,transactions:this.props.transactions,filter:this.state.filter,selectedDate:this.state.selectedDate,accounts:this.props.accounts,categories:this.props.categories,onEditTransaction:this.props.onEditTransaction})]}),Object(v.jsx)(y,{onAddedTransaction:this.props.onAddedTransaction,categories:this.props.categories,accounts:this.props.accounts,lastestID:this.props.lastestID})]})}}]),a}(c.a.Component),w=(a(44),(new Date).setDate(1)),C=new Date(w).getTimezoneOffset()/60;w=new Date(w).setHours(-C,0,0,0);var T=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={showEdit:!1,title:"",balance:"",activeStartDate:new Date(w).toISOString(),activeEndDate:(new Date).toISOString(),filter:null,filterAcc:null,deleteAccount:!1,deletedAccount:null},t}return Object(u.a)(a,[{key:"onAccountAdded",value:function(t){t.preventDefault(),this.props.onAccountAdded({title:this.state.title,balance:this.state.balance}),this.setState({title:"",balance:""})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("accounts",JSON.stringify(this.props.accounts)),localStorage.setItem("transactions",JSON.stringify(this.props.transactions))}},{key:"confirmAccountDelete",value:function(t,e){t.stopPropagation(),this.setState({deleteAccount:!0,deletedAccount:e})}},{key:"render",value:function(){var t=this,e=this.props.accounts.map((function(e){return Object(v.jsxs)("div",{onClick:function(){return t.setState((function(t){return{filter:null!==t.filter&&t.filterAcc===e.id?null:"acc",filterAcc:t.filterAcc===e.id?null:e.id}}))},className:"account",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"account__title",children:e.title}),Object(v.jsx)("div",{className:"account__balance",children:String(e.balance).includes(".")?e.balance.toFixed(2):e.balance})]}),Object(v.jsxs)("div",{children:[e.id===t.state.filterAcc?"\u2713  ":"",t.state.showEdit&&Object(v.jsx)("button",{className:"account__delete",onClick:function(a){return t.confirmAccountDelete(a,e.id)},children:"-"})]})]},e.title)}));return Object(v.jsxs)("div",{className:"balance",children:[Object(v.jsxs)("div",{className:"balance__accounts",children:[Object(v.jsx)("h1",{className:"title",children:"Accounts"}),e,Object(v.jsx)("button",{className:"button edit",onClick:function(){return t.setState({showEdit:!t.state.showEdit})},children:this.state.showEdit?"Done":"Edit"}),this.state.showEdit&&Object(v.jsxs)("form",{className:"add-account",onSubmit:function(e){return t.onAccountAdded(e)},children:[Object(v.jsx)("label",{className:"add-account__title",children:"Create new Account"}),Object(v.jsx)("input",{type:"text",placeholder:"Title",autoFocus:!0,required:!0,value:this.state.title,onChange:function(e){return t.setState({title:e.target.value})}}),Object(v.jsx)("input",{type:"text",required:!0,placeholder:"Balance",value:this.state.balance,onChange:function(e){e.target.value.match(/^[0-9]*\.?[0-9]{0,2}$/)&&t.setState({balance:e.target.value})}}),Object(v.jsx)("button",{className:"button",children:"Add"})]})]}),Object(v.jsxs)("div",{className:"balance__transactions",children:[Object(v.jsxs)("div",{className:"transactions__filter",children:[Object(v.jsx)("input",{type:"date",value:this.state.activeStartDate.slice(0,10),onChange:function(e){t.setState({activeStartDate:new Date(e.target.value).toISOString()})}}),Object(v.jsx)("span",{children:"\u2014"}),Object(v.jsx)("input",{type:"date",value:this.state.activeEndDate.slice(0,10),min:this.state.activeStartDate.slice(0,10),onChange:function(e){t.setState({activeEndDate:new Date(e.target.value).toISOString()})}})]}),Object(v.jsx)(S,{activeStartDate:this.state.activeStartDate,activeEndDate:this.state.activeEndDate,transactions:this.props.transactions,filter:this.state.filter,filterAcc:this.state.filterAcc,onEditTransaction:this.props.onEditTransaction,accounts:this.props.accounts,categories:this.props.categories})]}),this.state.deleteAccount&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"overlay",onClick:function(){return t.setState({deleteAccount:!1})}}),Object(v.jsxs)("div",{className:"modal deleteAccount",children:[Object(v.jsx)("h3",{className:"modal__title",children:"Are you sure you want to delete account? All account transactions will be deleted too"}),Object(v.jsxs)("div",{className:"modal__buttons",children:[Object(v.jsx)("button",{onClick:function(){t.props.deleteAccount(t.state.deletedAccount),t.setState({deleteAccount:!1})},className:"button modal__button danger",children:"Delete account"}),Object(v.jsx)("button",{className:"button modal__button",onClick:function(){return t.setState({deleteAccount:!1})},children:"Cancel"})]})]})]})]})}}]),a}(c.a.Component),A=(a(45),new Date((new Date).setDate(1)).toISOString()),k=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={activeStartDate:A,activeEndDate:new Date(new Date(A).setMonth(new Date(A).getMonth()+1)).toISOString(),filter:null,showedTransactions:[],activeCategory:null,showEdit:!1},t}return Object(u.a)(a,[{key:"filterTransactions",value:function(t){var e=this,a=this.props.categories[t].map((function(a){var n=e.props.transactions.filter((function(t){return t.cat===a&&t.date>=e.state.activeStartDate&&t.date<e.state.activeEndDate})),c=n.length>0?n.reduce((function(t,e){return t+Math.abs(e.price)}),0):0,s=Object(v.jsxs)("div",{className:"category__wrap",total:c,children:[Object(v.jsxs)("button",{className:"category".concat(e.state.activeCategory===a?" active":"").concat(e.state.showEdit?" editable":""),onClick:function(){e.showTransactions(n),e.setState({activeCategory:a})},children:[Object(v.jsx)("div",{className:"category__title",children:a}),Object(v.jsx)("div",{className:"category__total",children:String(c).includes(".")?c.toFixed(2):c})]}),e.state.showEdit&&Object(v.jsx)("button",{className:"delete-category",onClick:function(){return e.props.deleteCategory([t,a,c])},children:"-"})]},a);return(e.state.showEdit||n.length>0)&&s})).filter((function(t){return!1!==t})).sort((function(t,e){return e.props.total-t.props.total})),n=a.reduce((function(t,e){return t+e.props.total}),0).toFixed(2);return{html:a,monthTotal:n}}},{key:"showTransactions",value:function(t){this.setState({showedTransactions:t})}},{key:"changeMonth",value:function(t){var e=new Date(t).setMonth(t.getMonth()+1);this.setState({activeStartDate:new Date(t).toISOString(),activeEndDate:new Date(e).toISOString(),showedTransactions:[],activeCategory:null})}},{key:"toggleCategories",value:function(){this.setState((function(t){return{showEdit:!t.showEdit}}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("accounts",JSON.stringify(this.props.accounts)),localStorage.setItem("transactions",JSON.stringify(this.props.transactions))}},{key:"render",value:function(){var t=this,e=this.filterTransactions("expences"),a=this.filterTransactions("incomes");return Object(v.jsxs)("div",{className:"budget",children:[Object(v.jsx)("div",{className:"calendar",children:Object(v.jsx)(m.a,{minDetail:"month",onActiveStartDateChange:function(e){var a=e.activeStartDate;return t.changeMonth(a)}})}),Object(v.jsx)("button",{className:"button edit",onClick:function(){return t.toggleCategories()},children:this.state.showEdit?"Done":"Edit"}),Object(v.jsxs)("div",{className:"budget__content",children:[Object(v.jsxs)("div",{className:"budget__categories",style:this.state.showedTransactions.length>0?{flexBasis:"60%"}:{flexBasis:"100%"},children:[Object(v.jsxs)("div",{className:"budget__category expences",children:[Object(v.jsxs)("div",{className:"budget__category__header",children:[Object(v.jsx)("h1",{className:"title",children:"Expences"}),Object(v.jsx)("div",{className:"total",children:e.monthTotal})]}),Object(v.jsxs)("div",{className:"categories",children:[e.html,this.state.showEdit&&Object(v.jsx)("button",{onClick:function(){return t.props.onCategoryAdded("expence")},className:"category",children:"Add Category"})]})]}),Object(v.jsxs)("div",{className:"budget__category incomes",children:[Object(v.jsxs)("div",{className:"budget__category__header",children:[Object(v.jsx)("h1",{className:"title",children:"Incomes"}),Object(v.jsx)("div",{className:"total",children:a.monthTotal})]}),Object(v.jsxs)("div",{className:"categories",children:[a.html,this.state.showEdit&&Object(v.jsx)("button",{onClick:function(){return t.props.onCategoryAdded("income")},className:"category",children:"Add Category"})]})]}),Object(v.jsxs)("div",{className:"budget__footer",children:[Object(v.jsx)("h1",{className:"title",children:"Balance:"}),Object(v.jsx)("div",{className:"total",children:(a.monthTotal-e.monthTotal).toFixed(2)})]})]}),Object(v.jsx)("div",{className:"budget__transactions",style:this.state.showedTransactions.length>0?{flexBasis:"40%",display:"block"}:{display:"none"},children:Object(v.jsx)(S,{transactions:this.state.showedTransactions,activeStartDate:this.state.activeStartDate,activeEndDate:this.state.activeEndDate,onEditTransaction:this.props.onEditTransaction,accounts:this.props.accounts,categories:this.props.categories})})]})]})}}]),a}(c.a.Component),E=(a(46),a.p+"static/media/angle.e6dc94b0.svg"),I=(new Date).setDate(1),M=new Date(I).getTimezoneOffset()/60;I=new Date(I).setHours(-M,0,0,0);var F=0;function J(t){var e=t.value,a=t.title,n=t.width,c=t.onSelected;return Object(v.jsxs)("button",{onClick:c,className:"report__block ".concat(a.toLowerCase()),style:{width:"".concat(n,"%")},children:[Object(v.jsx)("div",{children:a})," ",Object(v.jsx)("div",{children:e})]})}var B=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={activeStartDate:new Date(I).toISOString(),activeEndDate:(new Date).toISOString(),showDetail:!1},t}return Object(u.a)(a,[{key:"showBudget",value:function(t){var e=this,a=this.props.transactions;return a=a.filter((function(t){return t.date>=e.state.activeStartDate&&t.date<new Date(e.state.activeEndDate).toISOString()})),"expences"===t?a.filter((function(t){return t.price<0})):a.filter((function(t){return t.price>0}))}},{key:"setDetail",value:function(t){!t.length>0||this.setState({showDetail:t[0].price>0?"incomes":"expences"})}},{key:"showDetail",value:function(t){var e=this,a={};t.forEach((function(t){a.hasOwnProperty(t.cat)?a[t.cat]+=Math.abs(t.price):a[t.cat]=Math.abs(t.price)}));var n=Object.entries(a).sort((function(t,e){return Math.abs(e[1])-Math.abs(t[1])})),c=n.map((function(t){var a=t[1]===n[0][1]?100:100*Math.abs(t[1])/Math.abs(n[0][1]);return Object(v.jsxs)("div",{className:"report__block ".concat("incomes"===e.state.showDetail?"incomes":"expences"),style:{width:"".concat(a,"%")},children:[Object(v.jsx)("div",{children:t[0]}),Object(v.jsx)("div",{children:String(t[1]).includes(".")?t[1].toFixed(2):t[1]})]},F++)}));return Object(v.jsx)("div",{children:c})}},{key:"backToOverall",value:function(){this.setState({showDetail:!1})}},{key:"render",value:function(){var t=this,e=this.showBudget("expences"),a=this.showBudget("incomes"),n=Number(e.reduce((function(t,e){return t+Math.abs(e.price)}),0).toFixed(2)),c=Number(a.reduce((function(t,e){return t+Math.abs(e.price)}),0).toFixed(2)),s=50,i=50;return c>n&&(s=100,i=100*n/c),c<n&&(s=100*c/n,i=100),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"transactions__filter",children:[Object(v.jsx)("input",{type:"date",value:this.state.activeStartDate.slice(0,10),onChange:function(e){t.setState({activeStartDate:new Date(e.target.value).toISOString()})}}),Object(v.jsx)("span",{children:"\u2014"}),Object(v.jsx)("input",{type:"date",value:this.state.activeEndDate.slice(0,10),min:this.state.activeStartDate.slice(0,10),onChange:function(e){t.setState({activeEndDate:new Date(new Date(e.target.value).setHours(23,59,59,999)).toISOString()})}})]}),Object(v.jsxs)("div",{className:"report__content",children:[!this.state.showDetail&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"incomes",children:Object(v.jsx)(J,{title:"Incomes",value:c,width:s||0,onSelected:function(){return t.setDetail(a)}})}),Object(v.jsx)("div",{className:"expences",children:Object(v.jsx)(J,{onSelected:function(){return t.setDetail(e)},title:"Expences",value:n,width:i||0})})]}),"incomes"===this.state.showDetail&&Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return t.backToOverall()},children:Object(v.jsx)("img",{src:E,alt:"back",style:{width:"10px"}})}),this.showDetail(a)]}),"expences"===this.state.showDetail&&Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return t.backToOverall()},children:Object(v.jsx)("img",{src:E,alt:"back",style:{width:"10px"}})}),this.showDetail(e)]})]})]})}}]),a}(c.a.Component),P=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={transactions:JSON.parse(localStorage.getItem("transactions"))||[],categories:JSON.parse(localStorage.getItem("categories"))||{expences:["Food","Travel","Health","Car","House","Gifts","Entertainment","Restaurants, cafe"],incomes:["Salary","Dividend","Gift"]},accounts:JSON.parse(localStorage.getItem("accounts"))||[{title:"Cash",balance:0,id:0}],addNewCategory:!1,newCategoryType:null,addCategoryValue:"",deleteCategory:!1,deletedCategory:null,moveTransactionsTo:null},t}return Object(u.a)(a,[{key:"onAddedTransaction",value:function(t){this.setState((function(e){var a=t.account,n=e.accounts.findIndex((function(t){return t.id===a})),c=Object(l.a)({},e.accounts[n]);return c.balance=+c.balance+ +t.price,{transactions:[].concat(Object(o.a)(e.transactions),[t]),accounts:[].concat(Object(o.a)(e.accounts.slice(0,n)),[c],Object(o.a)(e.accounts.slice(n+1)))}}))}},{key:"onAccountAdded",value:function(t){this.setState((function(e){var a,n=e.accounts;return{accounts:[].concat(Object(o.a)(n),[{title:t.title,balance:t.balance,id:(null===(a=n.slice(-1)[0])||void 0===a?void 0:a.id)+1||0}])}}))}},{key:"onCategoryAdded",value:function(t){this.setState({addNewCategory:!0,newCategoryType:t})}},{key:"addCategory",value:function(t){t.preventDefault(),this.setState((function(t){var e=t.categories;return"income"===t.newCategoryType&&(e={expences:t.categories.expences,incomes:[].concat(Object(o.a)(t.categories.incomes),[t.addCategoryValue])}),"expence"===t.newCategoryType&&(e={expences:[].concat(Object(o.a)(t.categories.expences),[t.addCategoryValue]),incomes:t.categories.incomes}),localStorage.setItem("categories",JSON.stringify(e)),{categories:e,addNewCategory:!1,newCategoryType:null,addCategoryValue:""}}))}},{key:"generateID",value:function(){return this.state.transactions.length>0?this.state.transactions.length:0}},{key:"onCategoryDeleted",value:function(t){var e=this;this.setState((function(a){return{deleteCategory:!e.state.deleteCategory,deletedCategory:t,moveTransactionsTo:a.categories[t[0]][0]!==t[1]?a.categories[t[0]][0]:a.categories[t[0]][1]}}),(function(){return console.log(e.state.categories[e.state.deletedCategory[0]].length)}))}},{key:"deleteCategory",value:function(t,e,a){var n=this,c=Object(r.a)(e,3),s=c[0],i=c[1],d=c[2];t.preventDefault(),console.log(s,i,d);var u=this.state.categories[s].findIndex((function(t){return t===i}));this.setState((function(t){var e=t.transactions,n=e.filter((function(t){return t.cat===i})).map((function(t){return Object(l.a)(Object(l.a)({},t),{},{cat:a})})),c=e.filter((function(t){return t.cat!==i})),r=[].concat(Object(o.a)(n),Object(o.a)(c));return{categories:"expences"===s?{expences:[].concat(Object(o.a)(t.categories.expences.slice(0,u)),Object(o.a)(t.categories.expences.slice(u+1))),incomes:t.categories.incomes}:{expences:t.categories.expences,incomes:[].concat(Object(o.a)(t.categories.incomes.slice(0,u)),Object(o.a)(t.categories.incomes.slice(u+1)))},transactions:r,deleteCategory:!1}}),(function(){localStorage.setItem("categories",JSON.stringify(n.state.categories)),localStorage.setItem("transactions",JSON.stringify(n.state.transactions))}))}},{key:"onEditTransaction",value:function(t){var e=Object(r.a)(t,6),a=e[0],n=e[1],c=e[2],s=e[3],i=e[4],d=e[5],u=void 0!==d&&d,h=this.state.transactions.findIndex((function(t){return t.id===a})),j={cat:s,price:this.state.transactions[h].price>0?+c:-c,date:i,id:a,account:n},b=this.state.accounts.findIndex((function(t){return t.id===n})),p=Object(l.a)({},this.state.accounts[b]);u&&(p.balance=p.balance-=this.state.transactions[h].price),u||(p.balance=this.state.transactions[h].price>0?p.balance+=this.state.transactions[h].price-c:p.balance-=this.state.transactions[h].price+ +c);var v=u?[].concat(Object(o.a)(this.state.transactions.slice(0,h)),Object(o.a)(this.state.transactions.slice(h+1))):[].concat(Object(o.a)(this.state.transactions.slice(0,h)),[j],Object(o.a)(this.state.transactions.slice(h+1)));this.setState((function(t){var e=t.accounts;return{transactions:v,accounts:[].concat(Object(o.a)(e.slice(0,b)),[p],Object(o.a)(e.slice(b+1)))}}))}},{key:"deleteAccount",value:function(t){var e=this.state.accounts.findIndex((function(e){return e.id===t})),a=this.state.transactions.slice(0).filter((function(e){return e.account!==t}));this.setState((function(t){var n=t.accounts;return{accounts:[].concat(Object(o.a)(n.slice(0,e)),Object(o.a)(n.slice(e+1))),transactions:a}}))}},{key:"render",value:function(){var t=this,e=this.generateID();return Object(v.jsx)(b.a,{children:Object(v.jsxs)("div",{className:"app",children:[Object(v.jsx)(g,{}),Object(v.jsxs)(p.c,{children:[Object(v.jsx)(p.a,{path:"/",exact:!0,children:Object(v.jsx)(N,{transactions:this.state.transactions,categories:this.state.categories,accounts:this.state.accounts,onAddedTransaction:function(e){return t.onAddedTransaction(e)},lastestID:e,onEditTransaction:function(e){return t.onEditTransaction(e)}})}),Object(v.jsx)(p.a,{path:"/balance",children:Object(v.jsx)(T,{accounts:this.state.accounts,onAccountAdded:function(e){return t.onAccountAdded(e)},transactions:this.state.transactions,categories:this.state.categories,onEditTransaction:function(e){return t.onEditTransaction(e)},deleteAccount:function(e){return t.deleteAccount(e)}})}),Object(v.jsx)(p.a,{path:"/budget",children:Object(v.jsx)(k,{onCategoryAdded:function(e){return t.onCategoryAdded(e)},categories:this.state.categories,transactions:this.state.transactions,deleteCategory:function(e){return t.onCategoryDeleted(e)},accounts:this.state.accounts,onEditTransaction:function(e){return t.onEditTransaction(e)}})}),Object(v.jsx)(p.a,{path:"/report",children:Object(v.jsx)(B,{transactions:this.state.transactions})})]}),this.state.addNewCategory&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"overlay",onClick:function(){return t.setState({addNewCategory:!1})}}),Object(v.jsxs)("div",{className:"modal newCategory",children:[Object(v.jsx)("h3",{className:"modal__title",children:"Please, enter the name of the category"}),Object(v.jsxs)("form",{className:"modal__form",onSubmit:function(e){return t.addCategory(e)},children:[Object(v.jsx)("input",{type:"text",placeholder:"Type new category name",value:this.state.addCategoryValue,onChange:function(e){return t.setState({addCategoryValue:e.target.value})}}),Object(v.jsx)("button",{type:"submit",className:"button modal__button",children:"Add"})]})]})]}),this.state.deleteCategory&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"overlay",onClick:function(){return t.setState({deleteCategory:!1})}}),Object(v.jsx)("div",{className:"modal deleteCategory",children:this.state.categories[this.state.deletedCategory[0]].length<=1?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h3",{className:"modal__title",children:"You can't delete your last category"}),Object(v.jsx)("div",{className:"modal__buttons",children:Object(v.jsx)("button",{onClick:function(){return t.setState({deleteCategory:!1})},className:"button modal__button",children:"Got it"})})]}):Object(v.jsxs)("form",{className:"modal__form",onSubmit:function(e){return t.deleteCategory(e,t.state.deletedCategory,t.state.moveTransactionsTo)},children:[0===this.state.deletedCategory[2]?Object(v.jsx)("h3",{className:"modal__title",children:"Are you sure you want to delete category?"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h3",{className:"modal__title",children:"Please, select category for moving transactions"}),Object(v.jsx)("select",{onChange:function(e){return t.setState({moveTransactionsTo:e.target.value})},children:this.state.categories[this.state.deletedCategory[0]].filter((function(e){return e!==t.state.deletedCategory[1]})).map((function(t){return Object(v.jsx)("option",{value:t,children:t},t)}))})]}),Object(v.jsxs)("div",{className:"modal__buttons",children:[Object(v.jsx)("button",{disabled:this.state.categories[this.state.deletedCategory[0]].length<=1,type:"submit",className:"button danger",children:"Delete category"}),Object(v.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState({deleteCategory:!1})},children:"Cancel"})]})]})})]})]})})}}]),a}(c.a.Component);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e8ee064e.chunk.js.map