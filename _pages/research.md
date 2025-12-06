---
layout: archive
title: "Research"
permalink: /research/
author_profile: false
---

{% include base_path %}


<p style="color:rgb(113,128,150); font-size:1.2em; margin:2.4rem 0 0.5rem;"> Working Papers </p>


<style>
  .paper{margin:1.6rem 0 2rem;}
  .paper-title{margin:0 0 .2em 0;}
  .paper-title a{text-decoration:none;}
  .paper-meta{font-size:.95em; margin:0 0 1.1em 0;}
  .paper-meta a{text-decoration:none;}
  .paper-id{font-size:.9em; color:#777; margin:0 0 1em 0;}
  .paper-id a{color:#777; text-decoration:none;}
  .abs-btn{font-size:.9em; padding:2px 6px; margin:.35em 0 0 0; background:none; border:none; color:#555; cursor:pointer; font-weight:500;}
  .abs-btn:hover{text-decoration:underline;}
  .abstract{display:none; margin:.5em 0 0 1rem; font-size:.9em;}
</style>


<div class="paper">
  <p class="paper-title">
    <a style="color:rgb(37,99,235);" href=""> <strong> Delivering Higher Pay? The Impacts of a Task-Level Pay Standard in the Gig Economy </strong> </a> <br>
  </p>
  
  <p class="paper-meta">
    (with <a style="color:black;" href="https://sites.google.com/view/andygarin/home">Andrew Garin</a> and
    <a style="color:black;" href="https://www.andrew.cmu.edu/user/bkovak/">Brian Kovak</a>), November 2025. Submitted.<br>
    <a href=""> NBER Working Paper No. 34545 </a>
  </p>

  <p class="paper-id">
    How do <i>task-based</i> minimum pay standards impact earnings and employment in labor markets with <i>no distinction</i> between employed "insiders" and unemployed "outsiders"?
  </p>
  
  <button id="btn-abs1" class="abs-btn"
          onclick="toggleAbstract('abs1','btn-abs1')"> Abstract +</button>
  <div id="abs1" class="abstract">
    How does a task-level minimum pay requirement for gig workers affect their earnings and employment? We study this question in the context of a January 2024 law in Seattle that establishes a per-task minimum pay standard for app-based delivery workers. Drawing on novel cross-platform, trip-level gig activity data, we compare earnings and employment trajectories around the implementation of the law for workers who were doing delivery work in Seattle before the reform against workers who had been active in other regions of Washington State. We find that the minimum pay law raised delivery pay per task, though the increases in base pay per task were partially offset by a substantial reduction in average tips, a major component of delivery pay. At the same time, the policy led to a reduction in the number of tasks completed by highly attached incumbent drivers (but not an increase in exit from delivery work), completely offsetting increased pay per task and leading to zero effect on monthly earnings. We find evidence that drivers experienced more unpaid idle time and longer distances driven between tasks, but find no evidence that drivers reduced their total time working on delivery apps and only limited evidence of switching from delivery to ride-hailing work. Using a simple model of the labor market for platform delivery drivers, we show that our evidence is consistent with free entry of drivers into the delivery market driving down the task-finding rate until expected earnings return to their pre-reform level. These findings highlight the challenges of raising pay in spot markets for tasks where there is free entry of workers.
  </div>
</div>



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
