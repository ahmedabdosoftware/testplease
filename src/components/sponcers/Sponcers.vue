<template>
    <!--==================== SPONCERS ====================-->            
    <div class="sponcers-cont">
        <div class="sponcers__images">
            <img :src="require('@/assets/img/logo1.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo2.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo3.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo4.png')" alt="sponcer image" class="sponcer__img">
            <!-- تكرار الصور لضمان الحركة المتواصلة -->
            <img :src="require('@/assets/img/logo1.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo2.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo3.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo4.png')" alt="sponcer image" class="sponcer__img">
            <!-- تكرار الصور لضمان الحركة المتواصلة -->
            <img :src="require('@/assets/img/logo1.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo2.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo3.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo4.png')" alt="sponcer image" class="sponcer__img">
            <!-- تكرار الصور لضمان الحركة المتواصلة -->
            <img :src="require('@/assets/img/logo1.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo2.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo3.png')" alt="sponcer image" class="sponcer__img">
            <img :src="require('@/assets/img/logo4.png')" alt="sponcer image" class="sponcer__img">
        </div>
    </div>
</template>

<script>
export default {
  // script code هنا لو تحتاج إضافة أي أكواد جافاسكريبت أخرى
}
</script>

<style scoped lang="scss">
.sponcers-cont {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: rgb(133, 120, 120);
}

.sponcers__images {
  display: flex;
  width: max-content; /* العرض يكون على حسب المحتوى */
  animation: scroll 20s linear infinite;
}

/* حركة التمرير */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@media(max-width:1030px){
  .sponcers-cont {
  height: 180px;
}
}
@media (max-width: 460px) {
  .sponcers-cont {
    margin-bottom: 20px;
    height: 120px;
  }
}
</style>
