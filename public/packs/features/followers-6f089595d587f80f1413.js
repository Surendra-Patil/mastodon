webpackJsonp([12],{152:function(e,o,n){"use strict";n.d(o,"a",function(){return p});var t=n(2),a=n.n(t),i=n(1),s=n.n(i),c=n(3),r=n.n(c),l=n(4),u=n.n(l),d=n(0),f=n.n(d),p=function(e){function o(){var n,t,a;s()(this,o);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=t=r()(this,e.call.apply(e,[this].concat(c))),t.handleClick=function(){t.props.onClick()},a=n,r()(t,a)}return u()(o,e),o.prototype.render=function(){var e=this.props,o=e.type,n=e.active,t=e.columnHeaderId,i="";return this.props.icon&&(i=a()("i",{className:"fa fa-fw fa-"+this.props.icon+" column-header__icon"})),a()("div",{role:"button heading",tabIndex:"0",className:"column-header "+(n?"active":""),onClick:this.handleClick,id:t||null},void 0,i,o)},o}(f.a.PureComponent)},277:function(e,o,n){"use strict";n.d(o,"a",function(){return b});var t=n(2),a=n.n(t),i=n(1),s=n.n(i),c=n(3),r=n.n(c),l=n(4),u=n.n(l),d=n(42),f=n.n(d),p=n(0),m=n.n(p),g=n(152),h=n(91),v=n(32),b=function(e){function o(){var n,t,a;s()(this,o);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=t=r()(this,e.call.apply(e,[this].concat(c))),t.handleHeaderClick=function(){var e=t.node.querySelector(".scrollable");e&&(t._interruptScrollAnimation=Object(h.b)(e))},t.handleScroll=f()(function(){void 0!==t._interruptScrollAnimation&&t._interruptScrollAnimation()},200),t.setRef=function(e){t.node=e},a=n,r()(t,a)}return u()(o,e),o.prototype.scrollTop=function(){var e=this.node.querySelector(".scrollable");e&&(this._interruptScrollAnimation=Object(h.b)(e))},o.prototype.render=function(){var e=this.props,o=e.heading,n=e.icon,t=e.children,i=e.active,s=e.hideHeadingOnMobile,c=o&&(!s||s&&!Object(v.b)(window.innerWidth)),r=c&&o.replace(/ /g,"-"),l=c&&a()(g.a,{icon:n,active:i,type:o,onClick:this.handleHeaderClick,columnHeaderId:r});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":r,className:"column",onScroll:this.handleScroll},l,t)},o}(m.a.PureComponent)},278:function(e,o,n){"use strict";n.d(o,"a",function(){return h});var t,a,i=n(2),s=n.n(i),c=n(1),r=n.n(c),l=n(3),u=n.n(l),d=n(4),f=n.n(d),p=n(0),m=n.n(p),g=n(7),h=(a=t=function(e){function o(){return r()(this,o),u()(this,e.apply(this,arguments))}return f()(o,e),o.prototype.render=function(){var e=this.props.visible;return s()("button",{className:"load-more",disabled:!e,style:{visibility:e?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},o}(m.a.PureComponent),t.defaultProps={visible:!0},a)},804:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),n.d(o,"default",function(){return B});var t,a,i,s,c=n(2),r=n.n(c),l=n(1),u=n.n(l),d=n(3),f=n.n(d),p=n(4),m=n.n(p),g=n(0),h=(n.n(g),n(9)),v=n(5),b=n.n(v),_=n(13),M=n.n(_),w=n(290),k=n(22),y=n(154),O=n(834),I=n(277),j=n(842),N=n(278),R=n(837),C=n(12),q=n.n(C),F=function(e,o){return{accountIds:e.getIn(["user_lists","followers",o.params.accountId,"items"]),hasMore:!!e.getIn(["user_lists","followers",o.params.accountId,"next"])}},B=(t=Object(h.connect)(F))((s=i=function(e){function o(){var n,t,a;u()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=t=f()(this,e.call.apply(e,[this].concat(s))),t.handleScroll=function(e){var o=e.target;o.scrollTop===o.scrollHeight-o.clientHeight&&t.props.hasMore&&t.props.dispatch(Object(k.t)(t.props.params.accountId))},t.handleLoadMore=function(e){e.preventDefault(),t.props.dispatch(Object(k.t)(t.props.params.accountId))},a=n,f()(t,a)}return m()(o,e),o.prototype.componentWillMount=function(){this.props.dispatch(Object(k.v)(this.props.params.accountId)),this.props.dispatch(Object(k.x)(this.props.params.accountId))},o.prototype.componentWillReceiveProps=function(e){e.params.accountId!==this.props.params.accountId&&e.params.accountId&&(this.props.dispatch(Object(k.v)(e.params.accountId)),this.props.dispatch(Object(k.x)(e.params.accountId)))},o.prototype.render=function(){var e=this.props,o=e.accountIds,n=e.hasMore,t=null;return o?(n&&(t=r()(N.a,{onClick:this.handleLoadMore})),r()(I.a,{},void 0,r()(R.a,{}),r()(y.a,{scrollKey:"followers"},void 0,r()("div",{className:"scrollable",onScroll:this.handleScroll},void 0,r()("div",{className:"followers"},void 0,r()(j.a,{accountId:this.props.params.accountId}),o.map(function(e){return r()(O.a,{id:e,withNote:!1},e)}),t))))):r()(I.a,{},void 0,r()(w.a,{}))},o}(q.a),i.propTypes={params:b.a.object.isRequired,dispatch:b.a.func.isRequired,accountIds:M.a.list,hasMore:b.a.bool},a=s))||a},834:function(e,o,n){"use strict";var t=n(2),a=n.n(t),i=n(0),s=(n.n(i),n(9)),c=n(7),r=n(72),l=n(835),u=n(22),d=n(29),f=n(55),p=n(14),m=Object(c.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),g=function(){var e=Object(r.c)();return function(o,n){return{account:e(o,n.id)}}},h=function(e,o){var n=o.intl;return{onFollow:function(o){e(o.getIn(["relationship","following"])||o.getIn(["relationship","requested"])?p.g?Object(d.d)("CONFIRM",{message:a()(c.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",o.get("acct"))}}),confirm:n.formatMessage(m.unfollowConfirm),onConfirm:function(){return e(Object(u.E)(o.get("id")))}}):Object(u.E)(o.get("id")):Object(u.A)(o.get("id")))},onBlock:function(o){e(o.getIn(["relationship","blocking"])?Object(u.D)(o.get("id")):Object(u.r)(o.get("id")))},onMute:function(o){e(o.getIn(["relationship","muting"])?Object(u.F)(o.get("id")):Object(f.g)(o))},onMuteNotifications:function(o,n){e(Object(u.B)(o.get("id"),n))}}};o.a=Object(c.g)(Object(s.connect)(g,h)(l.a))},835:function(e,o,n){"use strict";n.d(o,"a",function(){return R});var t,a,i,s=n(2),c=n.n(s),r=n(1),l=n.n(r),u=n(3),d=n.n(u),f=n(4),p=n.n(f),m=n(0),g=(n.n(m),n(13)),h=n.n(g),v=n(5),b=n.n(v),_=n(57),M=n(56),w=n(288),k=n(19),y=n(7),O=n(12),I=n.n(O),j=n(14),N=Object(y.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),R=Object(y.g)((i=a=function(e){function o(){var n,t,a;l()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=t=d()(this,e.call.apply(e,[this].concat(s))),t.handleFollow=function(){t.props.onFollow(t.props.account)},t.handleBlock=function(){t.props.onBlock(t.props.account)},t.handleMute=function(){t.props.onMute(t.props.account)},t.handleMuteNotifications=function(){t.props.onMuteNotifications(t.props.account,!0)},t.handleUnmuteNotifications=function(){t.props.onMuteNotifications(t.props.account,!1)},a=n,d()(t,a)}return p()(o,e),o.prototype.render=function(){var e=this.props,o=e.account,n=e.intl,t=e.hidden;if(!o)return c()("div",{});if(t)return c()("div",{},void 0,o.get("display_name"),o.get("username"));var a=void 0;if(o.get("id")!==j.e&&null!==o.get("relationship",null)){var i=o.getIn(["relationship","following"]),s=o.getIn(["relationship","requested"]),r=o.getIn(["relationship","blocking"]),l=o.getIn(["relationship","muting"]);if(s)a=c()(k.a,{disabled:!0,icon:"hourglass",title:n.formatMessage(N.requested)});else if(r)a=c()(k.a,{active:!0,icon:"unlock-alt",title:n.formatMessage(N.unblock,{name:o.get("username")}),onClick:this.handleBlock});else if(l){var u=void 0;u=o.getIn(["relationship","muting_notifications"])?c()(k.a,{active:!0,icon:"bell",title:n.formatMessage(N.unmute_notifications,{name:o.get("username")}),onClick:this.handleUnmuteNotifications}):c()(k.a,{active:!0,icon:"bell-slash",title:n.formatMessage(N.mute_notifications,{name:o.get("username")}),onClick:this.handleMuteNotifications}),a=c()(m.Fragment,{},void 0,c()(k.a,{active:!0,icon:"volume-up",title:n.formatMessage(N.unmute,{name:o.get("username")}),onClick:this.handleMute}),u)}else o.get("moved")&&!i||(a=c()(k.a,{icon:i?"user-times":"user-plus",title:n.formatMessage(i?N.unfollow:N.follow),onClick:this.handleFollow,active:i}))}return c()("div",{className:"account"},void 0,c()("div",{className:"account__wrapper"},void 0,c()(w.a,{className:"account__display-name",href:o.get("url"),to:"/accounts/"+o.get("id")},o.get("id"),c()("div",{className:"account__avatar-wrapper"},void 0,c()(_.a,{account:o,size:36})),c()(M.a,{account:o})),c()("div",{className:"account__relationship"},void 0,a)))},o}(I.a),a.propTypes={account:h.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,onMuteNotifications:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},t=i))||t},836:function(e,o,n){"use strict";var t=n(2),a=n.n(t),i=n(0),s=(n.n(i),n(7)),c=function(){return a()("div",{className:"regeneration-indicator missing-indicator"},void 0,a()("div",{},void 0,a()("div",{className:"regeneration-indicator__figure"}),a()("div",{className:"regeneration-indicator__label"},void 0,a()(s.b,{id:"missing_indicator.label",tagName:"strong",defaultMessage:"Not found"}),a()(s.b,{id:"missing_indicator.sublabel",defaultMessage:"This resource could not be found"}))))};o.a=c},837:function(e,o,n){"use strict";n.d(o,"a",function(){return b});var t,a,i=n(2),s=n.n(i),c=n(1),r=n.n(c),l=n(3),u=n.n(l),d=n(4),f=n.n(d),p=n(0),m=n.n(p),g=n(7),h=n(5),v=n.n(h),b=(a=t=function(e){function o(){var n,t,a;r()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=t=u()(this,e.call.apply(e,[this].concat(s))),t.handleClick=function(){window.history&&1===window.history.length?t.context.router.history.push("/"):t.context.router.history.goBack()},a=n,u()(t,a)}return f()(o,e),o.prototype.render=function(){return s()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,s()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),s()(g.b,{id:"column_back_button.label",defaultMessage:"Back"}))},o}(m.a.PureComponent),t.contextTypes={router:v.a.object},a)},842:function(e,o,n){"use strict";var t=n(2),a=n.n(t),i=n(0),s=(n.n(i),n(9)),c=n(72),r=n(843),l=n(22),u=n(17),d=n(55),f=n(153),p=n(29),m=n(293),g=n(7),h=n(14),v=Object(g.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},blockDomainConfirm:{id:"confirmations.domain_block.confirm",defaultMessage:"Hide entire domain"}}),b=function(){var e=Object(c.c)();return function(o,n){var t=n.accountId;return{account:e(o,t)}}},_=function(e,o){var n=o.intl;return{onFollow:function(o){e(o.getIn(["relationship","following"])||o.getIn(["relationship","requested"])?h.g?Object(p.d)("CONFIRM",{message:a()(g.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:a()("strong",{},void 0,"@",o.get("acct"))}}),confirm:n.formatMessage(v.unfollowConfirm),onConfirm:function(){return e(Object(l.E)(o.get("id")))}}):Object(l.E)(o.get("id")):Object(l.A)(o.get("id")))},onBlock:function(o){e(o.getIn(["relationship","blocking"])?Object(l.D)(o.get("id")):Object(p.d)("CONFIRM",{message:a()(g.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:a()("strong",{},void 0,"@",o.get("acct"))}}),confirm:n.formatMessage(v.blockConfirm),onConfirm:function(){return e(Object(l.r)(o.get("id")))}}))},onMention:function(o,n){e(Object(u.M)(o,n))},onReblogToggle:function(o){e(o.getIn(["relationship","showing_reblogs"])?Object(l.A)(o.get("id"),!1):Object(l.A)(o.get("id"),!0))},onReport:function(o){e(Object(f.i)(o))},onMute:function(o){e(o.getIn(["relationship","muting"])?Object(l.F)(o.get("id")):Object(d.g)(o))},onBlockDomain:function(o,t){e(Object(p.d)("CONFIRM",{message:a()(g.b,{id:"confirmations.domain_block.message",defaultMessage:"Are you really, really sure you want to block the entire {domain}? In most cases a few targeted blocks or mutes are sufficient and preferable.",values:{domain:a()("strong",{},void 0,o)}}),confirm:n.formatMessage(v.blockDomainConfirm),onConfirm:function(){return e(Object(m.c)(o,t))}}))},onUnblockDomain:function(o,n){e(Object(m.d)(o,n))}}};o.a=Object(g.g)(Object(s.connect)(b,_)(r.a))},843:function(e,o,n){"use strict";n.d(o,"a",function(){return O});var t,a,i=n(2),s=n.n(i),c=n(1),r=n.n(c),l=n(3),u=n.n(l),d=n(4),f=n.n(d),p=n(0),m=(n.n(p),n(13)),g=n.n(m),h=n(5),v=n.n(h),b=n(844),_=n(845),M=n(836),w=n(12),k=n.n(w),y=n(846),O=(a=t=function(e){function o(){var n,t,a;r()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=t=u()(this,e.call.apply(e,[this].concat(s))),t.handleFollow=function(){t.props.onFollow(t.props.account)},t.handleBlock=function(){t.props.onBlock(t.props.account)},t.handleMention=function(){t.props.onMention(t.props.account,t.context.router.history)},t.handleReport=function(){t.props.onReport(t.props.account)},t.handleReblogToggle=function(){t.props.onReblogToggle(t.props.account)},t.handleMute=function(){t.props.onMute(t.props.account)},t.handleBlockDomain=function(){var e=t.props.account.get("acct").split("@")[1];e&&t.props.onBlockDomain(e,t.props.account.get("id"))},t.handleUnblockDomain=function(){var e=t.props.account.get("acct").split("@")[1];e&&t.props.onUnblockDomain(e,t.props.account.get("id"))},a=n,u()(t,a)}return f()(o,e),o.prototype.render=function(){var e=this.props.account;return null===e?s()(M.a,{}):s()("div",{className:"account-timeline__header"},void 0,e.get("moved")&&s()(y.a,{from:e,to:e.get("moved")}),s()(b.a,{account:e,onFollow:this.handleFollow}),s()(_.a,{account:e,onBlock:this.handleBlock,onMention:this.handleMention,onReblogToggle:this.handleReblogToggle,onReport:this.handleReport,onMute:this.handleMute,onBlockDomain:this.handleBlockDomain,onUnblockDomain:this.handleUnblockDomain}))},o}(k.a),t.propTypes={account:g.a.map,onFollow:v.a.func.isRequired,onBlock:v.a.func.isRequired,onMention:v.a.func.isRequired,onReblogToggle:v.a.func.isRequired,onReport:v.a.func.isRequired,onMute:v.a.func.isRequired,onBlockDomain:v.a.func.isRequired,onUnblockDomain:v.a.func.isRequired},t.contextTypes={router:v.a.object},a)},844:function(e,o,n){"use strict";n.d(o,"a",function(){return x});var t,a,i,s,c,r=n(2),l=n.n(r),u=n(1),d=n.n(u),f=n(3),p=n.n(f),m=n(4),g=n.n(m),h=n(0),v=(n.n(h),n(13)),b=n.n(v),_=n(5),M=n.n(_),w=n(7),k=n(19),y=n(26),O=n(27),I=n.n(O),j=n(12),N=n.n(j),R=n(14),C=n(10),q=n.n(C),F=Object(w.f)({unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},follow:{id:"account.follow",defaultMessage:"Follow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval. Click to cancel follow request"}}),B=(a=t=function(e){function o(){var n,t,a;d()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=t=p()(this,e.call.apply(e,[this].concat(s))),t.state={isHovered:!1},t.handleMouseOver=function(){t.state.isHovered||t.setState({isHovered:!0})},t.handleMouseOut=function(){t.state.isHovered&&t.setState({isHovered:!1})},a=n,p()(t,a)}return g()(o,e),o.prototype.render=function(){var e=this,o=this.props.account,n=this.state.isHovered;return l()(y.a,{defaultStyle:{radius:90},style:{radius:I()(n?30:90,{stiffness:180,damping:12})}},void 0,function(t){var a=t.radius;return l()("a",{href:o.get("url"),className:"account__header__avatar",role:"presentation",target:"_blank",rel:"noopener",style:{borderRadius:a+"px",backgroundImage:"url("+(R.a||n?o.get("avatar"):o.get("avatar_static"))+")"},onMouseOver:e.handleMouseOver,onMouseOut:e.handleMouseOut,onFocus:e.handleMouseOver,onBlur:e.handleMouseOut},void 0,l()("span",{style:{display:"none"}},void 0,o.get("acct")))})},o}(N.a),t.propTypes={account:b.a.map.isRequired},a),x=Object(w.g)((c=s=function(e){function o(){return d()(this,o),p()(this,e.apply(this,arguments))}return g()(o,e),o.prototype.render=function(){var e=this.props,o=e.account,n=e.intl;if(!o)return null;var t="",a="",i="";R.e!==o.get("id")&&o.getIn(["relationship","followed_by"])&&(t=l()("span",{className:"account--follows-info"},void 0,l()(w.b,{id:"account.follows_you",defaultMessage:"Follows you"}))),R.e!==o.get("id")&&(o.getIn(["relationship","requested"])?a=l()("div",{className:"account--action-button"},void 0,l()(k.a,{size:26,active:!0,icon:"hourglass",title:n.formatMessage(F.requested),onClick:this.props.onFollow})):o.getIn(["relationship","blocking"])||(a=l()("div",{className:"account--action-button"},void 0,l()(k.a,{size:26,icon:o.getIn(["relationship","following"])?"user-times":"user-plus",active:o.getIn(["relationship","following"]),title:n.formatMessage(o.getIn(["relationship","following"])?F.unfollow:F.follow),onClick:this.props.onFollow})))),o.get("moved")&&!o.getIn(["relationship","following"])&&(a=""),o.get("locked")&&(i=l()("i",{className:"fa fa-lock"}));var s={__html:o.get("note_emojified")},c={__html:o.get("display_name_html")};return l()("div",{className:q()("account__header",{inactive:!!o.get("moved")}),style:{backgroundImage:"url("+o.get("header")+")"}},void 0,l()("div",{},void 0,l()(B,{account:o}),l()("span",{className:"account__header__display-name",dangerouslySetInnerHTML:c}),l()("span",{className:"account__header__username"},void 0,"@",o.get("acct")," ",i),l()("div",{className:"account__header__content",dangerouslySetInnerHTML:s}),t,a))},o}(N.a),s.propTypes={account:b.a.map,onFollow:M.a.func.isRequired,intl:M.a.object.isRequired},i=c))||i},845:function(e,o,n){"use strict";n.d(o,"a",function(){return _});var t,a=n(2),i=n.n(a),s=n(1),c=n.n(s),r=n(3),l=n.n(r),u=n(4),d=n.n(u),f=n(0),p=n.n(f),m=n(292),g=n(59),h=n(7),v=n(14),b=Object(h.f)({mention:{id:"account.mention",defaultMessage:"Mention @{name}"},edit_profile:{id:"account.edit_profile",defaultMessage:"Edit profile"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},follow:{id:"account.follow",defaultMessage:"Follow"},report:{id:"account.report",defaultMessage:"Report @{name}"},share:{id:"account.share",defaultMessage:"Share @{name}'s profile"},media:{id:"account.media",defaultMessage:"Media"},blockDomain:{id:"account.block_domain",defaultMessage:"Hide everything from {domain}"},unblockDomain:{id:"account.unblock_domain",defaultMessage:"Unhide {domain}"},hideReblogs:{id:"account.hide_reblogs",defaultMessage:"Hide boosts from @{name}"},showReblogs:{id:"account.show_reblogs",defaultMessage:"Show boosts from @{name}"}}),_=Object(h.g)(t=function(e){function o(){var n,t,a;c()(this,o);for(var i=arguments.length,s=Array(i),r=0;r<i;r++)s[r]=arguments[r];return n=t=l()(this,e.call.apply(e,[this].concat(s))),t.handleShare=function(){navigator.share({url:t.props.account.get("url")})},a=n,l()(t,a)}return d()(o,e),o.prototype.render=function(){var e=this.props,o=e.account,n=e.intl,t=[],a="";if(t.push({text:n.formatMessage(b.mention,{name:o.get("username")}),action:this.props.onMention}),"share"in navigator&&t.push({text:n.formatMessage(b.share,{name:o.get("username")}),action:this.handleShare}),t.push(null),t.push({text:n.formatMessage(b.media),to:"/accounts/"+o.get("id")+"/media"}),t.push(null),o.get("id")===v.e?t.push({text:n.formatMessage(b.edit_profile),href:"/settings/profile"}):(o.getIn(["relationship","following"])&&(o.getIn(["relationship","showing_reblogs"])?t.push({text:n.formatMessage(b.hideReblogs,{name:o.get("username")}),action:this.props.onReblogToggle}):t.push({text:n.formatMessage(b.showReblogs,{name:o.get("username")}),action:this.props.onReblogToggle})),o.getIn(["relationship","muting"])?t.push({text:n.formatMessage(b.unmute,{name:o.get("username")}),action:this.props.onMute}):t.push({text:n.formatMessage(b.mute,{name:o.get("username")}),action:this.props.onMute}),o.getIn(["relationship","blocking"])?t.push({text:n.formatMessage(b.unblock,{name:o.get("username")}),action:this.props.onBlock}):t.push({text:n.formatMessage(b.block,{name:o.get("username")}),action:this.props.onBlock}),t.push({text:n.formatMessage(b.report,{name:o.get("username")}),action:this.props.onReport})),o.get("acct")!==o.get("username")){var s=o.get("acct").split("@")[1];a=i()("div",{className:"account__disclaimer"},void 0,i()(h.b,{id:"account.disclaimer_full",defaultMessage:"Information below may reflect the user's profile incompletely."})," ",i()("a",{target:"_blank",rel:"noopener",href:o.get("url")},void 0,i()(h.b,{id:"account.view_full_profile",defaultMessage:"View full profile"}))),t.push(null),o.getIn(["relationship","domain_blocking"])?t.push({text:n.formatMessage(b.unblockDomain,{domain:s}),action:this.props.onUnblockDomain}):t.push({text:n.formatMessage(b.blockDomain,{domain:s}),action:this.props.onBlockDomain})}return i()("div",{},void 0,a,i()("div",{className:"account__action-bar"},void 0,i()("div",{className:"account__action-bar-dropdown"},void 0,i()(m.a,{items:t,icon:"bars",size:24,direction:"right"})),i()("div",{className:"account__action-bar-links"},void 0,i()(g.b,{className:"account__action-bar__tab",to:"/accounts/"+o.get("id")},void 0,i()("span",{},void 0,i()(h.b,{id:"account.posts",defaultMessage:"Posts"})),i()("strong",{},void 0,i()(h.c,{value:o.get("statuses_count")}))),i()(g.b,{className:"account__action-bar__tab",to:"/accounts/"+o.get("id")+"/following"},void 0,i()("span",{},void 0,i()(h.b,{id:"account.follows",defaultMessage:"Follows"})),i()("strong",{},void 0,i()(h.c,{value:o.get("following_count")}))),i()(g.b,{className:"account__action-bar__tab",to:"/accounts/"+o.get("id")+"/followers"},void 0,i()("span",{},void 0,i()(h.b,{id:"account.followers",defaultMessage:"Followers"})),i()("strong",{},void 0,i()(h.c,{value:o.get("followers_count")}))))))},o}(p.a.PureComponent))||t},846:function(e,o,n){"use strict";n.d(o,"a",function(){return y});var t,a,i=n(2),s=n.n(i),c=n(1),r=n.n(c),l=n(3),u=n.n(l),d=n(4),f=n.n(d),p=n(0),m=(n.n(p),n(5)),g=n.n(m),h=n(13),v=n.n(h),b=n(7),_=n(12),M=n.n(_),w=n(294),k=n(56),y=(a=t=function(e){function o(){var n,t,a;r()(this,o);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return n=t=u()(this,e.call.apply(e,[this].concat(s))),t.handleAccountClick=function(e){0===e.button&&(e.preventDefault(),t.context.router.history.push("/accounts/"+t.props.to.get("id"))),e.stopPropagation()},a=n,u()(t,a)}return f()(o,e),o.prototype.render=function(){var e=this.props,o=e.from,n=e.to,t={__html:o.get("display_name_html")};return s()("div",{className:"account__moved-note"},void 0,s()("div",{className:"account__moved-note__message"},void 0,s()("div",{className:"account__moved-note__icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-suitcase account__moved-note__icon"})),s()(b.b,{id:"account.moved_to",defaultMessage:"{name} has moved to:",values:{name:s()("bdi",{},void 0,s()("strong",{dangerouslySetInnerHTML:t}))}})),s()("a",{href:n.get("url"),onClick:this.handleAccountClick,className:"detailed-status__display-name"},void 0,s()("div",{className:"detailed-status__display-avatar"},void 0,s()(w.a,{account:n,friend:o})),s()(k.a,{account:n})))},o}(M.a),t.contextTypes={router:g.a.object},t.propTypes={from:v.a.map.isRequired,to:v.a.map.isRequired},a)}});
//# sourceMappingURL=followers-6f089595d587f80f1413.js.map