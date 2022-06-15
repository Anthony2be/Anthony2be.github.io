<script>
    import { onMount } from 'svelte';

    export let username;

    let friends = []
    
    onMount(async () => {
        let data = await fetch(`https://api.github.com/users/${username}/following`)
            .then(res => res.json())
        friends = data;
    });
</script>
<div>
    {#each friends as d}
        <a href={d.html_url}>
            <img src={d.avatar_url} alt="icon" width="100" height="100">
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