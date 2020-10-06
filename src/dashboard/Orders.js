import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, total, following, requested, time) {
  return { id, name, total, following, requested, time };
}

const createRow=(data)=>{
const Row=[]
console.log(data)
data&&Object.keys(data).map(account=>{
console.log(data[account])
let total=data[account].length
let following=data[account].filter(item=>item.log==="following").length
let requested=data[account].filter(item=>item.log==="requested").length
let enson=data[account][total-1].time
console.log(enson)
Row.push(createData(account,account,total,following,requested,new Date(enson).toUTCString()))

})

return Row

}




function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders({data}) {
  const classes = useStyles();
  const rows=createRow(data)
  console.log(rows)
  return (
    <React.Fragment>
      <Title>HESAPLAR</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Hesap ismi</TableCell>
            <TableCell>Toplam request</TableCell>
            <TableCell>takip edilen</TableCell>
            <TableCell>takip isteği atılan</TableCell>
            <TableCell align="right">En son ne zaman atıldı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.following}</TableCell>
              <TableCell>{row.requested}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}