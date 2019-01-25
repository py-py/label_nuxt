<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">Label Project</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/labels">Labels</b-nav-item>
        <b-nav-item href="/labels/new">New Label</b-nav-item>
        <li><hr/></li>
        <b-nav-item href="/auth/signin">Sign In</b-nav-item>
        <b-nav-item href="/auth/signup">Sign Up</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
hr {
  margin: 2px 0;
  background-color: rgba(255, 255, 255, 0.5);
}


@media screen and (min-width: 1024px) {
    .hr {
        display: none !important;
    }
}
</style>
