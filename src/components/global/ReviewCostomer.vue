<template>
  <div class="container">
    <div class="profile">
      <img src="@/assets/backgroundC.png" alt="Profile Picture" />
      <p class="quote">
        The fabric is very soft and comfortable to wear. The design is simple but beautiful. - Claudia Alves
      </p>
      <p class="handle">@reallygreatsite</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCostomer",
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.profile img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  filter: blur(5px);
}

.quote {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin: 20px 0;
}

.handle {
  font-size: 14px;
  font-weight: 400;
  color: gray;
}
</style>

