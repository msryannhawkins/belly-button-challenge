# belly-button-challenge
In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which cataloged the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

I was asked to create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.To do this I:
    *Used sample_values as the values for the bar chart.
    *Used otu_ids as the labels for the bar chart.
    *Used otu_labels as the hovertext for the chart.
PICTURE

Next, I needed to create a bubble chart that displayed each sample. To do this I:
    *Used otu_ids for the x values.
    *Used sample_values for the y values.
    *Used sample_values for the marker size.
    *Used otu_ids for the marker colors.
    *Used otu_labels for the text values.
PICTURE

I then displayed the sample metadata, i.e., an individual's demographic information and each key-value pair from the metadata JSON object somewhere on the page.I updated all the plots when a new sample was selected. With this, I was encouraged to create any layout that I liked for my dashboard. Once I created my dashboard, I deployed my app to a free static page hosting service, GitHub Pages. 


Throughout each step, I made sure to use console.log inside of my JavaScript code to see what the data looked like. To help me throughout this task, I refered to the Plotly.js documentation when building the plots. 
