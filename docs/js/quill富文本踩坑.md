---
sidebar: auto
---

# quill 富文本踩坑

> 首先，给出官网的链接 [点击此处](https://quilljs.com/docs/quickstart/)

## 自定义头部标题栏

 在官方提供的事例中没有顶部按钮的文字提示功能，在产品的眼里这样肯定不可以，=一定要有简单的文字说明该按钮的作用  
 首先这个需求只是为了增强那么一丢丢的用户体验；
 
 在官方文档中，有自定义标题栏的功能 
 [点击此处](https://quilljs.com/docs/modules/toolbar/)

```html
<!-- Create toolbar container -->
<div id="toolbar">
  <!-- Add font size dropdown -->
  <select class="ql-size">
    <option value="small"></option>
    <!-- Note a missing, thus falsy value, is used to reset to default -->
    <option selected></option>
    <option value="large"></option>
    <option value="huge"></option>
  </select>
  <!-- Add a bold button -->
  <button class="ql-bold"></button>
  <!-- Add subscript and superscript buttons -->
  <button class="ql-script" value="sub"></button>
  <button class="ql-script" value="super"></button>
</div>
<div id="editor"></div>

<!-- Initialize editor with toolbar -->
<script>
  var quill = new Quill('#editor', {
    modules: {
      toolbar: '#toolbar'
    }
  });
</script>
```
这样我们就可以写一些自定义样式，下来我们进行微小的改造：  


 
```html
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
 <div id="toolbar">
    <button class="ql-bold" title="粗体"></button>
    <button class="ql-italic" title="斜体"></button>
    <button class="ql-underline" title="下划线"></button>
    <button class="ql-strike" title="删除线"></button>
 
    <button class="ql-list" value="ordered" title="有序列表"></button>
    <button class="ql-list" value="bullet"  title="无序列表"></button>

    <button class="ql-script" value="sub"></button>
    <button class="ql-script" value="super"></button>

    <button class="ql-indent" value="-1"></button>
    <button class="ql-indent" value="+1" title="首行缩进"></button>
    <select class="ql-size" title="标题样式">
        <option value="small"></option>
       
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
    </select>
    <select class="ql-color" title="字体颜色"> </select>
    <select class="ql-align" title="对齐方式"> </select>
    <button class="ql-image" title="添加图片"></button>
</div>
<div id="editor"></div>


<script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
<script>
    var quill = new Quill('#editor', {
        modules: {
            toolbar: '#toolbar'
        },
        theme: 'snow'
    });
</script>
```

 ## 修改图片上传功能为七牛云
 
 
>  默认提供的上传的方式是将所传的图片转化为base64的形式，在实际项目中，这样显然不好。正确的方式应该是将图片上传至七牛云，编辑器中只保存七牛云的链接。

思路： 
- 自己先实现一个七牛云的图片上传
- 将编辑器的图片上传按钮的事件替换成自己写好的图片上传
- 将上传后返回的图片链接替换到编辑器内容

下面咱们一步一步来： 

1. 实现七牛云的图片上传（这里不做介绍）


```html
 <el-upload class="uploader" action="//upload.qiniup.com" :data="form" 
 :show-file-list="false" :on-error="handleError"  ref="upload"
 :on-success="handleSuccess" :before-upload="beforeUpload">
    <el-button size="small" type="primary" id="imgInput">点击上传</el-button>
</el-upload>
```
methods部分
```js
  //图片上传成功
handleSuccess(res, file) {
    Loading.service({}).close();
    this.$message.success('图片上传成功')
    this.imageUrl = res.domain + res.truekey;
    this.$emit('getImgUrl',this.imageUrl);
},
//图片上传之前
beforeUpload(file) {
    Loading.service({ fullscreen: true, text: '图片上传中' });
    let splitArray = file.name.split('.');
    let current = moment().format('YYYYMMDD').toString(),
        prefix = moment(file.lastModified).format('HHmmss').toString(),
        suffix = new Date().getTime() + '.' + splitArray[splitArray.length - 1 ],
        key = encodeURI(`${current}/${prefix}_${suffix}`);
    return getUpToken({ key }).then(res => {
        this.form = {
            key: key,
            token: res.data.uptoken
        }
    }).catch(() => {
        Loading.service({}).close();
        this.$message.error('上传图片失败')
    })
},
//图片上传失败
handleError(){
    Loading.service({}).close();
    this.$message.error('上传图片失败')
},
```
这里我们要将自己写的上传的按钮隐藏掉
2. 将上传成功之后的图片链接进行替换

首先获取当前光标的位置，利用.getSelection()；    
然后后利用insertEmbed(length, 'image', imageUrl) 插入一个图片元素


```js
let vm = this
let url = this.imageUrl;
if (url != null && url.length > 0) { // 将文件上传后的URL地址插入到编辑器文本中
    let value = url
    // this.$refs.myTextEditor.quillEditor.getSelection();
    // 获取光标位置对象，里面有两个属性，一个是index 还有 一个length，这里要用range.index，
    //即当前光标之前的内容长度，然后再利用 insertEmbed(length, 'image', imageUrl)，插入图片即可。
    vm.addRange = vm.$refs.myQuillEditor.quill.getSelection()
    let index = vm.addRange !== null ? vm.addRange.index : 0;
    vm.$refs.myQuillEditor.quill.insertEmbed(index, 'image', value, Quill.sources.USER) // 调用编辑器的 insertEmbed 方法，插入URL
    vm.$refs.myQuillEditor.quill.setSelection(index + 1, 0)
} else {
    this.$message.error(`${vm.uploadType}插入失败`)
}
this.$refs.upload.clearFiles() // 插入成功后清除input的内容
```


最后，说明我目前用到的api    

- quill.clipboard.dangerouslyPasteHTML(val);  将html显示到编辑器中
                
- quill.getLength(); 获取编辑器文本的内容
                
- quill.setSelection(length); 移动光标

编辑中的数据回显操作： 


```js
 //将请求回来的HTML插入到编辑器中
this.$refs.myQuillEditor.quill.clipboard.dangerouslyPasteHTML(val);
//获取HTML的长度
let length =  this.$refs.myQuillEditor.quill.getLength();
//将光标移到最后
this.$refs.myQuillEditor.quill.setSelection(length);
```
## 当同一个页面让引入多个该富文本组件？

- 这里需要替换quill-editor的ref为动态可变的，这里利用props传递一个redId作为标识来区分
- editorOption.modules.toolbar也需要替换为动态的，从而利用插槽的方式插入自定义工具栏，
    ```html
    <div :id="refId" class='quill-header' solt='toolbar'>
        ...
    </div>
    ```
- 替换七牛云上传工具也是同理


下面贴出这次更改的源码：
```html
<template>
    <div style="margin-bottom: 50px">
        <div :id="refId" class='quill-header'>
            <select class="ql-header" title="标题样式">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option selected></option>
            </select>
            <button class="ql-bold" title="粗体"></button>
            <button class="ql-italic" title="斜体"></button>
            <button class="ql-underline" title="下划线"></button>
            <button class="ql-strike" title="删除线"></button>
            <button class="ql-list" value="ordered" title="编号" ></button>
            <button class="ql-list" value="bullet"  title="项目符号"></button>
            <button class="ql-indent" value="-1" title="减少缩进量"></button>
            <button class="ql-indent" value="+1" title="增加缩进量"></button>
            <select class="ql-color" title="字体颜色"> </select>
            <select class="ql-align" title="对齐方式"> </select>
            <button class="ql-image" title="添加图片"></button>
        </div>

        <quill-editor :style="{width:width,height:height}" :ref="'Quill'+refId"  :options="editorOption" @change="onEditorChange($event)"></quill-editor>
        <el-upload class="uploader" action="//upload.qiniup.com" :data="form" :show-file-list="false" :on-error="handleError"  ref="upload" accept="image/*"
                   :on-success="handleSuccess" :before-upload="beforeUpload">
            <el-button size="small" type="primary" :id="'imgInput'+this.refId">点击上传</el-button>
        </el-upload>
    </div>
</template>

<script>
    import "quill/dist/quill.core.css";
    import "quill/dist/quill.snow.css";
    import * as Quill from "quill";
    import getUpToken from "@/api/getUpToken";
    import { Loading } from "element-ui";
    import moment from "moment";
    import { quillEditor } from "vue-quill-editor";

    export default {
        name: "editor-vue",
        data() {
            return {
                editorOption: {
                    modules: {
                        toolbar: "#" + this.refId
                    },
                    placeholder: this.placeholder
                },
                imageUrl: "",
                form: {
                    key: "",
                    token: ""
                },
                addRange: []
            };
        },
        props: {
            width: {
                type: String,
                default: "100%"
            },
            height: {
                type: String,
                default: "200px"
            },
            editDetail: {
                type: String,
                default: ""
            },
            refId: {
                type: String,
                default: "quillEdit"
            },
            placeholder: {
                type: String,
                default: "请在此处编辑商品详情"
            }
        },
        watch: {
            editDetail(val) {
                if (val != "") {
                    //将请求回来的HTML插入到编辑器中
                    this.$refs["Quill" + this.refId].quill.clipboard.dangerouslyPasteHTML(
                        val
                    );
                    //获取HTML的长度
                    let length = this.$refs["Quill" + this.refId].quill.getLength();
                    //将光标移到最后
                    this.$refs["Quill" + this.refId].quill.setSelection(length);
                }
            }
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.$emit("getEditorHtml", html);
            },
            //图片上传成功
            handleSuccess(res, file) {
                Loading.service({}).close();
                this.$message.success("图片上传成功");
                this.imageUrl = res.domain + res.truekey;
                this.$emit("getImgUrl", this.imageUrl);
                let vm = this;
                let url = this.imageUrl;
                if (url != null && url.length > 0) {
                    // 将文件上传后的URL地址插入到编辑器文本中
                    let value = url;
                    // API: https://segmentfault.com/q/1010000008951906
                    // this.$refs.myTextEditor.quillEditor.getSelection();
                    // 获取光标位置对象，里面有两个属性，一个是index 还有 一个length，这里要用range.index，即当前光标之前的内容长度，然后再利用 insertEmbed(length, 'image', imageUrl)，插入图片即可。
                    vm.addRange = vm.$refs["Quill" + this.refId].quill.getSelection();
                    let index = vm.addRange !== null ? vm.addRange.index : 0;
                    vm.$refs["Quill" + this.refId].quill.insertEmbed(
                        index,
                        "image",
                        value,
                        Quill.sources.USER
                    ); // 调用编辑器的 insertEmbed 方法，插入URL
                    vm.$refs["Quill" + this.refId].quill.setSelection(index + 1, 0);
                } else {
                    this.$message.error(`${vm.uploadType}插入失败`);
                }
                this.$refs.upload.clearFiles(); // 插入成功后清除input的内容
            },
            //图片上传之前
            beforeUpload(file) {
                Loading.service({ fullscreen: true, text: "图片上传中" });
                let splitArray = file.name.split(".");
                let current = moment()
                        .format("YYYYMMDD")
                        .toString(),
                    prefix = moment(file.lastModified)
                        .format("HHmmss")
                        .toString(),
                    suffix = new Date().getTime() + "." + splitArray[splitArray.length - 1],
                    key = encodeURI(`${current}/${prefix}_${suffix}`);

                if (file.type.indexOf("image") == -1) {
                    Loading.service({}).close();
                    this.$message.error("请选择图片文件");
                    return false;
                } else {
                    return getUpToken({ key })
                        .then(res => {
                            this.form = {
                                key: key,
                                token: res.data.uptoken
                            };
                        })
                        .catch(() => {
                            Loading.service({}).close();
                            this.$message.error("上传图片失败");
                        });
                }
            },
            //图片上传失败
            handleError() {
                Loading.service({}).close();
                this.$message.error("上传图片失败");
            },
            imgHandler() {
                document.getElementById("imgInput" + this.refId).click();
            }
        },
        mounted() {
            this.$refs["Quill" + this.refId].quill
                .getModule("toolbar")
                .addHandler("image", this.imgHandler);
        },
        components: { quillEditor }
    };
</script>

<style scoped>
    .uploader {
        display: none;
    }
    .quill-header {
        border-bottom: 0;
    }
</style>
```