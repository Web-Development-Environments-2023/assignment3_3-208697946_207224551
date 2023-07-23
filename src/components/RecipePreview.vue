<template>
  <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipe-preview">
    <div :class="{ 'recipe-body': true, 'watched': recipe.Watched }">
      <div class="image-container">
        <img :src="recipe.image" class="recipe-image" />
        <span @click.prevent="toggleFavorite" class="heart-icon" :style="{ opacity: recipe.is_favorite ? 1 : 0.6 }"></span>
      </div>
      <div class="recipe-content">
        <h3 class="recipe-title">{{ recipe.title }}</h3>
        <ul class="recipe-info">
          <li>{{ recipe.readyInMinutes }} minutes</li>
          <li>{{ recipe.popularity }} likes</li>
          <li>
            <div class="icon-row">
              <img
                v-if="recipe.vegan"
                :src="veganIcon"
                alt="Vegan"
                class="icon"
                v-b-tooltip.hover="'Vegan'"

              />
              <img
                v-if="recipe.vegetarian"
                :src="vegetarianIcon"
                alt="Vegetarian"
                class="icon"
                v-b-tooltip.hover="'Vegetarian'"

              />
              <img
                v-if="recipe.glutenFree"
                :src="glutenFreeIcon"
                alt="Gluten-free"
                class="icon"
                v-b-tooltip.hover="'Gluten-free'"

              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </router-link>
</template>



<script>

import veganIcon from '@/assets/vegan.png';
import vegetarianIcon from '@/assets/vegeterian.png';
import glutenFreeIcon from '@/assets/glutenFree.png';
export default {


  data() {
    return {
      veganIcon,
      vegetarianIcon,
      glutenFreeIcon,
      // image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    async toggleFavorite() {
      if (this.recipe.is_favorite == false){
        try{
          this.recipe.is_favorite = true;
          const favoriteRecipe = {
          recipeId: this.recipe.id
        };

        const response = await this.axios.post(`${this.$root.store.server_domain}/users/favorites`, favoriteRecipe)
        console.log(response);

        }
        catch(error){
          console.log(error);
        }

      }

    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 20px 0px;
  width: 300px; /* Adjust the width as needed */
}

.recipe-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: black;
}

.recipe-body.watched{
  color: blue;
}

.image-container {
  width: 350px; /* Adjust the width as needed */
  height: 200px;
  /* padding-bottom: 66.67%; 2:3 aspect ratio (300 / 200) * 100 = 150% */
  position: relative;
  margin: 10px;
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.recipe-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

.recipe-title {
  font-size: 20px;
  /* font-weight: bold; */
  margin-bottom: 5px;
}

.recipe-info {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.recipe-info li {
  margin-right: 10px;
  font-size: 16px;
}

.icon-row {
  display: flex;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.heart-icon {
  position: absolute;
  width: 80px;
  height: 80px;
  background-image: url('~@/assets/white_heart.png');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  opacity: 0.6; /* Make the heart icon slightly transparent by default */
  transition: opacity 0.3s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the heart icon */
}

.favorite .heart-icon {
  /* opacity: 1; Make the heart icon fully opaque when it's favorited */
}

.heart-icon:hover {
  opacity: 0.3; /* Make the heart icon slightly transparent on hover */
}
</style>


