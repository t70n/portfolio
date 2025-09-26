<!-- src/views/welcome.vue -->
<template>
    <div class="container">
        <div class="left-section">
            <section>
                <h1 class="page_title">WELCOME TO MY E-PORTFOLIO</h1>
                <h2 class="page_subtitle"> Pierre CHAVEROUX - 23 years old - Apprentice IoT Engineer</h2>
            </section>
            <section>
                <p> Here, you'll find highlights of : </p>
                <ul>
                    <li>My engineering Course projects,</li>
                    <li>My experiences in International Mobility,</li>
                    <li>My commitment to Sustainability & Civic Engagement,</li>
                    <li>My passion for Sport & Other Activities,</li>
                    <li>My professional growth in Career Development</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li><a href="/pdf/cv_pierre_chaveroux_fr.pdf" download>Curriculum vitae - French Edition</a></li>
                    <li><a href="/pdf/cv_pierre_chaveroux_en.pdf" download>Curriculum vitae - English Edition</a></li>
                </ul>
            </section>
        </div>
        <div class="right-section">
            <img src="/img/ensseih_front_porch.jpg" alt="ENSSEIHT Front Porch" />
        </div>
    </div>
    <div>
        <p>For a more up-to-date connection, let's connect on LinkedIn : <a href="https://www.linkedin.com/in/pierre-chaveroux/" target="_blank" rel="noopener"> LinkedIn Profile</a> </p>
    </div>
</template>

<script>
export default {
    name: 'Welcome'
};
</script>
