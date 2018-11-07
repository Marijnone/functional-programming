d3.json('/json/numberOfpages.json').then(function (data) {




    const svg = d3.select('body')
        .append('svg')
        .attr('width', '100%')
        .attr('height', 20 * data.length)


    // const x = d3
    //     .scaleLinear()
    //     .domain([0, ])
    //     .range([0, 800])


    const bar = svg
        .selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            console.log(d)
            return 'translate(0,' + i * 20 + ')'
        })

    bar.append('rect')
        .attr('width', d => d.description)
        // add this attribute to change the color of the rect
        .attr('fill', function (d) {
            return 'red'
        })
        .attr('height', 20 - 1)

    // svg.selectAll("rect")

    //     .data(data)
    //     .enter().append("rect")
    //     .attr("height", 150)
    //     .attr("width", (d => d.description))
    //     .attr('x', (d, i) => (i * 60) + 25)
    //     .attr("y", 20)
    //     // .attr("class", "bar")
    //     .attr("fill", "red")





});

// <rect x="0" y="" width="20" height="50" fill="red">