// import { Helmet } from "react-helmet-async";

import { Link as RouterLink } from "react-router-dom";
// @mui
// import styled from "@emotion/styled";

import { Button, Typography, Container, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import imagenError from "../../assets/illustration_404.svg";
// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Error404() {
  //   const StyledContent = styled("div")({
  //     maxWidth: 480,
  //     margin: "auto",
  //     minHeight: "100vh",
  //     display: "flex",
  //     justifyContent: "center",
  //     flexDirection: "column",
  //     // padding: spacing(12, 0),
  //   });
  return (
    <>
      {/* <Helmet>
        <title> 404 Page Not Found | Minimal UI </title>
      </Helmet> */}

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            Lo siento, Pagina no encontrada!
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Lo sentimos, no pudimos encontrar la página que estás buscando.
            ¿Quizás has mal escrito la URL? Asegúrese de verificar su
            ortografía.
          </Typography>

          <Box
            component="img"
            src={imagenError}
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Ir al Inicio
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
