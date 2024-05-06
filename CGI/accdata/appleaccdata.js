const appledata = [
    { year: 1996, count: 1 },
    { year: 1997, count: 0 },
    { year: 1998, count: 0 },
    { year: 1999, count: 1 },
    { year: 2000, count: 0 },
    { year: 2001, count: 1 },
    { year: 2002, count: 2 },
    { year: 2003, count: 0 },
    { year: 2004, count: 0 },
    { year: 2005, count: 0 },
    { year: 2006, count: 0 },
    { year: 2007, count: 0 },
    { year: 2008, count: 2 },
    { year: 2009, count: 2 },
    { year: 2010, count: 6 },
    { year: 2011, count: 2 },
    { year: 2012, count: 3 },
    { year: 2013, count: 15 },
    { year: 2014, count: 11 },
    { year: 2015, count: 12 },
    { year: 2016, count: 9 },
    { year: 2017, count: 13 },
    { year: 2018, count: 8 },
    { year: 2019, count: 7 },
    { year: 2020, count: 11 },
    { year: 2021, count: 1 },
    { year: 2022, count: 2 },
    { year: 2023, count: 3 },
    { year: 2024, count: 2 }
  ];
  
  new Chart(
    document.getElementById('Appleacc'),
    {
      type: 'bar',
      data: {
        labels: appledata.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year (Apple)',
            data: appledata.map(row => row.count),
            backgroundColor: ["gray"]
          }
        ]
      },
      options: {
        maintainAspectRatio: false
      } 
    }
  )