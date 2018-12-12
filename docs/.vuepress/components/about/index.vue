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
        @change="slecetFile"
        title=" "
      >
    </div>
    <div class="file-box">
        <p class="file-title">
            文件列表
        </p>
        <ul class="file-list">
            <li class="item" v-for="(item,index) in fileList" :key="index">
                <img :src="item" alt="" srcset="">
                <div class="img-info-box">
                     <span class="img-src">
                    {{item}}
                </span>
                <span class="btn-copy" @click="copySrc(item)">
                    复制
                </span>
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
      pic: "",
      url: "http://upload.qiniup.com/putb64/-1/",
      imgUrl: "http://img.hecun.site/",
      apiUrl: "http://api.hecun.site/token",
      imgSrc: "",
      keyname: "",
      fileList:[]
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
      const files = e.dataTransfer.files[0];
      this.initData(files);
      this.upload();
    },
     slecetFile(e) {
      let files = e.target.files[0];
      this.initData(files);
      this.upload();
    },
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
          that.fileList.push(that.imgSrc)
        }
      };

      xhr.open("POST", sendUrl, true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "UpToken " + uptoken);
      xhr.send(this.pic);
    },

    initData(files) {
      let reader = new FileReader();

      reader.readAsDataURL(files);
      let fileName = files.name;
      let filetype = fileName.slice(fileName.lastIndexOf("."));

      this.keyname =
        "blog" +
        new Date().getTime() +
        Math.floor(Math.random() * 100) +
        filetype;

      let that = this;
      reader.onload = function() {
        that.pic = this.result.replace(/^(data\:image\/)+(\S)+;base64\,/, "");
      };
    },
    copySrc(item){
        var oInput = document.createElement('input');
        oInput.value = item;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
        alert('复制成功');
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
    border:1px solid #eee;
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
