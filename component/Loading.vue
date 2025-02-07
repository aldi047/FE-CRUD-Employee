<template>
    <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div> {{ title }} ...
</template>

<script>
export default{
    name: "Loading",
    props: {
        title: String
    }
}
</script>