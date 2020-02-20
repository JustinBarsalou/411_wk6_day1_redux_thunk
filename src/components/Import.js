import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core'
// import { TableCell } from '@material-ui/core';

const Import = (props) => {
    // fill out this component

    return (
        <div> 
            <p>Import Component</p>
            <Button variant='contained' color='primary' onClick={props.fetchMakes}>Import</Button>
            <Table>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Make&nbsp;</TableCell>
                <TableCell align="right">Actions&nbsp;</TableCell>
 
                <TableBody>
                    {props.makes.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.MakeId}</TableCell>
                            <TableCell align="right">{row.MakeName}</TableCell>
                            {/* <TableCell align="right">{row.}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>

            </Table>


        </div>
    )
}

export default Import