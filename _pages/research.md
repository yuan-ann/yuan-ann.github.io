---
layout: archive
title: ""
permalink: /research/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Working Papers

<style>
  .paper{margin:1.25rem 0 2rem;}
  .paper-title{margin:0 0 .2em 0; line-height:1.25;}
  .paper-meta{font-size:.95em; margin:0 0 .1em 0;}
  .paper-id{font-size:.9em; color:#777; margin:0;}
  .paper-id a{color:#777; text-decoration:none;}
  .abs-btn{font-size:.9em; padding:2px 6px; margin:.35em 0 0 0; background:none; border:none; color:#555; cursor:pointer; font-weight:500;}
  .abs-btn:hover{text-decoration:underline;}
  .abstract{display:none; margin:.5em 0 0 1rem; font-size:.9em;}
</style>

<!--
<div class="paper">
  <p class="paper-title">
    <a href=""><strong>Delivering Higher Pay? The Impacts of a Task-Level Pay Standard in the Gig Economy</strong></a><br>
    (with <a href="https://sites.google.com/view/andygarin/home">Andrew Garin</a> and
    <a href="https://www.andrew.cmu.edu/user/bkovak/">Brian Kovak</a>), September 2025
  </p>
  
  <p class="paper-id">
    How does a task-level minimum pay requirement for gig workers affect their earnings and employment?
  </p>

  <button id="btn-abs1" class="abs-btn"
          onclick="toggleAbstract('abs1','btn-abs1')">Abstract +</button>
  <div id="abs1" class="abstract">
    
  </div>
</div>
-->



<script>
function toggleAbstract(divId, btnId) {
  var x = document.getElementById(divId);
  var btn = document.getElementById(btnId);
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.textContent = "Abstract –";
  } else {
    x.style.display = "none";
    btn.textContent = "Abstract +";
  }
}
</script>
