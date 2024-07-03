import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const ServiceIntro = ({ imgSrc, title, desc_1, desc_2 }) => {
  // Use a custom hook or a condition to determine if it's a mobile view
  const isMobile = window.innerWidth < 640; // Example breakpoint for 'sm'

  return (
    <div className="flex flex-col sm:flex-row mb-8">
      <div className="w-full sm:w-1/2 flex justify-center items-center p-8">
        <img src={imgSrc} alt="Service image" className="w-3/4 h-auto" />
      </div>
      <div className="w-full sm:w-1/2 p-8">
        <h4 className="text-left text-3xl">{title}</h4>
        <p className="text-left mt-5 text-lg">{desc_1}</p>
        {/* Assuming desc_2 is used similarly */}
      </div>
    </div>
  );
};

export default ServiceIntro;
