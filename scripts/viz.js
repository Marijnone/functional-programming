const svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "900")
    .attr("height", "400");


const tip = d3.tip().attr('class', 'd3-tip')
    .html(function (d) {
        return d;
        var text = "<strong>Boek:</strong> <span style='color:red'>" + d.title + "</span><br>";
        var text = "<strong>Genre/Onderwerp:</strong> <span style='color:red'>" + d.subjects + "</span><br>";
        return text;
    })
svg.call(tip)

d3.json('/json/numberOfpages.json').then(function (data) {

    data.forEach(function (d) {});
    const x = d3.scaleLinear()
        .domain([d3.min(data, function (d) {
                return +d.description;
            }),
            d3.max(data, function (d) {
                return +d.description;
            })
        ]) // the min and max of the bookpage using de.min d3.max
        .range([0, 24]) //the range of the svg in this case the book on the shelf

    // const xBand = d3.scaleBand()
    //     .paddingInner(0.2)
    //     .paddingOuter(0.2)
    //     .domain([d3.min(data, function (d) {
    //             return +d.description;
    //         }),
    //         d3.max(data, function (d) {
    //             return +d.description;
    //         })
    //     ])
    //     .range([0, 80])

    // console.log(xBand(10))
    const rects = svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("y", 0)
        .attr("x", function (d, i) {
            // console.log(i)
            return (i * 40);
        })
        //return the width of the books with d.description = nummber of pages
        .attr("width", function (d, i) {
            return x(d.description)
        })
        .attr("height", function (d) {
            return 60;
        })
        .attr("fill", function (d) {
            return "grey";
        })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);




})






// <rect x="0" y="" width="20" height="50" fill="red">