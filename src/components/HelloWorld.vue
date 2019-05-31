<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essentialllll Links</h2>
    <router-link :to="{path:'/secosnd'}">second</router-link>
    <span @click='savelocalSession'>saveLoclStorage</span>
    <span @click='saveSession'>saveSessionStorage</span>
    <span @click='indexDB'>indexDB</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      indexDBdata:'',
    }
  },
  methods:{
    saveSession(){
      sessionStorage.setItem('testKey','这是一个测试的value值'); // 存入一个值
    },
    savelocalSession(){
      localStorage.setItem('testKey','这是一个测试的value值2'); // 存入一个值
    },
    indexDB(){
      var data=[{ 
          id:1007, 
          name:"Byron", 
          age:24 
        },{ 
          id:1008, 
          name:"Frank", 
          age:30 
        },{ 
          id:1009, 
          name:"Aaron", 
          age:26 
        },{ 
          id:10009, 
          name:"Aaaron", 
          age:226 
        }];
      var request=window.indexedDB.open('testDB',16);
      request.onupgradeneeded=function(e){
        debugger
          var database = e.target.result; 
          if(!database.objectStoreNames.contains("studensts")){
              var store = database.createObjectStore("studensts",{autoIncrement:true});
              for(var i = 0 ; i < data.length;i++){
                  request = store.add(data[i]);
                  request.onerror = function(){
                   console.error('数据库中已有该数据')
                  };
                  request.onsuccess = function(){
                   console.log('数据已存入数据库')
                  };
              }
          }
      }
      request.onerror=function(e){
          console.log(e.currentTarget.error.message);
      };
      request.onsuccess=function(e){
        this.indexDBdata=e.target.result;
        console.log(123)
        // var ss=this.indexDBdata.transaction(['students'])//.createObjectStore("students",{keyPath:"id"})
        // // var store=this.indexDBdata.createObjectStore("students",{keyPath:"id"});

        // for(var i = 0 ; i < data.length;i++){
        //   request = store.add(data[i]);
        //   request.onerror = function(){
        //    console.error('数据库中已有该数据')
        //   };
        //   request.onsuccess = function(){
        //    console.log('数据已存入数据库')
        //   };
        // }
        // console.log(this.indexDBdata);
          // testDB.db=e.target.result;
      };
      // console.log(request)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
