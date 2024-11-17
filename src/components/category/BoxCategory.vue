<template>
  <div class="contPro">
    <div>
      <div class="img-container">
        <router-link :to="{ name: 'ProductOfCategory', params: { id: oneProduct.id } }">
              <img :src="oneProduct.imgUrl" />
        </router-link>
      </div>
      <div class="name-container">
        <span>{{ oneProduct.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxProduct",
  props: ["oneProduct"],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
}

.contPro {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contPro > div {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(135deg, #f5f5f5, #ddd); /* خلفية هادئة */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contPro > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.img-container {
  width: 80%;
  height: 69%;
}

.img-container img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.name-container {
  width: 100%;
  height: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.name-container span {
  text-align: center;
  position: relative;
  color: #333;
}

.name-container span::after {
  content: '→'; /* السهم */
  font-size: 16px;
  margin-left: 8px;
  color: #333;
  transition: margin-left 0.3s ease;
}

.name-container:hover span::after {
  margin-left: 12px; /* حركة السهم */
}
</style>
