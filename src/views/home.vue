<template>
    <div>
        <h1>Home页面</h1>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <router-link to="/home/news">News</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/home/messages">Messages</router-link>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="ta-pane fade show active">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>>

<style lang="stylus" scoped>

</style>