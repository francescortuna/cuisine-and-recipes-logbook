const addRecipeFormHandler = async (event) => {
  event.preventDefault();

  //collect values from the form
  const cuisine_id = document.querySelector("#cuisine-name").value.trim();
  const name = document.querySelector("#recipe-name").value.trim();
  const ingredients = document
    .querySelector("#recipe-ingredients")
    .value.trim();
  const time = document.querySelector("#recipe-time").value.trim();
  const instructions = document
    .querySelector("#recipe-instructions")
    .value.trim();
  const user_id = document
    .querySelector("#recipe-name")
    .getAttribute("data-id");



  let filename;
  switch (parseInt(cuisine_id)) {
    case 1: //Mexican cuisine
      filename = "14-general-Mexican.jpg";
      break;
    case 2: //Italian cuisine
      filename = "15-General-italian.jpg";
      break;
    case 3: //Chinese cuisine
      filename = "13-general-Chinese.jpg";
      break;
    default: //Other cuisine
      filename = "16-general-food.jpg";
  }

  if (name && ingredients && time && instructions) {
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify({
        name,
        ingredients,
        time,
        instructions,
        filename,
        cuisine_id,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Recipe added successefully!");
      document.location.replace("/");
    } else {
      alert("failed to add recipe");
      //alert(response.statusText);
    }
  }
};

document
  .querySelector(".add-recipe-form")
  .addEventListener("submit", addRecipeFormHandler);
