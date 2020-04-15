<template>
    <div>
        <h1>资讯{{$route.params.id}}</h1>
        <div>
            <ul>
                <li>id: {{messageDetail.id}}</li>
                <li>news: {{messageDetail.name}}</li>
                <li>contents: {{messageDetail.content}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageDetail : {}
        }
    },
    mounted() {
        //此处模拟后台接口返回值
        setTimeout(() =>{
            const messageContents = [
                {
                    id:1,
                    name:'news1',
                    content:'this is news1 content.....'
                },
                {
                    id:2,
                    name:'news2',
                    content:'this is news2 content.....'
                },
                {
                    id:3,
                    name:'news3',
                    content:'this is news3 content.....'
                }
            ]
            this.messageContents = messageContents
            let id = this.$route.params.id*1
            this.messageDetail = messageContents.find(detail => detail.id === id)
        },1000)
    },
    watch : {
        $route: function (value) { //路由路径(param)发生了变化
            const id = value.params.id * 1
            this.messageDetail = this.messageContents.find(detail => detail.id === id)
        }
    }
}
</script>>

<style lang="stylus" scoped>

</style>