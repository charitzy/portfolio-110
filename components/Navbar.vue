<template>
  <div class="container-fluid py-2 w-full h-14 sticky">
    <nav>
      <div class="font-Inter flex items-center">
        <div class="flex justify-between w-full">
          <div class="col-sm-6">
            <NuxtLink to="/" class="flex font-bold text-3xl">
              <span class="text-purple-700">C</span
              ><span class="text-red-700">G</span>
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <div class="col-sm-6 flex">
              <button
                @click="toggleMenu"
                :class="{ active: isMenuOpen }"
                class="rounded-3xl h-12 w-12 fixed pb-2 hover:scale-105 hover:text-blue-700 flex justify-center items-center"
              >
                <span
                  class="w-10 h-1 bg-black absolute top-1/2 transform -translate-x-1/2 -translate-y-px transition-transform duration-300"
                  :class="{ 'rotate-45': isMenuOpen }"
                ></span>
                <span
                  class="w-10 h-1 bg-black absolute top-1/2 transform -translate-x-1/2 transition-opacity duration-300"
                  :class="{ 'opacity-0': isMenuOpen }"
                ></span>
                <span
                  class="w-10 h-1 bg-black absolute top-1/2 transform -translate-x-1/2 transition-transform duration-300"
                  :class="{ '-rotate-45': isMenuOpen }"
                ></span>
                <span
                  class="w-10 h-1 bg-black absolute top-1/2 transform -translate-x-1/2 transition-transform duration-300"
                  :class="{ 'rotate-180': isMenuOpen }"
                ></span>
              </button>
              <!-- Dropdown Menu -->
              <transition name="fade">
                <div v-if="isMenuOpen" class="dropdown-menu mr-16 text-lg">
                  <!-- Menu Items -->
                  <NuxtLink
                    v-for="linkItem in linksData"
                    :key="linkItem.id"
                    :to="linkItem.path"
                    class="hover:text-yellow-500 flex sm:inline-flex"
                  >
                    <button
                      class="h-12 w-20 rounded-md text-lg mr-10 text-black cursor-pointer hover:bg-yellow-100 hover:font-bold"
                      @click="toggleMenu"
                    >
                      {{ linkItem.label }}
                    </button>
                  </NuxtLink>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      linksData: [
        { id: 1, path: "/", label: "Home" },
        { id: 2, path: "/", label: "About" },
        { id: 3, path: "/", label: "Portfolio" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
<style>
@media (max-width: 575px) {
  .custom-flex {
    display: flex;
  }
}
</style>
