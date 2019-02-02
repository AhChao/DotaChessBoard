function languageSetting(lan)
{   //①②③④⑤⑥⑦⑧⑨⑩
	//lan 0 = ch 1 = en
	var settingList = [
	"pageTitle","fieldText","addBtn","fieldAblity","raceText","jobText","clearBtn",
	"optAllRace","optGno","optBea","optUnd","optNag","optDra","optHum","optOrc","optElf","optTro","optEle","optDev",
	"optAllJob","optWarr","optMag","optAss","optHun","optKni","optDru","optWar","optSha","optMec","optDem",
	"lbGob","lbBea","lbUnd","lbNag","lbDra","lbHum","lbOrc","lbElf","lbTro","lbEle",
	"lbWarr","lbMag","lbAss","lbHun","lbKni","lbDru","lbWar","lbSha","lbMec","lbDem",
	]
	var pageText = [
		["刀塔自走棋記錄板","場上","添加棋子","場上能力","種族","職業","清除",
		 "全部種族","地精","野獸","亡靈","娜迦","龍","人類","獸人","精靈","巨魔","元素","惡魔",
		 "全部職業","戰士","法師","刺客","獵人","騎士","德魯伊","術士","薩滿祭司","工匠","惡魔獵人",
		 "地精 ③⑥","野獸 ②④⑥","亡靈 ②④","娜迦 ②④","龍 ③","人類 ②④⑥","獸人②④","精靈 ③⑥","巨魔 ②④","元素 ②④",
		 "戰士 ③⑥⑨","法師 ③⑥","刺客 ③⑥","獵人 ③⑥","騎士 ②④⑥","德魯伊 ②④","術士 ③⑥","薩滿祭司 ②","工匠 ②④","惡魔獵人 ②"
		],
		["Dota Auto Chess Board","Field","Add","Ablity","Species","Classes","Clear Filter",
		 "all","goblin","beast","undead","naga","dragon","human","orc","elf","troll","element","demon",
		 "all","warrior","mage","assassin","hunter","knight","druid","warlock","shaman","mech","demon hunter",
		 "Goblin ③⑥","Beast ②④⑥","Undead ②④","Naga ②④","Dragon ③","Human ②④⑥","Orc","Elf ③⑥","Troll ②④","Element ②④",
		 "Warrior ③⑥⑨","Mage ③⑥","Assassin ③⑥","Hunter ③⑥","Knight ②④⑥","Druid ②④","Warlock ③⑥","Shaman ②","Mech ②④","Demon Hunter②"
		]
	];
	if(lan==0) nowLanguage="ch";
	else nowLanguage="en";
	refreshAddTable();
	refreshFieldTable();
	for(var i in settingList)
	{
		d3.select("#"+settingList[i]).text(pageText[lan][i]);
		/*if(document.getElementById(settingList[i])!=null)
			document.getElementById(settingList[i]).innerHTML = pageText[lan][i];*/
	}
}

function urlLoading()
{
	var urlData = location.href;
	urlData = urlData.split("?language=");
	urlData = urlData[1];

	if( urlData == "ch") languageSetting(0);
	else if( urlData == "en")
	{
		languageSetting(1);
		document.getElementById("languageSwitchSelect").selectedIndex = 1;
	} 
	else languageSetting(0);
}
urlLoading();