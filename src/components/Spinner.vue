<template>
  <div class="spin"></div>
</template>


<style>
.spin {
    display: block;
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: #ff8800;
    animation: spinn 1s ease infinite;
}
@keyframes spinn {
    to {transform: rotateZ(360deg);}
}
</style>