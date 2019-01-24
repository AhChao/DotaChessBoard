var fieldChess = [];
function switchAblity(tar)
{
	if(tar==1)
	{
		d3.select("#raceText").attr("style",null);
		d3.select("#jobText").attr("style","color:#FF0000;");
		d3.select("#raceCountText").attr("style","display:none");
		d3.select("#jobCountText").attr("style",null);
	}
	else if(tar==0)
	{
		d3.select("#jobText").attr("style",null);
		d3.select("#raceText").attr("style","color:#FF0000;");
		d3.select("#jobCountText").attr("style","display:none");
		d3.select("#raceCountText").attr("style",null);
	}
}

//barMove('gnome',1,6)
//填充目標 目前長度 總長度
function barMove(barName,now,target)
{
    var elem = document.getElementById(barName+"Bar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    document.getElementById(barName+"Label").innerHTML = now +"/" + target;
    function frame() {
    	if (now == 0)
    	{
    		elem.style.width = width + '%'; 
    		clearInterval(id);
    	}
        if (width >= ((now/target)*100)) 
        {
            clearInterval(id);
        }
        else 
        {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function refreshFieldTable()
{
	document.getElementById("fieldTableDiv").innerHTML = "";
	d3.select("#fieldTableDiv").append("table").attr("id","fieldTable");
	
	var j = 0;
	for(var i in fieldChess)
	{
		if(j == 0)
		{
			d3.select("#nowFTR").attr("id",null);
			d3.select("#fieldTable").append("tr").attr("id","nowFTR");
			j=5;
		}
		d3.select("#nowFTR").append("td").append("img").
		attr({
			"src":"./img/ch/"+fieldChess[i]+".png",
			"chessNo":fieldChess[i],
			"onclick":"removeChess($(this).attr('chessNo'))",
		});
		j--;
	}
}

function refreshAddTable()
{
	var tableContent = [];
	var item = 1;
	while(item<53)
	{
		tableContent.push(item);
		item++;
	}
	//var opt1 = d3.select("#optRarity")[0][0].value;
	var opt2 = d3.select("#optRace")[0][0].value;
	var opt3 = d3.select("#optJob")[0][0].value;
	var delList = [];
	/*for(var i in originData)
	{
		for(var j in originData[i][0])
		{
			if(originData[i][0][j]==opt2)
			{
				tableContent.push(i);
				break;
			}
		}		
	}*/
	if(opt2!=0)
	for(var i in tableContent)
	{
		var isin = 0;
		for(var j in originData[tableContent[i]][0])
		{
			if(originData[tableContent[i]][0][j]==opt2) isin=1;
		}
		if(isin==0) delList.push(tableContent[i]);
	}
	tableContent = tableContent.filter( function( el ) {
	  return delList.indexOf( el ) < 0;
	} );
	delList=[];
	if(opt3!=0)
	for(var i in tableContent)
	{
		var isin = 0;
		for(var j in originData[tableContent[i]][1])
		{
			if(originData[tableContent[i]][1][j]==opt3) isin=1;
		}
		if(isin==0) delList.push(tableContent[i]);
	}
	tableContent = tableContent.filter( function( el ) {
	  return delList.indexOf( el ) < 0;
	} );

	document.getElementById("addTableDiv").innerHTML = "";
	d3.select("#addTableDiv").append("table").attr("id","addTable");
	
	var j = 0;
	for(var i in tableContent)
	{
		if(j == 0)
		{
			d3.select("#nowATR").attr("id",null);
			d3.select("#addTable").append("tr").attr("id","nowATR");
			j=5;
		}
		d3.select("#nowATR").append("td").append("img").
		attr({
			"src":"./img/ch/"+tableContent[i]+".png",
			"chessNo":tableContent[i],
			"onclick":"addChess($(this).attr('chessNo'))",
		});
		j--;
	}
}

function addChess(chessNo)
{
	for(var i in fieldChess)
	{
		if(fieldChess[i]==chessNo)
			return 0;
	}
	fieldChess.push(chessNo);
	refreshFieldTable();
	updateProgress();
}

function removeChess(chessNo)
{
	for(var i in fieldChess)
	{
		if(fieldChess[i]==chessNo)
			fieldChess.splice(i,1);
	}
	refreshFieldTable();
	updateProgress();
}

function updateProgress()
{	
	var raceValue = [0,0,0,0,0,0,0,0,0,0,0];
	var jobValue = [0,0,0,0,0,0,0,0,0,0];
	var raceLimit = [0,6,6,4,4,3,6,4,6,4,2];
	var jobLimit = [0,6,6,6,6,6,4,6,2,4];
	var raceName = ["","gnome","beast","undead","naga","dragon","human","orc","elf","troll","element"];
	var jobName = ["","warrior","mage","assassin","hunter","knight","druid","warlock","shaman","mech"];
	for(var i in fieldChess)
	{
		for(var j in originData[fieldChess[i]][0])
			raceValue[originData[fieldChess[i]][0][j]]++;
		for(var j in originData[fieldChess[i]][1])
			jobValue[originData[fieldChess[i]][1][j]]++;
	}
	for(var i in raceValue)
	{
		if(i==0) continue;
		barMove(raceName[i],raceValue[i],raceLimit[i]);
	}
	for(var i in jobValue)
	{
		if(i==0) continue;
		barMove(jobName[i],jobValue[i],jobLimit[i]);
	}
}

function addBtnClick()
{
	if(d3.select("#addDiv").attr("style")==null)
		d3.select("#addDiv").attr("style","display:none;");
	else
	{
		d3.select("#addDiv").attr("style",null);
		refreshAddTable();
	}
}

function clearFilter()
{
	//document.getElementById("optRarity").selectedIndex = 0;
	document.getElementById("optRace").selectedIndex = 0;
	document.getElementById("optJob").selectedIndex = 0;
	refreshAddTable();
}