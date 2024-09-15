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
                labels: ['2004','','','','2008','','','','2012','','','','2016','','','','2020','','','','2023'], // Adjusted spacing
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
            },
            options: {
                maintainAspectRatio: false, // Disable aspect ratio to control height
                responsive: true,
                scales: {
                    x: {
                        ticks: {
                            autoSkip: false, // Prevents skipping of labels
                            maxRotation: 0, // No rotation
                            minRotation: 0 // No rotation
                        }
                    }
                },
                layout: {
                    padding: {
                        bottom: 0 // Adjust padding as needed
                    }
                }
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
            <div style={{ width: '700px', height: '400px' }}> {/* Adjust height as needed */}
                <canvas ref={chartRef} />
            </div>
        </div>
    );
}

export default Linechart;
