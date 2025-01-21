<template>
<!-- <div class="my-10 bg-blue-500 p-4 bg-slate-400/20 mt-16">
                <SlidingAnimation> 
                    <About />
                </SlidingAnimation>
             </div>
             <div class="mt-96 bg-blue-500 p-4 bg-slate-400/20">
                <SlidingAnimation animation-type="zoom"> 
                    <Projects />
                </SlidingAnimation>
             </div> -->
             <!-- <div class="my-10 bg-blue-500 p-4 bg-slate-400/20 mt-16">
                <Experience />
             </div>
             <div class="my-10 bg-blue-500 p-4 bg-slate-400/20 mt-16">
                <Skills />
             </div>
             <div class="my-10 bg-blue-500 p-4 bg-slate-400/20 mt-16">
                <Contact />
             </div> -->
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px; /* Add perspective for 3D effect */
}
</style>

<style scoped>
.component-enter-active, .component-leave-active {
  transition: transform 0.8s ease, opacity 0.8s ease;
  position: absolute;
  width: 100%;
  height: 100%;
}

.component-enter-from {
  transform: rotateY(-90deg) scale(0.5);
  opacity: 0;
}

.component-enter-to {
  transform: rotateY(0deg) scale(1);
  opacity: 1;
}

.component-leave-from {
  transform: rotateY(0deg) scale(1);
  opacity: 1;
}

.component-leave-to {
  transform: rotateY(90deg) scale(0.5);
  opacity: 0;
}
</style>