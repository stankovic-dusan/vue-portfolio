<template>
  <nav>
    <ul>
      <li><a href="#Work">(Work)</a></li>
      <li>
        <a href="#About"><span>·</span>(About)</a>
      </li>
      <li>
        <a href="#Contact"><span>·</span>(Contact)</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
nav {
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    color: white;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      color: white;
      list-style: none;
      float: left;
      padding-top: 20px;

      a {
        color: white;
        text-decoration: none;
        font-size: 20px;

        span {
          padding: 5px;
        }
      }
    }
  }
}
</style>
