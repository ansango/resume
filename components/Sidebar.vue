<template>
  <div>
    <div class="md:mt-52 md:fixed">
      <div class="md:block">
        <img
          v-if="$colorMode.preference === 'light'"
          style="user-drag: none"
          class="shadow-xl h-32 w-32 rounded-full mx-auto mx-4"
          src="~/assets/img/me.jpeg"
          alt="me"
        />
        <img
          v-else
          style="user-drag: none"
          class="shadow-xl h-32 w-32 rounded-full mx-auto mx-4"
          src="~/assets/img/me_dark.jpg"
          alt="me"
        />
        <div class="mb-12 text-center mt-4 justify-center items-center">
          <h1
            class="text-2xl text-xl text-gray-800 font-bold dark:text-blue-100"
          >
            Aníbal Santos
          </h1>
          <div class="md:text-lg text-gray-600 dark:text-blue-100">
            Frontend Developer
          </div>
          <a
            href="mailto:anibalsantosgo@gmail.com"
            class="text-gray-600 md:hidden mt-1 dark:text-blue-100"
          >
            anibalsantosgo@gmail.com
          </a>
        </div>
      </div>
      <div class="mx-7 hidden md:block">
        <div class="my-2 text-gray-600 flex dark:text-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            class="mr-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a href="mailto:anibalsantosgo@gmail.com">anibalsantosgo@gmail.com</a>
        </div>
        <div class="my-2 text-gray-600 flex dark:text-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="24"
            height="24"
            class="mr-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            Salamanca, <span class="capitalize">{{ $t('spain') }}</span>
          </p>
        </div>
        <div class="my-2 text-gray-600 flex dark:text-blue-200">
          <svg
            class="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"
            />
          </svg>
          <a href="https://www.linkedin.com/in/ansango/">ansango</a>
        </div>
        <a
          href="https://github.com/ansango"
          class="shadow-lg my-5 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out w-full py-2 text-white rounded-xl text-base"
        >
          <svg
            role="img"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            class="mx-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="#ffffff"
            />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
