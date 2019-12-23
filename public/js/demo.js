demo = {

  initDashboardPageCharts: function() {

    if ($('#dailySalesChart').length != 0 || $('#completedTasksChart').length != 0 || $('#websiteViewsChart').length != 0) {
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      dataDailySalesChart = {
        labels: ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [18, 5, 9, 40, 11, 20, 50]
        ]
      };

      optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 60, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      md.startAnimationForLineChart(dailySalesChart);



      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      dataCompletedTasksChart = {
        labels: ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
          [230, 750, 450, 300, 280, 240, 200, 190]
        ]
      };

      optionsCompletedTasksChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      md.startAnimationForLineChart(completedTasksChart);


      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionsWebsiteViewsChart = {
        axisX: {
          showGrid: false
        },
        low: 0,
        high: 1000,
        chartPadding: {
          top: 0,
          right: 5,
          bottom: 0,
          left: 0
        }
      };
      var responsiveOptions = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      md.startAnimationForBarChart(websiteViewsChart);
    }
  },

  
}





// demo chart 

// <div class="ct-chart ct-perfect-fourth" id="test"></div>                  
// <script>
// // Our labels and three data series
// var data = {
//   labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
//   series: [
//     [5, 4, 3, 7, 5, 10],
//     [3, 2, 9, 5, 4, 6],
//     [2, 1, -3, -4, -2, 0]
//   ]
// };

// // We are setting a few options for our chart and override the defaults
// var options = {
//   // Don't draw the line chart points
//   showPoint: false,
//   // Disable line smoothing
//   lineSmooth: false,
//   // X-Axis specific configuration
//   axisX: {
//     // We can disable the grid for this axis
//     showGrid: false,
//     // and also don't show the label
//     showLabel: false
//   },
//   // Y-Axis specific configuration
//   axisY: {
//     // Lets offset the chart a bit from the labels
//     offset: 60,
//     // The label interpolation function enables you to modify the values
//     // used for the labels on each axis. Here we are converting the
//     // values into million pound.
//     labelInterpolationFnc: function(value) {
//       return '$' + value + 'm';
//     }
//   }
// };

// </script>