---
layout: default
title: Home
description: Personal homepage of Jiang You — research on deep learning for time series forecasting, anomaly detection and prediction.
---

<!-- ============================================================
     PROFILE HEADER
     To use a real photo: drop it at assets/images/profile.jpg and
     replace the <div class="avatar">JY</div> below with:
     <img class="avatar" src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Jiang You">
     ============================================================ -->
<header class="wrap profile" id="top">
  <img class="avatar" src="{{ '/assets/images/image.png' | relative_url }}" alt="Jiang You">
  <div class="intro">
    <h1>{{ site.author.name }}</h1>
    <p class="title">{{ site.author.title }}</p>
    <p class="affiliation">{{ site.author.affiliation }}</p>
    <p class="tagline">
      I work on deep learning for time series forecasting, anomaly detection
      and prediction — designing novel architectures (Kernel U-Net) and
      robust training methods for real-world temporal data.
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
    I obtained my PhD from Université Paris-Est Créteil in 2024, with a thesis
    on <em>Time Series Forecasting, Anomaly Detection and Prediction</em>.
    My research focuses on building accurate and efficient models for
    forecasting temporal data, with applications across energy, finance,
    industry, and spatio-temporal systems.
  </p>
  <p>Research interests:</p>
  <ul class="research-interests">
    <li>Time series forecasting</li>
    <li>Anomaly detection &amp; anomaly prediction</li>
    <li>Deep learning architectures for temporal data (Kernel U-Net)</li>
    <li>Spatio-temporal forecasting</li>
  </ul>
</section>

<!-- ============================================================ NEWS -->
<section id="news">
  <h2>News</h2>
  <div class="news">
    <table>
      <tr>
        <td class="date">2026</td>
        <td>Paper accepted at <strong>ICASSP 2026</strong>: <em>Enhancing Spatio-Temporal Forecasting with Spatial Neighbourhood Fusion</em>.</td>
      </tr>
      <tr>
        <td class="date">2025-05</td>
        <td>New preprint: <em>Dynamic Perturbed Adaptive Method for Infinite Task-Conflicting Time Series</em>.</td>
      </tr>
      <tr>
        <td class="date">2025</td>
        <td>New preprint on spatio-temporal forecasting with spatial neighbourhood fusion (COVID-19 mobility in Peru).</td>
      </tr>
      <tr>
        <td class="date">2024</td>
        <td>PhD thesis defended: <em>Time Series Forecasting, Anomaly Detection and Prediction</em>, Université Paris-Est Créteil.</td>
      </tr>
      <tr>
        <td class="date">2024</td>
        <td>Two papers presented at <strong>INISTA 2024</strong> and <strong>ICCP 2024</strong>.</td>
      </tr>
    </table>
  </div>
</section>

<!-- ============================================================ PUBLICATIONS -->
<section id="publications">
  <h2>Publications</h2>

  <div class="pub">
    <div class="thumb">ICASSP<br>2026</div>
    <div class="meta">
      <p class="pub-title">Enhancing Spatio-Temporal Forecasting with Spatial Neighbourhood Fusion: A Case Study on Mobility in Peru</p>
      <p class="authors">C. Li, <span class="me">J. You</span>, H. Moungla, V. Gauthier, M. Nunez-Del-Prado, et al.</p>
      <p class="venue">ICASSP 2026 — IEEE International Conference on Acoustics, Speech and Signal Processing, 2026</p>
      <div class="pub-links">
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">arXiv<br>2025</div>
    <div class="meta">
      <p class="pub-title">Dynamic Perturbed Adaptive Method for Infinite Task-Conflicting Time Series</p>
      <p class="authors"><span class="me">J. You</span>, X. Wang, A. Cela</p>
      <p class="venue">arXiv preprint arXiv:2505.11902, 2025</p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2505.11902" target="_blank" rel="noopener">arXiv</a>
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">arXiv<br>2025</div>
    <div class="meta">
      <p class="pub-title">Enhancing Spatio-Temporal Forecasting with Spatial Neighbourhood Fusion: A Case Study on COVID-19 Mobility in Peru</p>
      <p class="authors">C. Li, <span class="me">J. You</span>, H. Moungla, V. Gauthier, M. Nunez-del-Prado, H. Alatrista-Salas</p>
      <p class="venue">arXiv preprint arXiv:2507.00031, 2025</p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2507.00031" target="_blank" rel="noopener">arXiv</a>
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">INISTA<br>2024</div>
    <div class="meta">
      <p class="pub-title">Kernel-U-Net: Multivariate Time Series Forecasting Using Custom Kernels</p>
      <p class="authors"><span class="me">J. You</span>, A. Cela, R. Natowicz, J. Ouanounou, P. Siarry</p>
      <p class="venue">2024 International Conference on INnovations in Intelligent SysTems and Applications (INISTA), 2024</p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2401.01479" target="_blank" rel="noopener">arXiv</a>
        <a href="https://github.com/JiangYou2025/kun" target="_blank" rel="noopener">Code</a>
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">ICCP<br>2024</div>
    <div class="meta">
      <p class="pub-title">Anomaly Prediction: A Novel Approach with Explicit Delay and Horizon</p>
      <p class="authors"><span class="me">J. You</span>, A. Cela, R. Natowicz, J. Ouanounou, P. Siarry</p>
      <p class="venue">2024 IEEE 20th International Conference on Intelligent Computer Communication and Processing (ICCP), 2024</p>
      <div class="pub-links">
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">arXiv<br>2024</div>
    <div class="meta">
      <p class="pub-title">Robust Time Series Forecasting with Non-Heavy-Tailed Gaussian Loss-Weighted Sampler</p>
      <p class="authors"><span class="me">J. You</span>, A. Cela, R. Natowicz, J. Ouanounou, P. Siarry</p>
      <p class="venue">arXiv preprint arXiv:2406.13871, 2024</p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2406.13871" target="_blank" rel="noopener">arXiv</a>
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">arXiv<br>2024</div>
    <div class="meta">
      <p class="pub-title">Kernel-U-Net: Hierarchical and Symmetrical Framework for Multivariate Time Series Forecasting</p>
      <p class="authors"><span class="me">J. You</span>, R. Natowicz, A. Cela, J. Ouanounou, P. Siarry</p>
      <p class="venue">arXiv preprint arXiv:2401.01479, 2024</p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2401.01479" target="_blank" rel="noopener">arXiv</a>
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">arXiv<br>2024</div>
    <div class="meta">
      <p class="pub-title">Learning KU-Net with Constant Complexity: An Application to Time Series Forecasting</p>
      <p class="authors"><span class="me">J. You</span>, A. Cela, R. Natowicz, J. Ouanounou, P. Siarry</p>
      <p class="venue">arXiv preprint arXiv:2410.02438, 2024</p>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2410.02438" target="_blank" rel="noopener">arXiv</a>
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

  <div class="pub">
    <div class="thumb">PhD<br>2024</div>
    <div class="meta">
      <p class="pub-title">Time Series Forecasting, Anomaly Detection and Prediction</p>
      <p class="authors"><span class="me">J. You</span></p>
      <p class="venue">PhD Thesis, Université Paris-Est Créteil Val-de-Marne, 2024</p>
      <div class="pub-links">
        <a href="{{ site.author.scholar }}" target="_blank" rel="noopener">Scholar</a>
      </div>
    </div>
  </div>

</section>

<!-- ============================================================ TEACHING -->
<section id="teaching">
  <h2>Teaching</h2>

  <div class="teaching-item">
    <p class="role">Time Series Analysis &amp; Forecasting <span class="when">— TP, ESIEE Paris, 2021–2026</span></p>
    <p>Practical sessions (TP) on statistical and deep learning methods for time series data.</p>
  </div>
  <div class="teaching-item">
    <p class="role">Deep Learning <span class="when">— TP, ESIEE Paris, 2021–2026</span></p>
    <p>Practical sessions (TP) covering neural network architectures, training, and applications.</p>
  </div>
  <div class="teaching-item">
    <p class="role">Reinforcement Learning <span class="when">— TP, ESIEE Paris, 2021–2026</span></p>
    <p>Practical sessions (TP) on MDPs, policy gradients, Q-learning, and deep RL.</p>
  </div>
</section>

</div>
