import  { useEffect } from 'react';
import Chart from 'chart.js/auto';

const Skills = () => {
  useEffect(() => {
    const canvas = document.getElementById('skillsChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        datasets: [{
          label: 'Proficiency',
          data: [90, 85, 80, 75, 70], // Update with your proficiency values
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
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
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <canvas id="skillsChart" width="400" height="200"></canvas>
    </div>
  );
};

export default Skills;
