<template>
<div>
  Section
  <ul>
    <li v-for="post in posts">
      <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
      | <span>{{ post.frontmatter.description }}</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    posts() {
      // TODO - passing in props for the section name
      console.log("toc-box")
      return this.$site.pages
        .filter(x => x.path.startsWith('/speaking/'))
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
      }
  }
}
</script>