---
layout: page
title: Home
permalink: /
---

<!-- ![Profile Image]({% if site.external-image %}{{ site.picture }}{% else %}{{ site.url }}/{{ site.picture }}{% endif %}) -->

<p>Hi! I am Akila Karunanayake instructor at the Department of Computer Engineering, University of Peradeniya, Sri Lanka.  This site contains some past notes and projects I've done and more importantly my current research pursuits. 


</p>


<style>

h2 {
  color: $white;
}

.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  .card {
    display: inline-block;
  }
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  
  .card {
    flex: 0 0 auto;
    margin-right: 3px;
  }
}

/* .card {
  border: 2px solid $red;
  width: 150px;
  height: 75px;
  background: black;
} */

.scrolling-wrapper, .scrolling-wrapper-flexbox {
  height: 80px;
  margin-bottom: 20px;
  /* width: 100%; */
  overflow-x: scroll;
  height: 100%;
  /* overflow-y: scroll; */
  /* -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  } */


.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 33%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.card img{
  background-color: transparent;
}

}
</style>

<!-- 
<div class="scrolling-wrapper">
    <div class="card"><h2>NTU</h2></div>
    <div class="card"><h2>ASTAR</h2></div>
    <div class="card"><h2>UOP</h2></div>
</div> -->

<div class="scrolling-wrapper">
  <div class="card">
    <img src="/assets/images/uop.jpg" alt="Avatar" style="width:100%">
    <div class="container">
      <h5><b>University of Peradeniya, <br /> Sri Lanka </b></h5> 
      <h6>Nov 2018 - Present</h6> 
    </div>
  </div>
  <div class="card">
    <img src="/assets/images/ntu.jpg" alt="Avatar" style="width:100%">
    <div class="container">
      <h5><b>Nanyang Technological <br /> University , Singapore</b></h5> 
      <h6>Dec 2022 - Present</h6> 
    </div>
  </div>
  <div class="card">
    <img src="/assets/images/astar.png" alt="Avatar" style="width:100%">
    <div class="container">
      <h5><b> ASTAR, <br /> Singapore</b></h5> 
      <h6>Apr 2023 - Sep 2024</h6> 
    </div>
  </div>
</div>