<template>
    <div class="container">
      <h1 class="title">My Family Recipes</h1>
      <FamilyRecipeList/>
    </div>
  </template>
    
    <script>
    import FamilyRecipeList from "../components/FamilyRecipeList";
    export default {
      components: {
        FamilyRecipeList      }
    };
    </script>
    
  
    <style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Anton');
  
    .container {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center; /* Center the title horizontally */

    }
    
    .title {
      font-family: 'Anton';
      color: #bf1010;
      font-size: 40px;
      margin: 20px 0; /* Add margin to the title (adjust the value as needed) */
    }
    
    .favorites {
      margin: 10px 0;
    }
    </style>