<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Reminder list</div>

                    <div class="card-body">
                        <ul v-if="reminders.length>0">
                          <li v-for="reminder in reminders">
                            {{reminder.content}}
                          </li>
                        </ul>
                        <add-reminder></add-reminder>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'
    import AddReminder from './AddReminderComponent'
    export default {
        name:'reminder-list',
        mounted() {
          this.getReminders()
        },
        components:{
          AddReminder
        },
        computed: {
          ...mapGetters([
            'reminders'
          ])
        },
        methods:{
          ...mapActions([
            'getReminders'
            ])
        }
    }
</script>
