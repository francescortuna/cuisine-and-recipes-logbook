const addRecipeReviewFormHandler = async (event) => {
  event.preventDefault();

  //collect values from the form
  const reviewer_name = document.querySelector("#reviewer-name").value.trim();
  const reviewer_score = document.querySelector("#recipe-score").value.trim();
  const review_description = document.querySelector("#review-content").value.trim();
  const recipe_id = document.querySelector("#review-content").getAttribute("data-id");

  if (!reviewer_name) {
    alert("Please add your name");
  }

  // Create recipe review
  if (reviewer_score && recipe_id && reviewer_name) {

    const response = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ reviewer_name, reviewer_score, review_description, recipe_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Recipe review added successefully!");
      //document.location.replace('/');
      document.location.reload();
    } else {
      alert("failed to add review recipe");
      //alert(response.statusText);
    }
    
  }


};



document
  .querySelector(".review-recipe-form")
  .addEventListener("submit", addRecipeReviewFormHandler);