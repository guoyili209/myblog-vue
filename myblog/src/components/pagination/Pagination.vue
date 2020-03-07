/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-04 09:41
*/
<template>
    <div>
        <li class="page-item active"><a class="page-link" href="#">{{pagecount}}</a></li>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props:{
        pagecount:Number
    }
}
</script>

<style scoped>

</style>
