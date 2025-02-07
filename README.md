# Task Tracker Visualization Tool

https://tanzeb9277.github.io/task-tracker-visualization/

This project is a **Task Tracker Visualization Tool** designed to provide actionable insights into task performance and trends. Built with Google Sheets, Google Apps Script, and web technologies, this tool offers dynamic visualizations, including multiple charts and metrics, to improve task management visibility and decision-making.

## Features

### 1. **Dynamic Visualizations**
- **Pie Charts**: Visualize user contributions across tasks on a monthly basis.
- **Line Charts**: Track trends in task handling time and overall performance.
- **Bar Charts**: Compare total time spent and tasks completed by different users.

### 2. **Custom Metrics**
- Tailor metrics to align with business goals, enabling personalized insights.
- Generate actionable visualizations for stakeholders.

### 3. **Interactive Dashboard**
- Filters for user-specific data and time periods.
- Dynamic updates of charts based on selected filters.

### 4. **Google Integration**
- Leverages **Google Sheets** and **Google Apps Script** for task tracking and automation.
- Integrates with **Google APIs** for seamless data handling and scalability.

### 5. **Scalable Design**
- Built with modular components, making it easy to extend or migrate to other platforms.

## Technologies Used

- **Frontend**: HTML, CSS (with Flexbox), JavaScript
- **Charting Library**: Chart.js
- **Backend Automation**: Google Apps Script
- **Data Storage**: Google Sheets
- **Hosting**: GitHub Pages

## Setup and Deployment

### Prerequisites
1. A GitHub account.
2. Basic knowledge of Git, JavaScript, and Google Apps Script.
3. Google Sheets API and Apps Script permissions.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/task-tracker-visualization.git
   ```

2. **Edit Data File**:
   Update `data.json` with task data or use the existing dummy data for visualization.

3. **Deploy on GitHub Pages**:
   - Push changes to the `main` branch.
   - Enable GitHub Pages under **Settings > Pages > Source**.

4. **Access the Live Site**:
   Navigate to the provided GitHub Pages URL to view the project.

## Project Structure

```
├── index.html        # Main HTML file
├── style.css         # Styles for the project
├── script.js         # JavaScript logic for charts and interactivity
├── data.json         # Task data for visualization
└── assets/           # Images and other assets
```

## How It Works

1. **Data Source**:
   - Task data is stored in `data.json`.
   - Google Sheets can be used as a backend for live data updates.

2. **Visualization**:
   - Chart.js dynamically renders charts based on the task data.
   - Interactive elements allow filtering and exploring data.

3. **Customization**:
   - Modify `data.json` for new task data.
   - Adjust chart configurations in `script.js`.

## Future Enhancements

1. **Heatmaps**:
   - Integrate heatmaps for finer data visualization.
2. **Advanced Filters**:
   - Add multi-dimensional filters for task types, users, and date ranges.
3. **Export Functionality**:
   - Enable exporting charts and reports as PDFs or images.
4. **Third-Party Integration**:
   - Connect to other tools like JIRA, Trello, or enterprise dashboards.



## About the Developer

This project was developed by Tanzeb Choudhury to demonstrate the power of task visualization in improving efficiency and decision-making. The tool highlights advanced integration of Google technologies and web development skills.

## License

This project is licensed under the MIT License. Feel free to use and adapt it for your needs.

---


