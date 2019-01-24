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