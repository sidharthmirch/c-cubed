import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import fetch from "node-fetch";
globalThis.fetch = fetch;
import { getSymbols } from "./getSymbols.js";
import { getColor } from "./getColor.js";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.CC_KEY;

export const getChart = async (currencyA, currencyB) => {
  const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 500, height: 200 });
  const apiData = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${currencyA}&tsym=${currencyB}&limit=365&api_key=${API_KEY}`
    );
    const json = await response.json();
    const data = json.Data.Data;
    const times = data.map((obj) => obj.time);
    const prices = data.map((obj) => obj.high);
    return {
      times,
      prices,
    };
  };
  let color = "rgba(242, 169, 0, 1)";
  if (getColor(currencyA.toUpperCase()) != undefined)
    color = getColor(currencyA.toUpperCase());
  const { times, prices } = await apiData();
  const chart = (async () => {
    const configuration = {
      type: "line",
      data: {
        labels: times,
        datasets: [
          {
            label: getSymbols(currencyA, currencyB)[0],
            data: prices,
            borderColor: color,
            borderJoinStyle: "round",
            borderCapStyle: "round",
            borderWidth: 3,
            pointRadius: 0,
            pointHitRadius: 10,
            lineTension: 0.2,
          },
        ],
      },

      options: {
        legend: {
          display: false,
        },

        scales: {
          xAxes: [
            {
              display: true,
              type: "time",
              time: {
                parser: (t) => {
                  return new Date(t * 1000);
                },
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },

        tooltips: {
          callbacks: {
            title: function () {},
          },
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: "nearest",
          caretSize: 10,
          backgroundColor: "rgba(255,255,255,.9)",
          bodyFontSize: 15,
          bodyFontColor: "#303030",
        },
      },
    };
    const image = await chartJSNodeCanvas.renderToBuffer(configuration);
    return image;
  })();
  return chart;
};
