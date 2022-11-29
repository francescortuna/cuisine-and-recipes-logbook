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

  if (!name) {
    alert("Please enter recipe name");
  }

  if (!ingredients) {
    alert("Please enter recipe ingredients");
  }

  if (!time) {
    alert("Please enter recipe time");
  }

  if (!instructions) {
    alert("Please enter recipe instructions");
  }

  if (name && ingredients && time && instructions) {
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify({
        name,
        ingredients,
        time,
        instructions,
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
