import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Linechart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: ['2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015', '2016', '2017', '2018','2019','2020','2021','2022','2023'],
                datasets: [
                    {
                        label: 'Carbon Emissions',
                        data: [28.62,29.59,30.61,31.5,32.04,31.49,33.31,33.44,34.94,35.92,35.47,35.46,
                        36.03,36.77,37.04,35.01,36.82,37.15,37.5],
                        fill: false,
                        borderColor: '#12372A',
                        borderWidth: 2
                    }
                ]
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0' }}>
        <div style={{ width: '590px', height: '590px' }}>
              
            <canvas ref={chartRef} />

        </div>  
      </div>
    );
}

export default Linechart;
