<template>
  <b-container>
    <b-row>
      <b-col cols="4" v-for="(r, index) in recipes" :key="r.id">
        <RecipePreview :recipe="r" class="recipe-preview" />
        <br v-if="(index + 1) % 3 === 0" />
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
    },
    sortOption: {
      type: String,
      default: ''
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
    },
    sortOption: {
      immediate: true, // Call the watcher immediately when the component is created
      handler() {
        if (this.recipes.length > 0) {
          this.sortRecipes();
        }
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
        if (this.sortOption) {
          this.sortRecipes();
        }
      } catch (error) {
        console.log(error);
      }
    },
    sortRecipes() {
      if (this.sortOption === "readyInMinutes") {
        this.recipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
      } else if (this.sortOption === "popularity") {
        this.recipes.sort((a, b) => b.popularity - a.popularity);
      }
    }
  }
};
</script>

<style lang="scss" scoped>

b-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align items to the left */
}

.recipe-preview {
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
  width: 100%; /* Make each recipe preview take up the full width */

}

</style>
