const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Value(%)',
      data: [10, 20, 35, 45, 52, 63],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['2016', '2018', '2020', '2022'],
    datasets: [{
      label: 'Dataset 1',
      data: [100, 75, 50, 40],
      backgroundColor: 'rgb(252, 108, 142)',
    }, {
      label: 'Dataset 2',
      data: [80, 60, 50, 70],
      backgroundColor: '#7571f9',
    }]
 
  },
  
  options: {
    maintainAspectRatio: false, // Set to false to allow custom dimensions
        aspectRatio: 1,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});