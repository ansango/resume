<template>
  <transition name="modal-fade">
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-3">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first_name"
                            class="block text-sm font-medium text-gray-700"
                            >First name</label
                          >
                          <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            autocomplete="given-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last_name"
                            class="block text-sm font-medium text-gray-700"
                            >Last name</label
                          >
                          <input
                            id="last_name"
                            type="text"
                            name="last_name"
                            autocomplete="family-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="email_address"
                            class="block text-sm font-medium text-gray-700"
                            >Email address</label
                          >
                          <input
                            id="email_address"
                            type="text"
                            name="email_address"
                            autocomplete="email"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-6">
                          <label
                            for="about"
                            class="block text-sm font-medium text-gray-700"
                          >
                            About
                          </label>
                          <div class="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows="3"
                              class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            ></textarea>
                          </div>
                          <p class="mt-2 text-sm text-gray-500">
                            Brief description for your profile. URLs are
                            hyperlinked.
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              @click="close"
            >
              Deactivate
            </button>
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="close"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
