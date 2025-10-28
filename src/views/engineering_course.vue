<!-- src/views/engineering_course.vue -->
<template>
    <div>
        <h1 class="padded1">Engineering Course</h1>

        <h2 class="padded2">PROJECTS : Explore a selection of innovative projects showcasing my engineering expertise and creativity.</h2>

        <div class="container">    
            <section class="split-section">
                <h2 class="centered"><em><u>NETWORK PROJECTS</u></em></h2>
                <div class="container">
                    <section class="split-section">
                        <h3 class="centered">HomeBox</h3>
                        <p>Frustrated by the rigid offerings of French ISPs, I built my own internet box around a Teltonika RUTX50—an industrial 5G router with full customization. Dubbed the "HomeBox," it serves as the backbone of my home automation setup.</p>
                        <p>Home automation hub: Runs Home Assistant to manage Zigbee/WiFi devices, including:</p>
                        <ul>
                            <li>Presence sensors</li>
                            <li>Door/window states</li>
                            <li>Motorized buttons</li>
                        </ul>
                        <p>Reliability:</p>
                        <ul>
                            <li>Primary 5G/4G/3G connection</li>
                            <li>Failover to a shared fiber line (Freebox)</li>
                        </ul>
                        <p>Security & control:</p>
                        <ul>
                            <li>Exposed services (Gitea, custom UI) isolated in a DMZ</li>
                            <li>Strict firewall rules and granular traffic control</li>
                        </ul>
                        <p>Data protection: Automatic backups to an external drive</p>
                        <p>Beyond better connectivity, this project lets me own my network, automate my space, and keep my data under my control.</p>
                    </section>
                    <section class="split-section">
                        <img class="custom-image" src="/img/homebox2.jpg" alt="HomeBox"/>
                    </section>
                    <section class="split-section">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/4tO19pOJSx4?si=p1YHfn30f9ZIaguo" 
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <img class="custom-image" src="/img/5g_coverage.png" alt="Toulouse 5G Coverage"/>
                    </section>
                </div>
            </section>
        </div> 

        <div class="container">    
            <section class="split-section">
                <h2 class="centered"><em><u>PROGRAMMING PROJECTS</u></em></h2>
                <div class="container">
                    <section class="split-section">
                        <h3 class="centered">Bomber7</h3>
                        <p>Bomber7 is a local multiplayer game inspired by the classic Bomberman, but with a twist: the maps and themes are based on ENSEEIHT, our engineering school.</p>
                        <p>Built from scratch by a team of six, the goal was to create a fun, competitive arcade-style experience for 1–4 players, with customizable controls, dynamic power-ups, and AI opponents.</p>
                        <p>Gameplay:</p>
                        <ul>
                            <li>Classic Bomberman mechanics: place bombs, destroy enemies/blocks, and survive to win.</li>
                            <li>Four custom maps inspired by ENSEEIHT locations (e.g., the school courtyard, student lounge).</li>
                            <li>Power-ups: Extra bombs, speed boosts, manual detonation, and more.</li>
                            <li>Local multiplayer: Play with friends on the same keyboard (or multiple keyboards).</li>
                            <li>Basic AI: Simple bot logic for solo or team play.</li>
                        </ul>
                        <p>Tech Stack:</p>
                        <ul>
                            <li><strong>LibGDX:</strong> Java-based game engine for rendering, input handling, and physics.</li>
                            <li><strong>MVC Architecture:</strong> Clean separation of game logic (Model), UI (View), and input handling (Controller).</li>
                            <li><strong>Design Patterns:</strong> Singleton (resource management), Factory (map generation), Observer (event handling), and Strategy (AI behavior).</li>
                            <li><strong>Agile Workflow:</strong> GitHub Projects for task tracking, CI/CD pipelines for testing, and Scrum sprints.</li>
                        </ul>
                        <p>UI/UX:</p>
                        <ul>
                            <li>Pixel-art graphics and animations.</li>
                            <li>Custom menus for player selection, map choice, and settings.</li>
                            <li>Sound effects and music for immersion.</li>
                        </ul>
                        <p><strong>Game Code & Playable Version:</strong><a href="https://github.com/t70n/bomber7/tree/main" target="_blank">You can find the source code and compile the game yourself !</a></p>
                        <p><strong>Project Report:</strong> For a detailed overview of the development process, design choices, and technical insights, check out the full report here:</p>
                        <br>
                        <div class="button-section">
                            <button type="button"><a href="https://github.com/t70n/bomber7/blob/main/livrables/rapport.pdf" target="_blank">Project Report</a></button>
                        </div>
                        <br><br>
                        <img class="custom-image" src="/img/bomber7_bonus.png" alt="HomeBox"/>
                    </section>
                    <section class="split-section">
                            <img class="custom-image" src="/img/bomber7_home.png" alt="HomeBox"/>
                            <img class="custom-image" src="/img/bomber7_play.png" alt="HomeBox"/>
                    </section>
                </div>
            </section>
        </div> 

        <div class="container">    
            <section class="split-section">
                <h2 class="centered"><em><u>ELECTRONIC PROJECTS</u></em></h2>
                <div class="container">
                    <section class="split-section">
                        <h3 class="centered">Laser-War</h3>
                        <p>This project was born from my desire to recreate the epic scenes of my childhood, specifically the aerial combat sequences from Star Wars. The idea was to develop a DIY laser tag game using Arduino and electronic components. Originally, this prototype was meant to be mounted on FPV drones.</p>
                        <p>Here’s how it works: a 7-segment display shows the player’s remaining "lives." If the laser (simulating continuous fire) hits an opponent’s lens, they lose a life. If the player has no lives left, the LEDs go red and the player is presumed dead.</p>
                        <p>The prototype worked perfectly, but it was never mounted on the drones: the components weren’t the right size for the setup. Instead, I repurposed it into a classic laser tag gun, more in line with traditional laser play games.</p>
                        <section>
                            <img class="custom-image" src="/img/laser_game.jpeg" alt="HomeBox"/>
                        </section>  
                    </section>
                    <section class="split-section">
                        <img class="custom-image" src="/img/laser_game3.jpg" alt="HomeBox"/>
                    </section>
                    <section class="split-section">
                        <img class="custom-image" src="/img/laser_game2.jpg" alt="HomeBox"/>
                    </section>
                </div>
                <div class="container">
                    <section class="split-section">
                        <img class="custom-image" src="/img/corto_densimeter.jpg" alt="Corto Densimeter"/>
                    </section>
                    <section class="split-section">
                        <h3 class="centered">Corto-Densimeter</h3>
                        <p>Corto Densimeter: A DIY Alcohol Meter for Craft Beer</p>
                        <p>Corto is an independent brewery in the Cantal region, France. I’m building a custom densimeter to measure the alcohol content of their beer in real time.</p>
                        <p>How it works:</p>
                        <ul>
                            <li>ESP32-C6 microcontroller for processing and Zigbee connectivity.</li>
                            <li>GY-6050 gyroscope to measure the sensor’s tilt in the liquid : alcohol percentage is calculated from it.</li>
                            <li>Powered by two 18650 batteries (3.7V, 3000mAh) for portability and long runtime.</li>
                            <li>Open-source firmware (C++/EspIDF) for precision and low-power operation.</li>
                        </ul>
                        <p>This project aim to give Corto a reliable, wireless tool to track alcohol levels during brewing.</p> 
                        <p>The project is still in development : follow the progress on <a href="https://github.com/Brasserie-Corto/Corto-Densimeter" target="_blank">GitHub</a>.</p>
                        <p>And if you’re into craft beer, check out Corto’s brews <a href="https://github.com/Brasserie-Corto" target="_blank">(comming soon)</a>.</p>
                    </section>
                </div>
            </section>
        </div>

        <div class="container">    
            <section class="split-section">
                <h2 class="centered"><em><u>RADIO PROJECTS</u></em></h2>
                <div class="container">
                    <section class="split-section">
                        <h3 class="centered">Frequency Jammer</h3>
                        <p>This IUT project allowed me to explore the fundamental concepts of frequency-modulated transmissions and their jamming. I started by studying the theoretical operation of a frequency jammer and then implemented two GNU Radio flowcharts: one for a simple sinusoidal signal and another to jam an audio communication. I used an Adalm Pluto to jam the Wi-Fi communication of a nearby access point, which provided a practical application of the concepts learned.</p>
                        <p>Although the project met its objectives, I faced challenges with the performance of virtual machines and PCs, which caused frequent crashes in the flowcharts, especially with high sample rates. I had to dedicate an entire machine to GNU Radio for proper testing.</p>
                        <p>The real-world test with the Adalm Pluto was especially rewarding. Initially, I tried jamming a car's radio communication, but the jammer lacked the necessary power. Instead, I successfully jammed a Wi-Fi access point.</p>
                        <br>
                        <div class="button-section">
                            <button type="button"><a href="/portfolio/pdf/sae31_rapport_chaveroux_halidi.pdf" target="_blank" rel="noopener noreferrer" class="button-link">Download Full Report (FR)</a></button>
                        </div>
                    </section>
                    <section class="split-section">
                        <video class="custom-video" controls muted>
                            <source src="/vid/jammer.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </section>
                </div>
                <div class="container">
                    <section class="split-section">
                        <video class="custom-video" controls muted>
                            <source src="/vid/radio.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </section>
                    <section class="split-section">
                        <h3 class="centered">Radio Listener</h3>
                        <p>This project aimed to understand FM radio signal modulation/demodulation by using the HackRF One SDR (Software-Defined Radio) to capture, process, and play live radio broadcasts.</p>
                        <p>Key Tools & Workflow:</p>
                        <ul>
                            <li>HackRF One: Captured raw FM radio signals.</li>
                            <li>GNU Radio: Processed and demodulated the signals to extract audio.</li>
                        </ul>
                        <p>Learning Focus: Understanding FM signal structure, SDR workflows, and real-time audio decoding—building on previous experience with the ADALM-Pluto in earlier radio projects.</p>
                    </section>
                </div>
            </section>
        </div>
        
        
        <h2 class="padded2">PRODUCTIONS : Discover real-world applications and solutions I've developed to address engineering challenges.</h2>
        <div>
            <h3 class="page_title centered">IN CONSTRUCTION... COMING SOON!</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EngineeringCourse'
};
</script>
