<script>
    import Friends from "./lib/Friends.svelte";
    import Icon from "./lib/Icon.svelte"; 
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faLightbulb } from '@fortawesome/free-solid-svg-icons/index.es'
</script>

<main>
    <Fa icon={faLightbulb}/>
    <Icon username="Anthony2be"/>
    <Friends username="Anthony2be"/>
</main>

<style>
    main {
        height: 100vh;
        width: 100vw;
        background-color: darkgrey;
        margin: 0px;
    }
</style>