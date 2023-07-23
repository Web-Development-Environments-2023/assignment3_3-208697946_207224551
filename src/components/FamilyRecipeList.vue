<template>
    <div>
      <div v-for="r in recipes" :key="r.id">
        <FamilyRecipe :recipe="r" class="recipe-preview" />
      </div>
    </div>
  </template>
  
  <script>
  import FamilyRecipe from "./FamilyRecipe.vue";
  export default {
    name: "FamilyRecipeList",
    components: {
        FamilyRecipe
    },

    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },

    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + '/users/myFamilyRecipes');
          console.log(response);
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);

        } catch (error) {
          console.log(error);
        }
      },

    }
  };
  </script>
  
  <style lang="scss" scoped>
  .recipe-preview {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    width: 100%; /* Make each recipe preview take up the full width */
  }
  </style>