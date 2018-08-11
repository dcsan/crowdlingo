<template>
<div>
  <div v-for="post in posts">
    <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
    <p>{{ post.frontmatter.description }}</p>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith('/speaking/'))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
      }
  }
}
</script>