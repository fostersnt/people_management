<template>
    <h1>Here is the home page</h1>
    <h1>{{ getCounter }}</h1>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('counterMod', ['getCounter'])
    }
}
</script>