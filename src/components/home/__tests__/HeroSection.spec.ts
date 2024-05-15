import { beforeAll, describe, expect, it } from 'vitest';
import HeroSection from '@/components/home/HeroSection.vue';
import { mount } from '@vue/test-utils';
import { useMainStore } from '@/stores/main/mainStore';
import { createPinia, setActivePinia } from 'pinia';

describe('HeroSection component', () => {
    beforeAll(() => {
        setActivePinia(createPinia());
    });

    it('renders hero text correctly', () => {
        const { heroText } = useMainStore();
        const wrapper = mount(HeroSection);

        expect(wrapper.find('.hero__text').text()).toBe(heroText);
    });

    it('renders hero image correctly', () => {
        const wrapper = mount(HeroSection);

        expect(wrapper.find('.hero__image').attributes('src')).toBe('/src/assets/images/hero.png');
    });
});
