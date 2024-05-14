<template>
    <div class="meal-menu">
        <div class="meal-menu__title">Savaitės maisto meniu</div>
        <div class="meal-menu__content">
            <div v-for="(mealInfo, index) in mealInfoList" :key="index" class="meal">
                <div class="meal__date">
                    <span class="day__value"
                        >{{ getWeekDay(mealInfo.date) }} - {{ format(mealInfo.date) }}</span
                    >
                    <span class="day__indicator"> d.</span>
                </div>
                <div class="meal__menu">
                    <div class="meal__title">Pusryčiai</div>
                    <div v-for="meal in mealInfo.breakfast" :key="meal" class="meal__text">
                        <Checkbox /> {{ meal }}
                    </div>
                    <div class="meal__title">Pietūs</div>
                    <div v-for="meal in mealInfo.lunch" :key="meal" class="meal__text">
                        <Checkbox /> {{ meal }}
                    </div>
                    <div class="meal__title">Vakarienė</div>
                    <div v-for="meal in mealInfo.dinner" :key="meal" class="meal__text">
                        <Checkbox /> {{ meal }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { DateTime } from 'luxon';
import { Checkbox } from '@/components/ui/checkbox';

import { ref } from 'vue';

const mealInfoList = ref([
    {
        date: DateTime.local().startOf('week'),
        breakfast: ['Natūralios vaisių sultys.', 'Braškių-pieno kokteilis.'],
        lunch: [
            'Pupelių sriuba (tausojantis), (augalinis). Kiaulienos maltinukai (tausojantis). Švieži agurkai ir pomidorai. Perlinės kruopos su morkomis. Stalo vanduo.'
        ],
        dinner: ['Sklindžiai su rikota. Trintos braškės. Sezoninis vaisius. Žalioji arbata.']
    },

    {
        date: DateTime.local().startOf('week').plus({ day: 1 }),
        breakfast: ['Natūralios vaisių sultys.', 'Braškių-pieno kokteilis.'],
        lunch: [
            'Pupelių sriuba (tausojantis), (augalinis). Kiaulienos maltinukai (tausojantis). Švieži agurkai ir pomidorai. Perlinės kruopos su morkomis. Stalo vanduo.'
        ],
        dinner: ['Sklindžiai su rikota. Trintos braškės. Sezoninis vaisius. Žalioji arbata.']
    },
    {
        date: DateTime.local().startOf('week').plus({ day: 2 }),
        breakfast: ['Natūralios vaisių sultys.', 'Braškių-pieno kokteilis.'],
        lunch: [
            'Pupelių sriuba (tausojantis), (augalinis). Kiaulienos maltinukai (tausojantis). Švieži agurkai ir pomidorai. Perlinės kruopos su morkomis. Stalo vanduo.'
        ],
        dinner: ['Sklindžiai su rikota. Trintos braškės. Sezoninis vaisius. Žalioji arbata.']
    },
    {
        date: DateTime.local().startOf('week').plus({ day: 3 }),
        breakfast: ['Natūralios vaisių sultys.', 'Braškių-pieno kokteilis.'],
        lunch: [
            'Pupelių sriuba (tausojantis), (augalinis). Kiaulienos maltinukai (tausojantis). Švieži agurkai ir pomidorai. Perlinės kruopos su morkomis. Stalo vanduo.'
        ],
        dinner: ['Sklindžiai su rikota. Trintos braškės. Sezoninis vaisius. Žalioji arbata.']
    },
    {
        date: DateTime.local().startOf('week').plus({ day: 4 }),
        breakfast: ['Natūralios vaisių sultys.', 'Braškių-pieno kokteilis.'],
        lunch: [
            'Pupelių sriuba (tausojantis), (augalinis). Kiaulienos maltinukai (tausojantis). Švieži agurkai ir pomidorai. Perlinės kruopos su morkomis. Stalo vanduo.'
        ],
        dinner: ['Sklindžiai su rikota. Trintos braškės. Sezoninis vaisius. Žalioji arbata.']
    }
]);

function format(date: DateTime): string {
    const dateValue = DateTime.fromJSDate(new Date(date.toMillis())).setLocale('lt');

    return `${dateValue.monthLong} ${dateValue.day}`;
}

function getWeekDay(date: DateTime): string {
    return DateTime.fromJSDate(new Date(date.toMillis())).setLocale('lt').weekdayLong || '-';
}
</script>

<style scoped lang="scss">
.meal-menu {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 900px;

    margin: 36px 0;

    &__title {
        font-size: 32px;
        font-weight: 500;

        margin-bottom: 20px;
    }

    &__content {
        border-radius: 6px;
        border: 1px solid #525252;
        overflow: hidden;
    }
}

.meal {
    &__date {
        font-size: 16px;
        font-weight: 600;

        border-bottom: 1px solid #525252;
        padding: 10px 15px;

        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 500;

        height: 40px;

        border-bottom: 1px solid #525252;
        padding: 0 15px;

        background-color: hsl(var(--secondary));
    }

    &__text {
        display: flex;
        align-items: center;
        gap: 8px;

        font-size: 14px;

        min-height: 40px;

        border-bottom: 1px solid #525252;
        padding: 10px 15px;
    }

    &:last-child {
        .meal__text:last-child {
            border-bottom: 0;
        }
    }
}

.day__value {
    text-transform: capitalize;
}
</style>
