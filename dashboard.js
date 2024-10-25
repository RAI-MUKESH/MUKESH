// Bar Chart for Sales Statistics
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Apr 19', 'May 19', 'Jun 19', 'Jul 19', 'Aug 19', 'Sep 19', 'Oct 19', 'Nov 19'],
        datasets: [{
            label: 'Sales (₹)',
            data: [2000, 3000, 2800, 4000, 3500, 4500, 5000, 5500],
            backgroundColor: 'rgba(106, 115, 240, 0.2)',
            borderColor: '#6a73f0',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart for Top Selling Items
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Engine Oil', 'Brakes', 'Tyres', 'Sprockets', 'Breaks'],
        datasets: [{
            data: [23, 20, 25, 10, 22],
            backgroundColor: ['#f76c6c', '#f8c291', '#60a3bc', '#78e08f', '#eb2f06'],
            hoverBackgroundColor: ['#fa5252', '#f7b731', '#45aaf2', '#2bcbba', '#eb4d4b']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
