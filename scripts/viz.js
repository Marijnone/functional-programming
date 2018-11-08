d3.json('/json/numberOfpages.json').then(function (dataset) {

    console.log(dataset.description);


    var svgWidth = 500,
        svgHeight = 300,
        barPadding = 5;
    var barWidth = (svgWidth / dataset.length);

    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    var barChart = svg.selectAll("rect")
        .data(dataset)
    console.log(dataset.description)

        .enter()
        .append("rect")
        .attr("y", function (d) {
            return svgHeight - d
        })
        .attr("height", function (d) {
            return d;
        })
        .attr("width", dataset.description - barPadding)
        .attr("transform", function (d, i) {
            var translate = [barWidth * i, 0];
            return "translate(" + translate + ")";
        });





});

// <rect x="0" y="" width="20" height="50" fill="red">