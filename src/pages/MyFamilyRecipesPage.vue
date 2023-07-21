<template>
    <div class="container">
      <h1 class="title">My Family Recipes</h1>
      <RecipePreviewList title="My Family Recipes" :serverPath="'/users/myFamilyRecipes'" class="favorites" />
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
      font-size: 70px;
      margin: 20px 0; /* Add margin to the title (adjust the value as needed) */
    }
    
    .favorites {
      margin: 10px 0;
    }
    </style>