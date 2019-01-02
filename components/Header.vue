<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Label Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/labels" class="nav-link">Labels</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to='/labels/new' class="nav-link">New label</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

