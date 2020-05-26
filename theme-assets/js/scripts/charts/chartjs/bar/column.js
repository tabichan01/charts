/*=========================================================================================
    File Name: column.js
    Description: Chartjs column chart
    ----------------------------------------------------------------------------------------
    Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
    Version: 1.0
    Author: ThemeSelection
    Author URL: https://themeselection.com/
==========================================================================================*/

// Column chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#column-chart");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
            rectangle: {
                borderWidth: 2,
                borderColor: 'rgb(0, 255, 0)',
                borderSkipped: 'bottom'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
        legend: {
            position: 'top',
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: false,
                },
                scaleLabel: {
                    display: true,
                }
            }]
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
        }
    };

    // Chart Data - Column Chart
    var chartData = {
        labels: ["25 April", "30 April", "5 May", "10 May", "15 May ", "20 May"],

        datasets: [{
            label: "Hospitalised",
            data: [1214, 1708, 1584,1097, 1124, 954],
            backgroundColor: "#28D094",
            hoverBackgroundColor: "rgba(40,208,148,.9)",
            borderColor: "transparent"
        }, {
            label: "In Isolation Facilities",
            data: [10465, 13202, 16289,19498, 18498, 17181],
            backgroundColor: "#FF4961",
            hoverBackgroundColor: "rgba(255,73,97,.9)",
            borderColor: "transparent"
        }, {
            label: "Recovered Cases",
            data: [ 1002, 1244, 1519,2721, 7248, 11207],
            backgroundColor: "#purple",
            hoverBackgroundColor: "purple",
            borderColor: "transparent"}]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});
