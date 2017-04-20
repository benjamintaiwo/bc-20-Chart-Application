//function to plot bar chat			  
function barchart(dataset, max) {
	var canvas = document.getElementById('chart');
	var context = canvas.getContext('2d');
	var startx = 80;  
	var scale_f = (canvas.height-200)/max;				        
	context.clearRect(0, 0, canvas.width, canvas.height);
    plotaxis();
                
	
	}			        
}