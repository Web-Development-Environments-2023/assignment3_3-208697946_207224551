<template>
  <div id="app">
    <div id="nav">
      <div class="left-section">
        <router-link :to="{ name: 'main' }">
          <img class="logo" src="@/assets/site_logo2.png" alt="Site Logo" />
        </router-link>
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{ name: 'search' }">Search</router-link> 
        <router-link v-if="isLoggedIn" :to="{ name: 'createRecipe' }">Create Recipe</router-link> 
        <div v-if="isLoggedIn" class="dropdown">
          <button class="dropbtn">Personal ▼</button>
          <div class="dropdown-content">
            <router-link :to="{ name: 'favorites' }">Favorites</router-link>
            <router-link :to="{ name: 'myRecipes' }">My Recipes</router-link>
            <router-link :to="{ name: 'myFamilyRecipes' }">My Family Recipes</router-link>
          </div>
        </div>
      </div>

      <div class="right-section">
        <span v-if="!$root.store.username">
          Hello Guest:
          <router-link :to="{ name: 'register' }">Register</router-link> 
          <router-link :to="{ name: 'login' }">Login</router-link> 
        </span>
        <span v-else>
          <div class="dropdown">
            <button class="dropbtn" @click="toggleDropdown">{{ $root.store.username }} ▼</button>
            <div class="dropdown-content" v-if="showDropdown">
              <span class="logout" @click="logout">Logout</span>
            </div>
          </div>
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showDropdown: false
    };
  },
  computed: {
    isLoggedIn() {
      return Boolean(this.$root.store.username);
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Anton');
// @import url('https://fonts.googleapis.com/css?family=Noto Sans Cypro Minoan');

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Set the background color to light grey */
  padding: 10px;
  // font-size: 30 px;
}

#nav a {
  font-family: 'Anton';
  // font-family: 'Noto Sans Cypro Minoan';
  font-size: 20px;
  color: #333; /* Set the font color */
  text-decoration: none;
  padding: 15px; /* Add padding to create spacing between tabs */
}

#nav a.router-link-exact-active {
  color: #ce1a0d;
  // font-weight: bold; /* Apply bold font weight to the active tab */
}

.left-section {
  font-family: 'Anton';
  font-size: 20px;
  display: flex;
  align-items: center;
}

.right-section {
  font-family: 'Anton';
  font-size: 20px;
  display: flex;
  align-items: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: transparent; /* Remove the background color */
  color: #333; /* Set the font color */
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 20px; /* Increase the font size */
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
}

.dropdown-content a {
  color: #333; /* Set the font color */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 16px; /* Decrease the font size */
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.logo{
  width: 112.5px;
  height: 56.25px;
}
</style>

