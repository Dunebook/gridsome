<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="headerText">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&family=Rubik&display=swap');
body {
  font-family: 'Rubik', karla, -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 4rem;
  padding-bottom: 4rem
}

.header {
 
  margin-bottom: .75rem;
  font-weight: 700;
}

.headerText{
  text-decoration: none;
   font-size: 4rem;
  color: #5828e8;
}

.nav__link {
  margin-left: 20px;
}

@media (max-width: 760px){
  body{
    margin-right: 8px;
    margin-left: 8px;
  }
  .layout{
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
