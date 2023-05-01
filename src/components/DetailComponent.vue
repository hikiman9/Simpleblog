<template>
    <div>
        <h5>{{ contents[$route.params.id].title }}</h5>
        <h6>{{ contents[$route.params.id].date }}</h6>
        <p>{{ contents[$route.params.id].content }}</p>
    </div>
</template>
<script>
export default {
    name : 'DetailComponent',
    props : {
        contents : Array,
    }
}
</script>
<style>
    
</style>