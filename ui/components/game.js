const a6_0x12a879=a6_0x2bc9;(function(_0x518f7c,_0x5dedc8){const _0x28ab21=a6_0x2bc9,_0x2c74e3=_0x518f7c();while(!![]){try{const _0x344e2b=parseInt(_0x28ab21(0x1c3))/0x1+-parseInt(_0x28ab21(0x198))/0x2+-parseInt(_0x28ab21(0x189))/0x3+parseInt(_0x28ab21(0x1a6))/0x4+-parseInt(_0x28ab21(0x1a7))/0x5+-parseInt(_0x28ab21(0x1a1))/0x6+parseInt(_0x28ab21(0x1a0))/0x7;if(_0x344e2b===_0x5dedc8)break;else _0x2c74e3['push'](_0x2c74e3['shift']());}catch(_0x47b246){_0x2c74e3['push'](_0x2c74e3['shift']());}}}(a6_0x29ff,0x5f0f2));import{route,replaceContentById,clearContent,createSvgElement,addClick}from'../ui.js';import{addGame,getSessionById,loadState,saveState}from'../../logic/state.js';import{getGameById,getPlayerById,getScore}from'../../logic/session.js';import{canDrop,COLS,createGame,ROWS}from'../../logic/game.js';function a6_0x2bc9(_0x49b6a3,_0x3a14a3){const _0x29ffc8=a6_0x29ff();return a6_0x2bc9=function(_0x2bc9e3,_0x2fc762){_0x2bc9e3=_0x2bc9e3-0x17d;let _0x125abc=_0x29ffc8[_0x2bc9e3];return _0x125abc;},a6_0x2bc9(_0x49b6a3,_0x3a14a3);}import*as a6_0x4a20a9 from'../../logic/game.js';const svgId=a6_0x12a879(0x180),bannerId=a6_0x12a879(0x18d),player1ScoreId=a6_0x12a879(0x1a2),player2ScoreId='player2-score',player1ScoreNameId=a6_0x12a879(0x19c),player2ScoreNameId='player2-score-name',undoId='undo',circleRadius=0x14,spacing=0x1e,boardColor=a6_0x12a879(0x17d),emptyColor=a6_0x12a879(0x1ae),maskVisible=a6_0x12a879(0x1ae),maskInvisible=a6_0x12a879(0x1a9),transparentColor=a6_0x12a879(0x18f);let is_animation_playing=![];function gameComponent(){return{'html':html,'execute':execute};}function html(){const _0x5f5ae4=a6_0x12a879;return _0x5f5ae4(0x1c4)+bannerId+_0x5f5ae4(0x1a8)+player1ScoreNameId+_0x5f5ae4(0x196)+player1ScoreId+_0x5f5ae4(0x1c0)+player2ScoreNameId+_0x5f5ae4(0x18b)+player2ScoreId+_0x5f5ae4(0x1bb)+svgId+_0x5f5ae4(0x188)+undoId+_0x5f5ae4(0x1ba);}function execute(_0xab4800){const _0x4ca8ef=a6_0x12a879,{sessionId:_0x2928db,gameId:_0xbcfd3b}=_0xab4800,_0x1c5b1a=loadState(),_0x34b7e6=getSessionById(_0x1c5b1a,_0x2928db),_0x7fc865=getGameById(_0x34b7e6,_0xbcfd3b),_0x350a7d=getPlayerById(_0x34b7e6,_0x7fc865[_0x4ca8ef(0x17f)]);replaceContentById(bannerId,getBannerText(_0x34b7e6,_0x7fc865,_0x350a7d)),updateScore(_0x34b7e6);const {circles:_0x23567c,dropper:_0x58cd8f,clickableCircles:_0x3f9cc5,svg:_0x4abaa8}=createSvg(_0x2928db,_0xbcfd3b),_0x3d003e=document[_0x4ca8ef(0x1c2)](_0x4ca8ef(0x180));clearContent(_0x3d003e),_0x3d003e['appendChild'](_0x4abaa8);let _0x128eba=0x12c;for(let _0x448362=0x0;_0x448362<_0x7fc865[_0x4ca8ef(0x1a3)]['length'];_0x448362++){const _0x357b55=_0x7fc865[_0x4ca8ef(0x1a3)][_0x448362];is_animation_playing=!![];const _0x175a6b=getPlayerById(_0x34b7e6,_0x357b55[_0x4ca8ef(0x1b4)]);console[_0x4ca8ef(0x1a5)]('Replaying\x20move:\x20player\x20'+_0x357b55[_0x4ca8ef(0x1b4)]+_0x4ca8ef(0x19b)+_0x357b55[_0x4ca8ef(0x1bd)]),dropCircle(_0x23567c,_0x58cd8f,_0x357b55[_0x4ca8ef(0x1bd)],_0x175a6b['color'],_0x128eba,_0x448362*(_0x128eba/0x2),()=>{const _0x6b8f67=_0x4ca8ef;_0x448362===_0x7fc865['moves'][_0x6b8f67(0x1c1)]-0x1&&(is_animation_playing=![]);});}addClick(undoId,()=>{const _0x30cb97=_0x4ca8ef;if(!is_animation_playing){const _0xd78fff=loadState(),_0x4b5a3c=getSessionById(_0xd78fff,_0x2928db),_0xf496a2=getGameById(_0x4b5a3c,_0xbcfd3b),{undo:_0x329826,message:_0x8e477d}=a6_0x4a20a9['canUndo'](_0xf496a2);if(_0x329826){is_animation_playing=!![];const _0x2b9810=a6_0x4a20a9[_0x30cb97(0x181)](_0xf496a2);saveState(_0xd78fff),updateScore(_0x4b5a3c);const _0x569ad6=getPlayerById(_0x4b5a3c,_0x2b9810[_0x30cb97(0x1b4)]);replaceContentById(bannerId,getBannerText(_0x4b5a3c,_0xf496a2,_0x569ad6));const _0x6015b5=_0x23567c[_0x2b9810['row']][_0x2b9810[_0x30cb97(0x1bd)]];_0x58cd8f['removeChild'](_0x6015b5);const {cx:_0x4cc9ea,cy:_0x15e292}=calcCirclePosition(_0x2b9810[_0x30cb97(0x1b3)],_0x2b9810['column']),_0x2a39d4=createCircle(_0x4cc9ea,_0x15e292,circleRadius,transparentColor);_0x3f9cc5['appendChild'](_0x2a39d4),_0x23567c[_0x2b9810[_0x30cb97(0x1b3)]][_0x2b9810[_0x30cb97(0x1bd)]]=_0x2a39d4,is_animation_playing=![];}else console['warn'](_0x30cb97(0x199)+_0x8e477d);}else console['warn']('Animation\x20is\x20playing,\x20can\x20not\x20undo\x20move');});}function getBannerText(_0xa53ced,_0x179cc0,_0x1b2bde){const _0x3d3683=a6_0x12a879;if(_0x179cc0[_0x3d3683(0x1af)][_0x3d3683(0x18e)]){const _0x1bc9a9=getPlayerById(_0xa53ced,_0x179cc0['state'][_0x3d3683(0x185)]);return _0x1bc9a9[_0x3d3683(0x193)]+_0x3d3683(0x1b5);}if(_0x179cc0[_0x3d3683(0x1af)][_0x3d3683(0x190)])return _0x3d3683(0x19a);return _0x3d3683(0x19f)+_0x1b2bde['name']+'!';}function createSvg(_0x3e50e1,_0x2ade74){const _0x1a2274=a6_0x12a879,_0x48e86f=COLS*(circleRadius*0x2+spacing)-spacing,_0x44c2b9=ROWS*(circleRadius*0x2+spacing)-spacing,_0x5ba344=createSvgElement(_0x1a2274(0x1ab),{'width':_0x48e86f[_0x1a2274(0x184)](),'height':_0x44c2b9[_0x1a2274(0x184)](),'viewBox':_0x1a2274(0x1aa)+_0x48e86f+'\x20'+_0x44c2b9}),_0x33188a=createSvgElement(_0x1a2274(0x1bf),{'width':_0x1a2274(0x187),'height':_0x1a2274(0x187),'fill':emptyColor});_0x5ba344[_0x1a2274(0x186)](_0x33188a);const _0x276ded=createSvgElement(_0x1a2274(0x1ac),{'id':'circle-mask'}),_0x5e3897=createSvgElement(_0x1a2274(0x1bf),{'width':_0x48e86f['toString'](),'height':_0x44c2b9[_0x1a2274(0x184)](),'fill':maskVisible});_0x276ded[_0x1a2274(0x186)](_0x5e3897);for(let _0x449ed6=0x0;_0x449ed6<ROWS;_0x449ed6++){for(let _0x3db6a9=0x0;_0x3db6a9<COLS;_0x3db6a9++){const {cx:_0x1e787a,cy:_0x3eb42e}=calcCirclePosition(_0x449ed6,_0x3db6a9),_0x38602e=createCircle(_0x1e787a,_0x3eb42e,circleRadius,maskInvisible,0x1);_0x276ded[_0x1a2274(0x186)](_0x38602e);}}_0x5ba344[_0x1a2274(0x186)](_0x276ded);const _0x59af42=createSvgElement('g',{});_0x5ba344['appendChild'](_0x59af42);const _0xd283f5=createSvgElement(_0x1a2274(0x1bf),{'width':_0x48e86f[_0x1a2274(0x184)](),'height':_0x44c2b9['toString'](),'fill':boardColor,'mask':_0x1a2274(0x1bc)});_0x5ba344['appendChild'](_0xd283f5);const _0x492cb7=createSvgElement('g',{});_0x5ba344['appendChild'](_0x492cb7);let _0x2647f7=[];for(let _0x5d06f7=0x0;_0x5d06f7<ROWS;_0x5d06f7++){for(let _0x2b4466=0x0;_0x2b4466<COLS;_0x2b4466++){const {cx:_0x2b9d41,cy:_0x4c514b}=calcCirclePosition(_0x5d06f7,_0x2b4466),_0x227a6a=createCircle(_0x2b9d41,_0x4c514b,circleRadius,transparentColor);_0x227a6a[_0x1a2274(0x1ad)]=()=>{const _0x1d533b=_0x1a2274;console['debug'](_0x1d533b(0x195)+_0x5d06f7+_0x1d533b(0x183)+_0x2b4466);if(!is_animation_playing){const _0x3c8acd=loadState(),_0x6accc=getSessionById(_0x3c8acd,_0x3e50e1),_0x593f6d=getGameById(_0x6accc,_0x2ade74),{drop:_0x455a32,message:_0x358e46}=canDrop(_0x593f6d,_0x593f6d['nextPlayerId'],_0x2b4466);if(_0x455a32){is_animation_playing=!![];const _0x18de7c=getPlayerById(_0x6accc,_0x593f6d[_0x1d533b(0x17f)]);a6_0x4a20a9[_0x1d533b(0x18c)](_0x593f6d,_0x18de7c['id'],_0x2b4466),saveState(_0x3c8acd),dropCircle(_0x2647f7,_0x59af42,_0x2b4466,_0x18de7c[_0x1d533b(0x19d)],0x1f4,0x0,()=>{const _0x1ab28c=_0x1d533b,_0xd351ea=getPlayerById(_0x6accc,_0x593f6d[_0x1ab28c(0x17f)]);updateScore(_0x6accc);const _0xf8e949=getBannerText(_0x6accc,_0x593f6d,_0xd351ea);replaceContentById(bannerId,_0xf8e949);const {isWon:_0xc569ba,isDraw:_0x1b4656}=_0x593f6d['state'];if(_0xc569ba||_0x1b4656){const _0xf44b93=createGame(_0x6accc,_0x593f6d);addGame(_0x6accc,_0xf44b93),saveState(_0x3c8acd),alert(_0xf8e949),route('game',{'sessionId':_0x3e50e1,'gameId':_0xf44b93['id']},!![]);}is_animation_playing=![];});}else console[_0x1d533b(0x19e)](_0x1d533b(0x18a)+_0x358e46);}else console[_0x1d533b(0x19e)](_0x1d533b(0x1b8));},_0x492cb7[_0x1a2274(0x186)](_0x227a6a),!_0x2647f7[_0x5d06f7]&&(_0x2647f7[_0x5d06f7]=[]),_0x2647f7[_0x5d06f7][_0x2b4466]=_0x227a6a;}}return{'circles':_0x2647f7,'dropper':_0x59af42,'clickableCircles':_0x492cb7,'svg':_0x5ba344};}function dropCircle(_0x2e1a30,_0x29ff7d,_0x3153a,_0x206eb1,_0x915089,_0x27a583,_0x26f0fd){const _0x3cb58b=a6_0x12a879;console[_0x3cb58b(0x1a5)](_0x3cb58b(0x1b1)+_0x3153a);for(let _0x15b89c=ROWS-0x1;_0x15b89c>=0x0;_0x15b89c--){if(_0x2e1a30[_0x15b89c][_0x3153a]['getAttribute'](_0x3cb58b(0x1b6))===transparentColor){console[_0x3cb58b(0x1a5)](_0x3cb58b(0x194)+_0x15b89c+_0x3cb58b(0x183)+_0x3153a);const _0x3ab556=_0x2e1a30[_0x15b89c][_0x3153a],_0x9718ee=_0x3ab556[_0x3cb58b(0x191)]('cx'),_0x57fc19=_0x3ab556['getAttribute']('cy');_0x3ab556[_0x3cb58b(0x1be)]();const _0x495312=createCircle(_0x9718ee,circleRadius,circleRadius+0x1,_0x206eb1);_0x495312[_0x3cb58b(0x197)](_0x3cb58b(0x182),'0'),_0x29ff7d[_0x3cb58b(0x186)](_0x495312),_0x2e1a30[_0x15b89c][_0x3153a]=_0x495312;const _0x347d1e=_0x495312[_0x3cb58b(0x17e)]([{'cy':circleRadius+'px','opacity':0x1},{'cy':_0x57fc19+'px','opacity':0x1}],{'duration':_0x915089,'delay':_0x27a583,'fill':_0x3cb58b(0x1b7),'easing':_0x3cb58b(0x1b9)});_0x347d1e[_0x3cb58b(0x1a4)]=_0x26f0fd;return;}}console[_0x3cb58b(0x19e)](_0x3cb58b(0x1b0)+_0x3153a+_0x3cb58b(0x192));}function calcCirclePosition(_0x265828,_0x42df10){const _0x353c88=_0x42df10*(circleRadius*0x2+spacing)+circleRadius,_0x48cc97=_0x265828*(circleRadius*0x2+spacing)+circleRadius;return{'cx':_0x353c88,'cy':_0x48cc97};}function createCircle(_0x2357ff,_0x52e722,_0x4760e5,_0x2211ce,..._0x246513){const _0x50447b=a6_0x12a879;return createSvgElement('circle',{'cx':_0x2357ff['toString'](),'cy':_0x52e722[_0x50447b(0x184)](),'r':_0x4760e5[_0x50447b(0x184)](),'fill':_0x2211ce},..._0x246513);}function updateScore(_0x1b2c5b){const _0x2590f3=a6_0x12a879,{player1:_0x5e9aa4,player2:_0x1a1c4a}=getScore(_0x1b2c5b);replaceContentById(player1ScoreNameId,_0x1b2c5b['players'][0x0][_0x2590f3(0x193)]),replaceContentById(player2ScoreNameId,_0x1b2c5b[_0x2590f3(0x1b2)][0x1][_0x2590f3(0x193)]),replaceContentById(player1ScoreId,_0x5e9aa4['toString']()),replaceContentById(player2ScoreId,_0x1a1c4a[_0x2590f3(0x184)]());}export{gameComponent};function a6_0x29ff(){const _0x5be9bd=['\x20won!','fill','forwards','Animation\x20is\x20playing,\x20can\x20not\x20drop\x20circle','cubic-bezier(0.645,\x200.045,\x200.355,\x201.000)','\x22\x20class=\x22px-4\x20pt-2\x20pb-3\x20bg-blue-500\x20text-white\x20font-semibold\x20rounded-lg\x20hover:bg-blue-600\x20focus:outline-none\x22>Undo</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','\x22\x20class=\x22text-3xl\x20font-bold\x22>0</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-full\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22','url(#circle-mask)','column','remove','rect','\x22\x20class=\x22text-3xl\x20font-bold\x22>0</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20text-zinc-500\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-lg\x20mb-2\x22>vs</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22text-2xl\x20font-bold\x22>:</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22','length','getElementById','189691oUSvBo','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20flex-col\x20items-center\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22bg-zinc-800/50\x20border\x20border-zinc-700\x20rounded-lg\x20p-6\x20mb-8\x20w-full\x20max-w-md\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x20mb-5\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22','#18181B','animate','nextPlayerId','connect-four','undo','opacity',',\x20col\x20','toString','winnerPlayerId','appendChild','100%','\x22\x20class=\x22flex\x20justify-center\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-center\x20mt-8\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20id=\x22','2275722WBAjJs','Can\x20not\x20drop:\x20','\x22\x20class=\x22text-zinc-400\x20text-lg\x20mb-2\x22>Player\x202</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22','drop','banner','isWon','transparent','isDraw','getAttribute','\x20is\x20full','name','Dropping\x20circle\x20to\x20row\x20','Clicked\x20on\x20row\x20','\x22\x20class=\x22text-zinc-400\x20text-lg\x20mb-2\x22>Player\x201</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22','setAttribute','384026FYEyLc','Can\x20not\x20undo:\x20','Draw!','\x20in\x20column\x20','player1-score-name','color','warn','Your\x20turn\x20','13008415VxPXBY','4013232EjArgN','player1-score','moves','onfinish','debug','1323500EWaXlJ','1850450XOTpAo','\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-center\x20items-center\x20gap-12\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22text-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22','black','0\x200\x20','svg','mask','onclick','white','state','Column\x20','Dropping\x20circle\x20in\x20column\x20','players','row','player'];a6_0x29ff=function(){return _0x5be9bd;};return a6_0x29ff();}