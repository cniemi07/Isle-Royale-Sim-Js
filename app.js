
const wolfCanvas = document.getElementById("pop-chart1").getContext("2d");

const mooseCanvas = document.getElementById("pop-chart2").getContext("2d");


const data = {
       years: [1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,
                1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
                2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
                2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,
                2020,2022,2023,2024,2026],
        wolves: [50,30,14,23,24,22,20,16,12,11,
                 15,12,12,13,15,16,22,24,14,25,
                 29,19,17,19,29,30,30,21,23,24,
                 19,16,9,8,9,3,2,2,2,14,
                 14,28,31,30,37],
        moose:  [664,650,700,900,811,1062,1025,1380,1653,1397,
                 1216,1313,1600,1880,1800,2400,1200,500,700,750,
                 850,900,1000,900,750,540,385,450,650,530,
                 510,515,750,975,1050,1250,1300,1600,1500,2060,
                 null,1346,967,840,524]
}
new Chart(wolfCanvas, {type: 'line', data: {
    labels: data.years,
    datasets: [
        {
            label: "wolves",
            data:data.wolves,
            borderColor: '#1a4a34'
        },
    ]
}, options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Wolf Population Chart'
      }
    }
  },})
new Chart(mooseCanvas, {type: 'line', data: {
    labels: data.years,
    datasets: [
        {
            label: "moose",
            data: data.moose,
            borderColor: "#2D6A4F"
        }
    ]
}, options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Moose Population Chart'
      }
    }
  },})