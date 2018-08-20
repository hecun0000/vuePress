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
  margin-top: 1rem;
  height: 10rem;
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
}


nav li::before,
nav li::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
  transition: 0.3s;
}

nav li::before {
  background-color: white;
  z-index: -1;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}

nav li::after {
  background-color: goldenrod;
  transform: translate(0.5rem, 0.5rem);
  z-index: -2;
}

nav li:hover {
  transform: translate(0.5rem, 0.5rem);
  color: white;
}

nav li:hover::before {
  background-color: goldenrod;
}

nav li:hover::after {
  background-color: white;
  transform: translate(-0.5rem, -0.5rem);
}
</style>

