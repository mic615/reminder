<template>
  <div>
    <reminder-list></reminder-list>

  </div>
</template>

<script>
    import ReminderList from './ReminderListComponent'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components:{
          ReminderList
        }
    }
</script>
