import { createRouter, createWebHistory } from 'vue-router';

import Welcome from './views/welcome.vue';
import Engineering_Course from './views/engineering_course.vue';
import International_Mobility from './views/international_mobility.vue';
import Sustainability_Civic_Engagement from './views/sustainability_civic_engagement.vue';
import Career_Development from './views/career_development.vue';
import Sport_Other_Activities from './views/sport-other-activities.vue';

const routes = [
    { path: '/', component: Welcome },
    { path: '/engineering_course', component: Engineering_Course },
    { path: '/international_mobility', component: International_Mobility },
    { path: '/sustainability_civic_engagement', component: Sustainability_Civic_Engagement },
    { path: '/career_development', component: Career_Development },
    { path: '/sport_other_activities', component: Sport_Other_Activities }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
