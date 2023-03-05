import {
  Box,
  Grid,
} from "@chakra-ui/react"

import { FormContact } from "../components/contact/FormContact"

export const ContactPage = () => (
  <Box fontSize="xl">
    <Grid minH="90vh">
      <FormContact />
    </Grid>
  </Box>
)
