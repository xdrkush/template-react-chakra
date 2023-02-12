import {
  Box, Grid
} from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import { fetchDataGithub } from "../stores/reducers/GithubReducers";

// Components
import { ListCardServices } from "../components/services/ListCardServices"
import { PresentationServices } from "../components/services/PresentationServices"
import { ListCardService } from "../components/services/ListCardService"

interface GH {
  github: {
    repos: object[];
  }
}
  
export const ServicesPage = () => {
  const dispatch = useDispatch();
  const reposGH = useSelector((state: any) => state.github.repos);

  useEffect(() => {
    dispatch(fetchDataGithub());
  }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh">
        <PresentationServices />
      </Grid>
      <Grid minH="50vh">
        <ListCardService />
      </Grid>
      <Grid minH="50vh">
        {reposGH.length >= 0 && (<ListCardServices list={reposGH} />)}
      </Grid>
    </Box>
  )
}