import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Completed', 'Remaining'],
  datasets: [
    {
      label: 'Goal Completion',
      data: [70, 30],
      backgroundColor: [
        'rgba(114, 149, 251, 1)',
        'rgba(45, 51, 99, 1)',
        
      ],
      borderColor: [
       'rgba(114, 149, 251, 1)',
       'rgba(45, 51, 99, 1)'
      ],
      borderWidth: 1,
       borderRadius: 15,
      // hoverOffset: 4,
    },
  ],
};

const options = {
  cutout: '70%',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    }
  },
};

const MyDoughnutChart = () => {
  const chartRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    const text = textRef.current;

    if (chart && text) {
      const updateTextPosition = () => {
        const { width, height } = chart.chartArea;
        text.style.left = `${width / 2}px`;
        text.style.top = `${height / 2}px`;
        text.style.transform = 'translate(-50%, -50%)';
      };

      updateTextPosition();
      window.addEventListener('resize', updateTextPosition);

      return () => {
        window.removeEventListener('resize', updateTextPosition);
      };
    }
  }, []);

  return (
    <div className='mx-auto' style={{ position: 'relative', width: '115px', height: '115px' }}>
      <Doughnut data={data} options={options} ref={chartRef} />
      <div ref={textRef} style={{ position: 'absolute', textAlign: 'center', color: '#ffffff' }}>
        <div style={{ fontSize: '1.3em', fontWeight: 'bold' }}>70%</div>
        <div style={{ fontSize: '0.5em', fontWeight: 'bold' }}>Goal <br/>Completed</div>
      </div>
    </div>
  );
};

export default MyDoughnutChart;
