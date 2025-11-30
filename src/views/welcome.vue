<!-- src/views/welcome.vue -->
<template>
    <div class="container">
        <div class="split-section flex-grow">
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
                    <button type="button"><a href="/portfolio/pdf/cv_pierre_chaveroux_fr.pdf" target="_blank" rel="noopener noreferrer">Download CV (FR)</a></button>
                    <button type="button"><a href="/portfolio/pdf/cv_pierre_chaveroux_en.pdf" target="_blank" rel="noopener noreferrer">Download CV (EN)</a></button>
                </div>
                <br>
            </section>
            <section>
                <p>For a more up-to-date connection, let's connect on LinkedIn and GitHub:</p>
                <br>
                <div class="button-section">
                    <button type="button"><a href="https://www.linkedin.com/in/pierre-chaveroux/" target="_blank" rel="noopener">LinkedIn Profile</a></button>
                    <button type="button"><a href="https://github.com/t70n/" target="_blank" rel="noopener">GitHub Profile</a></button>
                </div>
                <br>
            </section>
        </div>
        <div class="split-section flex-shrink">
            <section>
                <img class="img-cover" src="/img/ensseih_front_porch.jpg" alt="ENSSEIHT Front Porch" />
            </section>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Welcome'
};

</script>
