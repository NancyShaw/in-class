<template>
    <div class="buttons" v-if="!Session.user">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light"> Log in </a>
    </div>
    <div v-else>
        Hello John Doe
        (<a @click="logout">
            logout
        </a>)
    </div>
</template>

<script>
import Session from "../models/Session"
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        login(){
            this.Session.user = { name: "John Doe"}        
        },
        logout(){
            this.Session.user = null
        }
    }

}
</script>

<style>

</style>