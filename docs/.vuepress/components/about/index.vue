<template>
  <div>
    <!-- 这是以一个自定义页面，有一些自定义内容 -->
    <div
      class="upload-box"
      @dragstart="dragenter($event)"
      @drop="drop($event)"
      @dragover="dragover($event)"
    >
      <div class="info-box">
        <i class="icon upload"></i>
        <span class="info-text">将文件拖到此处，或点击后选择文件</span>
      </div>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        class="file"
        multiple="multiple"
        @change="slecetFile"
        title=" "
      >
    </div>
    <div class="file-box">
      <p class="file-title">文件列表</p>
      <ul class="file-list">
        <li class="item" v-for="(item,index) in fileList" :key="index">
          <img :src="item" alt srcset>
          <div class="img-info-box">
            <span class="img-src">{{item}}</span>
            <span class="btn-copy" @click="copySrc(item)">复制</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pics: [],
      url: "http://upload.qiniup.com/putb64/-1/",
      imgUrl: "http://img.hecun.site/",
      apiUrl: "http://api.hecun.site/token",
      imgSrc: "",
      keyname: "",
      fileList: [],
      upToken: ""
    };
  },
  mounted() {},

  methods: {
    dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
     
    },

    dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    },

    drop(e) {
      e.stopPropagation();
      e.preventDefault();
      console.log(e.dataTransfer.files);
     this.pics = [];
      const files = e.dataTransfer.files;
      this.initData(files);
    },
    slecetFile(e) {
      this.pics = [];
      let files = e.target.files;
      this.initData(files);
    },
    upload() {
      let that = this;
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          let res = JSON.parse(xhr.responseText);
          let uptoken = res.token;
          console.log(uptoken);
          that.upToken = uptoken;
          that.multipleUpload();
        }
      };

      xhr.open("get", this.apiUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send();
    },

    multipleUpload() {
      let length = this.pics.length;
      for (const { base64, keyname } of this.pics) {
        this.uploadimg(base64, keyname);
      }
    },
    uploadimg(base64, keyname) {
      let that = this;
      let sendUrl = this.url + "key/" + window.btoa(keyname);

      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          let returnObj = JSON.parse(xhr.responseText);
    
          that.imgSrc = that.imgUrl + returnObj.key;
          that.fileList.push(that.imgSrc);
        }
      };

      xhr.open("POST", sendUrl, true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "UpToken " + that.upToken);
      xhr.send(base64);
    },
    initData(files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let reader = new FileReader();

        reader.readAsDataURL(file);
        let fileName = file.name;
        let filetype = fileName.slice(fileName.lastIndexOf("."));

        let keyname =
          "blog" +
          new Date().getTime() +
          Math.floor(Math.random() * 100) +
          filetype;

        let that = this;
        reader.onload = function() {
          that.pics.push({
            base64: this.result.replace(/^(data\:image\/)+(\S)+;base64\,/, ""),
            keyname: keyname
          });
        };
      }
      this.upload();
    },
    copySrc(item) {
      var oInput = document.createElement("input");
      oInput.value = item;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      alert("复制成功");
    }
  }
};
</script>

<style lang='scss' scoped>
.upload-box {
  border: 3px dotted #3eaf7c;
  width: 80%;
  height: 300px;
  margin: 40px auto;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.file {
  display: block;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
  font-size: 20px;
  opacity: 0;
  cursor: pointer;
}

.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
.upload {
  display: block;
  margin: 0 auto;
}
.image {
  max-width: 300px;
}

.info-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 300px;
  height: 120px;
  text-align: center;
}

.info-box .upload {
  width: 80px;
  height: 80px;
  display: block;
  margin: 10px auto;
  background: url(http://static.hecun.site/20181212182251.png) center no-repeat;
  background-size: contain;
}

.info-box .info-text {
  font-size: 14px;
}

.file-box {
  max-width: 800px;
  margin: 0 auto;
}

.file-box .file-title {
  font-size: 16px;
  color: #3eaf7c;
  text-align: center;
  line-height: 32px;
}

.file-box .item {
  height: 80px;
  border: 1px solid #eee;
  border-left: 0;
  border-right: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.file-box .item img {
  width: 60px;
  height: 60px;
  display: inline-block;
}

.file-box .img-src {
  font-size: 14px;
  color: #666;
}

.file-box .btn-copy {
  color: #3eaf7c;
  cursor: pointer;
}

.file-box .btn-copy:hover {
  color: #319065;
}

.img-info-box {
  flex: 1;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
</style>
