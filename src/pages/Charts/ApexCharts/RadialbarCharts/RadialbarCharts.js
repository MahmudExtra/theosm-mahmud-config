import React from 'react';
import ReactApexChart from "react-apexcharts";

// Import Images
import comingSoon from "../../../../assets/images/comingsoon.png";
import Img4 from "../../../../assets/images/small/img-4.jpg";


function getChartColorsArray(colors) {
    colors = JSON.parse(colors);
    return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color.indexOf("#") !== -1)
                color = color.replace(" ", "");
            if (color) return color;
            else return newValue;
        } else {
            var val = value.split(',');
            if (val.length === 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
  }


const SimpleRadialbar = ({dataColors,value=70}) => {
   
    var chartRadialbarBasicColors = getChartColorsArray(dataColors);
    const series=[value]
    var options = {
        
        chart: {
            height: 328,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        labels: ['wind_direction'],
        colors: chartRadialbarBasicColors
    };
  return (
    <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={298.9}
        />
  )
}

const MultipleRadialbar = ({dataColors}) => {
    var chartRadialbarMultipleColors = getChartColorsArray(dataColors);
    const series = [44, 55, 67, 83]
    var options = {        
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: chartRadialbarMultipleColors
    };
  return (
    <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
  )
}

const CircleRadialbar = ({dataColors}) => {
    var chartRadialbarCircleColors = getChartColorsArray(dataColors);
    const series=[76, 67, 61, 55]
    var options = {
        
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: chartRadialbarCircleColors,
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 160,
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };
  return (
    <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
  )
}

const GradientCircleRadialbar = ({dataColors, seriesData = 0, label="TEMP", id}) => {
    var chartRadialbarGradientColors = getChartColorsArray(dataColors);
    const series = [seriesData];
    var options = {
      chart: {
        id: "radialBar",
        height: 350,
        type: "radialBar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: id === "battery-temp" ? -135 : 0, // -135
          endAngle: id === "battery-temp" ? 137 : 360, // 137
          hollow: {
            margin: 0,
            size: "70%",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
          },
          track: {
            strokeWidth: "85%",
            margin: 5, // margin is in pixels
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: id === "battery-temp" ? -10 : -3,
              show: true,
              color: id === "battery-temp" ? "#888" : "#6691e7",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                const Addons = id === "battery-temp" ? " ??C" : " %";
                const temp = val.toString() + Addons;
                return temp;
              },
              color: id === "battery-temp" ? "#13c56b" : "#888",
              fontSize: id === "battery-temp" ? "32px" : "16px",
              show: true,
            },
          },
        },
      },
      fill:
        id === "battery-temp" ? 
        {
            type: "gradient",
            gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: chartRadialbarGradientColors,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            },
        } : 
        {
            type: "solid",
            colors: chartRadialbarGradientColors,
        },
      stroke: {
        lineCap: "round",
      },
      labels: [label],
    };
  return (
    <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
  )
}

const StrokedCircleRadial = ({dataColors}) => {
    var chartStorkeRadialbarColors = getChartColorsArray(dataColors);
    const series = [67]
    var options = {
        
        chart: {
            height: 326,
            type: 'radialBar',
            offsetY: -10
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Median Ratio'],
        colors: chartStorkeRadialbarColors
    };
    return (
        <ReactApexChart
                series={series}
                options={options}
                type="radialBar"
                height={328.7}
            />
      )
}

const SemiCircularRadial = ({dataColors}) => {
    var chartStorkeRadialbarColors = getChartColorsArray(dataColors);
    const series = [76]
    var options = {        
        chart: {
            type: 'radialBar',
            height: 350,
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
        colors: chartStorkeRadialbarColors
    };
    return (
    <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
    )
}

const ImageRadialbar = () => {
    const series = [67];
    var options = {
        chart: {
            height: 315,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: '65%',
                    image: comingSoon,
                    imageWidth: 56,
                    imageHeight: 56,
                    imageClipped: false
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 65,
                        fontSize: '22px'
                    }
                }
            }
        },
        fill: {
            type: 'image',
            image: {
                src: [Img4],
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Volatility'],
    };
    return (
        <ReactApexChart
            series={series}
            options={options}
            type="radialBar"
            height={328.7}
        />
    );
};

export {SimpleRadialbar,MultipleRadialbar,CircleRadialbar,GradientCircleRadialbar,StrokedCircleRadial,SemiCircularRadial, ImageRadialbar}