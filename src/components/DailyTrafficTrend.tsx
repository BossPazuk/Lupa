// src/components/DailyTrafficTrend.tsx
import React from 'react';
import { VStack, Box } from '@chakra-ui/react';
import TitleBar from './TitleBar';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the necessary chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DailyTrafficTrend: React.FC = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: 'Visits',
        data: [120, 190, 300, 250, 220, 340, 230],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4
      },
      {
        label: 'Views',
        data: [140, 210, 320, 260, 240, 360, 250],
        fill: true,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,  // Corrected type here
      },
      title: {
        display: false,
        text: 'Daily Traffic Trend',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Day of the Week'
        }
      }
    }
  };

  return (
    <VStack align="stretch" p={4} borderWidth="1px" borderRadius="lg" bg="white" flex="1">
      <TitleBar title="Daily Traffic Trend" />
      <Box flex="1" p={2}>
        <Line data={data} options={options} />
      </Box>
    </VStack>
  );
};

export default DailyTrafficTrend;