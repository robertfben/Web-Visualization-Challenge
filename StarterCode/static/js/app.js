
// function buildCharts(sample) {

//     // Use d3.json to load the samples.json file 
//     d3.json("samples.json").then((data) => {
//       // Create a variable that holds the samples array. 
//       var samples = data.samples;
  
//       //  Create a variable that holds the first sample in the array.
//       var result = resultArray[0];
  
//       // Create variables that hold the otu_ids, otu_labels, and sample_values.
//       var otu_ids = result.otu_ids;
//       var otu_labels = result.otu_labels;
//       var sample_values = result.sample_values;
//     });
//   }


// function for dropdown
d3.json('./samples.json').then((data) => {

    // create variable that holds the samples array
    var samples = data.samples;

    // variable to hold first sample in array
    var result = samples;
    //console.log(result)

    // variables holding the necessary data arrays
    var otu_ids = result.otu_ids;
    var otu_ids = otu_ids;
    //console.log(otu_ids)
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;

    // use d3 to select dropdown menu
    var dropdownMenu = d3.select('#selDataset');
    // Assign value of dropdown menu option to variable
    var dataset = dropdownMenu.property('value');

    otu_ids.forEach(sample => {
        dropdownMenu
            .append('option')
            .text(sample)
            .property('value', sample);
    });
});


// function for bar chart
d3.json('./samples.json').then((data) => {
    // create variable that holds the samples array
    var samples = data.samples;

    // variable to hold first sample in array
    var result = samples[0];
    //console.log(result)

    // variables holding the necessary data arrays
    var otu_ids = result.otu_ids;
    var otu_ids = otu_ids.slice(0, 10);
    console.log(otu_ids)
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
    
    // bar chart trace
    var barChart = {
        x: sample_values.reverse(),
        y: `OTU ${otu_ids}`,
        type: 'bar',
        hovertext: otu_labels,
        orientation: 'h'
    };

    // Data array
    var barChartTrace = [barChart];

    // render plot
    Plotly.newPlot('bar', barChartTrace);

})

// function for bubble chart
d3.json('./samples.json').then((data) => {
    // create variable that holds the samples array
    var samples = data.samples;

    // variable to hold first sample in array
    var result = samples[0];
    //console.log(result)

    // variables holding the necessary data arrays
    var otu_ids = result.otu_ids;
    var otu_ids = otu_ids;
    var otu_labels = result.otu_labels;
    var sample_values = result.sample_values;
    
    // bubble chart trace
    var bubbleChart = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
            size: sample_values,
            color: otu_ids
            }

    };

    // Data array
    var bubbleChartTrace = [bubbleChart];

    // render plot
    Plotly.newPlot('bubble', bubbleChartTrace);

})

// var sample_values = []
// var otu_ids = []
// var otu_labels = []
// var sample_ids = []

// // function to grab the data and append it to its respective list for charts
// function init(data){
//     console.log(data);
    

//     for (let i = 0; i < data.samples.length; i++) {
//         //console.log(data.samples[i].id)
//         sample_ids.push(data.samples[i].id)
//         //console.log(sample_ids)
//         otu_ids = data.samples[i].otu_ids
//         //console.log(otu_ids[0])
//         otu_labels = data.samples[i].otu_labels
//         sample_values = data.samples[i].sample_values
//         //console.log(sample_values)
//       }
// }

// // how do i create google chart for top 10 otu ids? --< google
// // try to populate dropdown list first before charts

// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", Dropdown);

// // Function called when dropdown menu item is selected
// function Dropdown() {
//     let dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a letiable
//     let dataset = dropdownMenu.property("value");
//     // Initialize an empty array for the country's data
//     //data = []
    
//     sample_ids.forEach(sample => {
//         dropdownMenu
//             .append('option')
//             .text(sample)
//             .property('value', sample);
//     });
// };

// ////////////////////////////////////////////////////////
// // trace for bar chart
// var barChart = {
//     type: 'bar',
//     x: sample_values,
//     y: `OTU ${otu_ids}`,
//     hovertext: otu_labels,
//     orientation: 'h'
// };

// // Data trace array
// let barTraceData = [barChart];

// // Render the plot to the div tag with id "bar"
// Plotly.newPlot("bar", barTraceData);

// ////////////////////////////////////////////////////////

// // trace for bubble chart
// var bubbleChart = {
//     x: otu_ids,
//     y: sample_values,
//     text: otu_labels,
//     mode: 'markers',
//     marker: {
//         size: sample_values,
//         color: otu_ids
//     }
// };

// // Data trace array
// let bubbleTraceData = [bubbleChart];

// // Render the plot to the div tag with id "bubble"
// Plotly.newPlot("bubble", bubbleTraceData);


//d3.json('./samples.json').then(data => init(data))
