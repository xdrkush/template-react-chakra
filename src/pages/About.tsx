import {
  Box,
  Grid,
} from "@chakra-ui/react"
import { ScrollToId } from "../utils/ScrollToId"

// Components
import { HeroAbout } from "../components/about/HeroAbout"
import { RoadMapProject } from "../components/about/RoadMapProject"
import { ListCardProject } from "../components/about/ListCardProject"

export const AboutPage = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="80vh">
      <HeroAbout />
    </Grid>
    <Grid minH="50vh">
      <RoadMapProject />
    </Grid>
    <Grid minH="90vh">
      <ListCardProject />
    </Grid>
    <ScrollToId />
  </Box>
)