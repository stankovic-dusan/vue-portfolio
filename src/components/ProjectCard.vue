<template>
  <div class="container">
    <div class="project" @mouseover="projectVisbile = true" @mouseleave="projectVisbile = false" :class="{ active: projectVisbile }">
      <div class="project-details">
        <h1>{{ title }}</h1>
        <div class="project-image" :style="{ 'background-image': 'url(' + image + ')' }"></div>
        <p>{{ stack }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectVisbile: false,
    };
  },
  props: ["title", "image", "stack"],
};
</script>

<style lang="scss" scoped>
.container {
  .project {
    cursor: pointer;
    width: 100%;

    .project-details {
      margin: 0;
      padding: 48px 15px;
      display: flex;
      justify-content: space-between;
      position: relative;
    }

    h1,
    p {
      margin: 0px;
    }
  }

  .active {
    background-color: white;

    .project-details {
      h1,
      p {
        color: black;
      }
      .project-image {
        position: fixed;
        top: 40%;
        left: 40%;
        width: 720px;
        height: 470px;
        background-color: #e6e9eb;
        border-radius: 24px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
      }
    }
  }
}
</style>
