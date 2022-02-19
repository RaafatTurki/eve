<script>
// import Img from 'lib/Img'
import Page from 'lib/Page'
// import {link} from 'svelte-spa-router'
import { blogs } from 'plugins/store'

export let params = {}

let blog = $blogs[params.id]

</script>

<Page>
    <div>
        <div class='blog'>
          <div class='header'>
            <span class='title'>{blog.title}</span>
            <span class='date'>{blog.date}</span>
          </div>

          <div class='line-spacer'/>
          <div class='content'>
            <img class='image' src={blog.image} alt={blog.title}/>
            {blog.text}
          </div>
        </div>
       <!-- <h3>Page was not found</h3> -->
    </div>
</Page>

<style>
.blog {
  width: 75ch;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--fg);
  margin-bottom: 1em;
  align-items: end;
}

.date {
  color: var(--fg);
}

.title {
  font-size: 1.5rem;
  /* font-weight: bold; */
  text-align: left;
}

.content {
  text-align: left;
  font-size: 1rem;
  color: var(--mg);
}

.image {
  width: 16em;
  height:16rem;
  border-radius: 4px;
  object-fit: cover;
  float: right;
  margin: 0 1em 1em 1em;
}

</style>
