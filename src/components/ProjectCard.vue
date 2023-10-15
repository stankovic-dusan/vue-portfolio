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

<style lang="scss" scoped>
.project {
  .project-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;

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
  height: auto;

  h3,
  p {
    color: black;
  }

  .project-image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;

    height: auto;

    img {
      width: 50%;
    }
  }
}

@media (max-width: 1200px) {
  .project {
    .project-details {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .active {
    background: none;
    cursor: none;

    h3,
    p {
      color: white;
    }

    .project-image {
      display: none;
    }
  }
}

@media (max-width: 940px) {
  .project {
    .project-details {
      margin-top: 10px;

      h3 {
        font-size: 40px;
      }

      p {
        font-size: 18px;
      }
    }
  }
}
</style>
