<template>
    <div class="container">
      <button v-on:click="add">Add reminder</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
      name:'add-reminder',
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
          ...mapActions([
            'addReminder'
          ]),
          add:function(){
            var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
            var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
            var recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            var that =this;
            recognition.onresult = function(event) {
              var data = {content: event.results[0][0].transcript};
              that.addReminder(data);
            }
            recognition.start();
          }
        }
    }
</script>
