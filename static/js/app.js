// Use d3 library to read in samples.json from the url
// https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
// Use console.log

// establish the link in a variable
const dataLink = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(dataLink).then((data) => {
    console.log(data);

    // Use Use sample_values as the values for the bar chart.
    let sortedValues = data.samples[0].sample_values.slice(0, 10);
    console.log(sortedValues);

    //-----Bar Chart----
    // Use otu_ids as the labels for the bar chart.
    // Use console.log
    let otuIds = data.samples[0].otu_ids.slice(0, 10);
    console.log(otuIds);

    // Use otu_labels as the hovertext for the chart.
    // Use console.log
    let otuLabels = data.samples[0].otu_labels.slice(0, 10);
    console.log(otuLabels);


    let trace1 = {
        x: sortedValues.reverse(),
        y: otuIds.map(a => `OTU ID ${a}`).reverse(),
        text: otuLabels.reverse(),
        type: 'bar',
        orientation: 'h'
      };
      
      let plotPoints = [trace1];
      
      let layout = {
        title: 'Top 10 OTUs'
      };
      
      Plotly.newPlot("bar", plotPoints, layout);

   
   
    // ---------Bubble Chart-------
    // Use otu_ids for the x values.
    // Use console.log
    let otuIds2 = data.samples[0].otu_ids;
    console.log(otuIds2);

    // Use sample_values for the y values.
    // Use console.log
    let sortedValues2 = data.samples[0].sample_values;
    console.log(sortedValues2); 

    // Use otu_labels for the text values.
    // Use console.log
    let otuLabels2 = data.samples[0].otu_labels;
    console.log(otuLabels2);


    let trace2 = {
        x: otuIds2,
        y: sortedValues2,
        text: otuLabels2,
        mode: 'markers',
        marker: {

            size: sortedValues2, 
            color: otuIds2
        }};
      
      let bubble = [trace2];
      
      let layout2 = {
        title: 'Frequency'
      };
      
      Plotly.newPlot("bubble", bubble, layout2);

     // Display the sample metadata, i.e., an individual's demographic information.
     // Use console.log 
     // <div id="sample-metadata" class="panel-body"></div>
     //let metaText = d3.select(".panel-body").text();
     // Initializes the page with a default plot--table????
     function init() {
      Plotly.newPlot("plot", data);
      }

      d3.selectAll(".panel-body").on("change", updatePlotly);
          
        // This function is called when a dropdown menu item is selected
            function updatePlotly() {
              // Use D3 to select the dropdown menu
              let dropdownMenu = d3.select(".panel-body");
              // Assign the value of the dropdown menu option to a variable
              let dataset = dropdownMenu.property("id");

              }
              init();

      
});







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

