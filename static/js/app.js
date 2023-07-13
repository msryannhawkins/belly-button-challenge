// Use d3 library to read in samples.json from the url
// https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
// Use console.log

// establish the link in a variable
const data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
let promise = d3.json(data);
console.log(promise);

function metaDatabase(id) {

  promise.then(function (data) {

    //pull metadata through a variable
    let metaData = data.metadata;

    //filter for only the data connected to the id selected from the for loop
    let filteredID = metaData.filter(value => value.id == id)[0];

    //d3 to select sample-metadata id in the html file
    let info = d3.select('#sample-metadata');

    info.html('');

    //object.entries is used for key-value pairs in filteredID dict. and puts them into individual arrays
    Object.entries(filteredID)
      //loop through each array and use a claaback to extract each key and value pair
      .forEach(([key, value]) => {
        //append to add on to th h5 tag and pass the Key Value data as text so that is is displayed on the page
        info.append('h5')
          .text(`${key}: ${value}`);
      })
  })

};





function charts(id) {
  promise.then(function (data) {

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
      }
    };

    let bubble = [trace2];

    let layout2 = {
      title: 'Frequency'
    };

    Plotly.newPlot("bubble", bubble, layout2);

    // ---------Gauge-------

  }
)};


function dropDownChange(id){
  charts(id);
  metaDatabase(info);
};

function init() {


  promise.then(function(data) {

    console.log(data);

    let dropDown = d3.select("#selDataset")
    // need to make an array to refer to for ids only: use names from samples
    let names = data.names;

    //this is the ex as to how to add in text to the dropdown
    //dropDown.append("option").text("hello world").property("value", "hello_world")
    //dropDown.append("option").text(data.metadata[0].id).property("value", data.metadata[0].id)
    //dropDown.append("option").text(names[0]).property("value", names[0]);
    //create a for loop to iterate through all the ids and put them in the dropdown as an option
    //focus only on metadata>id: Iterate through the names Array
    for (let i = 0; i < names.length; i++) {

      dropDown.append("option").text(names[i]).property("value", names[i]);

    }

    charts(names[0])
    metaDatabase(names[0])
  });

}

init();


