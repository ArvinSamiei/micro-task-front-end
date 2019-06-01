<template>
    <div class="home">
        <!-- <v-content > -->
            <CardList></CardList>
        <!-- </v-content> -->
    </div>
</template>

<script>
import CardList from "@/components/CardList";
export default {
    name: 'Home',
    components: {
        CardList
    }
}
</script>
