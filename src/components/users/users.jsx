import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
  Pagination,
} from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (event, value) => setCurrentPage(value);

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        USERS
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>T/R</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address Zipcode</TableCell>
              <TableCell>Address Suite</TableCell>
              <TableCell>Address City</TableCell>
              <TableCell>Address Street</TableCell>
              <TableCell>Address Geo Lat</TableCell>
              <TableCell>Address Geo Lng</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Company CatchPhrase</TableCell>
              <TableCell>Company BS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUsers.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.address.zipcode}</TableCell>
                <TableCell>{item.address.suite}</TableCell>
                <TableCell>{item.address.city}</TableCell>
                <TableCell>{item.address.street}</TableCell>
                <TableCell>{item.address.geo.lat}</TableCell>
                <TableCell>{item.address.geo.lng}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.website}</TableCell>
                <TableCell>{item.company.name}</TableCell>
                <TableCell>{item.company.catchPhrase}</TableCell>
                <TableCell>{item.company.bs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Pagination
          count={Math.ceil(users.length / usersPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default Users;
