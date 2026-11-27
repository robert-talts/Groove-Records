{
const MONTH=60,END_M=240,KEY='grooveTycoon.v6';
const $=s=>document.querySelector(s);
const cv=$('#scr'),cx=cv.getContext('2d');cx.imageSmoothingEnabled=false;
const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const G=[
{id:'rock',n:'Synthwave',c:'#ff4fd8',hair:'visor',k:[[2070,1],[2080,.85],[2089,.75]]},
{id:'soul',n:'Chrome Funk',c:'#ffb24f',hair:'afro',k:[[2070,.9],[2076,.8],[2082,.5],[2089,.45]]},
{id:'country',n:'Colony Country',c:'#d8834a',hair:'hat',k:[[2070,.5],[2078,.5],[2080,.75],[2083,.5],[2089,.55]]},
{id:'jazz',n:'Quantum Jazz',c:'#5a8cff',hair:'dome',k:[[2070,.55],[2080,.35],[2089,.3]]},
{id:'reggae',n:'Lunar Dub',c:'#5dff9a',hair:'dread',from:2072,k:[[2072,.1],[2076,.5],[2081,.4],[2089,.2]],news:'Lunar Dub, with its slow low-gravity basslines, is drifting down from the Moon colonies.'},
{id:'disco',n:'Bot-Pop',c:'#ff6ab0',hair:'antennae',from:2074,k:[[2074,.15],[2076,.7],[2078,1.3],[2079.4,1.45],[2079.8,.4],[2081,.12],[2089,.1]],news:'Bot-Pop, music written entirely by AIs, is pouring out of the dance clubs.'},
{id:'punk',n:'Gridpunk',c:'#c6ff4f',hair:'mohawk',from:2076,k:[[2076,.2],[2077.5,.65],[2080,.45],[2089,.3]],news:'Gridpunk: hackers making loud, anti-corporate noise from the undercity.'},
{id:'newwave',n:'Holowave',c:'#4ff3ff',hair:'big',from:2078,k:[[2078,.2],[2080,.6],[2082.5,1.05],[2085,.7],[2089,.4]],news:'Holowave bands are performing as giant holograms. Kids love it.'},
{id:'metal',n:'Mech Metal',c:'#a8b4c8',hair:'horns',k:[[2070,.3],[2079,.45],[2083,.85],[2087,1.15],[2089,.95]]},
{id:'synth',n:'Orbital Ambient',c:'#b48cff',hair:'halo',from:2080,k:[[2080,.25],[2082,.7],[2084.5,.95],[2089,.4]],news:'Orbital Ambient, recorded in zero gravity, is the new sound of the stations.'},
{id:'hiphop',n:'Neuro-Rap',c:'#ff8a3d',hair:'cap',from:2079.6,k:[[2079.6,.1],[2082,.25],[2084,.45],[2087,.85],[2089,1.15]],news:'Neuro-Rap, beamed straight into your implants, is climbing the charts.'}];
const GI=Object.fromEntries(G.map(g=>[g.id,g]));
const F=[{id:'lp',n:'Retro vinyl',mult:1,k:[[2070,.8],[2075,.6],[2080,.5],[2085,.3],[2089,.08]]},
{id:'8t',n:'Data chip',mult:1,up:'rack8',k:[[2070,.15],[2075,.25],[2079,.12],[2082,.02],[2084,0]]},
{id:'cas',n:'Holo-cube',mult:1,up:'cass',k:[[2070,.05],[2075,.15],[2080,.38],[2085,.6],[2089,.52]]},
{id:'cd',n:'Neural plug-in',mult:1.75,up:'cdr',k:[[2082.9,0],[2084,.05],[2086,.17],[2088,.33],[2089,.4]]}];
const U=[
{id:'bins',n:'Extra crates',d:'+2 crate slots so you can carry more genres. Rent goes up a bit.',c:600,max:3,v:0},
{id:'stereo',n:'Bass resonators',d:'Wall-mounted resonators that make the floor hum.',c:500,v:5},
{id:'posters',n:'Holo posters',d:'Glowing gig posters that loop little animations.',c:300,v:4},
{id:'lava',n:'Gravity chairs',d:'Floating lounge chairs and a plasma globe. Shoppers stay and chill.',c:250,v:3},
{id:'vend',n:'Fuel & soda dispenser',d:'Sodas for humans, coolant shots for robots. Small sales all day.',c:450,v:2},
{id:'coffee',n:'Synth-caf bar',d:'Synthetic coffee sales, and shoppers with a cup wait longer in line. Includes a barista bot.',c:1100,v:4},
{id:'rack8',n:'Data chip rack',d:'Capture the data chip share of demand.',c:400,v:0},
{id:'cass',n:'Holo-cube wall',d:'Capture the holo-cube share of demand.',c:700,v:0},
{id:'booth',n:'Neural listening pod',d:'Preview albums straight into your brain: +7% buy chance.',c:1200,v:8},
{id:'neon',n:'Holo sign',d:'A spinning holographic record in the window.',c:900,v:7},
{id:'mirror',n:'Security drones',d:'Cuts shoplifting by 60%.',c:500,v:0},
{id:'ac',n:'Climate field',d:'Customers wait longer in line before walking out.',c:1000,v:4},
{id:'disco',n:'Laser rig',d:'Sweeping lasers. Double vibe while Bot-Pop is hot, and people dance.',c:400,v:5,from:2075},
{id:'arcade',n:'VR cabinet',d:'Kids plug in and hang out. Earns credits every month.',c:1500,v:6,from:2078.5},
{id:'tix',n:'Orbital ticket kiosk',d:'Commission on stadium-station gig tickets every month.',c:2000,v:3},
{id:'video',n:'Hologram stage',d:'A life-size hologram performer dancing above the counter. A huge draw.',c:3000,v:12,from:2081.6},
{id:'cdr',n:'Neural plug-in racks',d:'Capture neural plug-in demand. Plug-ins sell at a 75% premium.',c:2500,v:2,from:2083.2}];
const S=[
{id:'clerk',n:'Clerk bot',d:'Faster checkout and shorter lines.',w:220,max:3},
{id:'buyer',n:'Buyer AI',d:'Auto-orders a crate by drone whenever a bin drops below 20.',w:260,max:1},
{id:'guard',n:'Security mech',d:'Cuts shoplifting by 70%.',w:200,max:1},
{id:'dj',n:'DJ android',d:'Spins records on the counter. +8 vibe.',w:180,max:1}];
const C=[
{id:'det',n:'Neo Detroit',g:['soul','metal','hiphop'],c:7000},{id:'aus',n:'Mars Colony One',g:['country','rock'],c:6000},
{id:'chi',n:'Lunar City',g:['reggae','jazz','synth'],c:8000},{id:'mia',n:'Neo Miami',g:['disco','rock','newwave'],c:8000},
{id:'atl',n:'New Lagos',g:['soul','hiphop','reggae'],c:7000},{id:'sea',n:'Seattle Arcology',g:['punk','metal','rock'],c:7500},
{id:'la',n:'Neo Tokyo',g:['newwave','disco','synth'],c:11000},{id:'nyc',n:'Undercity NYC',g:['punk','hiphop','jazz'],c:13000},
{id:'lon',n:'Kepler Station',g:['synth','jazz','newwave','country'],c:15000}];
const PM=[{mult:.85,buy:1.1,vis:1.12},{mult:1,buy:1,vis:1},{mult:1.2,buy:.82,vis:.9}];
const STY={corner:{n:'Canal House',d:'Balanced. Synthwave and Chrome Funk to start.',cash:2500,rent:1,slots:['rock','soul'],rep:25},
boutique:{n:'Jordaan Boutique',d:'Classy. Premium prices hurt less, rent is higher.',cash:3000,rent:1.3,slots:['jazz','soul'],rep:30},
dive:{n:'Basement Club',d:'Cheap rent and a loud crowd, but more shoplifting.',cash:1800,rent:.6,slots:['rock','metal'],rep:20}};
const DIFF={easy:{n:'Easy',cash:1.5,vis:1.15,cost:.9},normal:{n:'Normal',cash:1,vis:1,cost:1},hard:{n:'Hard',cash:.7,vis:.9,cost:1.15}};
const PERKS=[
{id:'dig',n:'Crate Digger',d:'+8% buy chance.'},{id:'haggle',n:'Haggler',d:'Crates cost 15% less.'},
{id:'hands',n:'Overclocked',d:'Checkout is 30% faster.'},{id:'talk',n:'Smooth Talker',d:'+50% reputation from every sale.'},
{id:'window',n:'Window Dresser',d:'+6 vibe.'},{id:'union',n:'Bot Whisperer',d:'Wages and maintenance cost 20% less.'},
{id:'patient',n:'Mixtape Line',d:'Customers wait 50% longer in line.'},{id:'lease',n:'Rent Control',d:'Rent is 20% lower.'},
{id:'franchise',n:'Franchise Protocol',d:'Branches earn 20% more.'},{id:'snacks',n:'Snack Bar',d:'Synth-caf and sodas earn 50% more.'},
{id:'fame',n:'Net Celebrity',d:'15% more shoppers.'},{id:'eye',n:'Eagle Eye',d:'Shoplifting halved.'}];
const RS=[
{id:'inv',t:'supply',n:'Inventory AI',d:'Crates cost 10% less.',c:800,mo:2},
{id:'fore',t:'supply',n:'Trend Forecasting',d:"See next year's demand in the Charts tab.",c:600,mo:1},
{id:'hover',t:'supply',n:'Hover Crates',d:'+2 crate slots with no extra rent.',c:1800,mo:3,req:['inv']},
{id:'drones',t:'supply',n:'Drone Fleet',d:'Drones restock low crates on their own. No Buyer AI needed.',c:2500,mo:3,req:['inv']},
{id:'plant',t:'supply',n:'Vinyl Pressing Plant',d:'Press your own records: crates 20% cheaper and immune to shortages.',c:6000,mo:4,req:['drones','hover']},
{id:'mood',t:'vibe',n:'Mood Lighting',d:'+5 vibe.',c:500,mo:1},
{id:'sonic',t:'vibe',n:'Sonic Branding',d:'A signature shop sound. +8 vibe.',c:1500,mo:2,req:['mood']},
{id:'loyal',t:'vibe',n:'Loyalty Implants',d:'Regulars visit twice as often and give extra rep.',c:2500,mo:2,req:['sonic']},
{id:'express',t:'ops',n:'Express Checkout',d:'Checkout is 25% faster.',c:900,mo:2},
{id:'kiosk',t:'ops',n:'Self-Pay Kiosks',d:'Checkout another 25% faster, and lines stay calmer.',c:2200,mo:3,req:['express']},
{id:'smart',t:'ops',n:'Smart Pricing',d:'Premium pricing barely scares anyone off.',c:1600,mo:2,req:['fore']},
{id:'fos',t:'ops',n:'Franchise OS',d:'Branches earn 15% more.',c:3000,mo:3,req:['smart']}];
const RANKS=[[0,'Stock Bot'],[3,'Counter Jockey'],[7,'Crate Boss'],[13,'Tastemaker'],[20,'Record Baron'],[30,'Vinyl Legend']];
const REGS=[
{id:'dave',n:'UNIT-7 "Sevvy"',g:'disco',look:{kind:'robot',style:'antennae',shell:'#e0c060',glow:'#ff4fd8'},hi:['"PROCESSING... THIS SHOP IS OPTIMAL."','"Bot-Pop inventory: SUFFICIENT. Joy.exe running."','"I have shared your location with 4,000 units."'],lo:'"ERROR 404: BOT-POP NOT FOUND."'},
{id:'patty',n:'Glitch Gwen',g:'punk',look:{kind:'cyborg',style:'mohawk',hair:'#1c1c1c',skin:'#ffdbac',shirt:'#1c1c1c',pants:'#7a1a3a',implant:1,glow:'#c6ff4f'},hi:['"Not bad for a corporate-adjacent shop."','"Okay, fine. This place rules."','"My whole hacker crew shops here now."'],lo:'"No Gridpunk? Ugh. Total system failure."'},
{id:'jerome',n:'Dr. Quark',g:'jazz',look:{kind:'human',style:'dome',hair:'#ddd',skin:'#5c3a1e',shirt:'#3d3d6a',pants:'#1c1c1c',implant:1,glow:'#4ff3ff'},hi:['"Your quantum jazz exists in a state of excellence."','"A fine selection, my friend."','"I bring my physics students here now."'],lo:'"No quantum jazz? Or is there, until I look?"'},
{id:'carl',n:'Rusty the Miner Bot',g:'country',look:{kind:'robot',style:'hat',shell:'#c86a3a',glow:'#ffb24f'},hi:['"Well, I\'ll be rewired. Good pickings."','"Y\'all run a fine shop."','"Told the whole Mars mining crew about ya."'],lo:'"No Colony Country? Shoot. My circuits are sad."'},
{id:'rhonda',n:'Nova Vance',g:'rock',look:{kind:'cyborg',style:'visor',hair:'#ff4fd8',skin:'#f1c27d',shirt:'#2a2a5a',pants:'#111'},hi:['"This shop is pure synthwave."','"Best synthwave section in the megacity."','"I\'m never shopping at the auto-mall again."'],lo:'"No synthwave? Are you kidding me?"'},
{id:'lenny',n:'Torque',g:'metal',look:{kind:'robot',style:'horns',shell:'#555d6a',glow:'#ff3a3a'},hi:['"HEAVY. VERY HEAVY. I APPROVE."','"Horns up. Both of my horns."','"My mech crew is coming Saturday."'],lo:'"WHERE IS THE MECH METAL, HUMAN?"'},
{id:'sasha',n:'Echo',g:'synth',look:{kind:'human',style:'halo',hair:'#c6ff4f',skin:'#ffdbac',shirt:'#e8f4ff',pants:'#3a4a6a',implant:1,glow:'#c6ff4f'},hi:['"So peaceful in here. Like floating."','"Your orbital section is out of this world."','"I made you a zero-g mixtape."'],lo:'"No Orbital Ambient? I feel so grounded."'},
{id:'marcus',n:'MC Byte',g:'hiphop',look:{kind:'cyborg',style:'cap',hair:'#111',skin:'#8d5524',shirt:'#ffb24f',pants:'#3a5fa8'},hi:['"You got the freshest uploads in town."','"This shop is fully charged."','"Told the whole grid about you."'],lo:'"No Neuro-Rap? Come on now."'}];
const ALB=[
['Kid Voltage','Midnight Overdrive',2070,'rock'],['Laser Hearts','Neon Boulevard',2072,'rock'],['Analog Ghost','Tape Memories',2075,'rock'],['Kid Voltage','Night Drive',2077,'rock'],['Sunset Protocol','Palm Circuit',2080,'rock'],['Laser Hearts','Forever Analog',2084,'rock'],['Retrograde','Chrome Horizon',2088,'rock'],
['The Servo Brothers','Get Oiled',2070,'soul'],['Lady Hydraulic','Smooth Pistons',2073,'soul'],['Funkatron 5000','Mothership Upgrade',2075,'soul'],['The Servo Brothers','Groove Protocol',2079,'soul'],['Lady Hydraulic','Chrome & Velvet',2083,'soul'],['Jazzy Jett','Slick',2087,'soul'],
['Red Dust Riders',"Mars Ain't Home",2071,'country'],['Dolly Kepler','Low Gravity Heartache',2074,'country'],['Willie Crater','Red Planet Stranger',2076,'country'],['The Terraformers','Dome Town Blues',2080,'country'],['Dolly Kepler','Oxygen & Whiskey',2084,'country'],['Garth Orbit','Colony Line',2089,'country'],
['Miles Quanta','Superposition',2070,'jazz'],['Herbie Hertz','Wave Function',2073,'jazz'],['The Entangled Trio','Spooky Action',2077,'jazz'],['Miles Quanta','Collapse',2082,'jazz'],['Nina Neutrino','Uncertain Blues',2086,'jazz'],
['Lunar Lion','Moon Dub',2072,'reggae'],['Selene Sound System','Crater Echo',2075,'reggae'],['Lunar Lion','Tranquility Riddim',2078,'reggae'],['Bass Base Alpha','Low Orbit Skank',2083,'reggae'],
['UNIT-9','Love.exe',2075,'disco'],['Glitterbot','Saturday Night Firmware',2077,'disco'],['The Synthetic Sisters','Programmed to Dance',2077,'disco'],['UNIT-9','Feel Nothing (Remix)',2078,'disco'],['The Synthetic Sisters','Upgrade Me',2079,'disco'],
['Null Pointer','Crash the Grid',2076,'punk'],['The Firewalls','No Corp No Cry',2077,'punk'],['Null Pointer','Root Access',2079,'punk'],['Static Kids','Blackout City',2081,'punk'],['The Firewalls','Kernel Panic',2084,'punk'],
['Prism Club','Light Years',2078,'newwave'],['The Holograms','Projected',2080,'newwave'],['Ion Harbor','Glass Skyline',2082,'newwave'],['Prism Club','Refraction',2083,'newwave'],['Pale Pixel','Static Love',2086,'newwave'],
['Iron Exoskeleton','Steel Reign',2070,'metal'],['Black Servo','Overload',2072,'metal'],['Titan Grinder','Hydraulic Fury',2076,'metal'],['Iron Exoskeleton','Back in Chrome',2080,'metal'],['Megaton','Torque of Doom',2086,'metal'],['Titan Grinder','Scrap Heaven',2087,'metal'],
['Zero-G','Weightless',2080,'synth'],['Starlight Array','Event Horizon',2081,'synth'],['Zero-G','Free Fall',2084,'synth'],['Kepler Choir','Deep Field',2085,'synth'],['Starlight Array','Sleeping Satellites',2088,'synth'],
['MC Synapse','Brainwaves',2080,'hiphop'],['Grandmaster Flux','The Signal',2082,'hiphop'],['DJ Cortex & MC Synapse','Neural Network',2084,'hiphop'],['Byte Club','Licensed to Compute',2086,'hiphop'],['Public Algorithm','Nation of Servers',2088,'hiphop'],['De La Code','Three Gigs High',2089,'hiphop']];
const SK=['#ffdbac','#f1c27d','#e0ac69','#c68642','#8d5524','#5c3a1e'],SH70=['#2a2a5a','#3a5a7a','#e8f4ff','#5a2a6a','#1c3a3a','#7a7a8a','#ff8a3d'],SH80=['#ff4fd8','#4ff3ff','#b48cff','#c6ff4f','#ffffff','#5a8cff','#ffb24f'],PA=['#2a3446','#3a4a6a','#1c1c2a','#4a2a5a','#5a6478'],HC=['#1c1c2a','#5a3a1e','#e8f4ff','#ff4fd8','#4ff3ff','#c6ff4f'];
const SHELL=['#c8d0dc','#7fa8c9','#e0c060','#c86a6a','#8ac0a0','#9a8ac8'],GLOW=['#4ff3ff','#ff4fd8','#c6ff4f','#ffb24f'];
const ADJ=['Velvet','Chrome','Neon','Electric','Cosmic','Binary','Midnight','Rusty','Atomic','Silver','Polar','Quantum','Crimson'],NOUN=['Androids','Lizards','Protocol','Cowboys','Satellites','Machines','Diamonds','Static','Vipers','Circuits','Comets','Drones'];
const TT1=[''],TT2=[''];
const pick=a=>a[Math.random()*a.length|0],band=()=>`the ${pick(ADJ)} ${pick(NOUN)}`;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lerpK=(k,y)=>{if(y<=k[0][0])return k[0][1];for(let i=1;i<k.length;i++)if(y<=k[i][0]){const a=k[i-1],b=k[i];return a[1]+(b[1]-a[1])*(y-a[0])/(b[0]-a[0])}return k[k.length-1][1]};
const pop=(g,y)=>(g.from&&y<g.from)?0:lerpK(g.k,y);
const fshare=y=>{const v=F.map(f=>Math.max(0,lerpK(f.k,y))),s=v.reduce((a,b)=>a+b,0);return v.map(x=>x/s)};
const cpi=y=>1+(y-2070)*.11,lp=y=>4+(y-2070)*.25;
const money=n=>(n<0?'-$':'$')+Math.round(Math.abs(n)).toLocaleString('en-US');
let st,cust=[],queue=[],parts=[],floats=[],walkers=[],speed=1,paused=true,modal=false,arranging=false,sel=null,sound=false,music=false,serveT=0,restockT=0,tP=0,tab='stock',evQ=[],curEv=null,spawnAcc=0,lastChime=0,noteT=0,walkT=0;
function nm(){return{rev:0,sold:0,snack:0,miss:{},missF:{},stolen:0,angry:0}}
const defCrate=i=>{const r=i>=5?1:0,c=i%5;return{x:70+c*25,y:r?118:98}};
const defLay=n=>({crate:[...Array(n)].map((_,i)=>defCrate(i)),booth:{x:196,y:44},arcade:{x:200,y:104},vend:{x:178,y:72},coffee:{x:140,y:126},bean:[{x:172,y:131},{x:186,y:134}]});
function fresh(name,sk,dk){const s=STY[sk]||STY.corner,d=DIFF[dk]||DIFF.normal;
 const o={v:6,name:name||'Groove Records',sty:STY[sk]?sk:'corner',diff:DIFF[dk]?dk:'normal',m:0,mt:0,cash:Math.round(s.cash*d.cash),rep:s.rep,price:1,slots:[...s.slots,null,null],stock:{},up:{},staff:{clerk:0,buyer:0,guard:0,dj:0},br:{},brLast:{},mgr:{},fx:[],mon:nm(),last:null,debt:0,total:{sold:0,rev:0,best:0},done:{},log:[],perks:[],goals:[],yr:null,gDone:0,reg:{},albY:{},albT:{},flags:{},tips:true,real:true,lay:defLay(4),res:{done:[],cur:null,left:0},owner:'Max'};
 s.slots.forEach(id=>o.stock[id]=150);return o}
const yF=()=>2070+(st.m+st.mt/MONTH)/12;
const fx=k=>st.fx.filter(f=>f.k==k&&f.until>st.m).reduce((a,f)=>a*f.v,1);
const RD=id=>!!(st.res&&st.res.done.includes(id)),P=id=>st.perks.includes(id),D=()=>DIFF[st.diff];
const hasF=f=>!f.up||!!st.up[f.up];
const brL=()=>Object.values(st.br).reduce((a,b)=>a+b,0);
const vibe=()=>{let v=0;for(const u of U)if(st.up[u.id]&&u.v)v+=u.v*(u.id=='disco'&&pop(GI.disco,yF())>.8?2:1);return v+(st.staff.dj?8:0)+(P('window')?6:0)+(RD('mood')?5:0)+(RD('sonic')?8:0)};
const visits=()=>(24+st.rep*.5+vibe()*1.2+brL()*4)*PM[st.price].vis*fx('visits')*D().vis*(P('fame')?1.15:1);
const crateCost=()=>50*lp(yF())*.45*(RD('plant')?.8:fx('cost'))*D().cost*(P('haggle')?.85:1)*(RD('inv')?.9:1);
const fit=(c,y)=>.55+c.g.reduce((a,id)=>a+pop(GI[id],y),0)/c.g.length;
const brEst=(c,L,y)=>L*(650*cpi(y)*(.5+st.rep/100)*fit(c,y)*(P('franchise')?1.2:1)*(st.mgr[c.id]?1.25:1)*(RD('fos')?1.15:1))-L*260*cpi(y);
const hot=y=>G.filter(g=>pop(g,y)>0).sort((a,b)=>pop(b,y)-pop(a,y));
const dateStr=m=>MON[m%12]+' '+(2070+(m/12|0));
const rankOf=n=>RANKS.filter(r=>n>=r[0]).pop()[1];
const serveDur=()=>2.6/(1+st.staff.clerk*.9)*(P('hands')?.7:1)*(RD('express')?.75:1)*(RD('kiosk')?.75:1);
const albT=i=>ALB[i][1];
const albA=i=>ALB[i][0];
function pickAlb(gid,y){const yi=Math.floor(y);let best=-1,tot=0;const c=[];ALB.forEach((a,i)=>{if(a[3]==gid&&a[2]<=yi){const w=(a[2]==yi?1.6:1)/(1+(yi-a[2]))**1.2;c.push([i,w]);tot+=w}});let r=Math.random()*tot;for(const [i,w] of c){r-=w;if(r<=0)return i}return c.length?c[c.length-1][0]:best}

/* ---------- layout ---------- */
function things(){const L=st.lay,a=st.slots.map((_,i)=>({k:'crate',i,x:L.crate[i].x,y:L.crate[i].y,w:20,h:10}));
 if(st.up.booth)a.push({k:'booth',x:L.booth.x,y:L.booth.y,w:24,h:56});
 if(st.up.arcade)a.push({k:'arcade',x:L.arcade.x,y:L.arcade.y,w:14,h:24});
 if(st.up.vend)a.push({k:'vend',x:L.vend.x,y:L.vend.y,w:14,h:24});
 if(st.up.coffee)a.push({k:'coffee',x:L.coffee.x,y:L.coffee.y,w:26,h:16});
 if(st.up.lava)L.bean.forEach((b,i)=>a.push({k:'bean',i,x:b.x,y:b.y,w:12,h:7}));
 return a}
const fp=o=>({x:o.x,y:o.y+o.h-6,w:o.w,h:6});
const hit=(a,b)=>a.x<b.x+b.w&&b.x<a.x+a.w&&a.y<b.y+b.h&&b.y<a.y+a.h;
const blocked=(o,sk)=>things().some(t=>!(t.k==sk.k&&t.i===sk.i)&&hit(fp(o),fp(t)));
function findFree(w,h){for(let y=96-h;y<=143-h;y+=4)for(let x=66;x<=220-w;x+=4)if(!blocked({x,y,w,h},{}))return{x,y};return{x:66,y:96-h}}
function ensurePlaced(k){const SZ={booth:[24,56],arcade:[14,24],vend:[14,24],coffee:[26,16]};
 if(SZ[k]){const [w,h]=SZ[k];if(blocked({...st.lay[k],w,h},{k}))st.lay[k]=findFree(w,h)}
 if(k=='lava')st.lay.bean.forEach((b,i)=>{if(blocked({...b,w:12,h:7},{k:'bean',i}))st.lay.bean[i]=findFree(12,7)})}
const spot={crate:i=>({x:st.lay.crate[i].x+10,y:st.lay.crate[i].y+13}),booth:()=>({x:st.lay.booth.x+12,y:st.lay.booth.y+55}),arcade:()=>({x:st.lay.arcade.x+7,y:Math.min(142,st.lay.arcade.y+31)}),vend:()=>({x:st.lay.vend.x+7,y:Math.min(142,st.lay.vend.y+30)}),coffee:()=>({x:st.lay.coffee.x-4,y:st.lay.coffee.y+14}),bean:i=>({x:st.lay.bean[i].x+6,y:st.lay.bean[i].y+5})};

/* ---------- sound & music ---------- */
let ac=null,mG=null,nb=null,mT=null,mStep=0,mNext=0;
function ensureAC(){try{if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();ac.resume();if(!mG){mG=ac.createGain();mG.gain.value=.55;mG.connect(ac.destination);nb=ac.createBuffer(1,ac.sampleRate*.06|0,ac.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}}catch(e){}}
function beep(f,d,t=0){if(!sound||!ac)return;try{const o=ac.createOscillator(),g=ac.createGain(),n=ac.currentTime+t;o.type='square';o.frequency.value=f;g.gain.setValueAtTime(.04,n);g.gain.exponentialRampToValueAtTime(.001,n+d);o.connect(g).connect(ac.destination);o.start(n);o.stop(n+d)}catch(e){}}
function chime(){if(tP-lastChime<.15)return;lastChime=tP;beep(1320,.08);beep(1760,.12,.07)}
const midi=n=>440*2**((n-69)/12);
function tone(f,t,d,type,v){const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g).connect(mG);o.start(t);o.stop(t+d+.02)}
function noise(t,v,freq,type){const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=nb;f.type=type;f.frequency.value=freq;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+.05);s.connect(f).connect(g).connect(mG);s.start(t)}
const SONG={70:{bpm:100,prog:[[45,[0,3,7,10]],[45,[0,3,7,10]],[50,[0,4,7,10]],[50,[0,4,7,10]]],bass:[0,-1,12,0,-1,0,10,-1,0,-1,12,0,7,-1,10,12],stab:[0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1]},
80:{bpm:116,prog:[[48,[0,4,7,12]],[43,[0,4,7,12]],[45,[0,3,7,12]],[41,[0,4,7,12]]],bass:[0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,12,-1],arp:1}};
function sched(){if(!ac)return;try{const S2=st&&yF()>=2080?SONG[80]:SONG[70],sp=60/S2.bpm/4;if(mNext<ac.currentTime)mNext=ac.currentTime+.05;
 while(mNext<ac.currentTime+.25){const s=mStep%16,[root,ch]=S2.prog[(mStep/16|0)%S2.prog.length],b=S2.bass[s];
  if(b>=0)tone(midi(root+b),mNext,sp*1.7,'triangle',.11);
  if(S2.arp){if(s%2==0)tone(midi(root+24+ch[(s/2)%ch.length]),mNext,sp*1.6,'square',.016)}else if(S2.stab[s])for(const iv of ch)tone(midi(root+24+iv),mNext,sp*.8,'square',.011);
  if(s%2==1)noise(mNext,.025,7000,'highpass');if(s==4||s==12)noise(mNext,.06,1800,'bandpass');
  mNext+=sp;mStep++}}catch(e){}}
function setMusic(on){music=on;if(on){ensureAC();if(!mT){mNext=0;mT=setInterval(sched,60)}}else{clearInterval(mT);mT=null}}

/* ---------- toasts ---------- */
function toast(msg,nolog){const el=document.createElement('div');el.textContent=msg;const t=$('#toast');t.appendChild(el);while(t.children.length>3)t.firstChild.remove();setTimeout(()=>el.remove(),4500);if(nolog)return;st.log.unshift(MON.some(m=>msg.startsWith(m))?msg:dateStr(st.m)+': '+msg);st.log.length=Math.min(st.log.length,12)}
const TIPS=[[()=>st.flags.ans,'Shoppers with a gold ? have a question. Tap them to help, and they buy more.'],[()=>st.flags.crate,'Crates run out fast. In the Stock tab, tap "+1 crate" to restock.'],[()=>st.slots.filter(Boolean).length>=3,'Put another genre in an empty crate. The Charts tab shows what\'s hot.'],[()=>Object.keys(st.up).length>0,'Buy something in the Shop tab to draw bigger crowds.'],[()=>st.flags.goals,'Open the Goals tab to see this year\'s targets.'],[()=>st.flags.tap,'Tap a shopper on screen to see what they want.'],[()=>st.flags.arr,'Tap Arrange to move crates and furniture around.'],[()=>st.res.cur||st.res.done.length,'Open the Research tab and start your first project.']];
function tipUI(){const el=$('#tip');if(arranging){el.hidden=false;$('#tipT').textContent=sel?'Now tap an empty floor spot to move it there.':'Tap a crate or piece of furniture to pick it up.';return}
 const t=st.tips&&TIPS.find(t=>!t[0]());el.hidden=!t;if(t)$('#tipT').textContent=t[1]}

/* ---------- customers ---------- */
const STATUS={in:'Just walked in.',dig:'Flipping through the crate.',ask:'Has a question for you. Tap them!',sad:"Can't find what they came for.",toBooth:'Heading to the neural pod.',booth:'Previewing an album in the neural pod.',toArc:'Going for the VR cabinet.',arc:'Plugged into VR.',toDance:'Feeling the lasers.',dance:'Dancing!',toBean:'Grabbing a gravity chair.',bean:'Floating in a gravity chair.',toLook:'Checking out the posters.',look:'Checking out the posters.',toCoffee:'Getting a synth-caf first.',coffee:'Ordering a synth-caf.',toVend:'Grabbing a drink.',vend:'Buying a drink.',q:'Waiting in line.',pay:'Paying at the register.',out:'Heading out.'};
const shoppers=()=>cust.filter(c=>!c.del);
const go=(c,s,p)=>{c.st=s;c.tx=p.x;c.ty=p.y};
function browse(c){
 const g=c.g,y=yF(),u=st.stock[g.id]||0,M=st.mon;
 if(!st.slots.includes(g.id)||u<=0){M.miss[g.id]=(M.miss[g.id]||0)+1;st.rep-=u<=0&&st.slots.includes(g.id)?.2:.1;
  if(c.reg&&!st.done['rm'+c.reg+st.m]){st.done['rm'+c.reg+st.m]=1;const r=REGS.find(x=>x.id==c.reg);toast(`${r.n}: ${r.lo}`)}return'miss'}
 let f=c.f;if(!hasF(f)){if(Math.random()<.35)c.f=f=F[0];else{M.missF[f.id]=(M.missF[f.id]||0)+1;st.rep-=.08;return'miss'}}
 if(g.id=='metal'&&Math.random()>fx('metal'))return'browse';
 const pb=st.price==2&&RD('smart')?.95:st.price==2&&st.sty=='boutique'?.91:PM[st.price].buy;
 if(!c.helped&&Math.random()>Math.min(.97,.6*pb*(st.up.booth?1.07:1)*(P('dig')?1.08:1)*(c.reg?1.15:1)))return'browse';
 const q=Math.min(u,Math.round((4+(Math.random()*6|0))*(c.helped?1.4:1)));st.stock[g.id]=u-q;if(u-q<=0)toast(`Your ${g.n} crate is sold out! Restock it in the Stock tab.`);
 c.qty=q;c.amt=q*lp(y)*f.mult*PM[st.price].mult;c.alb=pickAlb(g.id,y);
 if(Math.random()<.035*(st.up.mirror?.4:1)*(st.staff.guard?.3:1)*(P('eye')?.5:1)*(st.sty=='dive'?1.4:1)){M.stolen+=q;return'steal'}
 return'buy'}
function pay(c){st.cash+=c.amt;st.mon.rev+=c.amt;st.mon.sold+=c.qty;st.total.sold+=c.qty;st.total.rev+=c.amt;st.rep+=.08*(P('talk')?1.5:1);
 const Y=st.yr;Y.sold+=c.qty;Y.rev+=c.amt;Y.genre[c.g.id]=(Y.genre[c.g.id]||0)+c.qty;
 if(c.alb>=0){st.albY[c.alb]=(st.albY[c.alb]||0)+c.qty;st.albT[c.alb]=(st.albT[c.alb]||0)+c.qty}
 if(c.reg&&RD('loyal'))st.rep+=.3;
 if(c.reg){const r=REGS.find(x=>x.id==c.reg),n=st.reg[c.reg]=(st.reg[c.reg]||0)+1;if(n==3||n==8||n==15){st.rep+=3;toast(`${r.n}: ${r.hi[n==3?0:n==8?1:2]}`)}}
 chime()}
function snack(c,amt){const v=amt*cpi(yF())*(P('snacks')?1.5:1);st.cash+=v;st.mon.snack+=v;floats.push({x:c.x,y:c.y-22,t:'+'+Math.max(1,Math.round(v)),c:'#ffd27a',life:1.3});beep(1100,.05)}
function spawn(){
 const y=yF();let g=pickG(y),reg=null;
 if(Math.random()<.07*(RD('loyal')?2:1)){const el=REGS.filter(r=>pop(GI[r.g],y)>.15&&!cust.some(c=>c.reg==r.id));if(el.length){reg=pick(el);g=GI[reg.g]}}
 const c={g,f:pickF(y),x:238,y:93,st:'in',t:0,bub:null,bt:0,skin:pick(SK),shirt:pick(Math.random()<.5?SH70:SH80),pants:pick(PA),hair:pick(HC),kind:pick(['robot','robot','cyborg','cyborg','human','human','human']),shell:pick(SHELL),glow:pick(GLOW),implant:Math.random()<.5,walk:0,wait:0,sp:1,carry:0,bean:-1,alb:-1,ask:Math.random()<.18};
 if(reg){Object.assign(c,reg.look);c.reg=reg.id;c.ask=false}
 if(shoppers().length>=10){if(browse(c)=='buy')pay(c);return}
 let i=st.slots.indexOf(g.id);if(i<0)i=Math.random()*st.slots.length|0;const p=spot.crate(i);c.btx=p.x+(Math.random()*6-3);c.bty=p.y+Math.random()*2;
 if(st.up.coffee&&Math.random()<.22)go(c,'toCoffee',spot.coffee());else{c.tx=c.btx;c.ty=c.bty}
 cust.push(c)}
function pickG(y){const gs=G.filter(g=>pop(g,y)>0);let r=Math.random()*gs.reduce((a,g)=>a+pop(g,y),0);for(const g of gs){r-=pop(g,y);if(r<=0)return g}return gs[0]}
function pickF(y){const s=fshare(y);let r=Math.random();for(let i=0;i<F.length;i++){r-=s[i];if(r<=0)return F[i]}return F[0]}
function delivery(id){const i=st.slots.indexOf(id);if(i<0||cust.filter(c=>c.del).length>=2)return;const p=spot.crate(i);cust.push({del:1,st:'dIn',x:238,y:93,tx:p.x,ty:p.y,skin:pick(SK),shirt:'#5a6b3a',pants:'#3a3a2a',hair:'#2a1a10',style:'cap',g:{hair:'cap',c:'#b98a52'},walk:0,sp:1.4,carry:3,t:0,bean:-1})}
function leave(c,b){c.st='out';c.tx=238;c.ty=93;c.bub=b;c.bt=1.8;c.hide=false;c.bean=-1}
function step(c,dt){const dx=c.tx-c.x,dy=c.ty-c.y,d=Math.hypot(dx,dy),v=18*c.sp*dt;c.moving=d>.5;if(d<=v){c.x=c.tx;c.y=c.ty;c.moving=false;return true}c.x+=dx/d*v;c.y+=dy/d*v;c.walk+=dt;return false}
function afterBuy(c){if(st.up.booth&&!cust.some(o=>o.st=='booth'||o.st=='toBooth')&&Math.random()<.4)return go(c,'toBooth',spot.booth());c.st='q';queue.push(c)}
function idle(c){const r=Math.random(),y=yF();
 if(st.up.arcade&&!cust.some(o=>o.st=='arc'||o.st=='toArc')&&r<.3)return go(c,'toArc',spot.arcade());
 if(st.up.vend&&!cust.some(o=>o.st=='vend'||o.st=='toVend')&&r<.45)return go(c,'toVend',spot.vend());
 if(st.up.disco&&pop(GI.disco,y)>.5&&r<.65)return go(c,'toDance',{x:105+Math.random()*50,y:136+Math.random()*4});
 if(st.up.lava&&r<.8){const i=[0,1].find(j=>!cust.some(o=>o.bean===j));if(i!=null){c.bean=i;return go(c,'toBean',spot.bean(i))}}
 if(r<.9)return go(c,'toLook',{x:76+Math.random()*110,y:95});
 leave(c,null)}
const timed={toBooth:['booth',3,2],toArc:['arc',3,3],toDance:['dance',3,2],toBean:['bean',3,3],toLook:['look',1.5,1.5],in:['dig',2.4,2.4],toCoffee:['coffee',1.2,.6],toVend:['vend',1,.5]};
function sim(dt){
 st.mt+=dt;{const df=1-.6*Math.cos(2*Math.PI*st.mt/MONTH);if(Math.random()<dt*visits()/MONTH*df)spawn()}
 const pat=(12+(st.up.ac?6:0)+(RD('kiosk')?4:0))*(P('patient')?1.5:1);
 queue.forEach((c,i)=>{c.tx=66+i*8;c.ty=112});
 for(const c of cust){c.bt-=dt;const at=c.hide||step(c,dt);
  if(timed[c.st]){if(at){const [s,a,b]=timed[c.st];c.st=s;c.t=a+Math.random()*b;if(s=='booth')c.hide=true}continue}
  if(c.t>0)c.t-=dt;
  switch(c.st){
  case'ask':if(c.t<=0)autoAnswer(c);break;
  case'dig':if(c.t<=0){if(c.ask&&!c.asked){c.asked=1;c.q=makeQ(c);c.st='ask';c.t=12;c.bub='ask';c.bt=12;break}const o=browse(c);if(o=='buy'){c.carry=1;afterBuy(c)}else if(o=='steal'){c.carry=1;leave(c,'!');c.sp=2.2}else if(o=='miss'){c.st='sad';c.t=1.6;c.bub='want';c.bt=1.6}else idle(c)}break;
  case'sad':if(c.t<=0)leave(c,null);break;
  case'booth':if(c.t<=0){c.hide=false;c.st='q';queue.push(c)}break;
  case'coffee':if(c.t<=0){snack(c,1.5);c.cup=1;c.st='in';c.tx=c.btx;c.ty=c.bty}break;
  case'vend':if(c.t<=0){snack(c,1);c.can=1;leave(c,'h')}break;
  case'arc':case'dance':if(c.t<=0)leave(c,'h');break;
  case'bean':case'look':if(c.t<=0)leave(c,null);break;
  case'q':c.wait+=dt;if(queue[0]!==c&&c.wait>pat+(c.cup?8:0)){queue.splice(queue.indexOf(c),1);st.stock[c.g.id]=(st.stock[c.g.id]||0)+c.qty;st.rep-=.4;st.mon.angry++;c.carry=0;leave(c,'x')}break;
  case'dIn':if(at){c.st='dDrop';c.t=.7;c.carry=0}break;
  case'dDrop':if(c.t<=0)leave(c,null);break;
  case'out':if(at)c.dead=true;break}}
 const h=queue[0];
 if(h&&h.st=='q'&&Math.hypot(h.x-h.tx,h.y-h.ty)<1.5){h.st='pay';serveT=0}
 if(h&&h.st=='pay'){serveT+=dt;if(serveT>=serveDur()){queue.shift();pay(h);h.carry=2;floats.push({x:h.x,y:h.y-22,t:'+'+Math.round(h.amt),c:'#7dff6a',life:1.8});if(st.up.vend&&Math.random()<.15){go(h,'toVend',spot.vend());h.bub='h';h.bt=1.5}else leave(h,'h');serveT=0}}
 cust=cust.filter(c=>!c.dead);
 for(const f of floats){f.y-=7*dt;f.life-=dt}floats=floats.filter(f=>f.life>0);
 st.rep=Math.max(0,Math.min(100,st.rep));
 if((st.staff.buyer||RD('drones'))&&(restockT+=dt)>1){restockT=0;for(const id of st.slots)if(id&&(st.stock[id]||0)<20&&st.cash>=crateCost()){st.cash-=crateCost();st.stock[id]=(st.stock[id]||0)+50;delivery(id)}}
 if(st.mt>=MONTH/2&&!st.done['r'+st.m]){st.done['r'+st.m]=1;if(!st.done['s'+st.m]&&Math.random()<.32*(st.diff=='hard'?1.3:1))queueEv(pick(RE)())}
 if(st.mt>=MONTH){st.mt-=MONTH;monthEnd()}}

/* ---------- goals, perks, years ---------- */
function makeGoals(){const y=2070+(st.m/12|0),v=visits()*12,k=cpi(y),out=[],hs=hot(y),tot=hs.reduce((a,g)=>a+pop(g,y),0);
 const pool=[
  ()=>({t:`Sell ${Math.round(v*2/50)*50} records this year`,k:'sold',n:Math.round(v*2/50)*50}),
  ()=>{const n=Math.min(95,Math.round(st.rep/5)*5+15);return{t:`Reach ${n} reputation`,k:'rep',n}},
  ()=>{const n=Math.round(v*2*lp(y)*.9/500)*500;return{t:`Make ${money(n)} in record sales this year`,k:'rev',n}},
  ()=>{const g=hs[Math.random()*Math.min(3,hs.length)|0],n=Math.max(50,Math.round(v*2*pop(g,y)/tot*.8/10)*10);return{t:`Sell ${n} ${g.n} records`,k:'genre',g:g.id,n}},
  ()=>{const u=U.find(u=>!st.up[u.id]&&!(u.from&&y<u.from)&&u.c*k<=Math.max(1500,st.cash*2));return u&&{t:`Install: ${u.n}`,k:'up',id:u.id,n:1}},
  ()=>st.rep>=35&&{t:'Open or expand a branch',k:'br',n:brL()+1},
  ()=>({t:'Finish 3 months in a row in profit',k:'streak',n:3}),
  ()=>({t:'Finish a research project',k:'res',n:st.res.done.length+1})];
 const idx=[...pool.keys()].sort(()=>Math.random()-.5);
 for(const i of idx){const g=pool[i]();if(g&&!out.some(o=>o.k==g.k))out.push({...g,done:0});if(out.length==3)break}
 return out}
function gProg(g){const Y=st.yr;return g.k=='sold'?Y.sold:g.k=='rev'?Y.rev:g.k=='genre'?(Y.genre[g.g]||0):g.k=='rep'?st.rep:g.k=='up'?(st.up[g.id]?1:0):g.k=='br'?brL():g.k=='streak'?Y.bestStreak:g.k=='res'?st.res.done.length:0}
function checkGoals(){for(const g of st.goals||[])if(!g.done&&gProg(g)>=g.n){g.done=1;st.gDone++;const r=Math.round(400*cpi(yF())*(1+st.m/80));st.cash+=r;st.rep=Math.min(100,st.rep+3);toast(`Goal complete: ${g.t}! +${money(r)}`);beep(784,.1);beep(1047,.15,.1)}}
function newYear(){const y=2070+(st.m/12|0);st.yr={sold:0,rev:0,genre:{},streak:0,bestStreak:0};st.albY={};st.goals=makeGoals();
 const nr=ALB.map((a,i)=>i).filter(i=>ALB[i][2]==y);if(nr.length)toast(`New releases in ${y}: ${nr.slice(0,3).map(albT).join(', ')}${nr.length>3?'…':''}`)}
function perkChoice(){const av=PERKS.filter(p=>!st.perks.includes(p.id)),ch=[];while(ch.length<3&&av.length)ch.push(av.splice(Math.random()*av.length|0,1)[0]);if(!ch.length)return;
 queueEv({t:`${2070+(st.m/12|0)}: pick a perk`,x:'A new year, a new trick up your sleeve. Perks last the rest of the game.',o:ch.map(p=>({l:`${p.n}: ${p.d}`,f:()=>{st.perks.push(p.id);return`Perk unlocked: ${p.n}.`}}))})}

/* ---------- months & events ---------- */
function monthEnd(){
 const y=yF(),k=cpi(y),M=st.mon;
 const rent=(120+(st.up.bins||0)*40)*k*STY[st.sty].rent*D().cost*(P('lease')?.8:1);
 const wages=(S.reduce((a,s)=>a+(st.staff[s.id]||0)*s.w,0)+(st.up.coffee?150:0)+Object.keys(st.mgr).length*300)*k*(P('union')?.8:1);
 const passive=((st.up.arcade?70:0)+(st.up.tix?160:0))*k;
 let brNet=0;for(const c of C){const L=st.br[c.id];if(!L)continue;let p=brEst(c,L,y)*(.85+Math.random()*.3);const r=Math.random();
  if(r<(st.mgr[c.id]?.02:.07)){const loss=Math.abs(brEst(c,L,y))*.8+200*k;p-=loss;toast(`Break-in at the ${c.n} branch cost ${money(loss)}.`)}
  else if(r>.96){const g=300*k*L;p+=g;toast(`The ${c.n} branch hosted a packed in-store signing: +${money(g)}.`)}
  st.brLast[c.id]=p;brNet+=p}
 st.cash+=passive+brNet-rent-wages;
 st.rep+=(Math.min(100,15+vibe()*1.4)-st.rep)*.03;st.rep=Math.max(0,Math.min(100,st.rep));
 const net=M.rev+M.snack+passive+brNet-rent-wages;st.total.best=Math.max(st.total.best,net);
 st.yr.streak=net>0?st.yr.streak+1:0;st.yr.bestStreak=Math.max(st.yr.bestStreak,st.yr.streak);
 st.last={...M,rent,wages,passive,brNet,net,label:dateStr(st.m)};
 toast(`${dateStr(st.m)}: records ${money(M.rev)}, snacks ${money(M.snack)}, branches ${money(brNet)}, rent & wages ${money(rent+wages)}`);
 const RR=st.res;if(RR.cur){RR.left--;if(RR.left<=0){const r=RS.find(x=>x.id==RR.cur);RR.done.push(r.id);RR.cur=null;if(r.id=='hover')for(let j=0;j<2;j++){const i=st.lay.crate.length,d=defCrate(i);st.lay.crate.push(blocked({...d,w:20,h:10},{})?findFree(20,10):d);st.slots.push(null)}toast(`Research complete: ${r.n}! ${r.d}`);beep(880,.1);beep(1320,.15,.1)}}
 checkGoals();
 if(st.cash<0){st.debt++;if(st.debt>=3)return over(false);toast(`You're in the red. ${3-st.debt} month${st.debt==2?'':'s'} before the bank takes the keys.`)}else st.debt=0;
 st.m++;st.mon=nm();st.fx=st.fx.filter(f=>f.until>st.m);
 if(st.m>=END_M)return over(true);
 monthStart();save();renderTab()}
function monthStart(){
 const y=2070+st.m/12,yp=y-1/12;
 if(st.m%12==0){const done=st.goals.filter(g=>g.done).length;toast(`${y}! Last year you finished ${done} of 3 goals. Top sellers now: ${hot(y).slice(0,3).map(g=>g.n).join(', ')}.`);newYear();perkChoice()}
 for(const g of G)if(g.from&&g.from>yp&&g.from<=y)toast('New genre: '+g.news);
 if(st.m%12==3){st.done['s'+st.m]=1;queueEv({t:"King's Day",x:'The whole city turns orange, and every street along the canals becomes a flea market. Want to set up a record stall out front?',o:[{l:`Run a street stall (${money(150*K())})`,f:()=>{st.cash-=150*K();const g=Math.round((500+Math.random()*700)*K());st.cash+=g;st.rep+=4;return`You sold old stock from the canal bank all day. +${money(g)}, and half the city saw your shop.`}},{l:'Stay inside',f:()=>{st.fx.push({k:'visits',v:1.1,until:st.m+1});return'The orange crowds wander in anyway. A busy month.'}}]})}
 if(st.m%12==9){st.fx.push({k:'visits',v:1.15,until:st.m+1});toast('Amsterdam Dance Event week! The city is packed with DJs and dancers. More shoppers this month.')}
 const e=SE[st.m];if(e){st.done['s'+st.m]=1;e()}}
function queueEv(e){evQ.push(e);if(!modal)nextEv()}
function nextEv(){curEv=evQ.shift();if(!curEv)return;ovOpen(`<h2>${esc(curEv.t)}</h2><p>${esc(curEv.x)}</p><div class="btns">${curEv.o.map((o,i)=>`<button data-a="ev:${i}"${i==0?' class="on"':''}>${esc(o.l)}</button>`).join('')}</div>`)}
const K=()=>cpi(yF());
function addG(id,u){if(!st.slots.includes(id)){const i=st.slots.indexOf(null);if(i<0)return false;st.slots[i]=id}st.stock[id]=(st.stock[id]||0)+u;return true}
const RE=[
()=>{const g=hot(yF())[0],l=pick(['OmniSound Corp','Starlight Media','MegaMusic Inc.','Helix Records','Sunburst Industries']);return{t:'Label rep at the door',x:`A rep from ${l} wants your window for a hologram ad of their new ${g.n} release. They'll throw in two free crates.`,o:[{l:'Take the deal',f:()=>addG(g.id,100)?`Two crates of ${g.n} added. Customers love the hologram.`:(st.cash+=300*K(),'No free crate slot, so they paid you for window space instead.')},{l:'No thanks',f:()=>'The rep shrugs and teleports to the mall. Well, takes the tube.'}]}},
()=>({t:'Pirated neural files',x:`A shady android offers a batch of pirated neural plug-ins for ${money(250*K())}. Fast money, if the copyright drones don't notice.`,o:[{l:'Buy the batch',f:()=>{st.cash-=250*K();if(Math.random()<.6){const g=900*K();st.cash+=g;return`They sold out in a week. You made ${money(g)}.`}const fi=1000*K();st.cash-=fi;st.rep-=8;return`Busted by a copyright drone. ${money(fi)} fine, and it hit the newsfeeds.`}},{l:'Send it away',f:()=>{st.rep+=1;return'You kept it clean.'}}]}),
()=>{const ids=st.slots.filter(Boolean),id=pick(ids.length?ids:['rock']);return{t:'Canal leak!',x:`Canal water is seeping into the basement, right over your ${GI[id].n} stock.`,o:[{l:`Call a repair bot (${money(400*K())})`,f:()=>{st.cash-=400*K();return'Patched in seconds. Not a sleeve got wet.'}},{l:'Grab a mop',f:()=>{const l=Math.floor((st.stock[id]||0)*.4);st.stock[id]=(st.stock[id]||0)-l;return`You saved most of it, but ${l} ${GI[id].n} records are soaked.`}}]}},
()=>({t:'Ancient vinyl',x:`Someone brings in what they swear is a real vinyl record from the year 2020. They want ${money(300*K())}.`,o:[{l:'Buy it',f:()=>{st.cash-=300*K();if(Math.random()<.5){const g=1100*K();st.cash+=g;st.rep+=3;return`Genuine! A museum bot paid ${money(g)}.`}return'It was a 3D-printed fake. Lesson learned.'}},{l:'Pass',f:()=>'You wish them luck at the scrap market.'}]}),
()=>({t:'AI stream host',x:'The most popular AI host on the music feeds offers to plug your shop.',o:[{l:`Pay for the plug (${money(250*K())})`,f:()=>{st.cash-=250*K();st.rep+=8;return'Your shop trended for a week. Rep up.'}},{l:'Offer a giveaway instead',f:()=>{const id=st.slots.find(s=>s&&st.stock[s]>=20);if(!id)return'You had nothing to give away. The AI moved on.';st.stock[id]-=20;st.rep+=5;return`You gave away 20 ${GI[id].n} records. Viewers loved it.`}}]}),
()=>({t:'MegaCorp auto-store',x:'A fully automated MegaCorp music store just opened down the block. No staff, no soul, very cheap.',o:[{l:`Throw a block party (${money(600*K())})`,f:()=>{st.cash-=600*K();st.rep+=6;return'Humans, cyborgs and robots all showed up for you.'}},{l:'Ignore them',f:()=>{st.fx.push({k:'visits',v:.85,until:st.m+3});return'Foot traffic will be down for a few months.'}}]}),
()=>{const b=band();return{t:'Android pop star in aisle 3',x:`The lead android of ${b} is flipping through your crates.`,o:[{l:'Ask for a signed holo-photo',f:()=>{st.rep+=6;return'The holo-photo spins behind the register. People come just to see it.'}},{l:'Play it cool',f:()=>{st.rep+=3;return'They bought a stack of records and mentioned you on the feeds.'}}]}},
()=>({t:'Estate sale haul',x:`A family is selling great-grandpa's huge record collection for ${money(350*K())}.`,o:[{l:'Buy it all',f:()=>{st.cash-=350*K();let n=0;for(const id of st.slots)if(id){st.stock[id]=(st.stock[id]||0)+40;n++}return n?`Added 40 records to each of your ${n} crates.`:'You bought it, but had no crates to fill.'}},{l:'Pass',f:()=>'Somebody else got a great deal.'}]}),
()=>{const b=band();return{t:'In-store gig',x:`Local band ${b} wants to play a set in your shop on Saturday.`,o:[{l:'Host the gig',f:()=>{st.rep+=5*(st.sty=='dive'?1.5:1);if(Math.random()<.25){st.cash-=300*K();return`Packed house! Also one shattered holo-panel (${money(300*K())}).`}return'Packed house and a great night.'}},{l:'Decline',f:()=>'Maybe next time.'}]}},
()=>({t:'Solar flare warning',x:'A solar flare is coming. It could fry your electronics.',o:[{l:`Install shielding (${money(300*K())})`,f:()=>{st.cash-=300*K();return'Shielded. The flare passed without a flicker.'}},{l:'Risk it',f:()=>{if(Math.random()<.5){const f=900*K();st.cash-=f;return`The flare fried your register and two clerk bots. Repairs: ${money(f)}.`}return'The flare missed you. Lucky.'}}]}),
()=>({t:'Robot rights rally',x:'A robot rights march is passing your shop. The marchers would love a rest stop.',o:[{l:`Hand out free coolant (${money(200*K())})`,f:()=>{st.cash-=200*K();st.rep+=5;return'The robots chanted your shop name for three blocks.'}},{l:'Keep the doors shut',f:()=>{st.rep-=2;return'A few marchers posted angry reviews.'}}]})];
const SE={
46:()=>queueEv({t:'Vinyl shortage',x:"The last petroleum plant on Earth just shut down, and vinyl is scarce. Wholesale crate costs will jump 40% for the next 8 months.",o:[{l:'Stockpile now (2 crates per bin)',f:()=>{let n=0;for(const id of st.slots)if(id&&st.cash>=crateCost()*2){st.cash-=crateCost()*2;st.stock[id]=(st.stock[id]||0)+100;n++}st.fx.push({k:'cost',v:1.4,until:st.m+8});return`Stocked up ${n} crates at the old price.`}},{l:'Ride it out',f:()=>{st.fx.push({k:'cost',v:1.4,until:st.m+8});return'Crates cost 40% more for 8 months.'}}]}),
89:()=>{const b=band();queueEv({t:'Gridpunk comes to town',x:`A hacker band called ${b} wants to play a very loud set in your shop, broadcast on every hijacked billboard in the city.`,o:[{l:'Let them play',f:()=>{st.rep+=7;if(Math.random()<.35){st.cash-=350*K();return`Legendary night. Your resonators did not survive (${money(350*K())}).`}return'Legendary night. The whole grid is talking about it.'}},{l:'Not in my shop',f:()=>{st.rep-=1;return'They hacked your sign to say "SELLOUT" for a day.'}}]})},
114:()=>{toast('Holo-cube players just shrank to pocket size. Holo-cubes will keep climbing.');queueEv({t:'Humans Only backlash',x:'At a Mars stadium game, a "Humans Only" stunt blew up crates of AI-made Bot-Pop. The backlash is spreading. Bot-Pop demand is about to crash.',o:[{l:'Dump the Bot-Pop bin to a wholesaler',f:()=>{const u=st.stock.disco||0;if(!u)return'You had no Bot-Pop stock. Lucky.';const g=u*lp(yF())*.45*.5;st.cash+=g;st.stock.disco=0;const i=st.slots.indexOf('disco');if(i>=0)st.slots[i]=null;return`Sold ${u} Bot-Pop records for ${money(g)}. That crate is free now.`}},{l:'Hold and hope',f:()=>'Bot-Pop crates are going to gather dust.'}]})},
139:()=>toast('HoloTV launched a channel that beams music holograms into homes around the clock. Holowave and Orbital acts are surging. Hologram stage unlocked.'),
158:()=>toast('Neural plug-ins just hit stores: albums you play straight into your implants. Plug-in racks unlocked.'),
188:()=>queueEv({t:'Neural safety hearings',x:'The World Senate is holding hearings on whether Mech Metal plug-ins overload implants. Parents are asking what you stock.',o:[{l:'Move Mech Metal behind the counter',f:()=>{st.rep+=4;st.fx.push({k:'metal',v:.7,until:st.m+6});return'Parents are happy. Mech Metal sales dip for 6 months.'}},{l:'Keep it on the floor',f:()=>{st.rep-=2;st.fx.push({k:'visits',v:1.06,until:st.m+6});return'Some parents grumble, but Mech Metal fans flock to you.'}}]}),
227:()=>toast('Year-end numbers: neural plug-ins outsold retro vinyl this year.'),
239:()=>toast('Last month of the decade. Make it count!')};

/* ---------- end ---------- */
function worth(){const y=yF();let w=st.cash;for(const c of C)w+=(st.br[c.id]||0)*c.c*cpi(y)*.7;for(const id in st.stock)w+=st.stock[id]*lp(y)*.45;return w}
function over(win){st.over=true;paused=true;save();const w=worth();
 const t=!win?'Repossessed':w<20000?'Corner Shop Hero':w<75000?'Local Legend':w<200000?'Regional Chain Boss':w<500000?'Platinum Mogul':'Vinyl Emperor';
 const top=Object.entries(st.albT).sort((a,b)=>b[1]-a[1])[0];
 ovOpen(`<h2>${win?'The 80s are over':'Game over'}</h2><p>${win?`It's January 2090. ${esc(st.name)} made it through two decades of future music.`:'Three months in the red. The bank changed the locks.'}</p><p>Final title: <b style="color:var(--mu)">${t}</b> · Career rank: <b style="color:var(--mu)">${rankOf(st.gDone)}</b></p><ul><li>Net worth: ${money(w)}</li><li>Records sold: ${st.total.sold.toLocaleString('en-US')}</li><li>Goals completed: ${st.gDone}</li><li>Branches: ${Object.keys(st.br).length}</li><li>Best month: ${money(st.total.best)}</li>${top?`<li>All-time best seller: ${esc(albT(+top[0]))} (${top[1]} sold)</li>`:''}</ul><div class="btns"><button class="on" data-a="restart">Play again</button></div>`)}

/* ---------- overlay ---------- */
function ovOpen(h){$('#box').innerHTML=h;$('#ov').hidden=false;modal=true;const b=$('#box button, #box input');b&&b.focus()}
function ovClose(){$('#ov').hidden=true;modal=false;if(evQ.length)nextEv()}
function intro(){let sv=null;try{sv=JSON.parse(localStorage.getItem(KEY))}catch(e){}
 ovOpen(`<h2>Groove Tycoon</h2><p>It's January 2070. Most music gets beamed straight into people's implants, but you've opened a record shop anyway: a narrow old canal house in Amsterdam and two crates of records. In twenty years, will you still be a corner kiosk, or a chain from Neo Tokyo to Mars?</p><ul><li>Fill crates with the genres people want. Tastes shift every year.</li><li>Hit yearly goals, pick perks, and climb the career ranks.</li><li>Serve humans, cyborgs and robots. Arrange your shop, add a synth-caf bar, then open branches across the solar system.</li></ul>
 <label>Your name <input id="ownI" maxlength="12" value="Max"></label>
 <label>Shop name <input id="nmI" maxlength="14" value="Groove Records"></label>
 <label>Shop type <select id="styI">${Object.entries(STY).map(([k,s])=>`<option value="${k}">${s.n}: ${s.d}</option>`).join('')}</select></label>
 <label>Difficulty <select id="difI">${Object.entries(DIFF).map(([k,d])=>`<option value="${k}"${k=='normal'?' selected':''}>${d.n}</option>`).join('')}</select></label>
 <label><input type="checkbox" id="cutI" checked> Play the intro story</label>
 <div class="btns"><button class="on" data-a="start">Open the shop</button>${sv&&!sv.over&&sv.v==6?`<button data-a="cont">Continue (${dateStr(sv.m)})</button>`:''}</div>`)}
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}

/* ---------- UI ---------- */
function hud(){$('#hDate').textContent=dateStr(st.m);const c=$('#hCash');c.textContent=money(st.cash);c.classList.toggle('neg',st.cash<0);$('#hRep').textContent=Math.round(st.rep);$('#hVibe').textContent=vibe();$('#hRank').textContent=rankOf(st.gDone);$('#hProg').style.width=(st.mt/MONTH*100)+'%'}
function spdUI(){document.querySelectorAll('#spd button[data-a^=speed]').forEach(b=>{const v=+b.dataset.a.split(':')[1];b.classList.toggle('on',v==0?paused:!paused&&v==speed)});const a=$('#arrB');a.classList.toggle('on',arranging);a.textContent=arranging?'Done':'Arrange';document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.a=='tab:'+tab));$('#sndB').textContent='Sound: '+(sound?'on':'off');$('#musB').textContent='Music: '+(music?'on':'off');tipUI()}
function arrow(g,y){const d=pop(g,y)-pop(g,y-.5);return d>.03?'<span class="up">▲ rising</span>':d<-.03?'<span class="dn">▼ falling</span>':'steady'}
function tStock(){const y=yF(),hs=hot(y),tot=hs.reduce((a,g)=>a+pop(g,y),0),sh=fshare(y);
 let h=`<div class="pm"><span>Pricing:</span>${['Bargain','Fair','Premium'].map((n,i)=>`<button data-a="price:${i}" class="${st.price==i?'on':''}">${n}</button>`).join('')}</div><p class="note">LP price ${'$'+(lp(y)*PM[st.price].mult).toFixed(2)} · a crate of 50 costs ${money(crateCost())}${fx('cost')>1?' (shortage!)':''}${st.staff.buyer?' · your buyer is auto-restocking':''}</p>`;
 h+=st.slots.map((id,i)=>{if(!id){const o=hs.filter(g=>!st.slots.includes(g.id)).map(g=>`<option value="${g.id}">${g.n} (${Math.round(pop(g,y)/tot*100)}%)</option>`).join('');return`<div class="row"><span class="sw empty"></span><div class="nm"><b>Empty crate</b><small>Pick a genre to stock</small></div><div class="ac">${o?`<select id="sel${i}" aria-label="Genre">${o}</select><button data-a="fill:${i}">Stock it</button>`:'<small>Every genre is stocked</small>'}</div></div>`}
  const g=GI[id],u=st.stock[id]||0;return`<div class="row"><span class="sw" style="background:${g.c}"></span><div class="nm"><b>${g.n}</b><small>${u} in crate${u<20?' <span class="dn">(low!)</span>':''} · ${Math.round(pop(g,y)/tot*100)}% of demand, ${arrow(g,y)}</small></div><div class="ac"><button data-a="crate:${id}:1">+1 crate</button><button data-a="crate:${id}:3">+3</button><button class="ghost" data-a="clear:${i}">Clear</button></div></div>`}).join('');
 const back=Object.keys(st.stock).filter(id=>!st.slots.includes(id)&&st.stock[id]>0);
 if(back.length)h+=`<p class="note">In the back room: ${back.map(id=>`${GI[id].n} ${st.stock[id]}`).join(', ')}</p>`;
 h+=`<h4>Formats</h4><p class="note">${F.map((f,i)=>`${f.n} ${Math.round(sh[i]*100)}% ${hasF(f)?'<span class="up">carried</span>':'<span class="dn">not carried</span>'}`).join(' · ')}</p>`;return h}
function upCost(u){const n=st.up[u.id]||0;return u.c*cpi(yF())*(u.id=='bins'?1+n*.5:1)}
function tUp(){const y=yF();return`<p class="note">Vibe ${vibe()}. More vibe brings more shoppers. Tap Arrange to move things around.</p><div class="cards">${U.map(u=>{const n=st.up[u.id]||0,max=u.max||1,c=upCost(u),lock=u.from&&y<u.from;return`<div class="card${n>=max?' own':''}${lock?' lock':''}"><h3>${u.n}${max>1?` (${n}/${max})`:''}</h3><p>${u.d}${u.v?` +${u.v} vibe.`:''}</p><div class="ft">${n>=max?'<span class="up">Owned</span>':lock?`<span>Arrives ${Math.floor(u.from)}</span>`:`<span>${money(c)}</span><button data-a="up:${u.id}"${st.cash<c?' disabled':''}>Buy</button>`}</div></div>`}).join('')}</div>`}
function tStaff(){const k=cpi(yF());return S.map(s=>{const n=st.staff[s.id]||0;return`<div class="row"><span class="sw" style="background:${n?'#2f8a5a':'#1e2742'}"></span><div class="nm"><b>${s.n}${s.max>1?` × ${n}`:n?' (hired)':''}</b><small>${s.d} Wage ${money(s.w*k*(P('union')?.8:1))}/month.</small></div><div class="ac">${n?`<button class="ghost" data-a="fire:${s.id}">Let go</button>`:''}${n<s.max?`<button data-a="hire:${s.id}">Hire</button>`:''}</div></div>`}).join('')+`<p class="note">You always work the register yourself. Checkout takes ${serveDur().toFixed(1)}s per customer.${st.up.coffee?' Your barista bot comes with the synth-caf bar.':''}</p>`}
function tChain(){const y=yF(),k=cpi(y),nb=Object.keys(st.br).length,need=Math.min(80,40+nb*5);
 return`<p class="note">Branches send profit every month, based on your rep and how well each city's favorite genres sell. Managers add 25% and prevent most break-ins. ${st.rep<need?`<span class="dn">You need rep ${need} to open your next branch.</span>`:''}</p>`+C.map(c=>{const L=st.br[c.id]||0,cost=L?c.c*k*.8*L:c.c*k,f=fit(c,y);
  return`<div class="row"><span class="sw" style="background:${L?'#2f8a5a':'#1e2742'}"></span><div class="nm"><b>${c.n}${L?` · ${['','Shop','Megastore','Flagship'][L]}`:''}</b><small>Loves ${c.g.map(g=>GI[g].n).join(', ')} · city fit ${Math.round(f*100)}% · ${L?`last month ${money(st.brLast[c.id]||0)}`:`est. ${money(brEst(c,1,y))}/mo`}${st.mgr[c.id]?' · managed':''}</small></div><div class="ac">${L&&!st.mgr[c.id]?`<button data-a="mgr:${c.id}">Manager ${money(300*k)}/mo</button>`:''}${L>=3?'<span class="up">Maxed</span>':`<button data-a="${L?'grow':'open'}:${c.id}"${st.cash<cost||(!L&&st.rep<need)?' disabled':''}>${L?'Expand':'Open'} ${money(cost)}</button>`}</div></div>`}).join('')}
function tGoals(){const y=2070+(st.m/12|0),nx=RANKS.find(r=>r[0]>st.gDone),f=(g,v)=>g.k=='rev'?money(v):Math.round(v).toLocaleString('en-US');
 return`<h4>${y} goals</h4>`+st.goals.map(g=>{const p=Math.min(g.n,gProg(g));return`<div class="row"><span class="sw" style="background:${g.done?'#2f8a5a':'#1e2742'}"></span><div class="nm"><b>${esc(g.t)}</b><small>${g.done?'<span class="up">Complete</span>':`${f(g,p)} / ${f(g,g.n)}`}</small><span class="pb"><i style="width:${p/g.n*100}%"></i></span></div><div></div></div>`}).join('')+
 `<p class="note">Goals reset every January. Each one pays cash and reputation.</p><h4>Career</h4><p class="note">Rank: <b>${rankOf(st.gDone)}</b> · ${st.gDone} goal${st.gDone==1?'':'s'} done${nx?` · ${nx[0]-st.gDone} more to ${nx[1]}`:''}</p>
 <h4>Perks</h4>${st.perks.length?st.perks.map(id=>{const p=PERKS.find(x=>x.id==id);return`<p class="note"><b>${p.n}</b>: ${p.d}</p>`}).join(''):'<p class="note">You pick a new perk every January.</p>'}
 <h4>Regulars</h4><p class="note">Regulars (gold star) come back again and again. Keep their genre stocked and they'll spread the word.</p><div class="chips">${REGS.map(r=>`<span class="chip" style="border-color:${GI[r.g].c}">${r.n} · ${st.reg[r.id]?`${st.reg[r.id]} happy visit${st.reg[r.id]==1?'':'s'}`:'not met yet'}</span>`).join('')}</div>`}
function tCharts(){const y=yF(),yi=Math.floor(y),hs=hot(y),tot=hs.reduce((a,g)=>a+pop(g,y),0),sh=fshare(y),L=st.last,mx=pop(hs[0],y)/tot;
 const li=([i,n])=>{const a=ALB[i];return`<li><span class="sw" style="background:${GI[a[3]].c}"></span><span><b>${esc(albT(+i))}</b><small>${esc(albA(+i))} · ${a[2]} · ${GI[a[3]].n}</small></span><em>${n} sold</em></li>`};
 const top=Object.entries(st.albY).sort((a,b)=>b[1]-a[1]).slice(0,10),all=Object.entries(st.albT).sort((a,b)=>b[1]-a[1]).slice(0,5),nr=ALB.map((a,i)=>i).filter(i=>ALB[i][2]==yi);
 let h=`<h4>Your best sellers, ${yi}</h4>${top.length?`<ol class="chart">${top.map(li).join('')}</ol>`:'<p class="note">Nothing sold yet this year.</p>'}`;
 if(nr.length)h+=`<h4>New releases this year</h4><div class="chips">${nr.map(i=>`<span class="chip" style="border-color:${GI[ALB[i][3]].c}">${esc(albT(i))} · ${esc(albA(i))}${st.slots.includes(ALB[i][3])?'':' <span class="dn">(genre not stocked)</span>'}</span>`).join('')}</div>`;
 if(all.length)h+=`<h4>All-time best sellers</h4><ol class="chart">${all.map(li).join('')}</ol>`;
 h+=`<h4>What people want, ${dateStr(st.m)}</h4><div class="bars">${hs.map(g=>{const p=pop(g,y)/tot,ms=L&&L.miss[g.id]||0;return`<div class="bar"><span>${g.n}</span><span class="tr"><i style="width:${p/mx*100}%;background:${g.c}"></i></span><em>${Math.round(p*100)}%${st.slots.includes(g.id)?' · in':ms?` · ${ms} lost`:''}</em></div>`}).join('')}</div>
 ${RD('fore')?`<h4>Forecast for ${yi+1}</h4><div class="bars">${(()=>{const y2=y+1,h2=hot(y2),t2=h2.reduce((a,g)=>a+pop(g,y2),0),m2=pop(h2[0],y2)/t2;return h2.map(g=>{const p=pop(g,y2)/t2;return`<div class="bar"><span>${g.n}</span><span class="tr"><i style="width:${p/m2*100}%;background:${g.c}"></i></span><em>${Math.round(p*100)}%</em></div>`}).join('')})()}</div>`:''}
 <h4>Formats</h4><div class="bars">${F.map((f,i)=>`<div class="bar"><span>${f.n}</span><span class="tr"><i style="width:${sh[i]*100}%;background:${hasF(f)?'var(--te)':'#2a3556'}"></i></span><em>${Math.round(sh[i]*100)}%</em></div>`).join('')}</div>`;
 if(L)h+=`<h4>Last month (${L.label})</h4><p class="note">Sold ${L.sold} records for ${money(L.rev)} · snacks ${money(L.snack)} · branches ${money(L.brNet)} · side income ${money(L.passive)} · rent ${money(L.rent)} · wages ${money(L.wages)} · net ${money(L.net)} · walked out of line ${L.angry} · shoplifted ${L.stolen} · questions answered ${L.helped||0}, unanswered ${L.unanswered||0}</p>`;
 h+=`<h4>Shop log</h4><ul class="log">${st.log.map(l=>`<li>${esc(l)}</li>`).join('')||'<li>Nothing yet.</li>'}</ul>`;return h}
function tRes(){const k=cpi(yF()),R0=st.res;let h=`<p class="note">Research one project at a time. Each takes a few months and unlocks a permanent boost.</p>`;
 if(R0.cur){const r=RS.find(x=>x.id==R0.cur),p=Math.min(1,(r.mo-R0.left+st.mt/MONTH)/r.mo);h+=`<div class="row"><span class="sw" style="background:var(--mu)"></span><div class="nm"><b>Researching: ${r.n}</b><small>${R0.left} month${R0.left==1?'':'s'} left</small><span class="pb"><i style="width:${p*100}%"></i></span></div><div></div></div>`}
 for(const [t,label] of [['supply','Stock & supply'],['vibe','Atmosphere'],['ops','Operations']])h+=`<h4>${label}</h4><div class="cards">`+RS.filter(r=>r.t==t).map(r=>{const done=RD(r.id),cur=R0.cur==r.id,miss=(r.req||[]).filter(q=>!RD(q)),c=r.c*k;return`<div class="card${done?' own':''}${miss.length?' lock':''}"><h3>${r.n}</h3><p>${r.d}</p><div class="ft">${done?'<span class="up">Done</span>':cur?'<span>In progress</span>':miss.length?`<span>Needs ${miss.map(q=>RS.find(x=>x.id==q).n).join(' + ')}</span>`:`<span>${money(c)} · ${r.mo} mo</span><button data-a="res:${r.id}"${st.cash<c||R0.cur?' disabled':''}>Research</button>`}</div></div>`}).join('')+'</div>';
 return h}
function renderTab(){if(tab=='goals')st.flags.goals=1;$('#tabc').innerHTML={stock:tStock,shop:tUp,staff:tStaff,chain:tChain,goals:tGoals,charts:tCharts,research:tRes}[tab]();spdUI()}

function buyCrate(id,n){const c=crateCost()*n;if(st.cash<c)return toast('Not enough cash for that.',1);st.cash-=c;st.stock[id]=(st.stock[id]||0)+50*n;st.flags.crate=1;delivery(id)}
function setArr(on){arranging=on;sel=null;if(on){for(const c of cust)if(c.carry==1&&c.qty)st.stock[c.g.id]=(st.stock[c.g.id]||0)+c.qty;cust=[];queue=[];serveT=0;st.flags.arr=1}else save()}
function act(a,p){
 if(a=='speed'){if(+p==0)paused=true;else{paused=false;speed=+p}}
 else if(a=='arr')setArr(!arranging);
 else if(a=='tab')tab=p;
 else if(a=='crate'){const [id,n]=p.split('|');buyCrate(id,+n)}
 else if(a=='clear')st.slots[+p]=null;
 else if(a=='fill'){const s=$('#sel'+p);if(s&&s.value){st.slots[+p]=s.value;if((st.stock[s.value]||0)<1)buyCrate(s.value,1)}}
 else if(a=='price')st.price=+p;
 else if(a=='up'){const u=U.find(x=>x.id==p),n=st.up[p]||0,c=upCost(u);if(st.cash>=c&&n<(u.max||1)){st.cash-=c;
  if(p=='bins')for(let j=0;j<2;j++){const i=st.lay.crate.length,d=defCrate(i);st.lay.crate.push(blocked({...d,w:20,h:10},{})?findFree(20,10):d);st.slots.push(null)}
  st.up[p]=n+1;ensurePlaced(p);toast(u.n+' installed.');beep(660,.08);beep(990,.1,.08);checkGoals()}}
 else if(a=='hire'){const s=S.find(x=>x.id==p);if((st.staff[p]||0)<s.max){st.staff[p]=(st.staff[p]||0)+1;toast(`Hired a ${s.n.toLowerCase()}.`)}}
 else if(a=='fire')st.staff[p]=Math.max(0,(st.staff[p]||0)-1);
 else if(a=='open'||a=='grow'){const c=C.find(x=>x.id==p),L=st.br[p]||0,cost=L?c.c*K()*.8*L:c.c*K();if(st.cash>=cost&&L<3){st.cash-=cost;st.br[p]=L+1;toast(L?`${c.n} branch expanded.`:`Your ${c.n} branch is open!`);checkGoals()}}
 else if(a=='mgr'){st.mgr[p]=1;toast(`Hired a manager for ${C.find(x=>x.id==p).n}.`)}
 else if(a=='res'){const r=RS.find(x=>x.id==p),c=r.c*K();if(!st.res.cur&&st.cash>=c&&!(r.req||[]).some(q=>!RD(q))&&!RD(p)){st.cash-=c;st.res.cur=p;st.res.left=r.mo;toast(`Research started: ${r.n}. Ready in ${r.mo} month${r.mo>1?'s':''}.`)}}
 else if(a=='ans'){const msg=answerQ(+p);ovClose();if(msg)toast(msg,1)}
 else if(a=='cutskip'){if(cut)endCut()}
 else if(a=='sound'){sound=!sound;if(sound){ensureAC();chime()}}
 else if(a=='music')setMusic(!music);
 else if(a=='names')st.real=!st.real;
 else if(a=='skiptip')st.tips=false;
 else if(a=='save'){save();toast('Game saved.',1)}
 else if(a=='newq'){paused=true;ovOpen(`<h2>Start over?</h2><p>Your current shop will be lost.</p><div class="btns"><button data-a="restart" class="on">New game</button><button data-a="close">Keep playing</button></div>`)}
 else if(a=='restart'){cust=[];queue=[];evQ=[];arranging=false;intro()}
 else if(a=='close')ovClose();
 else if(a=='start'){const v=($('#nmI').value||'').trim().slice(0,14),ow=($('#ownI').value||'').trim().slice(0,12)||'Max',pc=$('#cutI').checked;st=fresh(v||'Groove Records',$('#styI').value,$('#difI').value);st.owner=ow;newYear();cust=[];queue=[];floats=[];ovClose();if(pc){paused=true;startCut()}else beginGame()}
 else if(a=='cont'){try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.v==6)st=s}catch(e){}cust=[];queue=[];ovClose();paused=false}
 else if(a=='ev'){const o=curEv&&curEv.o[+p];curEv=null;const msg=o?o.f():'';ovClose();if(msg)toast(msg);checkGoals()}
 renderTab()}
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b||b.disabled)return;const s=b.dataset.a,i=s.indexOf(':'),a=i<0?s:s.slice(0,i);let p=i<0?'':s.slice(i+1);if(a=='crate')p=p.replace(':','|');act(a,p)});
document.addEventListener('keydown',e=>{if(cut&&!modal){if(e.key==' '||e.key=='Enter'){e.preventDefault();cutAdv()}return}if(e.target.id=='nmI'){if(e.key=='Enter')act('start','');return}if(modal||/INPUT|SELECT/.test(e.target.tagName))return;
 if(e.key==' '){e.preventDefault();act('speed',paused?String(speed):'0')}else if(e.key=='1')act('speed','1');else if(e.key=='2')act('speed','2');else if(e.key=='3')act('speed','4');else if(e.key=='a'||e.key=='A')act('arr','')});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&st&&!st.over)save()});

/* ---------- drawing ---------- */
const R=(x,y,w,h,c)=>{cx.fillStyle=c;cx.fillRect(x|0,y|0,w,h)};
const GL={'$':['.##','#..','.#.','..#','##.'],'?':['##.','..#','.#.','...','.#.'],'!':['.#.','.#.','.#.','...','.#.'],'x':['...','#.#','.#.','#.#','...'],'n':['.##','.#.','.#.','##.','##.'],'h':['...','#.#','###','###','.#.'],'+':['...','.#.','###','.#.','...'],
'0':['###','#.#','#.#','#.#','###'],'1':['.#.','##.','.#.','.#.','###'],'2':['###','..#','###','#..','###'],'3':['###','..#','.##','..#','###'],'4':['#.#','#.#','###','..#','..#'],'5':['###','#..','###','..#','###'],'6':['###','#..','###','#.#','###'],'7':['###','..#','.#.','.#.','.#.'],'8':['###','#.#','###','#.#','###'],'9':['###','#.#','###','..#','###']};
const glyph=(ch,x,y,c)=>(GL[ch]||[]).forEach((r,j)=>[...r].forEach((p,i)=>p=='#'&&R(x+i,y+j,1,1,c)));
const txt=(s,x,y,c)=>{[...s].forEach((ch,i)=>{glyph(ch,x+i*4+1,y+1,'#000');glyph(ch,x+i*4,y,c)})};
const MET='#9aa6b8',MDK='#4a5468';
function person(x,y,o){const s=o.moving?((o.walk*7|0)%2):0;x=Math.round(x);y=Math.round(y);
 const k=o.kind||'human',bot=k=='robot',hs=o.style,hc=o.hair||'#222',gl=o.glow||'#4ff3ff',sh=bot?(o.shell||'#c8d0dc'):o.shirt;
 const lc=bot?MDK:o.pants;R(x-2,y-4,2,4-s,lc);R(x+1,y-4,2,3+s,lc);R(x-2,y-1,2,1,bot?'#2a3040':'#111');R(x+1,y-1,2,1,bot?'#2a3040':'#111');
 if(!bot){if(hs=='afro')R(x-4,y-16,8,6,hc);if(hs=='big'){R(x-4,y-16,8,5,hc);R(x-4,y-11,2,3,hc);R(x+2,y-11,2,3,hc)}}
 R(x-3,y-9,6,5,sh);R(x-4,y-9,1,4,bot?MET:sh);R(x+3,y-9,1,4,k=='human'?sh:MET);R(x-4,y-5,1,1,bot?MET:o.skin);R(x+3,y-5,1,1,k=='human'?o.skin:MET);
 if(bot){R(x-3,y-7,6,1,MDK);R(x-1,y-9,2,1,gl)}
 if(bot){R(x-2,y-13,4,4,sh);R(x-2,y-12,4,1,'#0a0a14');R(x-1+((tP*2+x)%2|0),y-12,2,1,gl);R(x-2,y-10,4,1,MDK)}
 else{R(x-2,y-13,4,4,o.skin);R(x-1,y-12,1,1,'#111');if(k=='cyborg'){R(x,y-13,2,4,MET);R(x+1,y-12,1,1,'#ff3a3a')}else R(x+1,y-12,1,1,'#111');if(o.implant)R(x-2,y-11,1,1,gl)}
 switch(hs){
  case'visor':if(!bot)R(x-2,y-14,4,1,hc);R(x-3,y-12,6,1,'#ff4fd8');break;
  case'afro':if(bot){R(x-3,y-15,6,2,'#d8dee8');R(x-2,y-16,4,1,'#d8dee8')}break;
  case'hat':R(x-4,y-14,8,1,'#7a4a22');R(x-2,y-16,4,2,'#7a4a22');break;
  case'dome':R(x-3,y-16,6,3,'rgba(140,230,255,.45)');R(x-3,y-14,6,1,'#9fefff');if(!bot)R(x-1,y-15,2,1,hc);break;
  case'dread':{const c=bot?MET:hc;R(x-3,y-14,6,2,c);R(x-3,y-12,1,5,c);R(x+2,y-12,1,5,c);R(x-2,y-15,1,1,'#5dff9a');R(x+1,y-15,1,1,'#ffb24f')}break;
  case'antennae':R(x-2,y-16,1,3,MET);R(x+1,y-16,1,3,MET);R(x-2,y-17,1,1,'#ff4fd8');R(x+1,y-17,1,1,'#ff4fd8');break;
  case'mohawk':if(!bot)R(x-2,y-14,4,1,hc);R(x-1,y-17,2,4,(tP*3|0)%2?'#c6ff4f':'#7fff3a');break;
  case'big':if(bot){R(x-3,y-15,6,2,gl)}break;
  case'horns':if(!bot){R(x-3,y-14,6,2,hc);R(x-3,y-12,1,4,hc);R(x+2,y-12,1,4,hc)}R(x-3,y-16,1,2,'#e8e8e8');R(x+2,y-16,1,2,'#e8e8e8');break;
  case'halo':if(!bot)R(x-2,y-14,4,1,hc);R(x-3,y-17+((tP*2|0)%2),6,1,'#c6ff4f');break;
  case'cap':R(x-2,y-14,4,1,'#ff4f6a');R(x+2,y-13,2,1,'#ff4f6a');R(x-3,y-12,1,2,'#333');R(x+2,y-12,1,2,'#333');break;
  case'long':if(!bot){R(x-3,y-14,6,2,hc);R(x-3,y-12,1,4,hc);R(x+2,y-12,1,4,hc)}break;
  default:if(!bot)R(x-2,y-14,4,1,hc);if(bot){R(x,y-15,1,2,MET);R(x,y-16,1,1,gl)}}
 if(o.stache)R(x-1,y-11,3,1,hc);
 if(o.apron)R(x-2,y-8,4,4,'#e8f4ff');
 if(o.arm)R(x+3,y-10-((tP*8|0)%2),2,1,k=='human'?o.skin:MET);
 if(o.st=='dig'&&(tP*2.5+x*.37)%1<.55){R(x-3,y-9,5,5,'#111');R(x-2,y-8,3,3,o.g.c)}
 if(o.carry==1){R(x+3,y-8,3,4,'#111');R(x+4,y-7,1,2,o.g.c)}
 else if(o.carry==2){R(x+3,y-8,4,5,'#b8c4d4');R(x+3,y-8,4,1,gl)}
 if(o.cup){R(x-6,y-8,2,3,'#e8f4ff');R(x-6,y-8,2,1,'#4ff3ff')}else if(o.can){R(x-6,y-8,2,3,bot?'#4ff3ff':'#ff4f6a');R(x-6,y-7,2,1,'#fff')}}
function drone(c){const x=Math.round(c.x),y=Math.round(c.y)-14+Math.round(Math.sin(tP*6)),b=(tP*12|0)%2;
 R(x-3,Math.round(c.y),6,1,'rgba(0,0,0,.35)');if(c.carry==3){R(x-3,y+3,6,5,'#b98a52');R(x-3,y+5,6,1,'#8a6238');R(x,y+2,1,1,MET)}
 R(x-4,y,8,3,'#5a6478');R(x-2,y+1,4,1,'#4ff3ff');R(x-6,y-1,4,1,b?'#ddd':'#888');R(x+2,y-1,4,1,b?'#888':'#ddd');R(x-5,y,1,1,MET);R(x+4,y,1,1,MET);R(x-1,y+1,1,1,(tP*4|0)%2?'#ff3a3a':'#5a6478')}
function bubble(c){if(c.hide||c.del)return;const x=Math.round(c.x)-4,y=Math.round(c.y)-28;
 if(c.reg&&!(c.bub&&c.bt>0)){R(x+3,y+4,3,1,'#ffe24f');R(x+4,y+3,1,3,'#ffe24f')}
 if(!c.bub||c.bt<=0)return;
 if(c.bub=='ask'){const bl=(tP*4|0)%2;R(x-1,y-1,10,10,bl?'#ffe24f':'#ffb24f');R(x+3,y+9,2,1,bl?'#ffe24f':'#ffb24f');glyph('?',x+3,y+1,'#1a1a1a');return}
 if(c.bub=='want'){R(x-1,y,11,8,'#e8f4ff');R(x+3,y+8,2,1,'#e8f4ff');R(x,y+2,5,5,'#111');R(x+1,y+3,3,3,c.g.c);R(x+2,y+4,1,1,'#fff');glyph('?',x+6,y+1,'#333');return}
 R(x,y,8,8,'#e8f4ff');R(x+3,y+8,2,1,'#e8f4ff');glyph(c.bub,x+2,y+1,c.bub=='h'?'#e0306a':c.bub=='!'||c.bub=='x'?'#e0302a':'#1f9d3a')}
function crate(i){const p=st.lay.crate[i],id=st.slots[i],g=id&&GI[id],u=id?st.stock[id]||0:0,n=Math.min(7,Math.ceil(u/12));
 for(let j=0;j<n;j++)R(p.x+2+j*2.3,p.y-6+(j%2),2,7,j%2?g.c:'#111');
 R(p.x,p.y,20,10,'#2a3446');R(p.x,p.y,20,1,'#7a8aa0');R(p.x,p.y+9,20,1,g?g.c:'#3a4458');R(p.x,p.y,1,10,'#3a4458');R(p.x+19,p.y,1,10,'#3a4458');R(p.x+6,p.y+3,8,3,g?g.c:'#555');R(p.x+7,p.y+4,6,1,'rgba(255,255,255,.4)');
 if(g&&u<=0&&Math.sin(tP*8)>0){R(p.x+1,p.y-7,18,6,'#e0302a');R(p.x+3,p.y-5,14,2,'#fff')}}
function booth(x,y){const occ=cust.some(c=>c.st=='booth');R(x+2,y,20,56,'#2a3446');R(x,y+2,24,52,'#2a3446');R(x+2,y,20,2,'#7a8aa0');R(x+5,y+6,14,26,'rgba(120,220,255,.25)');R(x+5,y+6,14,1,'#9fefff');
 if(occ){const b=(tP*6|0)%2;R(x+9,y+16+b,6,12-b,'#3a3a5a');R(x+10,y+12+b,4,4,'#c68642');R(x+9,y+11+b,6,1,'#ff4fd8');R(x+8,y+12+b,1,2,'#ff4fd8');R(x+15,y+12+b,1,2,'#ff4fd8')}
 R(x+2,y+40,20,1,occ?'#ff4fd8':'#4ff3ff');glyph('n',x+10,y+44,occ?'#ff4fd8':'#4ff3ff');R(x+2,y+54,20,2,'rgba(79,243,255,.35)')}
function arcade(x,y){const pl=cust.some(c=>c.st=='arc');R(x,y,14,24,'#141824');R(x,y,14,3,'#ff4fd8');R(x+2,y+5,10,8,pl?['#3df','#f3d','#cf4','#fa4'][(tP*8|0)%4]:'#102030');if(pl){R(x+3+((tP*5|0)%7),y+8,2,2,'#fff')}R(x+1,y+15,12,3,'#3a4458');R(x+3,y+15,2,1,'#ff4f6a');R(x+9,y+15,2,1,'#4ff3ff');R(x+4,y+19,6,2,'#2a3446');R(x+5,y+19,4,1,'#c6ff4f')}
function vend(x,y){R(x,y,14,24,'#2a4a7a');R(x+1,y+1,12,2,'#9fefff');R(x+2,y+4,7,13,'rgba(150,230,255,.35)');for(let r=0;r<4;r++)for(let c=0;c<3;c++)R(x+3+c*2,y+5+r*3,1,2,['#4ff3ff','#ff4f6a','#c6ff4f','#ffb24f'][r]);R(x+10,y+4,3,9,'#141824');R(x+11,y+6,1,2,(tP*2|0)%2?'#c6ff4f':'#3a5a2a');R(x,y+17,14,1,'#4ff3ff');R(x+2,y+19,10,3,'#111')}
function coffee(x,y){const busy=cust.some(c=>c.st=='coffee');person(x+13,y+10,{kind:'robot',style:'',shell:'#c8d0dc',glow:'#ffb24f',apron:1,arm:busy});
 R(x-1,y+5,28,2,'#c8d0dc');R(x,y+7,26,9,'#2a3446');R(x,y+14,26,1,'#ffb24f');R(x+3,y-2,5,7,'#7a8aa0');R(x+4,y-3,3,1,'#c8d0dc');R(x+5,y,1,3,'#ffb24f');R(x+19,y+2,2,3,'#e8f4ff');R(x+22,y+2,2,3,'#e8f4ff');R(x+10,y+9,5,4,'#e8f4ff');R(x+15,y+10,1,2,'#e8f4ff');
 if(busy||(tP*2|0)%3==0)R(x+5,y-5-((tP*4|0)%3),1,1,'rgba(255,255,255,.8)')}
function bean(i){const b=st.lay.bean[i],c=i?'#ff4fd8':'#4ff3ff',h=Math.round(Math.sin(tP*2+i)*0.6);R(b.x+1,b.y+6,10,1,'rgba(0,0,0,.35)');R(b.x,b.y+2+h,12,3,'#3a4458');R(b.x+1,b.y-1+h,3,4,'#3a4458');R(b.x,b.y+2+h,12,1,c);R(b.x+3,b.y+5+h,6,1,c)}
const OWN={kind:'cyborg',style:'visor',hair:'#5a3a1e',skin:'#f1c27d',shirt:'#ff8a3d',pants:'#2a3446',stache:1};
const CLK=[{kind:'robot',style:'',shell:'#7fa8c9',glow:'#4ff3ff'},{kind:'robot',style:'antennae',shell:'#e0c060',glow:'#ff4fd8'},{kind:'robot',style:'',shell:'#8ac0a0',glow:'#c6ff4f'}];
const SKY=[[0,[120,200,255]],[.55,[90,150,230]],[.8,[255,110,170]],[1,[20,16,60]]];
function sky(f){for(let i=1;i<SKY.length;i++)if(f<=SKY[i][0]){const a=SKY[i-1],b=SKY[i],t=(f-a[0])/(b[0]-a[0]);return`rgb(${a[1].map((v,j)=>Math.round(v+(b[1][j]-v)*t)).join(',')})`}return'rgb(20,16,60)'}
const HOUSE=['#5a2a24','#3a2a22','#6a3a2a','#2a3446','#e8dcc0','#7a4a3a','#24343a','#8a5a3a'];
const rainy=()=>!!st&&((st.m*7+3)%4==0);
function canalView(x,y,w,h,f,forceRain){const s=h/60,vw=Math.ceil(w/s),night=f>.72,dusk=f>.6;cx.save();cx.beginPath();cx.rect(x,y,w,h);cx.clip();cx.translate(x,y);cx.scale(s,s);
 R(0,0,vw,44,sky(f));if(night)for(let i=0;i<8;i++)R((i*23)%vw,(i*7)%14+2,1,1,'#fff');
 const off=-((st?st.m:0)%5);
 for(let i=0,hx=off;hx<vw;i++){const hw=9+(i*7)%4,hh=20+(i*13)%11,top=40-hh,c=HOUSE[(i*5)%HOUSE.length],light=c=='#e8dcc0',g=i%3;
  R(hx,top,hw,hh,c);
  if(g==0){R(hx+1,top-2,hw-2,2,c);R(hx+3,top-4,hw-6,2,c)}else if(g==1){R(hx+2,top-3,hw-4,3,c);R(hx+3,top-5,hw-6,2,c);R(hx+2,top-3,1,1,'#e8dcc0');R(hx+hw-3,top-3,1,1,'#e8dcc0')}else for(let k=1;k<=hw/2;k++)R(hx+k,top-k,hw-2*k,1,c);
  R(hx+(hw>>1),top-(g==2?(hw>>1):g==1?5:4)-1,1,2,'#1a1a1a');
  const fr=light?'#7a6a5a':'#e8e4dc';for(let wy=top+3;wy<35;wy+=6)for(let wx=hx+1;wx<hx+hw-3;wx+=4){R(wx,wy,3,1,fr);R(wx,wy+1,3,3,night?((wx*3+wy+i)%3?'#ffd27a':'#2a2a3a'):dusk?'#e8a0b0':'#8fb8d0');R(wx+1,wy+1,1,3,fr)}
  R(hx+(hw>>1)-1,36,3,4,'#2a1a14');if(i%4==2)R(hx,top+hh-7,hw,1,night?'#ff4fd8':'#b05aa8');if(i%5==3)R(hx+1,top-1,hw-2,1,'#2a3a6a');
  hx+=hw}
 for(let tx=8;tx<vw;tx+=26){R(tx+3,32,2,8,'#3a2a20');R(tx,25,8,8,'#2f5a3a');R(tx+1,23,6,2,'#3a6a44')}
 R(0,40,vw,4,'#5a5a62');R(0,40,vw,1,'#7a7a82');for(let bx=4;bx<vw;bx+=13){R(bx,41,2,2,'#1a1a1a');R(bx+4,41,2,2,'#1a1a1a');R(bx+1,40,4,1,['#c83a3a','#3a5a9a','#1a1a1a'][bx%3])}
 R(0,44,vw,16,night?'#0e1630':dusk?'#3a2a50':'#2a4a5a');
 for(let i=0,hx=off;hx<vw;i++){const hw=9+(i*7)%4;R(hx,45,hw,7,HOUSE[(i*5)%HOUSE.length]+'44');hx+=hw}
 if(night)for(let i=0;i<10;i++)R((i*17+3)%vw,47+(i%3)*3,2,1,i%3?'rgba(255,210,122,.6)':'rgba(255,79,216,.5)');
 for(let i=0;i<12;i++)R(((i*19+tP*6)%(vw+10))-5,46+(i*5)%13,4,1,'rgba(255,255,255,.15)');
 for(const m of walkers){const mx=Math.round(m.p*(vw+20)-10);if(m.k=='bike'){R(mx-3,38,2,2,'#1a1a1a');R(mx+1,38,2,2,'#1a1a1a');R(mx-2,37,4,1,'#555');R(mx-1,33,2,4,m.c);R(mx-1,31,2,2,m.s)}else{R(mx-6,50,12,2,'#e8e4dc');R(mx-5,52,10,1,m.glow?'#4ff3ff':'#3a3a42');R(mx-3,48,6,2,m.c);R(mx+(m.d>0?5:-6),49,1,1,'#ffd27a')}}
 if(forceRain||rainy())for(let i=0;i<24;i++)R((i*13+tP*8)%vw,((i*29+tP*90)%60),1,3,'rgba(180,210,255,.45)');
 cx.restore()}
function walk(dt){if((walkT-=dt)<=0){walkT=1+Math.random()*2.2;const d=Math.random()<.5?1:-1,k=Math.random()<.62?'bike':'boat';walkers.push({k,d,p:d>0?0:1,v:k=='bike'?.07+Math.random()*.06:.025+Math.random()*.02,c:pick(['#ff4fd8','#4ff3ff','#ffb24f','#e8e4dc','#c6ff4f','#ff8a3d']),s:pick(SK),glow:Math.random()<.5})}
 for(const w of walkers)w.p+=w.d*w.v*dt;walkers=walkers.filter(w=>w.p>=0&&w.p<=1)}
const DRAW={crate:o=>crate(o.i),booth:o=>booth(o.x,o.y),arcade:o=>arcade(o.x,o.y),vend:o=>vend(o.x,o.y),coffee:o=>coffee(o.x,o.y),bean:o=>bean(o.i)};
const ERA=[{w:'#1c2a3a',l:'#3a5068',n:'#4ff3ff',f:['#2a3446','#222a3a']},{w:'#2a1038',l:'#5a1e70',n:'#ff4fd8',f:['#2a1838','#22122e']},{w:'#101830',l:'#1e3a6a',n:'#5a8cff',f:['#141e36','#101830']},{w:'#07070f',l:'#1a1a3a',n:'#c6ff4f',f:['#0e0e1a','#141428']}];
function draw(){
 const y=yF(),e=y<2075?0:y<2080?1:y<2085?2:3,E=ERA[e],u=st.up,f=st.mt/MONTH;
 R(0,0,256,70,E.w);
 if(e==0)for(let x=0;x<256;x+=16){R(x,0,1,70,E.l);R(x+8,0,1,70,'#24344a');R(x+3,6,1,1,E.l);R(x+3,62,1,1,E.l)}
 else if(e==1)for(let yy=4;yy<70;yy+=10){R(0,yy,256,1,E.l);for(let x=(yy*7)%20;x<256;x+=40)R(x,yy,3,1,E.n)}
 else if(e==2){for(let x=0;x<256;x+=12)R(x,0,1,70,E.l);for(let yy=0;yy<70;yy+=12)R(0,yy,256,1,E.l);for(let i=0;i<12;i++)if((tP*2+i)%5<1)R((i*67)%252,(i*29)%64,2,2,E.n)}
 else for(let i=0;i<30;i++){const x=(i*61)%250,yy=(i*37)%64,c=i%2?'#ff4fd8':'#4ff3ff';R(x,yy,8,1,E.l);R(x+8,yy,1,5,E.l);if(i%5==0)R(x+8,yy+5,1,1,c)}
 R(0,70,256,18,'#141824');for(let x=0;x<256;x+=14){R(x,74,8,1,'#232a3a');R(x,77,8,1,'#232a3a');R(x,80,8,1,'#232a3a')}R(0,70,256,1,E.n);R(0,87,256,1,'#2a3446');
 for(let x=0;x<256;x+=8)for(let yy=88;yy<144;yy+=8)R(x,yy,8,8,E.f[((x+yy)/8)%2]);
 for(let x=0;x<256;x+=16)R(x,88,1,56,'rgba(79,243,255,.08)');for(let yy=96;yy<144;yy+=16)R(0,yy,256,1,'rgba(79,243,255,.08)');
 R(68,3,124,15,'#05060c');R(68,3,124,1,E.n);R(68,17,124,1,E.n);R(68,3,1,15,E.n);R(191,3,1,15,E.n);
 cx.font='8px "Press Start 2P",monospace';cx.textAlign='center';cx.textBaseline='middle';
 const flick=u.neon&&Math.sin(tP*23)<-.97;cx.shadowColor=u.neon?'#ff4fd8':E.n;cx.shadowBlur=flick?0:5;cx.fillStyle=u.neon?'#ffd1f4':'#c8f8ff';cx.fillText(st.name.toUpperCase(),130,11);cx.shadowBlur=0;
 const pc=['#ff4fd8','#4ff3ff','#c6ff4f','#ffb24f','#b48cff'],np=u.posters?5:1;
 for(let i=0;i<np;i++){const x=u.posters?74+i*23:160,yy=22,c=pc[i];R(x,yy,16,22,'rgba(10,14,30,.85)');R(x,yy,16,1,c);R(x,yy+21,16,1,c);R(x,yy,1,22,c);R(x+15,yy,1,22,c);const b=(tP*2+i)%2|0;R(x+5,yy+4+b,6,6,c);R(x+7,yy+6+b,2,2,'#05060c');R(x+3,yy+14,10,1,c);R(x+3,yy+17,7,1,'rgba(255,255,255,.4)')}
 R(70,58,122,2,E.n);R(70,60,122,1,'rgba(79,243,255,.25)');const sl=st.slots.filter(Boolean);for(let i=0;i<40;i++)R(72+i*3,48+(i%3==0?1:0),2,10-(i%3==0?1:0),sl.length?GI[sl[i%sl.length]].c:'#445');
 R(2,9,60,61,'#2a3446');R(4,11,56,57,'#c8d0dc');canalView(5,12,54,55,f);R(31,12,2,55,'#c8d0dc');R(5,37,54,2,'#c8d0dc');R(5,12,54,1,'rgba(255,255,255,.35)');
 R(1,67,62,3,'#c8d0dc');[[8,'#ff4f6a'],[12,'#ffb24f'],[16,'#ffe24f'],[20,'#ff4f6a'],[44,'#ff8a3d'],[48,'#ff4f6a'],[52,'#ffe24f']].forEach(([px,c])=>{R(px,63,1,4,'#3a8a4a');R(px-1,61,3,2,c)});R(6,66,18,1,'#7a4a3a');R(42,66,13,1,'#7a4a3a');
 if(u.video){const b=Math.sin(tP*6),gx=32+Math.round(Math.sin(tP*1.5)*3);R(24,46,20,2,'#3a4458');R(30,45,8,1,'#4ff3ff');cx.fillStyle='rgba(79,243,255,.12)';cx.beginPath();cx.moveTo(30,45);cx.lineTo(18,14);cx.lineTo(50,14);cx.lineTo(38,45);cx.fill();
  const hc=(tP*10|0)%9?'rgba(120,240,255,.85)':'rgba(255,120,240,.85)';R(gx-2,18,4,4,hc);R(gx-3,22,6,9,hc);R(gx-5+(b>0?0:1),22+(b>0?-2:0),2,6,hc);R(gx+3-(b>0?1:0),22+(b>0?0:-2),2,6,hc);R(gx-3,31,2,9,hc);R(gx+1,31,2,9,hc);for(let yy=16;yy<42;yy+=3)R(gx-6,yy,12,1,'rgba(5,6,12,.35)')}
 if(u.stereo)for(const x of [64,190]){const p=Math.abs(Math.sin(tP*8))*2|0;R(x,24,7,13,'#141824');R(x+1,26-p/2,5,4+p/2,'#3a4458');R(x+2,27,3,2,E.n);R(x+1,31,5,4,'#3a4458');R(x+2,32,3,2,E.n)}
 R(222,26,32,62,'#2a3446');canalView(225,29,26,38,f);
 R(228,32,2,12,'rgba(255,255,255,.3)');R(231,32,1,8,'rgba(255,255,255,.3)');R(225,67,26,19,'#1c2232');R(237,67,1,19,'#4ff3ff');R(225,67,26,1,'#4ff3ff');
 if(u.neon){const a=tP*3,rx=Math.round(Math.abs(Math.cos(a))*6)+1;R(238-rx,44,rx*2,10,'rgba(255,79,216,.55)');R(238-Math.max(1,rx/3|0),47,Math.max(2,(rx/3|0)*2),4,'#4ff3ff')}
 if(u.disco){R(204,0,9,4,'#3a4458');R(207,4,3,2,'#c8d0dc');const hot2=pop(GI.disco,y)>.5;cx.lineWidth=1;for(let i=0;i<4;i++){const ang=Math.sin(tP*(1+i*.3)+i*1.7);cx.strokeStyle=['rgba(255,79,216,.45)','rgba(198,255,79,.45)','rgba(79,243,255,.45)','rgba(255,178,79,.45)'][i];cx.beginPath();cx.moveTo(208.5,6);cx.lineTo(208+ang*150,144);cx.stroke()}if(hot2)for(let i=0;i<10;i++){const x=(i*41+tP*40)%256,yy=(i*53)%60+88;R(x,yy,1,1,i%2?'#ff4fd8':'#c6ff4f')}}
 const items=[],h=queue[0],paying=h&&h.st=='pay',pr=paying?serveT/serveDur():0,th=things();
 for(const o of th)items.push({b:o.y+o.h,f:()=>DRAW[o.k](o)});
 items.push({b:107,f:()=>{person(26,96,{...OWN,arm:paying});for(let i=0;i<st.staff.clerk;i++)person(36+i*8,96,CLK[i]);
  R(4,90,58,3,'#c8d0dc');R(4,93,58,14,'#1c2232');R(4,104,58,1,ERA[e].n);for(let x=10;x<62;x+=12)R(x,95,6,1,'#2a3446');
  R(9,81,12,9,'rgba(79,243,255,.25)');R(9,81,12,1,'#4ff3ff');R(14,88,2,2,'#7a8aa0');R(10,83,10,1,paying&&(tP*6|0)%2?'#c6ff4f':'#4ff3ff');R(10,85,6,1,'#4ff3ff');
  if(paying){if(pr>.4){R(18,86,2,2,'#c6ff4f');R(9,89,12,1,'#c6ff4f')}const n=Math.min(4,Math.ceil(h.qty/2));for(let j=0;j<n;j++)R(29+j,87-j,7,3,j%2?h.g.c:'#111');if(pr>.7){R(39,83,5,7,'#b8c4d4');R(39,83,5,1,'#4ff3ff')}}
  if(st.staff.dj){R(45,87,10,3,'#2a3446');R(47,86,6,1,'#111');R(49,86,2,1,['#ff4fd8','#4ff3ff'][(tP*6|0)%2])}
  if(u.lava){R(56,88,5,2,'#3a4458');R(56,82,5,6,'rgba(180,140,255,.35)');const a=tP*9;R(58,85,1,1,'#fff');R(58+Math.round(Math.cos(a)*2),85+Math.round(Math.sin(a)*2),1,1,'#ff4fd8')}}});
 for(const c of cust)if(!c.hide)items.push({b:c.y,f:()=>c.del?drone(c):person(c.x,c.y-(c.st=='dance'?Math.abs(Math.sin(tP*9+c.x))*2:0)-(c.st=='bean'?3:0),{...c,style:c.style||c.g.hair})});
 items.sort((a,b)=>a.b-b.b).forEach(i=>i.f());
 if(f>.8&&!arranging)R(0,0,256,144,`rgba(10,5,40,${((f-.8)/.2*.25).toFixed(3)})`);
 if(arranging){R(0,0,256,144,'rgba(0,0,0,.25)');for(const o of th){const s=sel&&sel.k==o.k&&sel.i===o.i,c=s?((tP*4|0)%2?'#fff':'#ff4fd8'):'#4ff3ff',top=o.k=='crate'?o.y-7:o.y,hh=o.y+o.h-top;R(o.x-1,top-1,o.w+2,1,c);R(o.x-1,top+hh,o.w+2,1,c);R(o.x-1,top,1,hh,c);R(o.x+o.w,top,1,hh,c)}}
 for(const c of cust)bubble(c);
 for(const p of parts)glyph('n',p.x|0,p.y|0,p.c);
 for(const fl of floats)txt(fl.t,fl.x-fl.t.length*2,fl.y|0,fl.c)}
function anim(dt){
 if(paused||modal||arranging)return;
 if((st.up.stereo||st.staff.dj)&&(noteT+=dt)>.7){noteT=0;parts.push({x:st.up.stereo?pick([67,193]):50,y:22,vx:(Math.random()-.5)*8,life:2,c:pick(['#4ff3ff','#ff4fd8','#c6ff4f'])})}
 if(st.up.booth&&cust.some(c=>c.st=='booth')&&Math.random()<dt*1.5)parts.push({x:st.lay.booth.x+10,y:st.lay.booth.y,vx:(Math.random()-.5)*6,life:1.5,c:'#ff4fd8'});
 for(const p of parts){p.y-=10*dt;p.x+=p.vx*dt;p.life-=dt}parts=parts.filter(p=>p.life>0);
 walk(dt)}
cv.style.cursor='pointer';
cv.addEventListener('click',e=>{const r=cv.getBoundingClientRect(),px=(e.clientX-r.left)/r.width*256,py=(e.clientY-r.top)/r.height*144;
 if(arranging){const t=things().sort((a,b)=>(b.y+b.h)-(a.y+a.h)).find(o=>px>=o.x-1&&px<=o.x+o.w+1&&py>=o.y-(o.k=='crate'?8:1)&&py<=o.y+o.h+1);
  if(t){sel=sel&&sel.k==t.k&&sel.i===t.i?null:t;return tipUI()}
  if(!sel)return;
  const w=sel.w,h=sel.h,nx=Math.max(64,Math.min(221-w,Math.round((px-w/2)/2)*2)),ny=Math.max(96-h,Math.min(143-h,Math.round((py-h/2)/2)*2)),o={x:nx,y:ny,w,h};
  if(blocked(o,sel)){toast("Something's in the way there.",1);return}
  const pos={x:nx,y:ny};if(sel.k=='crate')st.lay.crate[sel.i]=pos;else if(sel.k=='bean')st.lay.bean[sel.i]=pos;else st.lay[sel.k]=pos;sel=null;return tipUI()}
 const qa=cust.find(c=>c.st=='ask'&&Math.abs(c.x-px)<8&&py>c.y-32&&py<c.y+3);if(qa)return openQ(qa);
 const c=cust.filter(c=>!c.hide).find(c=>Math.abs(c.x-px)<6&&py>c.y-18&&py<c.y+2);
 if(c){st.flags.tap=1;if(c.del)return toast('Delivery drone dropping off a crate.',1);const r=c.reg&&REGS.find(x=>x.id==c.reg);return toast(`${r?r.n+' (regular)':{robot:'Robot',cyborg:'Cyborg',human:'Human'}[c.kind]||'Shopper'}: ${c.g.n} fan looking for ${c.f.n}${c.alb>=0?`, buying ${albT(c.alb)}`:''}. ${STATUS[c.st]||''}`,1)}
 if(px>4&&px<62&&py>80&&py<107)return toast(`That's you at the register.${queue.length?` ${queue.length} in line.`:''}`,1);
 for(const o of things()){if(px>=o.x-2&&px<=o.x+o.w+2&&py>=o.y-8&&py<=o.y+o.h+1){if(o.k=='crate'){const id=st.slots[o.i];return toast(id?`${GI[id].n} crate: ${st.stock[id]||0} records.`:'Empty crate. Stock it in the Stock tab.',1)}return toast({booth:'Neural listening pod.',arcade:'VR cabinet.',vend:'Fuel & soda dispenser. Sodas for humans, coolant for robots.',coffee:'Synth-caf bar. People with a cup wait longer in line.',bean:'Gravity chair.'}[o.k],1)}}});
/* ---------- cutscene ---------- */
let cut=null;
const CUT=[
 {art:'city',lines:[[null,'Amsterdam, 2069. The sea is higher now, but the canals still glow at night, and it still rains most days.']]},
 {art:'apt',lines:[[null,"A message arrives from Mom's lawyer bot. Attached: one hologram."],['Mom',"Hey, kiddo. It's me. If you're watching this, the shop is yours now."]]},
 {art:'past',lines:[[null,'Back when everyone swore vinyl was dead, Mom opened a record shop in a narrow canal house anyway.'],[null,'You grew up behind that counter, sorting crates and arguing with customers about B-sides.']]},
 {art:'dusty',lines:[[null,'The last few years were hard on her. The shop is dusty, dark, and down to two crates of records.']]},
 {art:'holo',lines:[['Mom','Everybody streams music straight into their heads now. But people still want something they can hold.'],['Mom','So dust off the crates, find out what people love, and keep the music playing. I love you, kiddo.']]},
 {art:'open',lines:[[null,'January 2070. You flip the sign, and the neon flickers on.'],[0,"Okay, Mom. Let's do this."]]}];
function startCut(){cut={i:0,l:0,ch:0,t:0};$('#cut').hidden=false;$('.screen').classList.add('cutting');cutUI()}
const cutLine=()=>CUT[cut.i].lines[cut.l];
function cutUI(){const [w,tx]=cutLine(),who=$('#cutWho');who.textContent=w===0?st.owner:(w||'');who.hidden=w==null;$('#cutTxt').textContent=tx.slice(0,cut.ch|0)}
function cutAdv(){if(!cut)return;const tx=cutLine()[1];if(cut.ch<tx.length){cut.ch=tx.length;return cutUI()}cut.ch=0;cut.l++;if(cut.l>=CUT[cut.i].lines.length){cut.l=0;cut.i++;cut.t=0;if(cut.i>=CUT.length)return endCut()}cutUI()}
function endCut(){cut=null;$('#cut').hidden=true;$('.screen').classList.remove('cutting');beginGame()}
function beginGame(){paused=false;speed=1;toast(`Doors open! ${st.owner} is running a ${STY[st.sty].n}.`);perkChoice();renderTab()}
$('#cut').addEventListener('click',e=>{if(e.target.closest('[data-a]'))return;cutAdv()});
const MOMH={kind:'human',style:'big',hair:'#dffbff',skin:'#bff4ff',shirt:'#7fe8ff',pants:'#4fc8e8'},MOMP={kind:'human',style:'big',hair:'#5a3a1e',skin:'#e0ac69',shirt:'#ff8a3d',pants:'#2a3446'},KID={kind:'human',style:'',hair:'#5a3a1e',skin:'#f1c27d',shirt:'#4ff3ff',pants:'#2a3446'};
function cityBG(t){const g=cx.createLinearGradient(0,0,0,144);g.addColorStop(0,'#0a0820');g.addColorStop(1,'#3a1050');cx.fillStyle=g;cx.fillRect(0,0,256,144);
 for(let i=0;i<15;i++){const bx=i*18-6,bh=50+((i*37)%70),by=144-bh;R(bx,by,16,bh,i%2?'#0e1226':'#141a34');for(let wy=by+4;wy<140;wy+=5)for(let wx=bx+2;wx<bx+14;wx+=3)if((wx*13+wy*7+i)%7<2)R(wx,wy,1,2,(wx+wy)%3?'#ffe27a':'#4ff3ff');if(i%4==1)R(bx+3,by+10,10,3,(t*2+i|0)%5?(i%8==1?'#ff4fd8':'#4ff3ff'):'#333')}
 for(let i=0;i<4;i++){const x=((t*(30+i*12)+i*90)%300)-20,y=26+i*13;R(x,y,8,2,['#ff4fd8','#4ff3ff','#ffb24f','#c6ff4f'][i]);R(x+(i%2?0:7),y,1,1,'#fff')}}
function rain(t,n){for(let i=0;i<n;i++){const x=(i*53+t*30)%256,y=(i*97+t*260)%150-6;R(x,y,1,4,'rgba(150,200,255,.45)')}}
function holo(x,y,sc,o){const fl=Math.sin(tP*23)>.93;cx.save();cx.globalAlpha=fl?.25:.65;cx.translate(x,y);cx.scale(sc,sc);person(0,0,o);cx.restore();for(let yy=y-18*sc;yy<y;yy+=3)R(x-6*sc,yy,12*sc,1,'rgba(5,6,12,.3)')}
function drawCut(){const a=CUT[cut.i].art,sh=a=='apt'||a=='past'||a=='dusty';if(sh){R(0,0,256,144,'#05060c');cx.save();cx.translate(0,-22)}drawCut0();if(sh)cx.restore()}
function drawCut0(){const t=cut.t,a=CUT[cut.i].art;
 if(a=='city'){canalView(0,0,256,144,.86,1);rain(t,50)}
 else if(a=='apt'){R(0,0,256,110,'#1a2238');for(let x=0;x<256;x+=16)R(x,0,1,110,'#222c46');R(0,110,256,34,'#141824');R(0,110,256,1,'#4ff3ff');
  canalView(160,18,80,64,.9,1);R(158,16,84,2,'#3a4458');R(158,82,84,2,'#3a4458');R(158,16,2,68,'#3a4458');R(240,16,2,68,'#3a4458');R(199,16,2,68,'#3a4458');
  R(60,100,64,3,'#3a4458');R(64,103,3,20,'#2a3446');R(117,103,3,20,'#2a3446');R(86,96,12,4,'#555d6a');R(88,95,8,1,'#4ff3ff');
  cx.fillStyle='rgba(79,243,255,.12)';cx.beginPath();cx.moveTo(88,95);cx.lineTo(76,60);cx.lineTo(108,60);cx.lineTo(96,95);cx.fill();
  if(cut.l>0)holo(92,92,1.6,MOMH);else if((t*3|0)%2)R(91,90,2,2,'#4ff3ff');person(150,128,OWN)}
 else if(a=='past'){R(0,0,256,88,'#5a3a22');for(let x=0;x<256;x+=12)R(x,0,4,88,'#6b4a2a');R(0,88,256,56,'#7a5a3a');for(let x=0;x<256;x+=8)for(let yy=88;yy<144;yy+=8)if(((x+yy)/8)%2)R(x,yy,8,8,'#6a4a2e');
  [[90,'#d94a38'],[118,'#3d6fd1'],[146,'#f2b134']].forEach(([x,c])=>{R(x,18,18,24,'#f7ecd9');R(x+1,19,16,22,c);R(x+5,23,8,8,'#111')});R(80,56,110,2,'#3a2414');for(let i=0;i<36;i++)R(82+i*3,46,2,10,['#d94a38','#f2b134','#3d6fd1','#8be04a'][i%4]);
  R(194,16,52,56,'#5a3a22');canalView(197,19,46,50,.35);R(219,19,2,50,'#5a3a22');R(197,42,46,2,'#5a3a22');
  person(44,102,MOMP);cx.save();cx.translate(60,104);cx.scale(.75,.75);person(0,0,KID);cx.restore();
  R(18,96,84,3,'#a0643a');R(18,99,84,14,'#6b3f22');R(76,92,14,4,'#333');R(78,91,10,1,'#111');R(82,91,2,1,(tP*6|0)%2?'#d94a38':'#f6c445');
  [[130,'#d94a38'],[160,'#f2b134'],[190,'#3d6fd1']].forEach(([x,c])=>{for(let j=0;j<6;j++)R(x+2+j*3,104+(j%2),2,7,j%2?c:'#111');R(x,110,20,10,'#8a5a30')});
  person(150,132,{kind:'human',style:'afro',hair:'#2a1a10',skin:'#8d5524',shirt:'#e8772e',pants:'#2f4f8f'});person(184,134,{kind:'human',style:'long',hair:'#c9a24a',skin:'#ffdbac',shirt:'#6b8e23',pants:'#3a5fa8'});person(118,136,{kind:'robot',style:'',shell:'#c8d0dc',glow:'#4ff3ff'});
  for(let i=0;i<3;i++)glyph('n',(82+i*12+Math.sin(t*2+i)*4)|0,(80-((t*10+i*8)%30))|0,'#f6c445');
  R(0,0,256,144,'rgba(255,170,80,.22)');R(0,0,256,6,'rgba(0,0,0,.35)');R(0,138,256,6,'rgba(0,0,0,.35)');R(0,0,6,144,'rgba(0,0,0,.35)');R(250,0,6,144,'rgba(0,0,0,.35)')}
 else if(a=='dusty'){R(0,0,256,70,'#141a26');R(0,70,256,18,'#0e121c');for(let x=0;x<256;x+=8)for(let yy=88;yy<144;yy+=8)R(x,yy,8,8,((x+yy)/8)%2?'#141824':'#10141e');
  R(222,26,32,62,'#2a3446');for(let yy=29;yy<67;yy+=3)R(225,yy,26,2,'#3a4458');R(225,67,26,19,'#1c2232');R(68,3,124,15,'#05060c');R(2,9,60,61,'#2a3446');canalView(5,12,54,55,.95,1);R(31,12,2,55,'#2a3446');R(5,37,54,2,'#2a3446');
  R(4,90,58,3,'#5a6478');R(4,93,58,14,'#141824');R(9,82,12,8,'#222a3a');
  [[96,'#ff4fd8'],[136,'#ffb24f']].forEach(([x,c])=>{for(let j=0;j<2;j++)R(x+3+j*4,104,2,7,j%2?c:'#111');R(x,110,20,10,'#2a3446');R(x,110,20,1,'#5a6478')});
  cx.strokeStyle='rgba(200,200,220,.35)';cx.lineWidth=1;cx.beginPath();cx.moveTo(0,22);cx.lineTo(0,0);cx.lineTo(22,0);cx.moveTo(0,0);cx.lineTo(16,16);cx.moveTo(0,10);cx.quadraticCurveTo(8,8,10,0);cx.moveTo(0,17);cx.quadraticCurveTo(13,13,17,0);cx.moveTo(256,0);cx.lineTo(240,14);cx.moveTo(256,10);cx.quadraticCurveTo(248,8,246,0);cx.stroke();
  const on=Math.sin(tP*13)>-.6;R(128,0,1,18,'#555');R(126,18,5,4,on?'#ffe9a8':'#554');if(on){cx.fillStyle='rgba(255,233,168,.08)';cx.beginPath();cx.moveTo(126,22);cx.lineTo(80,144);cx.lineTo(176,144);cx.lineTo(131,22);cx.fill()}
  for(let i=0;i<25;i++)R((i*41+t*5)%256,(i*29+t*3)%144,1,1,'rgba(220,220,230,.4)');
  person(150,128,OWN);R(0,0,256,144,'rgba(0,0,10,.3)')}
 else if(a=='holo'){R(0,0,256,144,'#05060c');for(let x=0;x<256;x+=16)R(x,0,1,144,'#0e1222');for(let yy=0;yy<144;yy+=16)R(0,yy,256,1,'#0e1222');
  R(108,130,40,6,'#3a4458');R(112,129,32,1,'#4ff3ff');cx.fillStyle='rgba(79,243,255,.1)';cx.beginPath();cx.moveTo(112,129);cx.lineTo(80,20);cx.lineTo(176,20);cx.lineTo(144,129);cx.fill();
  holo(128,124,5.5,MOMH);for(let i=0;i<14;i++)R(84+((i*37+t*20)%88),20+((i*53+t*15)%100),1,1,'rgba(160,250,255,.6)')}
 else{draw();R(0,0,256,144,`rgba(0,0,8,${Math.max(0,.9-t*.45).toFixed(3)})`)}}


/* ---------- shopper questions ---------- */
const HINT={rock:'neon night drives and retro synths',soul:'smooth grooves with a ton of bass',country:'twangy songs about life on Mars',jazz:'clever, complicated, slightly weird music',reggae:'slow, floaty low-gravity basslines',disco:'dance tracks written by AIs',punk:'loud, angry, anti-corporate noise',newwave:'catchy, glittery hologram bands',metal:'heavy, loud and clanky stuff',synth:'calm, spacey zero-gravity vibes',hiphop:'beats and rhymes you feel in your implants'};
let curQ=null;
function makeQ(c){const y=yF(),av=G.filter(g=>pop(g,y)>0),r=Math.random(),mix=g=>[g,...av.filter(x=>x.id!=g.id).sort(()=>Math.random()-.5).slice(0,2)].sort(()=>Math.random()-.5).map(o=>({l:o.n,ok:o.id==g.id}));
 if(r<.25&&c.f.id!='lp')return{text:`"Do you have anything on ${c.f.n}?"`,opts:[{l:'Yes, right over here',ok:hasF(c.f)},{l:"No, but try retro vinyl",ok:!hasF(c.f),vinyl:1},{l:"Sorry, I'm not sure",skip:1}]};
 if(r<.6){const a=pickAlb(c.g.id,y);if(a>=0)return{text:`"I loved ${ALB[a][1]} by ${ALB[a][0]}. What should I try next?"`,opts:[...mix(c.g),{l:"Sorry, I'm not sure",skip:1}]}}
 return{text:`"I'm looking for a gift. My friend loves ${HINT[c.g.id]}. What should I get?"`,opts:[...mix(c.g),{l:"Sorry, I'm not sure",skip:1}]}}
function openQ(c){curQ=c;const who=c.reg?REGS.find(x=>x.id==c.reg).n:{robot:'A robot shopper',cyborg:'A cyborg shopper',human:'A shopper'}[c.kind]||'A shopper';
 ovOpen(`<h2>${esc(who)} asks</h2><p>${esc(c.q.text)}</p><div class="btns">${c.q.opts.map((o,i)=>`<button data-a="ans:${i}"${o.skip?' class="ghost"':''}>${esc(o.l)}</button>`).join('')}</div>`)}
function answerQ(i){const c=curQ;curQ=null;if(!c||c.st!='ask'||!cust.includes(c))return'';const o=c.q.opts[i];st.flags.ans=1;c.bub=null;c.ask=false;
 if(o.skip){leave(c,null);return'They shrug and wander out.'}
 if(o.ok){if(o.vinyl)c.f=F[0];c.helped=1;c.st='dig';c.t=.6;st.rep+=1;st.mon.helped=(st.mon.helped||0)+1;return pick(['"Perfect, thank you!"','"Oh, nice pick. I\'ll take it."','"You really know your stuff."'])}
 st.rep-=.3;leave(c,'x');return pick(['"Hmm, not really what I meant."','"That\'s not it at all."','"Never mind, thanks."'])}
function autoAnswer(c){c.bub=null;c.ask=false;if(st.staff.clerk&&Math.random()<.4+.15*st.staff.clerk){c.helped=1;c.st='dig';c.t=.6;floats.push({x:c.x,y:c.y-22,t:'+',c:'#4ff3ff',life:1})}else{st.rep-=.2;st.mon.unanswered=(st.mon.unanswered||0)+1;leave(c,null)}}
let last=performance.now(),uiT=0;
function loop(t){const dt=Math.min(.05,(t-last)/1000);last=t;tP+=dt;
 if(cut){walk(dt);cut.t+=dt;cut.ch=Math.min(cutLine()[1].length,cut.ch+dt*40);cutUI();drawCut()}else{if(!paused&&!modal&&!arranging&&!st.over)sim(dt*speed);anim(dt*(paused?0:speed));draw()}hud();
 if((uiT+=dt)>1.5){uiT=0;checkGoals();const ae=document.activeElement;if(!ae||ae.tagName!='SELECT')renderTab()}
 requestAnimationFrame(loop)}
st=fresh();st.yr={sold:0,rev:0,genre:{},streak:0,bestStreak:0};renderTab();intro();requestAnimationFrame(loop);
}
