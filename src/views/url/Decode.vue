<template>
  <div>
    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="urlData">
    </el-input>
    <div>
     <div v-for="(value, key) in result" :key="key" @click="doCopy"> 
       {{key}}: {{value}}
     </div>
    </div>

  </div>
</template>
<script>
  import { getCurrentInstance } from 'vue';
  import { parseQuery } from '../../utils/url';

  export default {
    data() {
      return {
        urlData: '',
        result: {},
      }
    },
    watch: {
      urlData(newVal) {
        this.result = this.handleUrl(newVal);
      }
    },
    methods: {
      handleUrl(url) {
        const a = document.createElement('a');
        a.href = decodeURIComponent(url);

        const res = {
          protocol: a.protocol.replace(':', ''),
          host: a.hostname,
          port: a.port,
          query: a.search,
          hash: a.hash.replace('#', ''),
          path: a.pathname,
          queryObject: parseQuery(url)
        };

        this.deletWhenValueIsEmpty(res);

        return res;
      },
      deletWhenValueIsEmpty(obj) {
        for (let key in obj) {
          if (obj[key] === "") delete obj[key];
        }
      },
    },
    setup() {
      const { proxy } = getCurrentInstance();

      const doCopy = () => {
        proxy.$copyText('test-text').then(function (e) {
          console.log(e)
        }, function (e) {
          console.log(e)
        })
      }

      return {
        doCopy,
      };
    }

  }
</script>

<style scoped>

</style>