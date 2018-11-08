const svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "1200")
    .attr("height", "400");

d3.json('/json/numberOfpages.json').then(function (data) {

    data.forEach(function (d) {

    });
    const x = d3.scaleLinear()
        .domain([0, 800]) // the min and max of the bookpage
        .range([0, 40]) //the range of the svg in this case the book on the shelf
    // .paddingInner(0.3) //this is for the scaleband
    // .paddingOuter(0.2);
    console.log(x(300))



    const rects = svg.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .attr("y", 0)
        .attr("x", function (d, i) {
            return (i * 60);
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
        });

})






// <rect x="0" y="" width="20" height="50" fill="red">