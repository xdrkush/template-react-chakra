import {
    Box,
    Grid,
  } from "@chakra-ui/react"
  
  import { HeroService } from "../components/services/HeroService"
  import { InformationService } from "../components/services/InformationService"

  export const ServicePage = () => (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="60vh">
        <HeroService />
      </Grid>
      <Grid minH="60vh">
        <InformationService />
      </Grid>
    </Box>
  )
  