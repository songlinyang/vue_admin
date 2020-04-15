<template>
    <div>
        <h1>messages</h1>
        <ul>
            <li v-for="(message,index) in messages" :key="index">
                {{message}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages : ['message1','message2','message3']
        }
    }
}
</script>>

<style lang="stylus" scoped>

</style>