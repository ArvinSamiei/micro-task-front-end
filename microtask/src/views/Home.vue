<template>
  <div style="height: 100%; width: 100%;">  
    <Toolbar></Toolbar>
    <NavbarDrawer></NavbarDrawer>
    <v-content style="height: 100%;">
      <CardList ></CardList>
    </v-content>
    <Footer></Footer>
  </div>
  
</template>

<script>
import CardList from "@/components/CardList";  
import Toolbar from "@/components/Toolbar";
import NavbarDrawer from "@/components/NavbarDrawer";
import Footer from "@/components/Footer";


export default {
    name: 'home',
    components: {
      Toolbar,
      NavbarDrawer,
      CardList,
      Footer
    }
  }
</script>

