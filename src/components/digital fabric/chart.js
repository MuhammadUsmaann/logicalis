import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    scales: {
        y: {
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value) {
                    return  value + "%";
                },
            }
        },
        x:{
            grid:{
                display:false
            }
        }
    },
    // responsive: true,
    // maintainAspectRatio:true,
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
      labels:{
        display:false
      }
    },
    
  },
};

const labels = ['Jan 2022', 'Feb  2022', 'Mar  2022', 'Apr  2022', 'May  2022', 'Jun  2022', 'Jul  2022'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[6,6,23,4,8,23,3.,25,100],
      backgroundColor: '#8DD4EC',
    }
  ],
};

const  Barcharts= ()=> {
  return <Bar options={options} data={data} />;
}
export default Barcharts;