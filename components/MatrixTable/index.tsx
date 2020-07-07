import React, { useState, useEffect } from 'react';
import classnames from 'classnames'
import { useContext } from 'react'
import Axios from "axios";
import { MatrixTableContext, MatrixTableContextProvider } from './context'

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

type Props = {
  initialMatrix?: import('../../types').Matrix
} & import('react').HTMLAttributes<HTMLDivElement>

/**
 * Add 4 buttons: 
 * - Cancel to reset the matrix to how it was before changing the values (only when in edit mode)
 * - Edit to make the fields editable (only when not in edit mode)
 * - Clear to completely clear the table
 * - Save to save the table
 * @param param0 
 */
const MatrixTable: import('react').FC<Omit<Props, 'initialMatrix'>> = ({ className, children, ...props }) => {
  // State ------------------------------------------------------------------- //
  const [{ matrix }, dispatch] = useContext(MatrixTableContext)
  const [editRow, setEditRow] = useState('0')
  const [lite, setLite] = useState(0)
  const [standard, setStandard] = useState(0)
  const [unlimited, setUnlimited] = useState(0)

  const handleClickCreateDB = async () => {
    const response = await Axios.post("http://localhost:3000/api/save-pricing", {data: matrix})
    console.log('response ---> ', response)
  }

  const handleClickEdit = async (row) => {
    setEditRow(row);
    setLite(matrix[row].lite)
    setStandard(matrix[row].standard)
    setUnlimited(matrix[row].unlimited)
  }

  const handleClickClear = async () => {
    dispatch({
      type: 'CLEAR',
      payload: matrix
    })
  }

  const handleClickSave = async (row) => {
    matrix[row] = {lite: lite, standard: standard, unlimited: unlimited}
    dispatch({
      type: 'CHANGE',
      payload: {...matrix}
    })
    setEditRow('0')
  }
  
  return (
    <div className={classnames(['container', className])} {...props}>
      <Button variant="outlined" onClick={() => handleClickCreateDB()}> Create </Button>
      <Button style={{margin: '0px 30px'}} variant="outlined" onClick={() => handleClickClear()}> Clear </Button>
      <br></br>
      <br></br>
      <TableContainer component={Paper}>
        <Table style={{minWidth: '700px'}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">lite</StyledTableCell>
              <StyledTableCell align="center">standard</StyledTableCell>
              <StyledTableCell align="center">unlimited</StyledTableCell>
              <StyledTableCell align="center">action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(matrix).map((row) => (
              <StyledTableRow key={row}>
                <StyledTableCell align="center"> {row} </StyledTableCell>
                {row != editRow ? <StyledTableCell align="center"> {matrix[row].lite} </StyledTableCell>:
                  <StyledTableCell><TextField value={lite} onChange={(e) => setLite(parseInt(e.target.value))} label="lite" /></StyledTableCell>
                }
                {row != editRow ? <StyledTableCell align="center"> {matrix[row].standard} </StyledTableCell>:
                  <StyledTableCell><TextField value={standard} onChange={(e) => setStandard(parseInt(e.target.value))} label="standard" /></StyledTableCell>
                }
                {row != editRow ? <StyledTableCell align="center"> {matrix[row].unlimited} </StyledTableCell>:
                  <StyledTableCell><TextField value={unlimited} onChange={(e) => setUnlimited(parseInt(e.target.value))} label="unlimited" /></StyledTableCell>
                }
                <StyledTableCell align="center">
                  {row != editRow ? <Button variant="outlined" onClick={() => handleClickEdit(row)}> Edit </Button>:
                    <>
                      <Button variant="outlined" onClick={() => handleClickSave(row)}> Save </Button>
                      <Button variant="outlined" onClick={() => setEditRow('0')}> Cancel </Button>
                    </>
                  }
                  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <style jsx>{`
        .container {
          
        }
      `}</style>
    </div>
  )
}

const MatrixTableWithContext: import('react').FC<Props> = ({ initialMatrix, ...props }) => {
  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)
  return (
    <MatrixTableContextProvider initialMatrix={initialMatrix}>
      <MatrixTable {...props} />
    </MatrixTableContextProvider>
  )
}

export default MatrixTableWithContext
