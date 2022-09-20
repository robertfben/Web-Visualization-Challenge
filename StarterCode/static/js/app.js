
// function for dropdown
// d3.json('./samples.json').then((data) => {

//     // create variable that holds the samples array
//     var samples = data.samples;

//     // variable to hold first sample in array
//     var result = samples;
//     //console.log(result)

//     // variables holding the necessary data arrays
//     var otu_ids = result.otu_ids;
//     var otu_ids = otu_ids;
//     //console.log(otu_ids)
//     var otu_labels = result.otu_labels;
//     var sample_values = result.sample_values;

//     // use d3 to select dropdown menu
//     var dropdownMenu = d3.select('#selDataset');
//     // Assign value of dropdown menu option to variable
//     var dataset = dropdownMenu.property('value');

//     otu_ids.forEach(sample => {
//         dropdownMenu
//             .append('option')
//             .text(sample)
//             .property('value', sample);
//     });
// });

// Call init() when a change takes place to the DOM
//d3.selectAll("#selDataset").on("change", init);

function init() {
       // Grab a reference to the dropdown select element
       var selector = d3.select("#selDataset");
     
       // Use the list of sample names to populate the select options
       d3.json("samples.json").then((data) => {
         var sampleNames = data.names;
     
         sampleNames.forEach((sample) => {
           selector
             .append("option")
             .text(sample)
             .property("value", sample);
         });
     
         // Use the first sample from the list to build the initial plots
         var firstSample = sampleNames[0];
         buildCharts(firstSample);
         buildMetadata(firstSample);
       });
     }
     
     
   
     function optionChanged(newSample) {
       // Fetch new data each time a new sample is selected
       buildCharts(newSample);
       buildMetadata(newSample);
       
     };
   
     // Demographics Panel 
   function buildMetadata(sample) {
       d3.json("samples.json").then((data) => {
         var metadata = data.metadata;
         // Filter the data for the object with the desired sample number
         var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
         var result = resultArray[0];
        
         // Use d3 to select the panel with id of `#sample-metadata`
         var PANEL = d3.select("#sample-metadata");
     
         // Use `.html("") to clear any existing metadata
         PANEL.html("");
     
         // Use `Object.entries` to add each key and value pair to the panel
         // Hint: Inside the loop, you will need to use d3 to append new
         // tags for each key-value in the metadata.
         Object.entries(result).forEach(([key, value]) => {
           PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
         });
     
       });

    // update the charts when a new id is selected from the dropdown
    // Plotly.restyle('bar', )
      };

// buildCharts function
function buildCharts(sample){
    // function for bar chart
    d3.json('./samples.json').then((data) => {
        // create variable that holds the samples array
        var samples = data.samples;

        // variable to filter for selected OTU ID
        var resultArray = samples.filter(obj => obj.id == sample);
        // 
        var result = resultArray[0];

        // variables holding the necessary data arrays
        var otu_ids = result.otu_ids;
        var otu_ids = otu_ids.slice(0, 10);
        console.log(otu_ids)
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        
        // filter only to top 10 otu_ids and add OTU to string label
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

        // bar chart trace
        var barChart = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            type: 'bar',
            text: otu_labels,
            orientation: 'h'
        };

        // Data array
        var barChartTrace = [barChart];

        // render plot
        Plotly.newPlot('bar', barChartTrace);

        Plotly.restyle('bar', data)

    })

    // function for bubble chart
    d3.json('./samples.json').then((data) => {
        // create variable that holds the samples array
        var samples = data.samples;

        // variable to hold filter for selected OTU ID
        var resultArray = samples.filter(obj => obj.id == sample);

        // variable to hold first sample in array
        var result = resultArray[0];
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

        // Apply xaxis title to layout
        var layout = {
            xaxis: {
                title: 'OTU ID'
            }
        }

        // Data array
        var bubbleChartTrace = [bubbleChart];

        // render plot
        Plotly.newPlot('bubble', bubbleChartTrace, layout);

    })
    };

// Initialize the dashboard
 init();

