webpackJsonp([43],{151:function(e,o,t){!function(o,t){e.exports=t()}(0,function(){"use strict";return[{locale:"sr",pluralRuleFunction:function(e,o){var t=String(e).split("."),a=t[0],n=t[1]||"",i=!t[1],s=a.slice(-1),r=a.slice(-2),l=n.slice(-1),u=n.slice(-2);return o?"other":i&&1==s&&11!=r||1==l&&11!=u?"one":i&&s>=2&&s<=4&&(r<12||r>14)||l>=2&&l<=4&&(u<12||u>14)?"few":"other"},fields:{year:{displayName:"година",relative:{0:"ове године",1:"следеће године","-1":"прошле године"},relativeTime:{future:{one:"за {0} годину",few:"за {0} године",other:"за {0} година"},past:{one:"пре {0} године",few:"пре {0} године",other:"пре {0} година"}}},month:{displayName:"месец",relative:{0:"овог месеца",1:"следећег месеца","-1":"прошлог месеца"},relativeTime:{future:{one:"за {0} месец",few:"за {0} месеца",other:"за {0} месеци"},past:{one:"пре {0} месеца",few:"пре {0} месеца",other:"пре {0} месеци"}}},day:{displayName:"дан",relative:{0:"данас",1:"сутра",2:"прекосутра","-2":"прекјуче","-1":"јуче"},relativeTime:{future:{one:"за {0} дан",few:"за {0} дана",other:"за {0} дана"},past:{one:"пре {0} дана",few:"пре {0} дана",other:"пре {0} дана"}}},hour:{displayName:"сат",relative:{0:"овог сата"},relativeTime:{future:{one:"за {0} сат",few:"за {0} сата",other:"за {0} сати"},past:{one:"пре {0} сата",few:"пре {0} сата",other:"пре {0} сати"}}},minute:{displayName:"минут",relative:{0:"овог минута"},relativeTime:{future:{one:"за {0} минут",few:"за {0} минута",other:"за {0} минута"},past:{one:"пре {0} минута",few:"пре {0} минута",other:"пре {0} минута"}}},second:{displayName:"секунд",relative:{0:"сада"},relativeTime:{future:{one:"за {0} секунду",few:"за {0} секунде",other:"за {0} секунди"},past:{one:"пре {0} секунде",few:"пре {0} секунде",other:"пре {0} секунди"}}}}},{locale:"sr-Cyrl",parentLocale:"sr"},{locale:"sr-Cyrl-BA",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-ME",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-XK",parentLocale:"sr-Cyrl"},{locale:"sr-Latn",pluralRuleFunction:function(e,o){return"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"sledeće godine","-1":"prošle godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"pre {0} godine",few:"pre {0} godine",other:"pre {0} godina"}}},month:{displayName:"mesec",relative:{0:"ovog meseca",1:"sledećeg meseca","-1":"prošlog meseca"},relativeTime:{future:{one:"za {0} mesec",few:"za {0} meseca",other:"za {0} meseci"},past:{one:"pre {0} meseca",few:"pre {0} meseca",other:"pre {0} meseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekjuče","-1":"juče"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"pre {0} dana",few:"pre {0} dana",other:"pre {0} dana"}}},hour:{displayName:"sat",relative:{0:"ovog sata"},relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"pre {0} sata",few:"pre {0} sata",other:"pre {0} sati"}}},minute:{displayName:"minut",relative:{0:"ovog minuta"},relativeTime:{future:{one:"za {0} minut",few:"za {0} minuta",other:"za {0} minuta"},past:{one:"pre {0} minuta",few:"pre {0} minuta",other:"pre {0} minuta"}}},second:{displayName:"sekund",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"pre {0} sekunde",few:"pre {0} sekunde",other:"pre {0} sekundi"}}}}},{locale:"sr-Latn-BA",parentLocale:"sr-Latn"},{locale:"sr-Latn-ME",parentLocale:"sr-Latn"},{locale:"sr-Latn-XK",parentLocale:"sr-Latn"}]})},766:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=t(767),n=t.n(a),i=t(151),s=t.n(i),r=t(6);Object(r.setLocale)({messages:n.a,localeData:s.a})},767:function(e,o){e.exports={"account.block":"Блокирај корисника @{name}","account.block_domain":"Сакриј све са домена {domain}","account.disclaimer_full":"Наведене информације можда не одсликавају кориснички профил у потпуности.","account.edit_profile":"Измени профил","account.follow":"Запрати","account.followers":"Пратиоца","account.follows":"Прати","account.follows_you":"Прати Вас","account.hide_reblogs":"Сакриј подршке које даје корисника @{name}","account.media":"Медији","account.mention":"Помени корисника @{name}","account.moved_to":"{name} се померио на:","account.mute":"Ућуткај корисника @{name}","account.mute_notifications":"Искључи обавештења од корисника @{name}","account.posts":"Статуса","account.report":"Пријави @{name}","account.requested":"Чекам одобрење. Кликните да поништите захтев за праћење","account.share":"Подели профил корисника @{name}","account.show_reblogs":"Прикажи подршке од корисника @{name}","account.unblock":"Одблокирај корисника @{name}","account.unblock_domain":"Одблокирај домен {domain}","account.unfollow":"Отпрати","account.unmute":"Уклони ућуткавање кориснику @{name}","account.unmute_notifications":"Укључи назад обавештења од корисника @{name}","account.view_full_profile":"Види цео профил","boost_modal.combo":"Можете притиснути {combo} да прескочите ово следећи пут","bundle_column_error.body":"Нешто је пошло по злу приликом учитавања ове компоненте.","bundle_column_error.retry":"Покушајте поново","bundle_column_error.title":"Мрежна грешка","bundle_modal_error.close":"Затвори","bundle_modal_error.message":"Нешто није било у реду при учитавању ове компоненте.","bundle_modal_error.retry":"Покушајте поново","column.blocks":"Блокирани корисници","column.community":"Локална лајна","column.favourites":"Омиљени","column.follow_requests":"Захтеви за праћење","column.home":"Почетна","column.lists":"Листе","column.mutes":"Ућуткани корисници","column.notifications":"Обавештења","column.pins":"Прикачени тутови","column.public":"Федерисана лајна","column_back_button.label":"Назад","column_header.hide_settings":"Сакриј поставке","column_header.moveLeft_settings":"Помери колону улево","column_header.moveRight_settings":"Помери колону удесно","column_header.pin":"Прикачи","column_header.show_settings":"Прикажи поставке","column_header.unpin":"Откачи","column_subheading.navigation":"Навигација","column_subheading.settings":"Поставке","compose_form.hashtag_warning":"This toot won't be listed under any hashtag as it is unlisted. Only public toots can be searched by hashtag.","compose_form.lock_disclaimer":"Ваш налог није {locked}. Свако може да Вас запрати и да види објаве намењене само Вашим пратиоцима.","compose_form.lock_disclaimer.lock":"закључан","compose_form.placeholder":"Шта Вам је на уму?","compose_form.publish":"Тутни","compose_form.publish_loud":"{publish}!","compose_form.sensitive":"Обележи мултимедију као осетљиву","compose_form.spoiler":"Сакриј текст испод упозорења","compose_form.spoiler_placeholder":"Овде упишите упозорење","confirmation_modal.cancel":"Поништи","confirmations.block.confirm":"Блокирај","confirmations.block.message":"Да ли сте сигурни да желите да блокирате корисника {name}?","confirmations.delete.confirm":"Обриши","confirmations.delete.message":"Да ли сте сигурни да желите обришете овај статус?","confirmations.delete_list.confirm":"Обриши","confirmations.delete_list.message":"Да ли сте сигурни да желите да бесповратно обришете ову листу?","confirmations.domain_block.confirm":"Сакриј цео домен","confirmations.domain_block.message":"Да ли сте стварно, стварно сигурно да желите да блокирате цео домен {domain}? У већини случајева, пар добрих блокирања или ућуткавања су довољна и препоручљива.","confirmations.mute.confirm":"Ућуткај","confirmations.mute.message":"Да ли стварно желите да ућуткате корисника {name}?","confirmations.unfollow.confirm":"Отпрати","confirmations.unfollow.message":"Да ли сте сигурни да желите да отпратите корисника {name}?","embed.instructions":"Угради овај статус на Ваш веб сајт копирањем кода испод.","embed.preview":"Овако ће да изгледа:","emoji_button.activity":"Активност","emoji_button.custom":"Произвољно","emoji_button.flags":"Заставе","emoji_button.food":"Храна & пиће","emoji_button.label":"Убаци смајли","emoji_button.nature":"Природа","emoji_button.not_found":"Нема смајлија!! (╯°□°）╯︵ ┻━┻","emoji_button.objects":"Објекти","emoji_button.people":"Људи","emoji_button.recent":"Најчешће коришћени","emoji_button.search":"Претрага...","emoji_button.search_results":"Резултати претраге","emoji_button.symbols":"Симболи","emoji_button.travel":"Путовања & места","empty_column.community":"Локална лајна је празна. Напишите нешто јавно да лајна продува!","empty_column.hashtag":"Тренутно нема ништа на овом хештегу.","empty_column.home":"Ваша лајна је празна! Посетите {public} или користите претрагу да почнете и упознајете нове људе.","empty_column.home.public_timeline":"јавна лајна","empty_column.list":"У овој листи још нема ничега. Када чланови листе објаве нове статусе, они ће се појављивати овде.","empty_column.notifications":"Тренутно немате обавештења. Дружите се мало да започнете разговоре.","empty_column.public":"Овде нема ничега! Напишите нешто јавно, или нађите кориснике са других инстанци које ћете запратити да попуните ову празнину","follow_request.authorize":"Одобри","follow_request.reject":"Одбиј","getting_started.appsshort":"Апликације","getting_started.faq":"ЧПП","getting_started.heading":"Да почнете","getting_started.open_source_notice":"Мастoдонт је софтвер отвореног кода. Можете му допринети или пријавити проблеме преко GitHub-а на {github}.","getting_started.userguide":"Корисничко упутство","home.column_settings.advanced":"Напредно","home.column_settings.basic":"Основно","home.column_settings.filter_regex":"Филтрирај регуларним изразима","home.column_settings.show_reblogs":"Прикажи и подржавања","home.column_settings.show_replies":"Прикажи одговоре","home.settings":"Поставке колоне","keyboard_shortcuts.back":"да одете назад","keyboard_shortcuts.boost":"да подржите","keyboard_shortcuts.column":"да се пребаците на статус у једној од колона","keyboard_shortcuts.compose":"да се пребаците на писање новог тута","keyboard_shortcuts.description":"Опис","keyboard_shortcuts.down":"да се померите на доле у листи","keyboard_shortcuts.enter":"да отворите статус","keyboard_shortcuts.favourite":"да означите као омиљено","keyboard_shortcuts.heading":"Пречице на тастатури","keyboard_shortcuts.hotkey":"Пречица","keyboard_shortcuts.legend":"да прикажете овај подсетник","keyboard_shortcuts.mention":"да поменете аутора","keyboard_shortcuts.reply":"да одговорите","keyboard_shortcuts.search":"да се пребаците на претрагу","keyboard_shortcuts.toot":"да започнете скроз нови тут","keyboard_shortcuts.unfocus":"да не будете више на претрази/прављењу новог тута","keyboard_shortcuts.up":"да се померите на горе у листи","lightbox.close":"Затвори","lightbox.next":"Следећи","lightbox.previous":"Претходни","lists.account.add":"Додај на листу","lists.account.remove":"Уклони са листе","lists.delete":"Обриши листу","lists.edit":"Измени листу","lists.new.create":"Додај листу","lists.new.title_placeholder":"Наслов нове листе","lists.search":"Претражи међу људима које пратите","lists.subheading":"Ваше листе","loading_indicator.label":"Учитавам...","media_gallery.toggle_visible":"Укључи/искључи видљивост","missing_indicator.label":"Није пронађено","missing_indicator.sublabel":"This resource could not be found","mute_modal.hide_notifications":"Сакриј обавештења од овог корисника?","navigation_bar.blocks":"Блокирани корисници","navigation_bar.community_timeline":"Локална лајна","navigation_bar.edit_profile":"Измени профил","navigation_bar.favourites":"Омиљени","navigation_bar.follow_requests":"Захтеви за праћење","navigation_bar.info":"О овој инстанци","navigation_bar.keyboard_shortcuts":"Пречице на тастатури","navigation_bar.lists":"Листе","navigation_bar.logout":"Одјава","navigation_bar.mutes":"Ућуткани корисници","navigation_bar.pins":"Прикачени тутови","navigation_bar.preferences":"Подешавања","navigation_bar.public_timeline":"Федерисана лајна","notification.favourite":"{name} је ставио Ваш статус као омиљени","notification.follow":"{name} Вас је запратио","notification.mention":"{name} Вас је поменуо","notification.reblog":"{name} је подржао(ла) Ваш статус","notifications.clear":"Очисти обавештења","notifications.clear_confirmation":"Да ли сте сигурно да трајно желите да очистите Ваша обавештења?","notifications.column_settings.alert":"Обавештења на радној површини","notifications.column_settings.favourite":"Омиљени:","notifications.column_settings.follow":"Нови пратиоци:","notifications.column_settings.mention":"Помињања:","notifications.column_settings.push":"Гурај обавештења","notifications.column_settings.push_meta":"Овај уређај","notifications.column_settings.reblog":"Подршки:","notifications.column_settings.show":"Прикажи у колони","notifications.column_settings.sound":"Пуштај звук","onboarding.done":"Готово","onboarding.next":"Следеће","onboarding.page_five.public_timelines":"Локална лајна приказује све јавне статусе од свих на домену {domain}. Федерисана лајна приказује јавне статусе од свих људи које прате корисници са домена {domain}. Ово су јавне лајне, сјајан начин да откријете нове људе.","onboarding.page_four.home":"Почетна лајна приказује статусе људи које Ви пратите.","onboarding.page_four.notifications":"Колона са обавештењима Вам приказује када неко прича са Вама.","onboarding.page_one.federation":"Мастодонт је мрежа независних сервера који се увезују да направе једну већу друштвену мрежу. Ове сервере зовемо инстанцама.","onboarding.page_one.full_handle":"Your full handle","onboarding.page_one.handle_hint":"This is what you would tell your friends to search for.","onboarding.page_one.welcome":"Добродошли на Мастодонт!","onboarding.page_six.admin":"Администратор Ваше инстанце је {admin}.","onboarding.page_six.almost_done":"Још мало, па готово...","onboarding.page_six.appetoot":"Пријатутно!","onboarding.page_six.apps_available":"Постоје {apps} доступне за iOS, Андроид и друге платформе.","onboarding.page_six.github":"Мастодонт је слободан софтвер отвореног кода. Можете пријављивати грешке, потраживати нове фунцкионалности, или учествујући у програмирању. Наш изворни код је овде: {github}.","onboarding.page_six.guidelines":"смернице заједнице","onboarding.page_six.read_guidelines":"Прочитејте {guidelines} домена {domain}!","onboarding.page_six.various_app":"мобилне апликације","onboarding.page_three.profile":"Измените профил да промените аватар, биографију и име за приказ. Тамо ћете наћи и остала подешавања.","onboarding.page_three.search":"Корисите претрагу да нађете људе и гледате хештегове, као што су {illustration} и {introductions}. Да нађете особу која није на овој инстанци, користите њену пуну идентификацију.","onboarding.page_two.compose":"Пишите статусе из прве колоне. Можете отпремати слике, мењати подешавања приватности, и додавати упозорења за осетљив садржај преко иконица испод.","onboarding.skip":"Прескочи","privacy.change":"Подеси статус приватности","privacy.direct.long":"Објави само корисницима који су поменути","privacy.direct.short":"Директно","privacy.private.long":"Објави само пратиоцима","privacy.private.short":"Само за пратиоце","privacy.public.long":"Објави на јавној лајни","privacy.public.short":"Јавно","privacy.unlisted.long":"Не објављуј на јавним лајнама","privacy.unlisted.short":"Неизлистано","regeneration_indicator.label":"Loading…","regeneration_indicator.sublabel":"Your home feed is being prepared!","relative_time.days":"{number}d","relative_time.hours":"{number}h","relative_time.just_now":"сада","relative_time.minutes":"{number}m","relative_time.seconds":"{number}s","reply_indicator.cancel":"Поништи","report.placeholder":"Додатни коментари","report.submit":"Пошаљи","report.target":"Пријављујем {target}","search.placeholder":"Претрага","search_popout.search_format":"Напредни формат претраге","search_popout.tips.hashtag":"хештег","search_popout.tips.status":"статус","search_popout.tips.text":"Тражењем обичног текста ћете добити сва пронађена имена, сва корисничка имена и све нађене хештегове","search_popout.tips.user":"корисник","search_results.total":"{count, number} {count, plural, one {резултат} few {резултата} other {резултата}}","standalone.public_title":"Поглед изнутра...","status.block":"Block @{name}","status.cannot_reblog":"Овај статус не може да се подржи","status.delete":"Обриши","status.embed":"Угради на сајт","status.favourite":"Омиљено","status.load_more":"Учитај још","status.media_hidden":"Мултимедија сакривена","status.mention":"Помени корисника @{name}","status.more":"Још","status.mute":"Mute @{name}","status.mute_conversation":"Ућуткај преписку","status.open":"Прошири овај статус","status.pin":"Прикачи на профил","status.reblog":"Подржи","status.reblogged_by":"{name} подржао(ла)","status.reply":"Одговори","status.replyAll":"Одговори на дискусију","status.report":"Пријави корисника @{name}","status.sensitive_toggle":"Кликните да видите","status.sensitive_warning":"Осетљив садржај","status.share":"Подели","status.show_less":"Прикажи мање","status.show_more":"Прикажи више","status.unmute_conversation":"Укључи преписку","status.unpin":"Откачи са профила","tabs_bar.compose":"Напиши","tabs_bar.federated_timeline":"Федерисано","tabs_bar.home":"Почетна","tabs_bar.local_timeline":"Локално","tabs_bar.notifications":"Обавештења","ui.beforeunload":"Ако напустите Мастодонт, изгубићете написани нацрт.","upload_area.title":"Превуците овде да отпремите","upload_button.label":"Додај мултимедију","upload_form.description":"Опиши за слабовиде особе","upload_form.undo":"Опозови","upload_progress.label":"Отпремам...","video.close":"Затвори видео","video.exit_fullscreen":"Напусти цео екран","video.expand":"Прошири видео","video.fullscreen":"Цео екран","video.hide":"Сакриј видео","video.mute":"Угаси звук","video.pause":"Паузирај","video.play":"Пусти","video.unmute":"Врати звук"}}},[766]);
//# sourceMappingURL=locale_sr-3bc85b2146c62f69bfbc.js.map