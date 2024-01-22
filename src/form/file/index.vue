<script setup lang="ts">
defineOptions({ name: 'AuInputFile' })
//获取上传附件本地路径
const getFileURL = (file) => {
  var getUrl = null
  if ((window as any).createObjectURL != undefined) {
    // basic
    getUrl = (window as any).createObjectURL(file)
  } else if (window.URL != undefined) {
    // mozilla(firefox)
    getUrl = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    // webkit or chrome
    getUrl = window.webkitURL.createObjectURL(file)
  }
  return getUrl
}
let files = [] //附件
const selectFile = (event) => {
  for (let i = 0; i < event.target.files.length; i++) {
    // 获取input上传附件
    let file = event.target.files[i]
    files.push(file)

    //获取上传附件路径，返回值也是一个blob对象
    let src = getFileURL(file)
    console.log(src)

    // 获取base64字符串
    let base64 = null
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      base64 = e.target.result
      console.log({ base64 })
    }
  }
}

// 创建表单对象
// var form = new FormData();
// for(let i=0;i<videos.value.length;i++){
//     //将文件放到表单对象中，一个key值可以对应多个value值
// 	form.append('file', videos.value[i]);
// }
</script>

<template>
  <input type="file" @change="selectFile($event)" />
</template>
