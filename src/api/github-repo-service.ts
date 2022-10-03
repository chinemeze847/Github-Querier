const { Octokit } = require("@octokit/rest");

//Instantiates the octokit object that will be used
//to make calls to the github API
const octokit = new Octokit({
    auth: "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",
    baseUrl: 'https://api.github.com',

    log: {
        debug: () => { },
        info: () => { },
        warn: console.warn,
        error: console.error
    },
    request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
    }
})

//This function gets repo information
export const getRepoInfo = async (owner: string, repo: string) => {
    try {

        //gets all the gazers of the repo
        //using pagination because the normal funtion returns maximum of 30 per page
        const gazers = await octokit
            .paginate(octokit.rest.activity.listStargazersForRepo, {
                owner,
                repo
            })
            .then((stargazers: {}) => {
                return stargazers;
            });

        //This gets the destails of the specified repository
        const repoDetails = await octokit.rest.repos.get({
            owner,
            repo,
        });
        //This extracts the description from the repo details
        const { data: { description } } = repoDetails;

        //returns a Json object of required field values
        return { repo_name: repo, description, num_of_stars: gazers.length };
    } catch (error) {
        throw error;
    }
}

//This function get all the repos belonging to a specific user
export const getAllRepos = async (username: string) => {
    try {
        //to store the repo names
        const repoNames: {}[] = [];
        const repoDetails: {}[] = [];

        //get all the repos 
        const ListOfAllRepos = await octokit.rest.repos.listForUser({
            username
        });
        //extract the data field within the list of repos
        const { data } = ListOfAllRepos;

        //loop through the data field to obtain the names of each repo
        for (const repo of data) {
            const { name } = repo;
            repoNames.push(name);
        }

        //loop through the names so as to pass them to the getRepoInfo funtion
        //which will in turn retrieve the required details
        for (const name of repoNames) {
            const repoDetail = await getRepoInfo(username, name as string);
            repoDetails.push(repoDetail);
        }

        //return the details
        return repoDetails;

    } catch (error) {
        throw error;
    }
}


//Given a number of repos belonging to a specific user
//it returns the details of the given repos
export const getSpecificRepos = async (owner: string, repos: string[]) => {
    try {
        //stores repo details
        const repoDetails: {}[] = [];

        //loop through each repo detail
        //which will in turn retrieve the required details
        for (const repo of repos) {
            const repoDetail = await getRepoInfo(owner, repo as string);
            repoDetails.push(repoDetail);
        }

        //return the details
        return repoDetails;

    } catch (error) {
        throw error;
    }
}

