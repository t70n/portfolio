<script setup></script>

<template>
  <h1 class=navbar_title><router-link to="/">Mon Portfolio - Pierre CHAVEROUX</router-link></h1>
  <nav class="navbar">
        <router-link to="/engineering_course">Engineering Course</router-link>
        <router-link to="/international_mobility">International Mobility</router-link>
        <router-link to="/sustainability_civic_engagement">Sustainability and Civic Engagement</router-link>
        <router-link to="/career_development">Career Development</router-link>
        <router-link to="/sport_other_activities">Sports and Other Activities</router-link>
    </nav>
    <router-view></router-view>
</template>

<style src="./style/navbar.css" scoped></style>
