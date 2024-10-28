<script setup lang="ts">
import {Undo2} from 'lucide-vue-next'
import init, {quant_png} from 'tinypng'
import {onMounted, ref} from "vue";
import {formatBytes} from "@/lib/utils";

interface ImgInfo {
  oldFileUrl: string
  quantFileUrl: string
}

const diff = ref<{ before: number, after: number }>({
  before: 0,
  after: 0
})
const imgInfo = ref<ImgInfo>({
  oldFileUrl: '',
  quantFileUrl: ''
})

const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error('Failed to read file'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const uint8ArrayToUrl = (uint8Array: Uint8Array): Promise<string> => {
  return new Promise((resolve, reject) => {
    const blob = new Blob([uint8Array], {type: 'image/png'});
    const url = URL.createObjectURL(blob);
    resolve(url);
  });
};

function downloadImage() {
  const link = document.createElement('a');
  link.href = imgInfo.value.quantFileUrl;
  link.download = 'compressed-image.png'; // 设置下载文件的名称
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

onMounted(async () => {
  await init()
  // greet()
})

async function fileToUint8Array(file: File) {
  const response = await fetch(URL.createObjectURL(file));
  const arrayBuffer = await response.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}

async function handleFileChange(event: Event) {
  console.log(event.target)
  let target = event.target as HTMLInputElement
  if (target.files) {
    let file: File = target.files[0]
    diff.value.before = file.size
    imgInfo.value.oldFileUrl = await fileToDataUrl(file)
    const uint8Array = await fileToUint8Array(file);
    const res = quant_png(uint8Array)
    diff.value.after = res.length
    imgInfo.value.quantFileUrl = await uint8ArrayToUrl(res)
    console.log(res)
  }
}
</script>

<template>
  <div class="text-white">
    <header class="flex items-center justify-center p-4 fixed inset-x-0 top-0 text-white">
      <ul class="bg-gray-200/20 flex items-center justify-center gap-4 backdrop-blur-sm rounded-3xl">
        <li class="text-gray-100/60 hover:text-white transition-all group">
          <a href="#" class="px-4 py-2 inline-flex items-center ">
            <Undo2 class="w-4 h-4 mr-2"/>
            <span class="mr-1 text-white ">Back home</span>
            <span class="w-1 h-1 rounded-full transition-all group-hover:bg-green-500/20 inline-block mx-auto"></span>
          </a>
        </li>
      </ul>
    </header>

    <main class="pt-24 w-[1000px] mx-auto">

      <div
          class="relative text-center bg-gray-300/10 hover:bg-indigo-200/20 border-2 border-dashed border-gray-50/30 hover:border-indigo-300/60 p-12 rounded-3xl transition-all ">
        <div class="text-gray-200/60 ">Drag and Drop png file here or <span
            class="underline font-medium">Choose file</span></div>
        <input type="file" accept="image/png"
               class="block absolute cursor-pointer top-0 right-0 left-0 bottom-0 opacity-0" ref="fileInput"
               @change="handleFileChange">
      </div>
      <div class="text-base py-4 text-gray-200/70 flex items-start justify-between">
        <p class="mb-12">Lossy compression of PNG on the WASM. The image files will not be uploaded to the server.</p>
        <div class="flex items-center">
          <button type="button" @click="downloadImage"
                  class="bg-gray-300/20 py-2 px-4 rounded-md transition-all ease-in-out hover:bg-gray-300/40">
            Download
          </button>
        </div>
      </div>
      <div class="mb-2 flex gap-4">
        <div v-if="imgInfo.oldFileUrl && imgInfo.quantFileUrl" class="grid grid-cols-2 gap-4">
          <div>
            <div class="mb-2">Before: {{ formatBytes(diff.before) }}</div>
            <img :src="imgInfo.oldFileUrl" alt="">
          </div>
          <div>
            <div class="mb-2">After: {{ formatBytes(diff.after) }}</div>
            <img :src="imgInfo.quantFileUrl" alt=""></div>
        </div>
      </div>

    </main>
  </div>
</template>
