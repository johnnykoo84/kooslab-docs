import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const ServiceIntro = ({ imgSrc, title, desc_1, desc_2 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={1}
      direction={isMobile ? "column" : "row"}
      style={{ marginBottom: "2em" }}
    >
      <Grid item xs={12} sm={6}>
        <img
          src={imgSrc}
          alt="Service image"
          style={{ width: "70%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" align="left">
          {title}
        </Typography>
        <Typography
          variant="body1"
          align="left"
          style={{ marginTop: "1.2em", fontSize: "1.4em" }}
        >
          {desc_1}
        </Typography>
        <Typography
          variant="body1"
          align="left"
          style={{ marginTop: "0.5em", fontSize: "1.4em" }}
        >
          {desc_2}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServiceIntro;
