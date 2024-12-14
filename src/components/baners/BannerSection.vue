<template>
  <div class="banner-section">
    <div class="overlay" ref="overlay">
      <div class="content" ref="content">
        <h1 class="headline">Elevate Your Strength</h1>
        <p class="subheadline">Discover Premium Protein for Maximum Performance</p>
        <a href="#Toproducts"><button class="cta-button">Shop Now</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
  mounted() {
    // Intersection Observer to trigger animation when the element comes into view
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, options);

    observer.observe(this.$refs.overlay);
    observer.observe(this.$refs.content);
  },
};
</script>

<style scoped>
/* General Styles */
.banner-section {
  position: relative;
  width: 100%;
  height: 500px;
  background-image: url("../../assets/baners/man.jpeg");
  background-size: cover;
  background-position: center 25%;
  background-repeat: no-repeat;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 1s ease-out;
}

.content {
  color: white;
  max-width: 80%;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.headline {
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.subheadline {
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 30px;
}

.cta-button {
  padding: 15px 30px;
  /* background-color: rgb(127, 6, 6); */
  background-color: green;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: rgb(255, 0, 0);
}

.overlay.in-view {
  opacity: 1;
}

.content.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Styles for Mobile */
@media (max-width: 768px) {
  .headline {
    font-size: 28px; /* Smaller font size for headlines */
  }

  .subheadline {
    font-size: 16px; /* Smaller font size for subheadline */
    margin-bottom: 20px; /* Adjust spacing */
  }

  .cta-button {
    padding: 10px 20px; /* Smaller padding for button */
    font-size: 14px; /* Adjust font size for button */
  }

  .content {
    max-width: 90%; /* Make content wider for smaller screens */
  }
}

@media (max-width: 480px) {
  .headline {
    font-size: 24px;
  }

  .subheadline {
    font-size: 14px;
  }

  .cta-button {
    font-size: 12px;
  }
}
</style>
