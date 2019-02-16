import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: '#3f51b5',
      color: theme.palette.common.white,
      position: "sticky",
      top: 0,
      fontSize: 18
    },
    body: {
      fontSize: 16,            
    }    
  }))(TableCell);

const styles = theme => ({
   root: {
    height: '52vh',
    width: '95%',
    marginTop: '0%',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    overflowX: 'auto',    
    fontSize: 16
  },
   table: {
    minWidth: 700  
  },
});

function SimpleTable(props) {
  const state = {
    checked: true
  };
  const { classes, coreTests } = props;
  console.log(coreTests);

  const coreList = coreTests && coreTests.map((row) => (
    <TableRow key={row.id}>
      <CustomTableCell component="th" scope="row">
        <Checkbox checked={state.checked} color="primary"/>
      </CustomTableCell>
      <CustomTableCell align="left">{row.id}</CustomTableCell>
      <CustomTableCell align="left">{row.name}</CustomTableCell>
      <CustomTableCell align="left">{row.service}</CustomTableCell>      
    </TableRow>
  ))
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="left">Checked</CustomTableCell>
            <CustomTableCell align="left">No.</CustomTableCell>
            <CustomTableCell align="left">Function</CustomTableCell>
            <CustomTableCell align="left">Service</CustomTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {coreList}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);