const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWJlMzI3YmM5OTU0ODNmNmQyZDQyNmM3MDI0MmE4OSIsInN1YiI6IjYzYzMyYWEwNzM5MGMwMDBkNTQ4YzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0Zcx5rJ3vfC8ZaYf5MtU6-6TE_cvD5Vl9DZAKcIJh0",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

export default get;

// Authorization: "4f5f43495afcc67e9553f6c684a82f84",
// "Content-Type": "application/json;charset=utf-8",
//3.16.27
