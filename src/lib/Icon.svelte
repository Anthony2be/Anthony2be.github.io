<script>
    import { onMount } from 'svelte';

    export let username;

    let url, icon

    onMount(async () => {
        let data = await fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())

        url = data.html_url
        icon = data.avatar_url
    });
</script>

<div>
    <a href={url}>
        <img src={icon} alt="icon" width="200" height="200">
    </a>
</div>

<style>
    img{
        border-radius: 50%;
    }
    div{
        display: flex;
        justify-content: center;
    }
</style>