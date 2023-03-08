import {
  Box,
  Grid,
} from "@chakra-ui/react"
import { ScrollToId } from "../utils/ScrollToId"

// Components
import { HeroAbout } from "../components/about/HeroAbout"

export const AboutPage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="80vh">
      <HeroAbout />
    </Grid>
    <ScrollToId />
  </Box>
)