import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const otherSetting = {
  height: 300,
  yAxis: [{ label: 'Subscription ', width: 60 }],
  grid: { horizontal: true },
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    users: 21,
    month: 'January',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    users: 28,
    month: 'February',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    users: 41,
    month: 'March',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    users: 73,
    month: 'April',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    users: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    users: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    users: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    users: 249,
    month: 'August',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    users: 131,
    month: 'September',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    users: 55,
    month: 'October',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    users: 48,
    month: 'November',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    users: 25,
    month: 'December',
  },
];

const valueFormatter = (value) => `${value}user`;

function Bar() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          valueFormatter: (month, context) =>
            context.location === 'tick'
              ? `${month.slice(0, 3)} \n2023`
              : `${month} 2023`,
          height: 40,
        },
      ]}
      series={[{ dataKey: 'users', label: 'Monthly Subscription', valueFormatter }]}
      {...otherSetting}
    />
  );
}

export default Bar;