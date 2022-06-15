<script>
    import Friends from "./lib/Friends.svelte";
    import Icon from "./lib/Icon.svelte"; 
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faLightbulb } from '@fortawesome/free-solid-svg-icons/index.es'

    const username = "Anthony2be";
</script>

<main>
    <Fa icon={faLightbulb}/>
    <Icon {username}/>
    <Friends {username}/>
</main>

<style>
    main {
        height: 100vh;
        width: 100vw;
        background-color: darkgrey;
        margin: 0px;
    }
</style>