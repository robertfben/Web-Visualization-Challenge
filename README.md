# Web-Visualization-Challenge
 
## Unit 14: Belly Button Biodiversity

In this project, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Completed the following steps:

 1) Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

 2) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  a) Used sample_values as the values for the bar chart.

  b) Used otu_ids as the labels for the bar chart.

  c) Used otu_labels as the hovertext for the chart.


 3) Created a bubble chart that displays each sample.

  a) Used otu_ids for the x values.


  b) Used sample_values for the y values.


  c) Used sample_values for the marker size.


  d) Used otu_ids for the marker colors.


  e) Used otu_labels for the text values.


 4) Display the sample metadata, i.e., an individual's demographic information.

 5) Display each key-value pair from the metadata JSON object somewhere on the page.
 
### References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
