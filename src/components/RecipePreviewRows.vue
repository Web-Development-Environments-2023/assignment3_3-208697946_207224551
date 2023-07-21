<template>
    <b-container>
      <b-row>
        <b-col>
          <b-row v-for="(row, index) in dividedRows" :key="index">
            <RecipePreview
              v-for="recipe in row"
              :key="recipe.id"
              :recipe="recipe"
              class="recipe-preview"
            />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import RecipePreview from "./RecipePreview.vue";
  
  export default {
    name: "RecipePreviewList",
    components: {
      RecipePreview
    },
    props: {
      title: {
        type: String,
        required: true
      },
      serverPath: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    watch: {
      serverPath: {
        immediate: true,
        handler() {
          this.updateRecipes();
        }
      }
    },
    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + this.serverPath
          );
          console.log(response);
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
        } catch (error) {
          console.log(error);
        }
      }
    },
    computed: {
      dividedRows() {
        const dividedRows = [];
        const numPerRow = 3;
        for (let i = 0; i < this.recipes.length; i += numPerRow) {
          dividedRows.push(this.recipes.slice(i, i + numPerRow));
        }
        return dividedRows;
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  b-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .recipe-preview {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 20px;
    width: 100%;
  }
  </style>
  