<template>
  <div class="container">
    <div class="cover-image">
      <img src="@/assets/cooking.jpg" alt="Cooking Image" class="background-image" />
      <div class="image-text-wrapper">
        <h1 class="image-text">COOK IT</h1>
        <div class="text-line-wrapper">
          <p class="text-line">Explore Tasty and</p>
          <p class="text-line">Easy Recipes</p>
        </div>
      </div>
    </div>
    <div class="content">

      
        <div class="row-item center-text">
          <h2 class="title">Take A Look -></h2>
          <div class="reload">
            <img src="@/assets/reload.png" @click="showMoreRandomRecipes" class="reload-image" alt="Reload" />
          </div>

        </div>
      
      <div class="row">
        <div class="row-item center-text">
          <RecipePreviewList ref="recipePreviewList" title="Random Recipes" :serverPath="'/recipes/random'" class="RandomRecipes" />
         

        </div>
      </div>



      <div v-if="isLoggedIn">
        
          <div class="row-item center-text">
            <h2>Recently Viewed:</h2>
          </div>
        
        <div class="row">
          <div class="row-item center-text">
            <RecipePreviewList
              title="Last Viewed Recipes"
              :serverPath="'/recipes/lastWatched'"
              :class="{
                RandomRecipes: true,
                blur: !$root.store.username,
                center: true
              }"
              disabled
            ></RecipePreviewList>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="row-item center-text">
            
              <div class="sign-in-section">
                <h2>SIGN IN TO YOUR ACCOUNT:</h2>
                <router-link :to="{ name: 'login' }">SIGN IN</router-link>
              </div>

              <div class="sign-up-section">
                <h2>DON'T HAVE AN ACCOUNT YET?</h2>
                <router-link :to="{ name: 'register' }">SIGN UP</router-link>
              </div>

            </div>
          </div>
        </div>
      

    </div>
  </div>
</template>




<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  components: {
    RecipePreviewList,
  },
  computed: {
    isLoggedIn() {
      return Boolean(this.$root.store.username);
    },
  },
  methods: {
    async showMoreRandomRecipes() {
      console.log('clicked');
      // Call the method in RecipePreviewList component to fetch new random recipes
      await this.$refs.recipePreviewList.updateRecipes();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Anton');
.container {
  max-width: 100%;
  // margin: 0 auto;
  // padding: 10px;
  font-family: 'Anton';
  overflow: hidden;
  margin: 0;
  padding: 0;

}

.content {
  // max-width: 1200px;
  // padding: 0 20px;
  // box-sizing: border-box; /* Include padding in the width calculation */
}
.cover-image {
  width: 100vw;
  position:relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

.background-image {
  width: 100%;
  // display: block;
  // object-fit: cover;
}
.image-text-wrapper {
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
  font-family: 'Anton';
}

.image-text {
  font-size: 5vw;
  color: #bf1010;
  margin: 0;
}

.text-line-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.text-line {
  font-size: 7.5vw;
  margin: 0;
}


.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;
  border-bottom: 1px solid #ccc; /* Add a thin grey line at the bottom of the row */
  padding-bottom: 100px; 
}

.row-item {
  width: 100%;
  padding: 0 10px;
  font-size: 30px;
  text-align: center;
}

.center-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.sign-in-section{
  margin-right: 100px;
}
.sign-up-section {
  margin-left: 100px; /* Add space between the two sections */
}

.reload-image {
  cursor: pointer;
  width:40px;
  height:40px;
  opacity: 0.5;
}
.reload{
  margin-left: 50px;
}

</style>







