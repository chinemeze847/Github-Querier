import { Request, Response } from 'express';
import { getRepoInfo, getAllRepos } from './github-repo-service';

//This gets the details of a specific repository
export const getRepoDetails = async (req: Request, res: Response) => {
  try {
    //passess the owner and repo name to retrieve the owner, num of stars and description of repo
    const repoInfo = await getRepoInfo(req.params['owner'], req.params['repo_name']);

    //responds to the user
    res.send(repoInfo);
  } catch (error) {
    //This error is sent if either owner name or repo name is not correct
    return res.status(404)
      .json(
        {
          message: "Not Found",
          status: 404
        })
  }
};

//This gets all the repositories of a specific user with it's details
export const getAllRepoDetails = async (req: Request, res: Response) => {
  try {
    //passes the owner parameter to the getAllRepos method
    //to retrieve all the repos belonging to that user
    const AllRepos = await getAllRepos(req.params['owner']);

    //This sends the response to user
    res.send(AllRepos);
  } catch (error) {
    //This is the error return by api if username is not found
    return res.status(404)
      .json(
        {
          message: "Username Not Found",
          status: 404
        })
  };
};