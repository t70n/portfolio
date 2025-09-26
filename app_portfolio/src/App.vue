<script setup></script>

<template>
  <h1 class=navbar_title><router-link to="/">Mon Portfolio - Pierre CHAVEROUX</router-link></h1>
  <nav class="navbar">
        <router-link to="/engineering_course">Parcours ingénieur</router-link>
        <router-link to="/international_mobility">Mobilité internationale</router-link>
        <router-link to="/sustainability_civic_engagement">Engagements durabilité et civique</router-link>
        <router-link to="/career_development">Développement de carrière</router-link>
        <router-link to="/sport_other_activities">Sport et autres activités</router-link>
    </nav>
    <router-view></router-view>
</template>

<style src="./style/navbar.css" scoped></style>
