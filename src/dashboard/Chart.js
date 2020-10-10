import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer ,Tooltip} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const getTime=(date)=>{
console.log(new Date(date).getUTCHours())
    return `${(new Date(date).getHours())}:${new Date(date).getMinutes()}`
}



const createTime=(datas)=>{
let today=[]
let yesterday=[]
let twoday=[]
console.log(datas)
let date_Today=new Date().getUTCDay()
datas&&datas.map((item)=>{

if(new Date(item.time).getUTCDay()==date_Today)
today.push(item)

if(new Date(item.time).getUTCDay()==(date_Today-1))
yesterday.push(item)

if(new Date(item.time).getUTCDay()==(date_Today-2))
twoday.push(item)
})




return [createData("2 gün önce",twoday.length),createData("dün",yesterday.length),
createData("bugün",today.length)



]


}




export default function Chart({info}) {
  const theme = useTheme();
const data=info?createTime(info.data):[]
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
             <Tooltip/>
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis dataKey="amount" stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              follow
            </Label>
          </YAxis>
          <Line type="monotone"  dataKey="amount" stroke="#82ca9d" dot={true}  />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}