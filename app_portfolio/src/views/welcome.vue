<!-- src/views/welcome.vue -->
<template>
    <div class="container">
        <div class="split-section">
            <section>
                <h1 class="page_title centered">WELCOME TO MY E-PORTFOLIO</h1>
                <h2 class="page_subtitle centered">Pierre CHAVEROUX - 23 years old - Apprentice IoT Engineer</h2>
            </section>
            <section>
                <p>Here, you'll find highlights of:</p>
                <ul>
                    <li>My engineering Course projects,</li>
                    <li>My experiences in International Mobility,</li>
                    <li>My commitment to Sustainability & Civic Engagement,</li>
                    <li>My passion for Sport & Other Activities,</li>
                    <li>My professional growth in Career Development</li>
                </ul>
            </section>

            <section>
                <p>Explore my professional journey by downloading my CV:</p>
                <br>
                <div class="button-section">
                    <button type="button" @click="downloadCV('cv_pierre_chaveroux_fr.pdf')">Download CV (FR)</button>
                    <button type="button" @click="downloadCV('cv_pierre_chaveroux_en.pdf')">Download CV (EN)</button>
                </div>
                <br>
            </section>
            <section>
                <p>For a more up-to-date connection, let's connect on LinkedIn:</p>
                <br>
                <div class="button-section">
                    <button type="button"><a href="https://www.linkedin.com/in/pierre-chaveroux/" target="_blank" rel="noopener">LinkedIn Profile</a></button>
                </div>
                <br>
            </section>
        </div>
        <div class="split-section">
            <section>
                <img class="custom-image" src="/img/ensseih_front_porch.jpg" alt="ENSSEIHT Front Porch" />
            </section>
        </div>
    </div>
</template>

<script>

import { downloadCV } from '@/utils'; 

export default {
    name: 'Welcome',
    methods: {
        downloadCV 
    }
};

</script>
