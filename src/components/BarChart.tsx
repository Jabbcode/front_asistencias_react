import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type TProps = {
  data: any
}

const BarChartUI = ({ data }: TProps) => {
  return (
    <ResponsiveContainer height={480} style={{ display: "flex", justifyContent: "center" }}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="green" />} />
      </BarChart>
    </ResponsiveContainer>

  )
};
export default BarChartUI;
