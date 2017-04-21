//function to plot pie chat from dataset
function piechart(dataset,max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var chartcolors = ['#B71C1C','#4A148C', '#1A237E', '#01579B', '#004D40', 
						'#33691E', '#F57F17', '#E65100', '#3E2723', '#263238'];
	var x = (canvas.width/2);
	var y = (canvas.height/2);
	var radius = y-100;	
	var startAngle = 0;
    var title = document.getElementById('title').value;
    var starty = 50;

              
    