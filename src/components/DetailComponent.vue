<template>
    <div>
        <h5>{{ contents[0].title }}</h5>
        <h6>{{ contents[0].date }}</h6>
        <p>{{ contents[0].content }}</p>
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