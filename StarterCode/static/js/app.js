// Samples.json is structured like this:
// Samples:{
    // names: [array of numbers],
    // metadata: {
        // id: int,
        // ethnicity: string,
        // gender: single letter,
        // age: decimal,
        // location: string,
        // bbtype: single letter,
        // wfreq: decimal,
    //},
    // samples: [{
        // id: int,
        // otu_ids: [array of ints],
        // sample_values: [array of ints],
        // otu_labels: [array of strings],
    //}],
//}

// STEP ONE:
// Use the D3 library to read in samples.json.
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// * Use `sample_values` as the values for the bar chart.

// * Use `otu_ids` as the labels for the bar chart.

// * Use `otu_labels` as the hovertext for the chart.

// d3.json("/samples.json").then(function(data) {
//     console.log(data);
// });


// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }

function init(data){
    console.log(data);
    var sample_values = []
    var otu_ids = []
    var otu_labels = []
    var sample_ids = []

    for (let i = 0; i < data.samples.length; i++) {
        //console.log(data.samples[i].id)
        sample_ids.push(data.samples[i].id)
        otu_ids = data.samples[i].otu_ids
        //console.log(otu_ids[0])
        otu_labels = data.samples[i].otu_labels
        sample_values = data.samples[i].sample_values
        //console.log(sample_values)
      }
}

// how do i create google chart for top 10 otu ids? --< google
// try to populate dropdown list first before charts

d3.json('./samples.json').then(data => init(data))
















//     console.log(data)
//     var sample_values = data['sample_values']
//     console.log(sample_values)
//     var otu_ids = data['otu_ids']
//     var otu_labels = data['otu_labels']

//     // create trace for bar chart
//     var trace  = {
//         type: 'bar',
//         x: sample_values,
//         y: otu_ids,
//         hovertext: otu_labels,
        
//     }

//     // assign trace to an array
//     var data = [trace]

//     var layout = {
//         title: 'Top Ten Bacteria By Volume'
//     }
// })

