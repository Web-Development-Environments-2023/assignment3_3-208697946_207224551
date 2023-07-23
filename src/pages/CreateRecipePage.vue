<template>
  <div class="create-recipe">
    <h2>Tell us about your recipe:</h2>
    <b-container>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="8" md="6">
          <b-button @click="showModal = true" block>Create Recipe</b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-modal v-model="showModal" title="Create Recipe" @ok="createRecipe">
      <div class="create-recipe">
        <form @submit.prevent="createRecipe" class="form-group">
          <div class="form-row">
          <label for="title" class="label">Recipe name:</label>
          <input type="text" id="title" v-model="recipe.title" required class="input-box">
        </div>
        <div class="form-row">
          <label for="image" class="label">Image:</label>
          <input type="text" id="image" v-model="recipe.image" required class="input-box">
        </div>
        <div class="form-row">
          <label for="readyInMinutes" class="label">Ready in Minutes:</label>
          <input type="number" id="readyInMinutes" v-model="recipe.readyInMinutes" required class="input-box">
        </div>

        <div class="form-row">
            <div class="dietary-options">
              <div class="selectable-button" :class="{ selected: recipe.vegetarian }" @click="recipe.vegetarian = !recipe.vegetarian">Vegetarian</div>
              <div class="selectable-button" :class="{ selected: recipe.vegan }" @click="recipe.vegan = !recipe.vegan">Vegan</div>
              <div class="selectable-button" :class="{ selected: recipe.glutenFree }" @click="recipe.glutenFree = !recipe.glutenFree">Gluten-Free</div>
            </div>
          </div>


        <div class="form-row">
            <label for="ingredients" class="label">Ingredients:</label>
            <div class="ingredient-list">
              <div class="ingredient-row" v-for="(ingredient, index) in recipe.ingredients" :key="index">
                <div class="ingredient-fields">
                  <input type="text" v-model="ingredient.name" placeholder="Ingredient name" required class="input-box">
                  <input type="text" v-model="ingredient.amount" placeholder="Amount" class="input-box">
                </div>
                <button type="button" @click="removeIngredient(index)" v-if="index !== 0">-</button>
              </div>
            </div>
            <button type="button" @click="addIngredient" class="add-button">+</button>
          </div>

        <div class="form-row">
          <label for="instructions" class="label">Instructions:</label>
          <textarea id="instructions" v-model="recipe.instructions" required class="input-box"></textarea>
        </div>
        <div class="form-row">
          <label for="servings" class="label">Servings:</label>
          <input type="number" id="servings" v-model="recipe.servings" required class="input-box">
        </div>

        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { BButton, BModal } from 'bootstrap-vue';

export default {
  components: {
    BButton,
    BModal
  },
  data() {
    return {
      showModal: false,
      recipe: {
        title: '',
        image: '',
        readyInMinutes: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        ingredients: [{ name: '', amount: '' }],
        instructions: '',
        servings: 0
      }
    };
  },
  methods: {
    async createRecipe() {
      try {
        const response = await this.axios.post(this.$root.store.server_domain + '/users/myRecipes', this.recipe, { withCredentials: true });
        console.log(response.data);

        // Reset the form after successful creation
        this.recipe = {
          title: '',
          image: '',
          readyInMinutes: 0,
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          ingredients: [{ name: '', amount: '' }],
          instructions: '',
          servings: 0
        };

        // Close the modal after successful creation
        this.showModal = false;
      } catch (error) {
        console.log(error);
      }
    },
    addIngredient() {
      this.recipe.ingredients.push({ name: '', amount: '' });
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    }
  }
};
</script>

<style scoped>

.create-recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.create-recipe > h1,
.create-recipe > h2,
.create-recipe > form {
  margin-bottom: 20px;
}

.form-group {
  width: 80%; /* Adjust this width as needed */
  margin: 0 auto
}

.form-row {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.label {
  font-weight: bold;

  flex: 0 0 150px; /* Fixed width for the labels */

}

.input-box {
  flex: 1; /* Take remaining width for the input boxes */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.dietary-options {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
}
.ingredient-list {
  list-style-type: none;
  padding: 0;
}

.ingredient-row {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.ingredient-fields {
  display: flex;
  align-items: center;
  flex: 1; /* Take the available width */
  margin-right: 10px; /* Add some spacing between the input boxes and the "Add" button */
}
.add-button {
  background-color:#ccc;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #bf1010;
}

textarea {
  width: 300px;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 5px;
}

button[type="submit"] {
  background-color:#bf1010;;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button[type="submit"]:hover {
  background-color: #bf1010;;
}

.selectable-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.selectable-button.selected {
  background-color: #bf1010;;
  color: #fff;
}
</style>
