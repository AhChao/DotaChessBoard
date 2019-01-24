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
        if (width >= ((now/target)*100)) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
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
	console.log(tableContent);
	document.getElementById("addTableDiv").innerHTML = "";
	d3.select("#addTableDiv").append("table").attr("id","addTable");
	
	var j = 0;
	for(var i in tableContent)
	{
		console.log(i);
		if(j == 0)
		{
			d3.select("#nowTR").attr("id",null);
			d3.select("#addTable").append("tr").attr("id","nowTR");
			j=5;
		}
		d3.select("#nowTR").append("td").append("img").attr("src","./img/ch/"+tableContent[i]+".png");
		j--;
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