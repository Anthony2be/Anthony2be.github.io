<script>
    import { onMount } from 'svelte';

    export let username;

    let friends = []
    let width = 100;
    let innerWidth = window.innerWidth;

    function onResize(){
        width = (window.innerWidth - (friends.length * 50))/friends.length;
    }
            
    onMount(async () => {
        let data = await fetch(`https://api.github.com/users/${username}/following`)
            .then(res => res.json())
        friends = data;
        width = (innerWidth - (friends.length * 50))/friends.length;
    });

    window.addEventListener('resize', onResize);
</script>
<div>
    {#each friends as d}
        <a href={d.html_url}>
            <img src={d.avatar_url} alt="icon" {width} height={width}>
        </a>
    {/each}
</div>

<style>
    img,a{
        border-radius: 50%;
        margin:10px;
    }
    div{
        display: flex;
        justify-content: center;
    }
</style>