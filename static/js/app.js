// Use d3 library to read in samples.json from the url
// https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
// Use console.log

// establish the link in a variable
const dataLink = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(dataLink).then(function(data) {
  console.log(data);
});

// create a horizontal bar chart with a dropdown menu to display the top 10 OTUs(the microbial species) found in that individual
    // Use Use sample_values as the values for the bar chart.
    let sortedValues = data.sort((a, b) => b.sample_values - a.sample_values);
    console.log(sortedValues);

    // Use console.log


    // Use otu_ids as the labels for the bar chart.
    // Use console.log


    // Use otu_labels as the hovertext for the chart.
    // Use console.log




// Create a bubble chart that displays each sample.

    // Use otu_ids for the x values.
    // Use console.log


    // Use sample_values for the y values.
    // Use console.log
    

    // Use sample_values for the marker size.
    // Use console.log


    // Use otu_ids for the marker colors.
    // Use console.log


    // Use otu_labels for the text values.
    // Use console.log




// Display the sample metadata, i.e., an individual's demographic information.
// Use console.log



// Display each key-value pair from the metadata JSON object somewhere on the page.
// Use console.log


// Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.
// Use console.log



// Deploy your app to a free static page hosting service, such as GitHub Pages.
 
// Submit the links to your deployment and your GitHub repo. 
// Ensure that your repository has regular commits and a thorough README.md file.



// -------------------------Challenge-------------------------
// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.

