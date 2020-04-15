<template>
    <div>
        <h1>news</h1>
        <ul>
            <li v-for="news in newsArr" :key="news.id">
               <router-link :to="`/home/news/details/${news.id}`">{{news.msg}}</router-link> 
                <button @click="pushShow(news.id)">push查看</button>
                <button @click="replaceShow(news.id)">replace查看</button>
            </li>
        </ul>
        <button @click="backShow">回退上一级</button>
        <hr>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'News',
    data() {
        return {
            newsArr : [
                {id:'1',msg:'news1'},
                {id:'2',msg:'news2'},
                {id:'3',msg:'news3'}
            ]
        }
    },
    methods : {
        pushShow(id){
            this.$router.push(`/home/news/details/${id}`)
        },
        replaceShow(id) {
            this.$router.replace(`/home/news/details/${id}`)
        },
        backShow(){
            
        }
    }
}
</script>>

<style lang="stylus" scoped>

</style>