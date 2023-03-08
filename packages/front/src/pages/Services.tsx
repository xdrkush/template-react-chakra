import {
  Box, Grid
} from "@chakra-ui/react"

// Components
import { PresentationServices } from "../components/services/PresentationServices"
import { ListCardService } from "../components/services/ListCardService"
  
export const ServicesPage = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh">
        <PresentationServices />
      </Grid>
      <Grid minH="50vh">
        <ListCardService />
      </Grid>
    </Box>
  )
}