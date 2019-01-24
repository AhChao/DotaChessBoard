function languageSetting(lan)
{
	//lan 0 = ch 1 = en
	var settingList = [
	"pageTitle","fieldText","addBtn","fieldAblity"
	]
	var pageText = [
	["刀塔自走棋記錄板","場上","添加棋子","場上能力"],
	["Dota Auto Chess Board","field","add","ablity"]
	]
	for(var i in settingList)
	{
		d3.select("#"+settingList[i]).text(pageText[lan][i]);
	}
}