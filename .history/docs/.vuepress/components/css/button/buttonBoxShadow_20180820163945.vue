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
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
}
nav ul {
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

nav li {
  width: 8rem;
  height: 3rem;
  font-size: 14px;
  text-align: center;
  line-height: 3rem;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  transition: 0.3s;
  margin: 1rem;
  background: #fff;
  box-shadow: 0.5rem 0.5rem goldenrod;
  transition: all 0.3s linear;
  fonts
}

nav li:hover {
  color: #fff;
  background: goldenrod;
  transform: translate(0.5rem, 0.5rem);
  box-shadow: -0.5rem -0.5rem #fff;
}
</style>

