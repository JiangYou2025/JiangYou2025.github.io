---
layout: welcome-page
title: Introduction to Deep Learning for Time Series Forecasting
---

<div class="hero" style="background-image: url('/assets/images/background.jpg');">
  <div class="overlay">
    <h1>Welcome to the Time Series Forecasting Lecture</h1>
    <p>This lecture explores statistic and deep learning models in time series forecasting.</p>
    <button onclick="scrollToDiv('overview')">Learn More</button>
  </div>
</div>

<div class="main-text">
  <h1>Introduction to Deep Time Series Forecasting</h1>
  <p>Time series forecasting involves predicting future values based on previously observed values. Temporal data is prevalent in numerous fields, including audio, voice, text, weather prediction, industry, and finance, where accurate forecasting is crucial for decision-making, optimizing operations, and strategic planning.</p>

  <figure>
      <img src="{{ site.baseurl }}/assets/images/icon_timeseries.png" alt="Time Series Icons" style="width:100%; max-width:400px;" class="center">
  </figure>
</div>

<div id="overview" class="main-text">
  <div class="intro">
    <h2>Overview</h2>
    <p>In this lecture, we cover the following key topics:</p>
  </div>
  <div class="topics-list">
  <ul>
    <li><strong>Fundamentals of Time Series Forecasting</strong> <br/>
      <gray>Introduction to the core concepts and terminology, Nest-step Forecasting, Rolling Forecasting, Multistep Forecasting.</gray>
    </li>
    <li><strong>Statistic Techniques</strong> <br/>
      <gray>Overview of popular forecasting methods such as AutoRegressive Moving Average, and ARIMA, Support Vector Regressor.</gray>
    </li>
    <li><strong>Deep Learning Techniques</strong> <br/>
      <gray>Overview of popular forecasting methods such as Multi-Layer Perceptron (MLP), Convolutional Neural Network (CNN), Long-Short Term Memory (LSTM), Transformer, and State Space Model (SSM, Mamba).</gray>
    </li>
    <li><strong>Practical Applications</strong> <br/>
      <gray>Real-world examples and applications of time series forecasting.</gray>
    </li>
  </ul>
  </div>
  <figure>
      <img src="{{ site.baseurl }}/assets/images/unet_structure.png" alt="Time Series Icons" style="width:100%; max-width:600px;" class="center">
  </figure>
</div>

<div  class="main-text">
    <h2>Getting Started</h2>
    <p>To get started with this project, you can navigate to the chapters listed above. Each chapter provides in-depth information and examples to help you understand and apply time series forecasting techniques.</p>
    <button onclick="location.href={{'/lectures/' | relative_url}}">Lectures</button>
</div>

<div class="main-text">
    <h2>Contact</h2>
    <p>
        For any questions or feedback, please reach out to our 
        <a href="https://github.com/JiangYou2025/JiangYou2025.github.io/issues">Issues Page</a>.
    </p>
    <p>
        Thank you for exploring the Time Series Forecasting lecture. We hope you find the information useful and insightful.
    </p>
</div>
 

<!---
For any questions or feedback, please reach out to [our team](mailto:yourmail@gmail.com).
-->
