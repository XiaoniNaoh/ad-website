<template>
    <div class="image-gallery">
      <ImageCard
        v-for="(image, index) in images"
        :key="index"
        :imageSrc="image.src"
        :title="image.title"
        :description="image.description"
        :link="image.link"
      />
    </div>
  </template>
  
  <script>
  import ImageCard from './ImageCard.vue';
  
  export default {
    components: {
      ImageCard
    },
    data() {
      return {
        images: [
          {
            src: '/images/1.jpg',
            title: 'How Safe Is Your Compounding Pharmacy?',
            description: 'Hear Jeff Reeh’s story of how a severe infection from amino acid injections revealed the hidden dangers of compounding pharmacies, and learn how to protect yourself when using one.',
            link: 'https://your-target-url.com'
          },
          {
            src: 'images/1.jpg',
            title: 'How Your Microbiome Contributes to Overall Health',
            description: 'Learn about the role of your microbiome in your overall health.',
            link: 'https://another-url.com'
          },
          // 添加更多图片对象
        ]
      };
    }
  }
  </script>
  
  <style>
  .image-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  