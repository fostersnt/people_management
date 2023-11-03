<template>
    <div id="side_bar">
    <li><router-link :to="{name: 'Home'}">Home</router-link></li>
    <li><router-link :to="{name: 'Contact'}">Contact Us</router-link></li>
    <li><router-link :to="{name: 'Counter'}">Counter Page</router-link></li>
  </div>
</template>

<style>
    #side_bar{
        height: 100vh;
    }
</style>