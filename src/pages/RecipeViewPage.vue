<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-info mb-3">
        <div v-if="recipe.popularity !== undefined" class="info-item">Likes: {{ recipe.popularity }} likes</div>
        <div class="info-item">Cook Time: {{ recipe.readyInMinutes }} minutes</div>
        <div class="info-item">Servings: {{ recipe.servings }}</div>
      </div>
      <div class="recipe-body">
        <div class="wrapper">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,

    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          `${this.$root.store.server_domain}/recipes/${this.$route.params.recipeId}`
        );
        console.log(response);

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        is_favorite,
        watched,
        instructions,
        glutenFree,
        vegan,
        vegetarian,
        servings,
        ingredients,
        popularity,
        readyInMinutes,
        image,
        title
      } = response.data;


      let _recipe = {
        is_favorite,
        watched,
        instructions,
        glutenFree,
        vegan,
        vegetarian,
        servings,
        ingredients,
        popularity,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.recipe-header {
  text-align: center;
}

.recipe-header h1 {
  font-size: 32px;
}

.center {
  display: block;
  margin: 20px auto;
  width: 100%;
  /* max-width: 400px; */
}

.recipe-info {
  display: flex;
  justify-content: space-around;
  font-size: 18px;
}

.recipe-body {
  margin-top: 20px;
}

.wrapper {
  display: flex;
}

.wrapped {
  width: 50%;
}

.wrapped h2 {
  font-size: 24px;
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

.info-item {
  display: inline-block;
  font-weight: bold;
}
</style>
