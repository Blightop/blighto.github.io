const googledata = [
    { year: 2006, count: 1 },
    { year: 2007, count: 0 },
    { year: 2008, count: 1 },
    { year: 2009, count: 1 },
    { year: 2010, count: 2 },
    { year: 2011, count: 3 },
    { year: 2012, count: 2 },
    { year: 2013, count: 1 },
    { year: 2014, count: 3 },
    { year: 2015, count: 1 },
    { year: 2016, count: 2 },
    { year: 2017, count: 1 },
    { year: 2018, count: 0 },
    { year: 2019, count: 2 },
    { year: 2020, count: 2 },
    { year: 2021, count: 0 },
    { year: 2022, count: 3 }
  ];
  
  new Chart(
    document.getElementById('Googleacc'),
    {
      type: 'bar',
      data: {
        labels: googledata.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year (Google)',
            data: googledata.map(row => row.count),
            backgroundColor: ["#ea4335","	#fbbc05","#34a853","#4285f4"]
          }
        ]
      },
      options: {
        maintainAspectRatio: false
      } 
    }
  )