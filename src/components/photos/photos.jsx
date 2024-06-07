import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
  CardActions,
  Button,
  Pagination,
} from "@mui/material";
import "./photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 4;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=20")
      .then((response) => {
        setPhotos(response.data);
      });
  }, []);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (event, value) => setCurrentPage(value);

  const pageCount = Math.ceil(photos.length / photosPerPage);

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        PHOTOS
      </Typography>
      <Card>
        <CardHeader
          title={<Typography variant="h4" align="center">Photos</Typography>}
        />
        <CardContent>
          <Grid container spacing={2}>
            {currentPhotos.map((el) => (
              <Grid item xs={12} sm={6} md={4} key={el.id}>
                <Card className="foto" sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={el.thumbnailUrl}
                    alt={el.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={paginate}
            color="primary"
          />
        </CardActions>
      </Card>
    </Container>
  );
};

export default Photos;
