

// Doughnut chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#simple-doughnut-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
    };

    // Chart Data - Doughnut
    var chartData = {
        labels: [ "SARS(2003)", "COVID-19 (2020)","H1N1(2009)"],
        datasets: [{
            label: "My First dataset",
            data: [33, 23,21],
            backgroundColor: ['#666EE8', '#28D094', '#FF4961','#1E9FF2', '#FF9149'],
        }]
    };

    var config = {
        type: 'doughnut',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var doughnutSimpleChart = new Chart(ctx, config);

});
