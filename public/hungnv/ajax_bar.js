function draw_chart(moneys, documents, sponsors) {
    listMoney = moneys.replace('{', '').replace('}', '').replace('\n', '').replace(' ', '').split(',')
    listDocument = documents.replace('{', '').replace('}', '').replace('\n', '').replace(' ', '').split(',')
    listSponsor = sponsors.replace('{', '').replace('}', '').replace(',{', '').replace('},', '').replace('\n', '').replace(' ', '').split(',')
    var list_m = []
    for (i = 0; i < listMoney.length; i += 2) {
        list_m.push(listMoney[i])
    }
    var listmoney = []
    for (i = 0; i < list_m.length; i += 3) {
        listmoney.push(list_m[i + 1])
        listmoney.push(list_m[i + 2])
    }
    month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 0; i < listmoney.length; i += 2) {
        tien = parseInt(listmoney[i].replace('numberMoney:', ''))
        month_ = parseInt(listmoney[i + 1].split('-')[1])
        for (j = 1; j <= 12; j++) {
            if (month_ == j) {
                month[j - 1] += tien / 1000000
            }
        }
    }
    dataDailySalesChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
            [month[0], month[1], month[2], month[3], month[4], month[5], month[6], month[7], month[8], month[9], month[10], month[11]]
        ]
    };

    optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: Math.max.apply(null,month) + 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    }

    var dailySalesChart = new Chartist.Line('#dailySalesChart_Tien', dataDailySalesChart, optionsDailySalesChart);
    md.startAnimationForLineChart(dailySalesChart);
    // --------------------------------------
    month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 0; i < listDocument.length; i += 2) {
        child = parseInt(listDocument[i + 1].replace('numberChild:', ''))
        month_ = parseInt(listDocument[i].split('-')[1])
        for (j = 1; j <= 12; j++) {
            if (month_ == j) {
                month[j - 1] += child
            }
        }
    }
    dataDailySalesChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
            [month[0], month[1], month[2], month[3], month[4], month[5], month[6], month[7], month[8], month[9], month[10], month[11]]
        ]
    };
    optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0
        }),
        low: 0,
        high: Math.max.apply(null,month) + 5, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    }

    var websiteViewsChart_hoso = new Chartist.Line('#websiteViewsChart_hoso', dataDailySalesChart, optionsDailySalesChart);
    md.startAnimationForLineChart(websiteViewsChart_hoso);

    // -------------------------------------------------------------------
    list_sponsor = []
    list_createdate = []
    for (var i = 0; i < listMoney.length; i += 6) {
        if (!list_sponsor.includes(listMoney[i + 1])) {
            list_sponsor.push(listMoney[i + 1])
            list_createdate.push(listMoney[i + 4])
        }
    }
    month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var i = 0; i < list_sponsor.length; i++) {
        month_ = parseInt(list_createdate[i].split('-')[1])
        for (j = 1; j <= 12; j++) {
            if (month_ == j) {
                month[j - 1] += 1
            }
        }
    }
    // console.log(Math.max(month))
    var dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
            [month[0], month[1], month[2], month[3], month[4], month[5], month[6], month[7], month[8], month[9], month[10], month[11]]
        ]
    };
    var optionsWebsiteViewsChart = {
        axisX: {
            showGrid: false
        },
        low: 0,
        high: Math.max.apply(null,month) + 5,
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    };
    var responsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];
    var websiteViewsChart = Chartist.Bar('#completedTasksChart_nhataitro', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

    //start animation for the Emails Subscription Chart
    md.startAnimationForBarChart(websiteViewsChart);
}
