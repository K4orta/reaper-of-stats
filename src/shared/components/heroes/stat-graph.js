import React from 'react';
import d3 from 'd3';

export default React.createClass({
	componentDidMount() {
	},
	componentDidUpdate() {
		if (this.props.data.length > 0) {
			this._update();		
		}
	},
	render() {
		return (
			<svg className='stat-chart' ref='chart'></svg>
		);
	},
	_update() {
		var width = 960;
		var height = 500;
		var padding = 100;

		var svg = d3.select('svg')
		.attr('width', width)
		.attr('height', height)

		var x = d3.time.scale()
			.range([0, width-padding*2]);

		var y = d3.scale.linear()
			.range([height-padding*2, 0]);

		x.domain(d3.extent(this.props.data, (d) => d['last-updated'] * 1000 ));
		y.domain([0,d3.max(this.props.data, (d) => d.toughness)]);

		var line = d3.svg.line()
			.x((d) => x(d['last-updated'] * 1000))
			.y((d) => y(d.damage));

		var toughnessLine = d3.svg.line()
			.x((d) => x(d['last-updated'] * 1000))
			.y((d) => y(d.toughness));

		var healingLine = d3.svg.line()
			.x((d) => x(d['last-updated'] * 1000))
			.y((d) => y(d.healing));

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient('bottom');

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient('left')

		var lineLayer = svg.append('g');
		lineLayer
			.attr('transform', 'translate('+padding+','+padding+')')
			.append('path')
			.datum(this.props.data)
			.attr('class', 'damage-line')
			.attr('d', line);

		lineLayer
		.append('path')
		.datum(this.props.data)
		.attr('class', 'toughness-line')
		.attr('d', toughnessLine)

		lineLayer
		.append('path')
		.datum(this.props.data)
		.attr('class', 'healing-line')
		.attr('d', healingLine)

		svg.append('g').attr('transform', 'translate('+padding+', '+(height-padding)+')').call(xAxis);
		svg.append('g').attr('transform', 'translate('+padding+', '+padding+')').call(yAxis);
	}
});