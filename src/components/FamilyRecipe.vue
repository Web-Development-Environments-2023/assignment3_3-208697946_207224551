<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-body">
        <div class="wrapper">
          <div class="recipe-details">
            <h1 class="recipe-title">{{ recipe.title }}</h1>
            <div class="info-item">Made By: {{ recipe.owner }}</div>
            <div class="info-item">When To Cook: {{ recipe.WhenToCook }}</div>

            <div class="wrapped">
              <h2>Ingredients:</h2>
              <ul>
                <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                  {{ ingredient.name }} - {{ ingredient.amount }}
                </li>
              </ul>
            </div>
            <div class="wrapped">
              <h2>Instructions:</h2>
              <div v-html="recipe.instructions"></div>
            </div>
          </div>
          <div class="recipe-image">
            <img :src="recipe.image" class="center" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.recipe-body {
  margin-top: 20px;
}

.wrapper {
  display: flex;
  flex-direction: row-reverse; /* Reverse the flex direction to place the image on the right */
}

.recipe-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.recipe-details {
  flex: 1; /* Occupy the 50% of the available space */
}

.recipe-image {
  flex: 1; /* Occupy the other 50% of the available space */
  margin-left: 20px; /* Add some spacing between the image and details */
}

.center {
  display: block;
  margin: 10px auto; /* Add some spacing around the image */
  max-width: 200px; /* Set a maximum width for the image to make it smaller */
}

.info-item {
  font-size: 18px;
}

.wrapped {
  margin-top: 20px; /* Add spacing between sections */
}

.wrapped h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.recipe-body ul {
  list-style-type: disc;
  margin-left: 20px;
}

.recipe-body ol {
  list-style-type: decimal;
  margin-left: 20px;
}
</style>

