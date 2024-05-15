import { beforeAll, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import { createPinia, setActivePinia } from 'pinia';

describe('HomeView component', () => {
    beforeAll(() => {
        setActivePinia(createPinia());
    });

    it('renders components correctly', () => {
        const wrapper = mount(HomeView);

        expect(wrapper.findComponent({ name: 'HeroSection' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'AboutSection' }).exists()).toBe(true);
        expect(wrapper.findComponent({ name: 'PricesSection' }).exists()).toBe(true);
    });
});
