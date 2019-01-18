<template>
  <div>
    <reminder-list></reminder-list>
    <add-reminder></add-reminder>
  </div>
</template>

<script>
    import ReminderList from './ReminderListComponent'
    import AddReminder from './AddReminderComponent'
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components:{
          ReminderList,
          AddReminder
        }
    }
</script>
