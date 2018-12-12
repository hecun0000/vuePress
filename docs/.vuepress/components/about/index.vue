<template>
  <div>
    <!-- 这是以一个自定义页面，有一些自定义内容 -->
    <input type="file" accept="image/jpg, image/jpeg, image/png" class="file" @change="slecetFile">
    <button class="upload" @click="upload">点击我</button>
    <img :src="imgSrc" alt id="image">
    <p class="img-url">{{imgSrc}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: "",
      url: "http://upload.qiniup.com/putb64/-1/",
      imgUrl: "http://img.hecun.site/",
      apiUrl: "http://api.hecun.site/token",
      imgSrc: "",
      keyname: ""
    };
  },
  mounted() {},

  methods: {
    upload() {
      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          let res = JSON.parse(xhr.responseText);
          let uptoken = res.token;
          console.log(uptoken);
          that.uploadimg(uptoken);
        }
      };

      xhr.open("get", this.apiUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send();
    },
    uploadimg(uptoken) {
      let that = this;
      let sendUrl = this.url + "key/" + window.btoa(this.keyname);
      console.log(sendUrl);

      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          let returnObj = JSON.parse(xhr.responseText);
          console.log(returnObj);
          console.log("图片地址" + that.imgUrl + returnObj.key);
          that.imgSrc = that.imgUrl + returnObj.key;
        }
      };

      xhr.open("POST", sendUrl, true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "UpToken " + uptoken);
      xhr.send(this.pic);
    },

    slecetFile(e) {
      let files = e.target.files[0];
      console.log(files);
      let reader = new FileReader();

      reader.readAsDataURL(files);
      let fileName = files.name;
      let filetype = fileName.slice(fileName.lastIndexOf("."));

      this.keyname ="blog" +  new Date().getTime() +  Math.floor(Math.random() * 100) +  filetype;

      let that = this;
      reader.onload = function() {
        that.pic = this.result.replace(/^(data\:image\/)+(\S)+;base64\,/, "");
      };
    }
  }
};
</script>

<style lang='scss' scoped>
.file {
  display: block;
  margin: 20px auto;
}
.upload {
  display: block;
  margin: 0 auto;
}
.image {
  max-width: 300px;
}
</style>
