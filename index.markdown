---
layout: default
title: Home
description: Personal homepage of Jiang You — research on deep learning for time series forecasting.
---

<!-- ============================================================
     PROFILE HEADER
     To use a real photo: drop it at assets/images/profile.jpg and
     replace the <div class="avatar">JY</div> below with:
     <img class="avatar" src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Jiang You">
     ============================================================ -->
<header class="wrap profile" id="top">
  <div class="avatar">JY</div>
  <div class="intro">
    <h1>{{ site.author.name }}</h1>
    <p class="title">{{ site.author.title }}</p>
    <p class="affiliation">{{ site.author.affiliation }}</p>
    <p class="tagline">
      I work on deep learning for time series forecasting — sequence models
      (Transformers, state space models / Mamba), and their applications to
      real-world temporal data. <!-- EDIT: rewrite this one-line pitch. -->
    </p>
    <div class="links">
      <a href="mailto:{{ site.author.email }}">✉ Email</a>
      <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">🎓 Google Scholar</a>
      <a href="{{ site.author.github }}" target="_blank" rel="noopener">⌨ GitHub</a>
      <a href="{{ site.author.linkedin }}" target="_blank" rel="noopener">in LinkedIn</a>
      <a href="{{ '/assets/cv.pdf' | relative_url }}" target="_blank" rel="noopener">📄 CV</a>
    </div>
  </div>
</header>

<div class="wrap">

<!-- ============================================================ ABOUT -->
<section id="about">
  <h2>About</h2>
  <p>
    I am a {{ site.author.title | downcase }} at {{ site.author.affiliation }}.
    My research focuses on building accurate and efficient models for
    forecasting temporal data, which appears across finance, energy, weather,
    industry, and the sciences.
    <!-- EDIT: 2–3 sentences about your background and what drives your work. -->
  </p>
  <p>Research interests:</p>
  <ul class="research-interests">
    <li>Deep learning for time series forecasting</li>
    <li>Sequence models: Transformers, state space models (Mamba), RNNs</li>
    <li>Representation learning &amp; foundation models for temporal data</li>
    <li>Applications: energy, finance, and industrial monitoring</li>
  </ul>
</section>

<!-- ============================================================ NEWS -->
<section id="news">
  <h2>News</h2>
  <div class="news">
    <table>
      <!-- EDIT: add newest items at the top. -->
      <tr>
        <td class="date">2026-05</td>
        <td>New paper submitted on efficient long-horizon forecasting. <em>(placeholder)</em></td>
      </tr>
      <tr>
        <td class="date">2025-11</td>
        <td>Gave a talk on state space models for time series. <em>(placeholder)</em></td>
      </tr>
      <tr>
        <td class="date">2025-06</td>
        <td>Started research on deep learning for time series forecasting. <em>(placeholder)</em></td>
      </tr>
    </table>
  </div>
</section>

<!-- ============================================================ PUBLICATIONS -->
<section id="publications">
  <h2>Publications</h2>

  <!-- EDIT: duplicate a .pub block per paper. Use class="me" on your own name. -->
  <div class="pub">
    <div class="thumb">paper<br>figure</div>
    <div class="meta">
      <p class="pub-title">Title of your first paper goes here</p>
      <p class="authors"><span class="me">Jiang You</span>, Co-author A, Co-author B</p>
      <p class="venue">Conference / Journal, Year</p>
      <div class="pub-links">
        <a href="#">PDF</a>
        <a href="#">arXiv</a>
        <a href="#">Code</a>
        <a href="#">BibTeX</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">paper<br>figure</div>
    <div class="meta">
      <p class="pub-title">Title of your second paper goes here</p>
      <p class="authors">Co-author A, <span class="me">Jiang You</span>, Co-author B</p>
      <p class="venue">Workshop / Preprint, Year</p>
      <div class="pub-links">
        <a href="#">PDF</a>
        <a href="#">arXiv</a>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ TEACHING -->
<section id="teaching">
  <h2>Teaching</h2>

  <!-- EDIT: list courses you teach or assist. -->
  <div class="teaching-item">
    <p class="role">Deep Learning for Time Series Forecasting <span class="when">— Lecturer, 2025</span></p>
    <p>Graduate course covering statistical and deep learning models for temporal data.</p>
  </div>
  <div class="teaching-item">
    <p class="role">Machine Learning Fundamentals <span class="when">— Teaching Assistant</span></p>
    <p>Tutorials and lab sessions. <em>(placeholder)</em></p>
  </div>
</section>

</div>
