<template>
  <div class="h-screen w-full">
    <div class="container py-4">
      <div class="py-4 p-lg-4">
        <div class="row p-5">
          <div class="col-lg-6 max-w-xl">
            <h3 class="text-black" ref="typeItTextH3">
              <span class="text-5xl"><small>Hello, I am </small><br /></span>
              <span class="text-8xl font-bold">Carlo Gaballo</span>
            </h3>

            <p
              class="text-xl md:text-2xl lg:pr-10 text-gray-700"
              ref="typeItTextp"
              v-show="showp"
            >
              Over the past 3 years, I've worked on some small projects for my
              academic journey. I am now offering my services
            </p>
          </div>

          <div class="col col-lg-6 col-sm-6 col-md-6 relative">
            <img
              class="absolute -top-20 md:w-10/12 rounded-full overflow-hidden md:scale-110 sm:scale-150"
              src="~/assets/images/nonformal-trans.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from "typeit";

export default {
  data() {
    return {
      showp: false,
    };
  },
  mounted() {
    this.typeInH3();
  },
  methods: {
    typeInH3() {
      new TypeIt(this.$refs.typeItTextH3, {
        speed: 50,
        afterComplete: (instance) => {
          instance.destroy();
          this.showp = true;
          this.$nextTick(() => {
            this.typeInp();
          });
        },
      })

        .pause(300)
        .go();
    },
    typeInp() {
      new TypeIt(this.$refs.typeItTextp, {
        speed: 50,
        afterComplete: (instance) => {
          instance.destroy();
          // Delay before starting the loop again
          setTimeout(() => {
            this.showp = false;
            this.typeInH3();
          }, 500);
        },
      })
        .go()
        .pause(200)

        .go();
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here */
</style>
