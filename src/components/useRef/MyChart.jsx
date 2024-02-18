import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function MyChart() {
  // useRef를 사용하여 차트 인스턴스를 저장합니다.
  const chartRef = useRef(null);

  useEffect(() => {
    // 차트를 그리기 위해 차트 인스턴스를 생성합니다.
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }],
      },
    });

    // 차트 인스턴스를 ref에 할당합니다.
    chartRef.current = myChart;

    // 컴포넌트가 언마운트될 때 차트를 파괴합니다.
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      {/* 차트를 렌더링할 캔버스 엘리먼트에 ref를 할당합니다. */}
      <canvas ref={chartRef}></canvas>
    </div>
  );
}