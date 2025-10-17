<!-- src/views/engineering_course.vue -->
<template>
    <div>
        <h1 class="padded1">Engineering Course</h1>

        <h2 class="padded2">PROJECTS : Explore a selection of innovative projects showcasing my engineering expertise and creativity.</h2>

        <section>
            <div class="container">    
                <section class="left-section">
                    <div class="container">
                        <section class="left-section">
                            <h3 class="centered">"HomeBox"</h3>
                            <p>Limited by the hardware solutions of standard Internet providers in France, I set myself the goal of developing my own internet box based on an industrial 5G router, fully customizable.</p>
                            <p>The "HomeBox" is a project I work on in my spare time, forming part of a broader home automation architecture. It includes a Home Assistant server to manage Zigbee and WiFi connected devices.</p>
                            <p>The goal of this project is to apply my knowledge in networking and telecommunications to everyday use and to take control of the digital data that concerns me.</p>
                        </section>
                        <section class="right-section">
                            <img class="custom-image" src="/img/homebox.png" alt="HomeBox"/>
                        </section>
                        <section class="right-section">
                            <img class="custom-image" src="/img/homebox.png" alt="HomeBox"/>
                        </section>
                    </div>
                    
                </section>
            </div> 
        </section>
        <section>
            <div class="container">    
                <section class="left-section">
                    <h2 class="centered">ELECTRONIC PROJECTS</h2>
                    <div class="container">
                        <section class="left-section">
                            <h3 class="centered">"Laser-Game"</h3>
                            <p>blablablabblablablabblablablabblablablabblablablabbblabblablablabblablablabbblablabb</p>
                            <p>blablablabblablablabblablablabblablablabblablablabbblabblablablabblablablabbblablabb</p>
                            <p>blablablabblablablabblablablabblablablabblablablabbblabblablablabblablablabbblablabb</p>
                            <p>blablablabblablablabblablablabblablablabblablablabbblabblablablabblablablabbblablabb</p>
                            <section>
                                <img class="custom-image" src="/img/laser_game.jpeg" alt="HomeBox"/>
                            </section>  
                        </section>
                        <section class="right-section">
                            <img class="custom-image" src="/img/laser_game3.jpg" alt="HomeBox"/>
                        </section>
                        <section class="right-section">
                            <img class="custom-image" src="/img/laser_game2.jpg" alt="HomeBox"/>
                        </section>
                    </div>
                    <div class="container">
                        <section class="left-section">
                            <img class="custom-image" src="/img/laser_game.jpeg" alt="HomeBox"/>
                        </section>
                        <section class="right-section">
                            <h3 class="centered">"Corto-Densimeter"</h3>
                            <p></p>
                            <p></p>
                            <p></p>
                        </section>
                    </div>
                </section>
            </div>
        </section>
        <section>
            <div class="container">    
                <section class="left-section">
                    <h2 class="centered">RADIO PROJECTS</h2>
                    <div class="container">
                        <section class="left-section">
                            <h3 class="centered">Frequency Jammer</h3>
                            <p>This IUT project allowed me to explore the fundamental concepts of frequency-modulated transmissions and their jamming. I started by studying the theoretical operation of a frequency jammer and then implemented two GNU Radio flowcharts: one for a simple sinusoidal signal and another to jam an audio communication. I used an Adalm Pluto to jam the Wi-Fi communication of a nearby access point, which provided a practical application of the concepts learned.</p>
                            <p>Although the project met its objectives, I faced challenges with the performance of virtual machines and PCs, which caused frequent crashes in the flowcharts, especially with high sample rates. I had to dedicate an entire machine to GNU Radio for proper testing.</p>
                            <p>The real-world test with the Adalm Pluto was especially rewarding. Initially, I tried jamming a car's radio communication, but the jammer lacked the necessary power. Instead, I successfully jammed a Wi-Fi access point.</p>
                            <br>
                            <section class="button-section">
                                <button type="button" @click="downloadCV('sae31_rapport_chaveroux_halidi.pdf')">Download Full Rapport (FR)</button>
                            </section>
                        </section>
                        <section class="right-section">
                            <video class="custom-video" controls muted>
                                <source src="/vid/jammer.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </section>
                    </div>
                    <div class="container">
                        <section class="left-section">
                            <video class="custom-video" controls muted>
                                <source src="/vid/radio.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </section>
                        <section class="right-section">
                            <h3 class="centered">Radio Listener</h3>
                            <p></p>
                            <p></p>
                            <p></p>
                        </section>
                    </div>
                </section>
            </div>
        </section>
        

        <h2 class="padded2">PRODUCTIONS : Discover real-world applications and solutions I've developed to address engineering challenges.</h2>

    </div>
</template>

<script>
import { downloadCV } from '@/utils'; 

export default {
    name: 'EngineeringCourse',
    methods: {
        downloadCV 
    }
};
</script>
