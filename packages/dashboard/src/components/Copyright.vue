<template>
  <footer class="footer">
    <p class="text">Something here to give the footer a purpose!</p>
    <p class="copyright">
      Copyright ©
      <a href="/#">Your Website</a>
      {{ "" + new Date().getFullYear() + "." }}
    </p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 1rem;
}

p {
  padding: 0;
  margin: 0;
}

.text {
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
}

.copyright {
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.54);
}
</style>

