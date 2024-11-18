<template>
    <div class="progress-bar">
      <div class="step" :class="{ completed: step >= 1 }">
        <span class="circle">1</span>
        <span class="label">Cart</span>
      </div>
      <div class="line" :class="{ completed: step > 1 }"></div>
      <div class="step" :class="{ completed: step >= 2 }">
        <span class="circle">2</span>
        <span class="label">Checkout</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgressSteps",
    props: {
      step: {
        type: Number,
        required: true, // تحديد الخطوة الحالية (1 أو 2)
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    height: 100px;
    // background-color: red;
  
    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
  
      .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: white;
      }
  
      .label {
        margin-top: 5px;
        font-size: 14px;
        color: #555;
      }
    }
  
    .completed .circle {
      background: #007bff; /* اللون الأزرق */
      background:rgb(127, 6, 6); /* اللون الأزرق */
      background:black; /* اللون الأزرق */
    }
  
    .completed .label {
      color: #007bff;
      color: rgb(127, 6, 6);
      color: black;
    }
  
    .line {
      width: 200px;
      height: 2px;
      background: #ccc;
      margin: 0 10px;
    }
  
    .line.completed {
      background: #007bff;
      background:rgb(127, 6, 6);
      background:black;
    }
  }
  </style>
  