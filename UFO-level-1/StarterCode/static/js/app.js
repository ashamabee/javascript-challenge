// from data.js
var tableData = data;

// reference to table body in html
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(tableData);

tableData.forEach((UFO) => {
        var row = tbody.append('tr');

        Object.entries(UFO).forEach(function ([x,y]) {
            row.append('td').text(y);
        });
    });

var button = d3.select('#filter-btn');
var form = d3.select('.form-group');
var input = d3.select('.form-control')

button.on('click', searchUFOs)
form.on("submit",searchUFOs);


function searchUFOs(){
    d3.event.preventDefault();
    var date = input.property('value');
    output = tableData.filter(data =>data.datetime=== date);
    tbody.remove(); 
    output.forEach((d) => {
        var row2 = tbody.append('tr');

        Object.entries(d).forEach(function ([x,y]) {
            row2.append('td').text(y);
        });
    });
}

