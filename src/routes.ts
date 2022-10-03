import { Router } from 'express';
import { getRepoDetails, getAllRepoDetails, getSpecificRepoDetails } from './api/github-repo-controller';

const router = Router();

//routes to an owner's specific details as specified by user
router.route('/:owner/repos').get(getSpecificRepoDetails);

//This routes to the controller that gets the details of 
//a specific repo in a github account
router.route('/:owner/:repo_name').get(getRepoDetails);

//This routes to the controller that gets details of repos
//within particular user account
router.route('/:owner').get(getAllRepoDetails);



export default router;