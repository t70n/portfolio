<!-- src/views/welcome.vue -->
<template>
    <div>
        <h1>WELCOME TO MY E-PORTFOLIO</h1>
        <h2> Pierre CHAVEROUX - 23 years old - Apprentice IoT Engineer</h2>
    </div>
    <div>
        <p> Here, you'll find highlights of : </p>
        <ul>
            <li>My engineering Course projects,</li>
            <li>My experiences in International Mobility,</li>
            <li>My commitment to Sustainability & Civic Engagement,</li>
            <li>My passion for Sport & Other Activities,</li>
            <li>My professional growth in Career Development</li>
        </ul>
    </div>
    <div>
        <p>For a more up-to-date connection, let's connect on LinkedIn :</p>
        <a href="https://www.linkedin.com/in/pierre-chaveroux/" target="_blank" rel="noopener">My LinkedIn Profile</a>
    </div>
    <div>
        <a href="/pdf/cv_pierre_chaveroux_fr.pdf" download>Curriculum vitae - French Edition</a>
        <a href="/pdf/cv_pierre_chaveroux_en.pdf" download>Curriculum vitae - English Edition</a>
    </div>
    <div>
        <img src="/img/ensseih_front_porch.jpg" alt="ENSSEIHT Front Porch" />
    </div>
</template>

<script>
export default {
    name: 'Welcome'
};
</script>
