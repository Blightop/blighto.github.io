const data = [
  { year: 2005, count: 1 },
  { year: 2006, count: 0 },
  { year: 2007, count: 1 },
  { year: 2008, count: 1 },
  { year: 2009, count: 1 },
  { year: 2010, count: 9 },
  { year: 2011, count: 11 },
  { year: 2012, count: 9 },
  { year: 2013, count: 9 },
  { year: 2014, count: 10 },
  { year: 2015, count: 5 },
  { year: 2016, count: 6 },
  { year: 2017, count: 3 },
  { year: 2018, count: 4 },
  { year: 2019, count: 9 },
  { year: 2020, count: 6 },
  { year: 2021, count: 5 }
];

new Chart(
  document.getElementById('MetaACC'),
  {
    type: 'bar',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year (Meta)',
          data: data.map(row => row.count),
          backgroundColor: ["#3b5998","	#25d366","#d62976","black"]
        }
      ]
    },
    options: {
      maintainAspectRatio: false
    } 
  }
)