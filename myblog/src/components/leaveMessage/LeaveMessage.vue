/*
 * author: guoyili
 * email:  guoyili209@gmail.com
 * date:   2020-03-04 09:19
*/
<template>
    <div>
        <div class="form-group">
        <label class="title">{{message.ymd}} {{message.time}}  {{message.ipregion}}网友：</label>
        <p class="border msgbg">{{message.msg}}</p>
        </div>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'LeaveMessage',
    props:{
        message:Object
    }
}
</script>

<style scoped>

</style>
