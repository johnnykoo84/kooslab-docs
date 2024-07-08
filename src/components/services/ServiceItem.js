import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const ServiceIntro = ({ imgSrc, title, desc_1, desc_2 }) => {
  return (
    <div className="flex flex-col sm:flex-row mb-8">
      <div className="w-full sm:w-1/3 flex justify-center items-center p-4">
        <img
          src={imgSrc}
          alt="Service image"
          className="w-1/2 sm:w-2/ min-w-64 h-auto"
        />
      </div>
      <div className="w-full sm:w-2/3 p-8">
        <h4 className="text-left text-3xl">{title}</h4>
        <p className="text-left mt-5 text-lg">{desc_1}</p>
        <p className="text-left mt-5 text-lg">{desc_2}</p>
      </div>
    </div>
  );
};

export default ServiceIntro;
