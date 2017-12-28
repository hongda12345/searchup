Vue.component("custom-input",{
    props:["state","title"],
    template:`
        <div class="select-input">
            <input type="text" @focus="focus" v-model="title" >
        </div>
    `,
    methods:{
        focus(){
            this.$emit('customevent');
        }
    }
})
Vue.component("custom-list",{
    props:["listData","color","state"],
    template:`
        <ul class="select-list" :style="{color:color}" v-show="state==true">
            <li v-for="item in listData" @click="click(item.title)">{{item.title}}</li>
        </ul>
    `,
    methods:{
        click(val){
            this.$emit('customevent',val);
        }
    }
})