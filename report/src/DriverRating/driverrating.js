import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Rating, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const DriverRatingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [driverRatings, setDriverRatings] = useState([
    { id: 1, name: "Driver 1", rating: 4 },
    { id: 2, name: "Driver 2", rating: 3 },
    // Add more driver ratings as needed
  ]);

  return (
    <Box m="20px">
      <Header title="Driver Ratings" subtitle="See how drivers are rated" />

      <Box display="flex" justifyContent="space-between">
        {/* DRIVER RATING LIST */}
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
          <Typography variant="h5">Driver Ratings</Typography>
          <List>
            {driverRatings.map((driver) => (
              <ListItem key={driver.id} sx={{ margin: "10px 0", borderRadius: "2px" }}>
                <ListItemText primary={driver.name} secondary={<Rating value={driver.rating} readOnly />} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* OPTIONAL: ADD MORE DETAILS ABOUT EACH DRIVER */}
        {/* You can add more details about each driver, such as recent trips, etc., in this section */}
        {/* <Box flex="1 1 60%" ml="15px">
          {/* Additional driver details go here */}
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default DriverRatingPage;
