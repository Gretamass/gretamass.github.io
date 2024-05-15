import { beforeAll, describe, it, expect } from 'vitest';
import AboutSection from '@/components/home/AboutSection.vue';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { useMainStore } from '@/stores/main/mainStore';

describe('AboutSection component', () => {
    beforeAll(() => {
        setActivePinia(createPinia());
    });

    it('renders about section correctly', () => {
        const { aboutText } = useMainStore();

        const wrapper = mount(AboutSection);

        expect(wrapper.find('.about__title').text()).toBe('Plačiau apie mus');

        expect(wrapper.find('.about__image').attributes('src')).toBe(
            '/src/assets/images/aboutSection.png'
        );

        expect(wrapper.find('.about__description-title').text()).toBe(aboutText.descriptionTitle);
        expect(wrapper.find('.about__description').text()).toBe(aboutText.description);
    });
});
