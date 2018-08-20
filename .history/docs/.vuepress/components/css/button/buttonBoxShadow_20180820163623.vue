<template>
    <div class='buttons'>
        <nav>
        <ul>
            <li>home</li>
            <li>products</li>
            <li>services</li>
            <li>contact</li>
        </ul>
        </nav>
    </div>
</template>

<style scoped>
.buttons {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
}
nav ul {
  padding: 0;
  list-style-type: none;
}

nav li {
  width: 20rem;
  height: 7rem;
  font-size: 20px;
  text-align: center;
  line-height: 7rem;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;
  margin: 3rem;
  background: #fff;
  box-shadow: 1.5rem 1.5rem goldenrod;
  transition: all 0.3s linear;
}

nav li:hover {
  color: #fff;
  background: goldenrod;
  transform: translate(1.5rem, 1.5rem);
  box-shadow: -1.5rem -1.5rem #fff;
}
</style>

