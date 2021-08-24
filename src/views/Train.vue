<template>
    <div class="main">
            <div class="son"></div>
            <div class="son"></div>
            <div class="son"></div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.main{
    width: 700px;
    height: 500px;
    background-color: lightcoral;
    display: flex;
    // flex-direction: column-reverse;              决定容器对齐方式  左右还是上下
    // justify-content: space-around;               决定容器之间距离
    align-items: center;                                 //垂直方向的对其方式
    //不给父标签高度 align-items不生效

}
.son{
    width: 100px;
    height: 50px;
    background-color: lightskyblue;
    margin: 10px;
}
</style>