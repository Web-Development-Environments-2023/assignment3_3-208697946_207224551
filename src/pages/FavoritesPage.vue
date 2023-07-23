<template>
  <div class="container">
    <h1 class="title">Favorites</h1>
    <RecipePreviewList title="Favorites" :serverPath="'/users/favorites'" class="favorites" />
  </div>
</template>
  
  <script>
  import RecipePreviewList from "../components/RecipePreviewList";
  export default {
    components: {
      RecipePreviewList
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Anton');

  .container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the title horizontally */
    font-family: 'Anton';
    color: #bf1010;

  }
  
  .title {
    font-size: 40px;
    margin: 40px 0; /* Add margin to the title (adjust the value as needed) */
  }
  
  .favorites {
    margin: 10px 0;
  }
  </style>