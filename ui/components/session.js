const a9_0x2381f4=a9_0x5774;(function(_0x300b82,_0x4a8e40){const _0x2c71fe=a9_0x5774,_0x5d6bf1=_0x300b82();while(!![]){try{const _0x138210=-parseInt(_0x2c71fe(0xab))/0x1*(parseInt(_0x2c71fe(0xa6))/0x2)+-parseInt(_0x2c71fe(0xae))/0x3+parseInt(_0x2c71fe(0xbc))/0x4+-parseInt(_0x2c71fe(0xbb))/0x5+-parseInt(_0x2c71fe(0x9f))/0x6*(parseInt(_0x2c71fe(0xb5))/0x7)+parseInt(_0x2c71fe(0xa9))/0x8*(-parseInt(_0x2c71fe(0xb4))/0x9)+parseInt(_0x2c71fe(0xb6))/0xa;if(_0x138210===_0x4a8e40)break;else _0x5d6bf1['push'](_0x5d6bf1['shift']());}catch(_0x58adf6){_0x5d6bf1['push'](_0x5d6bf1['shift']());}}}(a9_0x3a5b,0x1a549));import{route,addClick,clearContent,appendChildren}from'../ui.js';import{getSessionById,loadState}from'../../logic/state.js';import{getCurrentGame,getPlayerById}from'../../logic/session.js';function a9_0x5774(_0x2d9912,_0x234cf3){const _0x3a5b74=a9_0x3a5b();return a9_0x5774=function(_0x57743d,_0x12aa5d){_0x57743d=_0x57743d-0x9c;let _0xd8c176=_0x3a5b74[_0x57743d];return _0xd8c176;},a9_0x5774(_0x2d9912,_0x234cf3);}function a9_0x3a5b(){const _0x4fa4b5=['map','winnerPlayerId','bg-blue-900/30\x20border-blue-700','In\x20progress','13932WBfyLs','\x22\x20class=\x22flex\x20flex-wrap\x20gap-4\x22></ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','innerHTML','Draw','getElementById','toReversed','\x20won','18334XGyTyu','\x20border\x20p-4\x20hover:bg-opacity-50\x20transition-all\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22text-xl\x20font-semibold\x20mb-2\x22>','name','40NRmVRR','isWon','7OWEYYq','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-64\x20cursor-pointer\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22rounded-lg\x20','game','364740BQTVVG','isDraw','continue','\x22\x20class=\x22px-4\x20pt-2\x20pb-3\x20bg-blue-500\x20text-white\x20font-semibold\x20rounded-lg\x20hover:bg-blue-600\x20focus:outline-none\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Continue\x20Game\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22overflow-auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20id=\x22','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','bg-green-900/30\x20border-green-700','60966xKnyui','308FOZmwk','4024140YpGjCX','onclick','text-zinc-400','state','game-list','617925xWYcjB','603228zbojKn'];a9_0x3a5b=function(){return _0x4fa4b5;};return a9_0x3a5b();}const gameListId=a9_0x2381f4(0xba),continueButtonId=a9_0x2381f4(0xb0);function sessionComponent(){return{'html':html,'execute':execute};}function html(){const _0x43c81d=a9_0x2381f4;return'\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20flex-col\x20h-full\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20class=\x22text-3xl\x20font-bold\x20mb-2\x22>Session</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-lg\x20text-zinc-400\x20mb-6\x22>All\x20games\x20against\x20your\x20mate,\x20continue\x20the\x20duel</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22'+continueButtonId+_0x43c81d(0xb1)+gameListId+_0x43c81d(0xa0);}function execute(_0x53b454){const _0x46a172=a9_0x2381f4,_0x47b334=_0x53b454['sessionId'],_0x41609=loadState(),_0x57615b=getSessionById(_0x41609,_0x47b334),_0xea92f9=getCurrentGame(_0x57615b);addClick(continueButtonId,()=>{route('game',{'sessionId':_0x47b334,'gameId':_0xea92f9['id']},![]);});const _0x47f023=_0x57615b['games'][_0x46a172(0xa4)]()[_0x46a172(0xbd)](_0x435aa8=>{const _0x2fd67c=_0x46a172,_0x1725a3=''+_0x435aa8[_0x2fd67c(0xa8)],_0x36fffa=getWinnerText(_0x57615b,_0x435aa8),_0x43e2b9=document['createElement']('li'),_0x1d59b9=_0x435aa8[_0x2fd67c(0xb9)][_0x2fd67c(0xaa)]?_0x2fd67c(0xb3):_0x435aa8[_0x2fd67c(0xb9)][_0x2fd67c(0xaf)]?'bg-zinc-800/30\x20border-zinc-700':_0x2fd67c(0x9d),_0x58d59b=_0x435aa8[_0x2fd67c(0xb9)][_0x2fd67c(0xaa)]?'text-green-400':_0x435aa8[_0x2fd67c(0xb9)][_0x2fd67c(0xaf)]?_0x2fd67c(0xb8):'text-blue-400';return _0x43e2b9[_0x2fd67c(0xa1)]=_0x2fd67c(0xac)+_0x1d59b9+_0x2fd67c(0xa7)+_0x1725a3+'</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-base\x20'+_0x58d59b+_0x2fd67c(0xb2)+_0x36fffa+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',_0x43e2b9[_0x2fd67c(0xb7)]=()=>{const _0x20a955=_0x2fd67c;route(_0x20a955(0xad),{'sessionId':_0x47b334,'gameId':_0x435aa8['id']},![]);},_0x43e2b9;}),_0x3fb816=document[_0x46a172(0xa3)](gameListId);clearContent(_0x3fb816),appendChildren(_0x3fb816,..._0x47f023);}function getWinnerText(_0x215698,_0x2a646a){const _0x347270=a9_0x2381f4;if(_0x2a646a[_0x347270(0xb9)][_0x347270(0xaa)]){const _0x43098b=getPlayerById(_0x215698,_0x2a646a[_0x347270(0xb9)][_0x347270(0x9c)]);return _0x43098b[_0x347270(0xa8)]+_0x347270(0xa5);}if(_0x2a646a[_0x347270(0xb9)][_0x347270(0xaf)])return _0x347270(0xa2);return _0x347270(0x9e);}export{sessionComponent};