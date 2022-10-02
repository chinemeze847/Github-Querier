import { Router } from 'express';
import { getRepoDetails, getAllRepoDetails, getSpecificRepoDetails } from './api/github-repo-controller';

const router = Router();

//This routes to the controller that gets the details of 
//a specific repo in a github account
router.route('/:owner/:repo_name').get(getRepoDetails);

//This routes to the controller that gets details of repos
//within particular user account
router.route('/:owner').get(getAllRepoDetails)

router.route('/:owner/repos').get(getSpecificRepoDetails);

export default router;