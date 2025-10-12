<!-- src/views/engineering_course.vue -->
<template>
    <div>
        <h1>Engineering Course</h1>

        <h2>PROJECTS : Explore a selection of innovative projects showcasing my engineering expertise and creativity.</h2>

        <div class="container"> 
            <section class="left-section">
                <h3>The "HomeBox"</h3>
                <p>Limited by the hardware solutions of standard Internet providers in France, I set myself the goal of developing my own internet box based on an industrial 5G router, fully customizable.</p>
                <p>The "HomeBox" is a project I work on in my spare time, forming part of a broader home automation architecture. It includes a Home Assistant server to manage Zigbee and WiFi connected devices.</p>
                <p>The goal of this project is to apply my knowledge in networking and telecommunications to everyday use and to take control of the digital data that concerns me.</p>
            </section>
            <section class="right-section">
                <img src="/img/homebox.png" alt="HomeBox"/>
            </section>
        </div>

        <div class="container"> 
            <section class="left-section"> 
                <h3>Frequency Jammer</h3>
                <p>This IUT project allowed me to explore the fundamental concepts of frequency-modulated transmissions and their jamming. I started by studying the theoretical operation of a frequency jammer and then implemented two GNU Radio flowcharts: one for a simple sinusoidal signal and another to jam an audio communication. I used an Adalm Pluto to jam the Wi-Fi communication of a nearby access point, which provided a practical application of the concepts learned.</p>
                <p>Although the project met its objectives, I faced challenges with the performance of virtual machines and PCs, which caused frequent crashes in the flowcharts, especially with high sample rates. I had to dedicate an entire machine to GNU Radio for proper testing.</p>
                <p>The real-world test with the Adalm Pluto was especially rewarding. Initially, I tried jamming a car's radio communication, but the jammer lacked the necessary power. Instead, I successfully jammed a Wi-Fi access point.</p>
            </section>
            <section class="right-section">
                <img src="/img/frequency_jammer.png" alt="Frequency Jammer" />
            </section>
        </div>

        <h2>PRODUCTIONS : Discover real-world applications and solutions I've developed to address engineering challenges.</h2>

    </div>
</template>

<script>
export default {
    name: 'EngineeringCourse'
};
</script>
