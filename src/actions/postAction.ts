import { FETCH_POSTS } from "./types";

export const fetchPost = () => (dispatch: any) => {
  console.log("fetching data");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      console.log(posts);
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    });
};
