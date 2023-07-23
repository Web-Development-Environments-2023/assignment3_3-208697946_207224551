<template>
  <div class="container">
    <div class="search-container">
      <h1 class="title">Search</h1>
      <div class="search-box">
        <input type="text" v-model="searchQuery" placeholder="Enter your search query">
        <button @click="search">Search</button>
      </div>
      <div class="section">
        <div class="filter-section">
          <div class="filter-heading" @click="toggleFilters">
            + Filters
          </div>
          <div class="filters" :class="{ active: showFilters }">
            <div class="filter">
              <label for="results-num">Number of Results:</label>
              <select v-model="results_num" id="results-num">
                <option value="">All</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
            <div class="filter">
              <label for="cuisine">Cuisine:</label>
              <select v-model="cuisine" id="cuisine">
                <option value="">All</option>
                <option v-for="c in cuisines" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
            <div class="filter">
              <label for="diet">Diet:</label>
              <select v-model="diet" id="diet">
                <option value="">All</option>
                <option v-for="d in diets" :key="d" :value="d">{{ d }}</option>
              </select>
            </div>
            <div class="filter">
              <label for="intolerance">Intolerance:</label>
              <select v-model="intolerance" id="intolerance">
                <option value="">None</option>
                <option v-for="i in intolerances" :key="i" :value="i">{{ i }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="sort-section">
          <div class="sort-heading" @click="toggleSort">
            + Sort
          </div>
          <div class="sorts" :class="{ active: showSort }">
            <select v-model="sortBy" @change="updateSortOption">
              <option value="">Sort By</option>
              <option value="readyInMinutes">Ready In Minutes</option>
              <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  </div>
   

    <RecipePreviewList v-if="showResults" :title="searchQuery" :sortOption="sortBy" :serverPath="serverPath" class="result-list" />
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      showFilters: false,
      showSort: false,
      sortBy: '',
      searchQuery: '',
      showResults: false,
      serverPath: '',
      results_num: 5,
      cuisine: '',
      diet: '',
      intolerance: '',
      cuisines:  [
  'African',
  'Asian',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese'
], 
      diets: [
  'Gluten Free',
  'Ketogenic',
  'Vegetarian',
  'Lacto-Vegetarian',
  'Ovo-Vegetarian',
  'Vegan',
  'Pescetarian',
  'Paleo',
  'Primal',
  'Low FODMAP',
  'Whole30'
], 
      intolerances: [
  'Dairy',
  'Egg',
  'Gluten',
  'Grain',
  'Peanut',
  'Seafood',
  'Sesame',
  'Shellfish',
  'Soy',
  'Sulfite',
  'Tree Nut',
  'Wheat'
], 
    };
  },
  created() {
  // Retrieve the last search query from localStorage
  const lastSearchQuery = localStorage.getItem('lastSearchQuery');

  if (lastSearchQuery) {
    this.searchQuery = lastSearchQuery;
  }
},
  methods: {
    search() {
      this.serverPath = '';

      // Set the serverPath based on the search query
      this.serverPath = '/recipes/search?query=' + this.searchQuery;

      // Set additional parameters based on user input
      const params = {
        cuisine: this.cuisine,
        diet: this.diet,
        intolerance: this.intolerance,
        results_num: this.results_num,
      };

      // Append additional parameters to the serverPath
      for (const param in params) {
        if (params[param]) {
          this.serverPath += `&${param}=${params[param]}`;
        }
      }

      this.showResults = true; 

      localStorage.setItem('lastSearchQuery', this.searchQuery);

      // Reset the searchQuery, cuisine, diet, intolerance, and resultsNum for a fresh search
      this.searchQuery = '';
      this.cuisine = '';
      this.diet = '';
      this.intolerance = '';
      this.results_num = '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
      if (this.showFilters) {
        this.showSort = false;
      }    
    },
    
    toggleSort() {
      this.showSort = !this.showSort;
      if (this.showSort) {
        this.showFilters = false;
      }
    },
    updateSortOption() {
      this.$refs.recipePreviewList.sortRecipes(); // Call the sortRecipes method in the RecipePreviewList component without passing the sort option as an argument

    }

  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Anton');

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.search-container {
  max-width:800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-family:'Anton';
  font-size: 40px;
  margin-bottom: 20px;
  color: #bf1010;

}

.search-box {
  display: flex;
  margin-bottom: 20px;
}

.search-box input {
  flex-grow: 1;
  padding: 5px;
  font-size: 16px;
}

.search-box button {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 16px;
}

.section {
  display: flex;
  /* align-items: flex-start; */
  margin-bottom: 10px;
}

.filter-section {
}

.filter-heading {
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.filters {
  display: none;
}

.filter {
  margin-bottom: 10px;
}

.filter label {
  font-weight: bold;
  margin-right: 10px;
}

.filter select {
  width: 200px;
}

.filters {
  display: block;
}

.sort-section {
  margin-left: 10px; /* Adjust as needed */
}

.sort-heading{
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;  
}

.filter-section .filter-heading.active,
.sort-section .sort-heading.active {
  font-weight: bold;
}

.filter-section .filters,
.sort-section .sorts {
  display: none;
}

.filter-section .filters.active,
.sort-section .sorts.active {
  display: block;
}

.result-list {
  /* Add your styles for the result list */
}
</style>