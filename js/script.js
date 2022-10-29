/*Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */

const{createApp} = Vue;

createApp({
    data(){
        return{
            rndMailArray:[],
        }
    },
    created(){
        for(let i = 0; i<10; i++){
                this.rndMail();
        } 
    },
    methods:{
        rndMail(resp){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
              console.log(resp.data.response);
              this.rndMailArray.push(resp.data.response);
              console.log(this.rndMailArray);
            });
        }
    }
}).mount("#app")