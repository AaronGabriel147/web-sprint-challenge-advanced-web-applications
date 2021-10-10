import { axiosWithAuth } from "../components/axiosWithAuth";



// * [ ] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.

//_____________________________________

// * **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. 
//     This endpoint can only be accessed by an authenticated user.**


// Was working, but stopped, not sure why.

const articleService = () => {

    return (
        axiosWithAuth()
            .get('/articles')
            .then((res) => {
                return (res.data)
                // console.log("$$$ articleService RES =", res);
            })
            .catch((err) => {
                console.log(err);
            })
    )
}



export default articleService;



//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.