<script>
import Page from 'lib/Page'
import { link } from 'svelte-spa-router'
import { blogs } from 'plugins/store'
</script>

<Page>
  <main>

    {#each $blogs as blog}
      <div class='card'>
        <div class='text'>
          <h3 class='title'> {blog.title} </h3>

          <a use:link href={`/blog/${blog.id}`}>
            Read More
            <div class='i-carbon-arrow-right'/>
          </a>

        </div>
        <img src={blog.image} alt={blog.title}/>
      </div>
    {/each}

  </main>
</Page>

<style lang="scss">
main {
  display: flex;
  flex-wrap: wrap;
}

.card {
  /* --img-width: 30%; */
  --card-height: 12em;
  /* --text-width: calc(100% - var(--img-width)); */

  display: flex;
  justify-content: space-between;
  height: var(--card-height);
  width: calc(50% - 2em);
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin: 1em auto;
  text-align: left;

  .text {
    width: calc(100% - var(--card-height));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1em;

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
    }

    a {
      margin-top: 1em;
    }
  }

  img {
    object-fit: cover;
    height: 100%;
    width: var(--card-height);
    transition: .25s ease-out;
  }

  &:hover {
    img {
      z-index: 1;
      width: calc(var(--card-height) * 1.5);
    }
  }
}
</style>
