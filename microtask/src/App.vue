<template>
  <div id="app">
    <v-app>
    <Toolbar></Toolbar>
    <NavbarDrawer></NavbarDrawer>
    <v-content >
    <router-view/>
    </v-content>
    <Footer></Footer>
  </v-app>
  </div>
</template>

<script>  
import Toolbar from "@/components/Toolbar";
import NavbarDrawer from "@/components/NavbarDrawer";
import Footer from "@/components/Footer";


export default {
    name: 'app',
    components: {
      Toolbar,
      NavbarDrawer,
      Footer
    }
  }
</script>

