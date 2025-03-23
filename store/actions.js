import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get("/search.php?s=" + keyword).then((response) => {
    commit("setSearchMeals", response.data.meals);
  });
}

export function searchMealByLetters({ commit }, letter) {
  console.log("letter", letter);
  axiosClient.get("/search.php?f=" + letter).then((response) => {
    commit("setMealByLetters", response.data.meals);
  });
}
export function searchMealByIngrdients({ commit }, ingredient) {
  axiosClient.get("/filter.php?i=" + ingredient).then((response) => {
    commit("setMealByIngredients", response.data.meals);
  });
}
