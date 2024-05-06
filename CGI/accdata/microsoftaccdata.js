const MSdata = [
    { year: 1994, count: 4 },
    { year: 1995, count: 6 },
    { year: 1996, count: 9 },
    { year: 1997, count: 7 },
    { year: 1998, count: 5 },
    { year: 1999, count: 11 },
    { year: 2000, count: 9 },
    { year: 2001, count: 3 },
    { year: 2002, count: 4 },
    { year: 2003, count: 2 },
    { year: 2004, count: 2 },
    { year: 2005, count: 7 },
    { year: 2006, count: 11 },
    { year: 2007, count: 8 },
    { year: 2008, count: 16 },
    { year: 2009, count: 6 },
    { year: 2010, count: 3 },
    { year: 2011, count: 3 },
    { year: 2012, count: 6 },
    { year: 2013, count: 5 },
    { year: 2014, count: 9 },
    { year: 2015, count: 17 },
    { year: 2016, count: 10 },
    { year: 2017, count: 8 },
    { year: 2018, count: 17 },
    { year: 2019, count: 13 },
    { year: 2020, count: 8 },
    { year: 2021, count: 14 },
    { year: 2022, count: 6 },
    { year: 2023, count: 1 }
  ];
  
  new Chart(
    document.getElementById('MSacc'),
    {
      type: 'bar',
      data: {
        labels: MSdata.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year (Microsoft)',
            data: MSdata.map(row => row.count),
            backgroundColor: ["#f65314","#7cbb00","#00a1f1","#ffbb00"]
          }
        ]
      },
      options: {
        maintainAspectRatio: false
      } 
    }
  )