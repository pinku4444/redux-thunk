import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const User = (props) => {

    const { loading, error, users } = props.data;
    if (loading) {
        return (
            <h4>Loading ....</h4>
        )
    } else if (error !== null) {
        return (
            <h4>{error}</h4>
        )
    } else {
        return (
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="row">
                                {user.id}
                            </TableCell>
                            <TableCell align="right">{user.name}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }

};

export default User;