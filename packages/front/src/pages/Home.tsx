import {
  Box,
  Grid,
} from "@chakra-ui/react"

import { HeroHome } from "../components/home/HeroHome"
import { PresentationHome } from "../components/home/PresentationHome"
import { ListCardServicesHome } from "../components/home/ListCardServicesHome"

export const HomePage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh">
      <HeroHome />
    </Grid>
    <Grid minH="60vh">
      <PresentationHome />
    </Grid>
    <Grid minH="60vh">
      <ListCardServicesHome />
    </Grid>
  </Box>
)
