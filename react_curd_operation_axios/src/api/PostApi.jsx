import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method sameer
export const getPost = () => {
  return api.get("/posts");
};

// delete method sameer
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//post method sameer
export const postData = (post) => {
  return api.post("/posts", post);
};

//put method sameer
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};