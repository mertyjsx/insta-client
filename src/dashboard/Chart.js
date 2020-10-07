import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const getTime=(date)=>{
console.log(new Date(date).getUTCHours())
    return `${new Date(date).getUTCHours()}:${new Date(date).getUTCMinutes()}`
}



const createTime=(datas)=>{
const data=[]
let i=0
let index=0
let sınır=0
if(datas.length<15){
sınır=datas.length
index=0
}else{
    sınır=15
    index=datas.length-16
}
console.log(datas.length)
console.log(index)
console.log(datas)

for(let i=index;i<datas.length;i++){
    console.log(datas[i].time)
data.push(createData(getTime(datas[i].time),i+1))
}
console.log(data)
return data


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
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              follow
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} activeDot />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}