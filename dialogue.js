/* Groove Tycoon: romance characters and dialogue.
   Edit this file to change what people say, or add new characters.
   Each character needs: id, name, role, x (where they stand on the canal street), look, likes (a genre id),
   lines (one list per relationship stage), chats (question + answers [text, affection change, reply]) and dates. */
window.GT_DIALOGUE={
 stages:['Stranger','Acquaintance','Friend','Crush','Dating','Partner'],
 characters:[
  {id:'mira',name:'Mira',role:'Barista at the Green Canal',x:700,y:112,likes:'reggae',
   look:{kind:'human',spr:3},
   lines:[
    ['"Hey. You\'re the record shop person, right?"','"Need something? I\'m on my break."'],
    ['"Oh hi! Still selling those big black discs?"','"The canal smells like rain again. I love it."'],
    ['"I put your shop on the coffeeshop playlist. You\'re welcome."','"Tell me something weird that happened in the shop today."'],
    ['"I was... kind of hoping you\'d walk by."','"You always smell like old record sleeves. It\'s nice."'],
    ['"There you are. I saved you a stroopwafel."','"Want to watch the boats later?"'],
    ['"Hey, you. Home is wherever your record player is."','"I told my mum about you. She wants a Lunar Dub LP."']],
   chats:[
    {q:'"What music do you actually listen to?"',a:[['"Lunar Dub. Those floaty basslines are everything."',8,'"Finally, somebody with taste!"'],['"Whatever is selling."',-3,'"Wow. Romantic."'],['"Mech Metal, mostly."',2,'"Huh. Didn\'t see that coming."']]},
    {q:'"If you weren\'t running a shop, what would you do?"',a:[['"Live on a houseboat and fish all day."',7,'"Okay, that sounds perfect, actually."'],['"Run a bigger shop."',1,'"Ha. Workaholic."'],['"Join the mafia."',-4,'"...I\'m going to pretend you didn\'t say that."']]},
    {q:'"Do you believe in the robots-have-feelings stuff?"',a:[['"My clerk bot cried at a Bot-Pop ballad. So, yes."',6,'"That\'s the sweetest thing I\'ve heard all week."'],['"Robots are just toasters."',-5,'"Don\'t let Nova hear you say that."'],['"Never really thought about it."',1,'"Fair enough."']]},
    {q:'"Rain or sunshine?"',a:[['"Rain on the canal. Every time."',6,'"Same! Sunshine people are suspicious."'],['"Sunshine, obviously."',0,'"Hmm. Okay."'],['"Neon. At night. In the rain."',8,'"Okay, now you\'re just showing off."']]}],
   dates:{cafe:'"You remembered my order. Okay, I\'m impressed."',casino:'"I\'ve never been inside the Lucky 7! Is that guy really called The Needle?"',boat:'"Your boat?! Can we just stay out here forever?"'}},
  {id:'nova',name:'Nova-9',role:'Android street musician',x:455,y:113,likes:'synth',
   look:{kind:'robot',style:'halo',shell:'#e8e4dc',glow:'#ff4fd8'},
   lines:[
    ['"GREETINGS. I AM PLAYING ORBITAL AMBIENT FOR TIPS."','"Your footsteps are in 4/4 time. Pleasant."'],
    ['"Hello again, shopkeeper. I composed a song about rain."','"Did you know your shop sign hums at 60 hertz?"'],
    ['"I have saved you in my memory as FRIEND. Please do not delete."','"Would you like to hear my new track? It is 47 minutes long."'],
    ['"My cooling fans spin faster when you are near. Fascinating."','"I wrote a song with your name in it. It is in binary."'],
    ['"Our relationship status has been updated. I am... happy?"','"Shall we listen to the canal together?"'],
    ['"Partner protocol: active. Forever is a long time for an android. Good."','"I have backed up every moment with you. Twice."']],
   chats:[
    {q:'"Do you think an android can truly love music?"',a:[['"You feel it more than most people I know."',9,'"...Thank you. Processing that."'],['"No. It\'s just maths."',-6,'"Oh. Understood."'],['"I think you\'re still figuring it out."',4,'"That is fair and kind."']]},
    {q:'"What should my next song be about?"',a:[['"Floating in zero gravity above Mars."',8,'"Excellent. Composing now."'],['"Make it catchier. Like Bot-Pop."',-2,'"Bot-Pop is... a sore subject."'],['"About the canal at night."',6,'"Yes. The lights. The reflections. Yes."']]},
    {q:'"Is it strange that humans sleep?"',a:[['"We just reboot slowly."',6,'"Ha! I understand you now."'],['"Is it strange you don\'t?"',3,'"Touché."'],['"Don\'t get weird."',-3,'"Apologies."']]}],
   dates:{cafe:'"I cannot drink coffee, but I enjoyed watching you drink coffee."',casino:'"I counted every card. I did not tell anyone. For you."',boat:'"The water reflects the stars. I am recording this for eternity."'}},
  {id:'zara',name:'Zara',role:'Alien jazz singer from Kepler',x:948,y:112,likes:'jazz',
   look:{kind:'alien',askin:'#a89aff',asuit:'#5a2a4a'},
   lines:[
    ['"Earthling. Your planet\'s music is... adorable."','"I sing at clubs. Do not ask which ones."'],
    ['"You again. Do you sell Quantum Jazz? Real Quantum Jazz?"','"On my moon we hum with all three of our hearts."'],
    ['"I told the other Keplerians about your shop. They were confused, but curious."','"Earth rain tastes like copper. I like it."'],
    ['"All three of my hearts skip when you smile. That is rare."','"Sing with me sometime? You will be terrible. I don\'t mind."'],
    ['"My people would call this a bonding orbit. I call it nice."','"Shall we get lost in the city tonight?"'],
    ['"You are my favourite thing on this whole wet planet."','"I renamed a star after your shop. It is a small star."']],
   chats:[
    {q:'"What do you miss about home?"',a:[['"Tell me about it. I want to know everything."',9,'"Hmm. Two suns. Purple oceans. And you would like the music."'],['"Earth is better, though."',-4,'"Bold claim, little human."'],['"Do you get homesick?"',5,'"Every night. Less lately."']]},
    {q:'"Can you guess what time signature I\'m thinking of?"',a:[['"Seven over thirteen?"',8,'"YES! Finally!"'],['"Four four?"',-1,'"So Earth of you."'],['"Is that a trick question?"',3,'"Everything is a trick question."']]},
    {q:'"Are you afraid of me?"',a:[['"Only of how much I like you."',9,'"...Oh. Oh my."'],['"A little, honestly."',1,'"Good. Healthy."'],['"Why would I be?"',4,'"Most humans scream first."']]}],
   dates:{cafe:'"This green smoke is nothing like Kepler. I love it."',casino:'"I won three times. Do not tell the man in the white suit."',boat:'"Water that does not glow? How romantic."'}}
 ]};
