<template>
  <div class="">
    <div class="mx-4 mb-6">
      <h2
        class="mb-4 text-4xl text-gray-700 dark:text-gray-100 font-bold capitalize"
      >
        {{ $t('summaryTitle') }}
      </h2>
      <p class="text-lg shadow-lg rounded-lg p-10 dark:text-gray-100">
        {{ $t('summaryText') }}
      </p>
    </div>
    <div class="mx-4 opacity-100">
      <h2
        class="mb-4 text-4xl text-gray-700 dark:text-gray-100 font-bold capitalize"
      >
        {{ $t('experienceTitle') }}
      </h2>
      <ul>
        <li
          v-for="job in experience.jobs"
          :key="job.id"
          class="shadow-lg rounded-lg p-10 my-6"
        >
          <h3
            class="text-2xl font-medium text-gray-800 dark:text-gray-100 capitalize"
          >
            {{ job.name }}
          </h3>
          <div class="mt-1">
            <div>
              <i class="bx bx-buildings" style="color: #666"></i>
              <small
                class="text-base text-gray-800 capitalize dark:text-gray-100"
              >
                {{ job.company }}</small
              >
            </div>
            <div>
              <i class="bx bx-calendar text-sm" style="color: #666"></i>
              <small class="text-sm text-gray-600 dark:text-gray-300"
                >{{ job.start }} - {{ job.end }}</small
              >
            </div>
            <div>
              <i class="bx bx-calendar text-sm" style="color: #666"></i>
              <small class="text-sm text-gray-800 dark:text-gray-100"
                >{{ job.description }}
              </small>
            </div>
          </div>
          <div class="flex justify-end items-center">
            <div v-for="icon in job.icons" :key="icon.name" class="mr-2 mt-3">
              <img
                style="user-drag: none"
                class="w-10 y-10"
                :src="require(`~/assets/img/icons/${icon.element}.svg`)"
                :alt="`${icon.name}`"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mx-4">
      <h2
        class="mb-4 text-4xl text-gray-700 font-bold capitalize dark:text-gray-100"
      >
        {{ $t('educationTitle') }}
      </h2>
      <ul>
        <li
          v-for="study in education"
          :key="study.id"
          class="shadow-lg rounded-lg p-10 my-6"
        >
          <h3
            class="text-2xl font-medium text-gray-800 capitalize dark:text-gray-100"
          >
            {{ study.certificate }}
          </h3>
          <div class="mt-1">
            <div>
              <i class="bx bx-buildings" style="color: #666"></i>
              <small class="text-base text-gray-800 dark:text-gray-100">
                {{ study.school }}</small
              >
            </div>
            <div>
              <i class="bx bx-calendar text-sm" style="color: #666"></i>
              <small class="text-sm text-gray-600 dark:text-gray-300"
                >{{ study.start }} - {{ study.end }}</small
              >
            </div>
            <div>
              <i class="bx bx-calendar text-sm" style="color: #666"></i>
              <small class="text-sm text-gray-800 dark:text-gray-100"
                >{{ study.description }}
              </small>
            </div>
            <p
              class="flex text-md font-medium text-gray-800 dark:text-gray-100 capitalize mt-2"
            >
              <svg
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                widt="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                /></svg
              ><span>{{ study.score }}</span>
            </p>
            <div class="flex justify-end items-center">
              <div
                v-for="icon in study.icons"
                :key="icon.name"
                class="mr-2 mt-3"
              >
                <img
                  style="user-drag: none"
                  class="w-10 h-10 select-none"
                  :src="require(`~/assets/img/icons/${icon.element}.svg`)"
                  :alt="`${icon.name}`"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mx-4">
      <h2 class="mb-4 text-4xl text-gray-700 font-bold">Skills</h2>

      <ul class="mb-6 flex flex-wrap">
        <li
          v-for="skill in skills"
          :key="skill.id"
          :class="`flex items-center mr-2 my-1 shadow-md rounded-full bg-yellow-200 px-4 text-sm py-2 font-medium text-${skill.color}-800 transform hover:scale-110 motion-reduce:transform-none`"
        >
          <img
            style="user-drag: none"
            class="w-5 h-5 mr-1 select-none"
            :src="require(`~/assets/img/icons/${skill.icon}.svg`)"
            :alt="`${skill.name}`"
          />
          <span>{{ skill.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentMain',
  data() {
    return {
      experience: {
        jobs: [
          {
            id: 1,
            name: this.$t('jobMetropolis'),
            company: 'metropolis.coop',
            href: '',
            description: this.$t('descriptionMetropolis'),
            start: `${this.$t('september')} - 2020`,
            end: this.$t('now'),
            icons: [
              { id: 3, name: 'javascript', element: 'js' },
              { id: 3, name: 'typecript', element: 'typescript' },
              { id: 3, name: 'sass', element: 'sass' },
              { id: 2, name: 'tailwind', element: 'tailwindcss' },
              { id: 1, name: 'nuxt', element: 'nuxt' },
              { id: 3, name: 'node', element: 'nodejs' },
              { id: 3, name: 'mongogit', element: 'mongo' },
              { id: 3, name: 'git', element: 'git' },
            ],
          },
          {
            id: 2,
            name: this.$t('jobEveris'),
            company: 'everis',
            href: '',
            description: this.$t('descriptionEveris'),
            start: `${this.$t('january')} - 2020`,
            end: this.$t('now'),
            icons: [
              { id: 3, name: 'html5', element: 'html5' },
              { id: 3, name: 'css3', element: 'css3' },
              { id: 3, name: 'jquery', element: 'jquery' },
              { id: 3, name: 'bootstrap', element: 'bootstrap' },
              { id: 3, name: 'git', element: 'git' },
            ],
          },
          {
            id: 3,
            name: this.$t('jobYowi'),
            company: 'yowi.tv',
            href: '',
            description: this.$t('descriptionYowi'),
            start: `${this.$t('march')} - 2018`,
            end: `${this.$t('january')} - 2020`,
            icons: [
              { id: 3, name: 'vue', element: 'vue' },
              { id: 3, name: 'bootstrap', element: 'bootstrap' },
              { id: 3, name: 'git', element: 'git' },
            ],
          },
        ],
      },
      education: [
        {
          id: 1,
          certificate: this.$t('certificateUOC'),
          school: 'Universitat Oberta de Catalunya',
          description: this.$t('descriptionUOC'),
          score: '~',
          start: 2019,
          end: `${this.$t('now')}`,
          icons: [
            { id: 3, name: 'material', element: 'material' },
            { id: 3, name: 'figma', element: 'figma' },
            { id: 3, name: 'javascript', element: 'js' },
            { id: 3, name: 'typescript', element: 'typescript' },
            { id: 3, name: 'parcel', element: 'parcel' },
            { id: 2, name: 'tailwind', element: 'tailwindcss' },
            { id: 3, name: 'angular', element: 'angular' },
            { id: 2, name: 'laravel', element: 'laravel' },
          ],
        },
        {
          id: 2,
          certificate: this.$t('certificateIlerna'),
          school: 'Ilerna FP Online',
          description: this.$t('descriptionIlerna'),
          score: '8.83/10',
          start: 2016,
          end: 2018,
          icons: [
            { id: 1, name: 'c#', element: 'c#' },
            { id: 2, name: 'java', element: 'java' },
            { id: 3, name: 'sql', element: 'sql' },
            { id: 4, name: 'android', element: 'android' },
          ],
        },
        {
          id: 3,
          certificate: this.$t('certificateUSAL'),
          school: this.$t('USAL'),
          description: this.$t('descriptionUSAL'),
          score: '7.2/10',
          start: 2007,
          end: 2012,
          icons: [{ id: 1, name: 'law', element: 'law' }],
        },
      ],
      skills: [
        { id: 1, name: 'HTML5', color: 'yellow', icon: 'html5' },
        { id: 2, name: 'CSS3', color: 'blue', icon: 'css3' },
        { id: 3, name: 'SASS', color: 'red', icon: 'sass' },
        { id: 4, name: 'JavaScript', color: 'yellow', icon: 'js' },
        { id: 5, name: 'TypeScript', color: 'blue', icon: 'typescript' },
        { id: 6, name: 'Git', color: 'red', icon: 'git' },
        { id: 7, name: 'Node', color: 'green', icon: 'nodejs' },
        { id: 8, name: 'Express', color: 'gray', icon: 'express' },
        { id: 9, name: 'Laravel', color: 'red', icon: 'laravel' },
        { id: 10, name: 'SQL', color: 'red', icon: 'sql' },
        { id: 11, name: 'MongoDB', color: 'green', icon: 'mongo' },
        { id: 12, name: 'npm', color: 'red', icon: 'npm' },
        { id: 13, name: 'Webpack', color: 'blue', icon: 'webpack' },
        { id: 14, name: 'Parcel', color: 'yellow', icon: 'parcel' },
        { id: 15, name: 'Prettier', color: 'pink', icon: 'prettier' },
        { id: 16, name: 'ESLint', color: 'purple', icon: 'eslint' },
        { id: 17, name: 'Vue.js', color: 'green', icon: 'vue' },
        { id: 18, name: 'Nuxt.js', color: 'green', icon: 'nuxt' },
        { id: 19, name: 'Angular', color: 'red', icon: 'angular' },
        { id: 20, name: 'Tailwind CSS', color: 'green', icon: 'tailwindcss' },
        { id: 21, name: 'Bootstrap', color: 'purple', icon: 'bootstrap' },
        { id: 22, name: 'Materialize', color: 'red', icon: 'materialize' },
        { id: 23, name: 'Bulma', color: 'green', icon: 'bulma' },
        { id: 24, name: 'Vuetify', color: 'blue', icon: 'vuetify' },
        { id: 25, name: 'Jest', color: 'red', icon: 'jest' },
        { id: 26, name: 'Mocha', color: 'yellow', icon: 'mocha' },
        { id: 27, name: 'Linux', color: 'gray', icon: 'linux' },
        { id: 28, name: 'Ubuntu', color: 'purple', icon: 'ubuntu' },
        { id: 29, name: 'Figma', color: 'purple', icon: 'figma' },
        { id: 30, name: 'Sketch', color: 'yellow', icon: 'sketch' },
        { id: 31, name: 'Justinmind', color: 'green', icon: 'justinmind' },
        { id: 32, name: 'UX/UI Designs', color: 'yellow', icon: 'ux' },
        { id: 33, name: 'Adobe Photoshop', color: 'blue', icon: 'photoshop' },
        { id: 34, name: 'Material Design', color: 'gray', icon: 'material' },
        { id: 35, name: 'Google Tag Manager', color: 'blue', icon: 'gtm' },
        {
          id: 36,
          name: 'Google Analytics',
          color: 'yellow',
          icon: 'analytics',
        },
      ],
    }
  },
}
</script>

<style></style>
