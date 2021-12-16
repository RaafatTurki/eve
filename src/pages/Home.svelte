<script>
import Img from 'lib/Img'
</script>

<main>
    <h1>Hello World</h1>
    <input type="button" value="click me">
    <input type="button" value="click me">
    <input type="button" value="click me">
    <p>Visit the <a href="https://svelte.dev/tutorial"> Svelte tutorial </a> to learn how to build Svelte apps.</p>



    <div class="flex">
        <!-- <img src='/img/me.jpg' alt="me"/> -->
        <!-- <img src='/img/potato.png' alt="potato"/> -->

        <Img src='/img/me.jpg' alt="me"/>
        <Img src='/img/potato.png' alt="potato"/>
        <!-- <Img src='/img/me.jpg' alt="me" lazy={false}/> -->
        <!-- <Img src='/img/potato.png' alt="potato" lazy={false}/> -->

    </div>

</main>

<style>
main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
}

h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}

.flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50vh;
}
</style>
