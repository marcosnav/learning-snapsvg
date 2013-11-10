$(function(){

	var diamond = Snap("#diamond");

	diamond.select('g').drag();

	var animate_attr = {
		stroke: "#0Cf",
		strokeWidth: 2
	};

	diamond.mouseover(function(el) {
		diamond.animate(animate_attr, 1000, mina.bounce());
	});
/*
	var p1 = diamond.polyline(100,100, 180,100),
		p2 = diamond.polyline(180,100,210,220),
		p3 = diamond.polyline(210,220,100,100);

	p1.attr({
		fill: "#000",
		stroke: "#000"
	});

	var shat_coords = [100,100, 180,100, 210,220],
		diamond_shat = diamond.polygon(shat_coords);

	diamond_shat.attr({
		fill: "#f03"
	});
*/


});