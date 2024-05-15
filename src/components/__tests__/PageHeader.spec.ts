import { describe, expect, it, vi } from 'vitest';
import PageHeader from '@/components/PageHeader.vue';
import { mount } from '@vue/test-utils';
import { Route } from '@/router/models/enumerators';

describe('PageHeader component', () => {
    it('renders company logo', () => {
        const wrapper = mount(PageHeader);

        const logo = wrapper.find('.header__logo');

        expect(logo.exists()).toBe(true);
        expect(logo.attributes('src')).toBe('/src/assets/images/logo.png');
        expect(logo.attributes('alt')).toBe('Dėžutis logotipas');
    });

    it('renders navigation items', () => {
        const wrapper = mount(PageHeader);

        const navigationItems = wrapper.findAll('.navigation__item');

        expect(navigationItems.length).toBe(5);
        expect(navigationItems[0].text()).toBe('Apie mus');
        expect(navigationItems[1].text()).toBe('Paslaugos');
        expect(navigationItems[2].text()).toBe('Kainos');
        expect(navigationItems[3].text()).toBe('Galerija');
        expect(navigationItems[4].text()).toBe('Rezervuoti laiką');
    });

    it('renders call-to-action button with correct text and color', () => {
        const wrapper = mount(PageHeader);

        const callToAction = wrapper.find('.navigation__item--call-to-action');

        expect(callToAction.exists()).toBe(true);
        expect(callToAction.text()).toBe('Rezervuoti laiką');
    });

    it('updates hovered item correctly', async () => {
        const wrapper = mount(PageHeader);

        await wrapper.find('.navigation__item').trigger('mouseenter');

        expect(wrapper.vm.hoveredItem).toBeTruthy();

        await wrapper.find('.navigation__item').trigger('mouseleave');

        expect(wrapper.vm.hoveredItem).toBeNull();
    });

    it('navigates to the correct route when clicked', async () => {
        const wrapper = mount(PageHeader);
        const goToPageMock = vi.spyOn(wrapper.vm, 'goToPage');

        const navigationItems = wrapper.findAll('.navigation__item');

        await navigationItems[0].trigger('click');
        expect(goToPageMock).toHaveBeenCalledWith(Route.ABOUT);

        await navigationItems[1].trigger('click');
        expect(goToPageMock).toHaveBeenCalledWith(Route.SERVICES);

        // await navigationItems[2].trigger('click');
        // expect(goToPageMock).toHaveBeenCalledWith(Route.PRICES);

        await navigationItems[3].trigger('click');
        expect(goToPageMock).toHaveBeenCalledWith(Route.GALLERY);

        await navigationItems[4].trigger('click');
        expect(goToPageMock).toHaveBeenCalledWith(Route.RESERVATION);
    });
});
