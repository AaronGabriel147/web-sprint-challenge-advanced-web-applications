import { axiosWithAuth } from "../components/axiosWithAuth";



// * [ ] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.

//_____________________________________

// * **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. **This endpoint can only be accessed by an authenticated user.**

// * **[GET]** to `http://localhost:5000/api/articles/:id`: returns a single article with the id. **This endpoint can only be accessed by an authenticated user.**

// * **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

// * **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**



// MIGHT BE A FETCHER? Instructions are super vague and I do not remember this part!!@#!@!@!@!@
const articleService = ()=> {

    return axiosWithAuth()
    .get('/articles')
    .then((res) => {
        // console.log("$$$ RES =", res);
        return(res.data)
    })
    .catch((err) => {console.log(err);
    })
}



export default articleService;



//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.