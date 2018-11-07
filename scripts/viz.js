d3.json('/json/numberOfpages.json').then(function (data) {




    const svg = d3.select('#canvas')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')



    const x = d3
        .scaleLinear()
        .domain([0, ])
        .range([0, 800])

    svg.selectAll("rect")

        .data(data)
        .enter().append("rect")
        .attr("height", 150)
        .attr("width", (d => d.description))
        .attr('x', (d, i) => (i * 60) + 15)
        .attr("y", 20)
        .attr("fill", "red")





});

// <rect x="0" y="" width="20" height="50" fill="red">