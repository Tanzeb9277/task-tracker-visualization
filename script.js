// Initialize AOS
AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true,
  });
  
  // Fetch data and initialize charts
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {

      const labels = data.taskTrendData.labels;
      const datasets = data.taskTrendData.datasets;

      const taskTrendData = data.taskTrendData;
      const handlingTimeData = data.handlingTimeData;
      const totalTimeData = data.totalTimeData;
  
      // Ensure canvas elements exist
      const taskTrendCanvas = document.getElementById('taskTrendChart');
      const handlingTimeCanvas = document.getElementById('handlingTimeChart');
      const totalTimeCanvas = document.getElementById('totalTimeChart');
      const interactiveTaskTrendCanvas = document.getElementById('interactiveTaskTrendChart');
  
      if (!taskTrendCanvas || !handlingTimeCanvas || !totalTimeCanvas || !interactiveTaskTrendCanvas) {
        console.error('One or more canvas elements are missing.');
        return;
      }
  
      // Chart options
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: 'easeInOutQuart',
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      };
  
      // Create charts
      new Chart(taskTrendCanvas, {
        type: 'bar',
        data: taskTrendData,
        options: chartOptions,
      });
  
      new Chart(handlingTimeCanvas, {
        type: 'line',
        data: handlingTimeData,
        options: chartOptions,
      });
  
      new Chart(totalTimeCanvas, {
        type: 'bar',
        data: totalTimeData,
        options: chartOptions,
      });
  
      // Interactive Task Trends Chart
      const originalDatasets = JSON.parse(JSON.stringify(taskTrendData.datasets));
      const interactiveChart = new Chart(interactiveTaskTrendCanvas, {
        type: 'line',
        data: taskTrendData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Task Trends Over Time',
            },
          },
          animation: {
            duration: 800,
            easing: 'easeInOutCubic',
          },
        },
      });
  
      // Dropdown filter
      const userFilter = document.getElementById('userFilter');
      userFilter.addEventListener('change', () => {
        const selectedUser = userFilter.value;
  
        if (selectedUser === 'all') {
          interactiveChart.data.datasets = JSON.parse(JSON.stringify(originalDatasets));
        } else {
          interactiveChart.data.datasets = originalDatasets.filter(
            (dataset) => dataset.label === selectedUser
          );
        }
  
        interactiveChart.update();
      });
  
      // Value Metrics Section
      const totalTasks = 3200;
      const avgHours = 145;
      const efficiencyRating = 88;
  
      // Animate KPIs
      const animateValue = (id, start, end, duration) => {
        const element = document.getElementById(id);
        if (!element) {
          console.error(`Element with ID ${id} not found.`);
          return;
        }
        const range = end - start;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
  
        const step = () => {
          current += end > start ? 1 : -1;
          element.textContent = current + (id === 'efficiency-rating' ? '%' : '');
          if (current !== end) {
            setTimeout(step, stepTime);
          }
        };
        step();
      };
  
      animateValue('total-tasks', 0, totalTasks, 2000);
      animateValue('avg-hours', 0, avgHours, 2000);
      animateValue('efficiency-rating', 0, efficiencyRating, 2000);
  


      
      // Reuse the existing totalTasks variable
      // Calculate KPI values
      const avgHandlingTime = data.handlingTimeData.datasets.reduce(
        (sum, user) => sum + user.data.reduce((a, b) => a + b, 0),
        0
      ) / datasets.length;
      const totalHoursSpent = data.totalTimeData.datasets.reduce(
        (sum, user) => sum + user.data.reduce((a, b) => a + b, 0),
        0
      );


// Function to create a pie chart for a specific month
function createPieChart(canvasId, monthIndex) {
  const canvas = document.getElementById(canvasId);
  if (canvas) {
    // Calculate total tasks for each user for the given month
    const totalTasksByUserForMonth = data.taskTrendData.datasets
      .filter((dataset) => dataset.label !== 'Average') // Exclude "Average"
      .map((dataset) => dataset.data[monthIndex]); // Get data for the specific month

    // Create the pie chart
    new Chart(canvas, {
      type: 'pie', // Use 'pie' or 'doughnut'
      data: {
        labels: data.taskTrendData.datasets
          .filter((dataset) => dataset.label !== 'Average')
          .map((dataset) => dataset.label), // ["User 1", "User 2", "User 3"]
        datasets: [
          {
            data: totalTasksByUserForMonth, // [200, 150, 300] for example
            backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw} tasks`,
            },
          },
        },
      },
    });
  } else {
    console.error(`Canvas with ID "${canvasId}" not found.`);
  }
}

// Create pie charts for each month
createPieChart('pieChartSeptember', 0); // September (index 0)
createPieChart('pieChartOctober', 1);  // October (index 1)
createPieChart('pieChartNovember', 2); // November (index 2)
createPieChart('pieChartDecember', 3); // December (index 3)










    })
    .catch((error) => console.error('Error loading data:', error));
