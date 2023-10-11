<template>
  <div class="project" @mouseover="detailsVisbile = true" @mouseleave="detailsVisbile = false" :class="{ active: detailsVisbile }">
    <div class="project-details">
      <h3>{{ title }}</h3>
      <p>{{ stack }}</p>
      <p>{{ date }}</p>
    </div>
    <div class="project-image" v-show="detailsVisbile">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsVisbile: false,
    };
  },
  props: ["title", "stack", "date", "image", "path"],
  methods: {
    toogleProject() {
      this.detailsVisbile = !this.detailsVisbile;
    },
  },
};
</script>

<style lang="scss">
.project {
  margin: 0 100px;

  .project-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    h3 {
      font-size: 72px;
      margin: 30px 0;
    }

    p {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
}

.active {
  background-color: white;
  cursor: pointer;

  h3,
  p {
    color: black;
  }

  .project-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;

    // height: 40vh;

    img {
      width: 50%;
    }
  }
}
</style>
