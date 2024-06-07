import React, { useState } from "react";
import UserModal from "../modal";
import {
  Container,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const openModal = (index = null) => {
    setEditingIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingIndex(null);
  };

  const handleSaveCar = (newCar) => {
    if (editingIndex !== null) {
      const updatedCars = [...cars];
      updatedCars[editingIndex] = newCar;
      setCars(updatedCars);
    } else {
      setCars([...cars, newCar]);
    }
    closeModal();
  };

  const handleEditCar = (index) => {
    openModal(index);
  };

  const handleDeleteCar = (index) => {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
    closeModal();
  };

  return (
    <>
      <UserModal
        open={modalOpen}
        onClose={closeModal}
        car={editingIndex !== null ? cars[editingIndex] : null}
        onSave={handleSaveCar}
      />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          CARS
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
          <Button variant="contained" color="success" onClick={() => openModal()}>
            Add Car
          </Button>
          <TextField
            variant="outlined"
            placeholder="Search..."
            sx={{ width: '300px' }}
          />
        </Box>
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>T/R</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>{car.price}</TableCell>
                  <TableCell>{car.year}</TableCell>
                  <TableCell>{car.color}</TableCell>
                  <TableCell>{car.brand}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={2}>
                      <Button
                        variant="contained"
                        color="info"
                        onClick={() => handleEditCar(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteCar(index)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Cars;
