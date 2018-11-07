d3.json('/json/numberOfpages.json').then(function (data) {




    var svg = d3.select('#canvas')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')



    svg.selectAll("rect")
        .data(data)


    // var bar = svg.selectAll('rect')
    //     .data(data)
    // // console.log(data.description);
    // bar.enter()
    //     .append('rect')
    //     .attr('y', 50)
    //     .attr("x", function (d, i) {
    //         return i * 60;
    //     })
    //     .attr('width', (d => d.description))
    //     .attr('height', 40)
    //     .attr('fill', 'brown')

    svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("height", "250")
        .attr("width", "40")
        // .attr("x", function (d, i) {
        //     return i * 60;
        // })
        .attr('x', (d, i) => i * 60)
        .attr("y", "50");






});

// <rect x="0" y="" width="20" height="50" fill="red">