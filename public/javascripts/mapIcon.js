var mapIcon = function (result) {
  var icon = {
    sun: `
<div data-id="${result.id}">
    <svg class="mapIcon" preserveAspectRatio="xMidYMid slice" viewbox="-75 -75 150 150">
        <circle class="sun" cx="0" cy="0" r="20"></circle>
    </svg>
</div>`,
    cloudy: `
 <div data-id="${result.id}">
    <svg class="mapIcon" viewbox="-75 -75 150 150">
        <circle class="cloud" cx="-30" cy="20" r="20"></circle>
        <circle class="cloud" cx="-15" cy="20" r="20"></circle>
        <circle class="cloud" cx="0" cy="20" r="20"></circle>
        <circle class="cloud" cx="-25" cy="5" r="20"></circle>
        <circle class="cloud" cx="-5" cy="13" r="20"></circle>
    </svg>
</div>`,
    mostly_cloudy: `
<div data-id="${result.id}">
    <svg class="mapIcon" viewbox="-75 -75 150 150">
        <circle class="sun" cx="0" cy="0" r="20"></circle>
        <circle class="cloud" cx="-30" cy="20" r="20"></circle>
        <circle class="cloud" cx="-15" cy="20" r="20"></circle>
        <circle class="cloud" cx="0" cy="20" r="20"></circle>
        <circle class="cloud" cx="-25" cy="5" r="20"></circle>
        <circle class="cloud" cx="-5" cy="13" r="20"></circle>
    </svg>
</div>`,
    rainy: `<div data-id="${result.id}"><svg class="mapIcon" viewbox="-75 -75 150 150">
  <line class="rain" x1="0" y1="15" x2="0" y2="25"></line>
  <line class="rain" x1="-15" y1="5" x2="-15" y2="35"></line>
  <line class="rain" x1="-25" y1="20" x2="-25" y2="55"></line>
  <circle class="cloud" cx="-30" cy="20" r="20"></circle>
  <circle class="cloud" cx="-15" cy="20" r="20"></circle>
  <circle class="cloud" cx="0" cy="20" r="20"></circle>
  <circle class="cloud" cx="-25" cy="5" r="20"></circle>
  <circle class="cloud" cx="-5" cy="13" r="20"></circle>
</svg></div>`,
    cardHtml: `
  <ul class="areaInfoBox">
    <li class="areaBox">
      <div class="spaceblock"></div>
      <div class="weatherIcon">
        <div class="rainBox">
          <div class="rain rain1"></div>
          <div class="rain rain2"></div>
          <div class="rain rain3"></div>
          <div class="rain rain4"></div>
          <div class="rain rain5"></div>
        </div>
        <p class="iconText">雨天</p>
      </div>
      <h2 class="areaName">台北市</h2>
    </li>
    <li class="temperBox">
      <h2 class="temper title"> 氣溫</h2>
      <p class="temper num">15度</p>
    </li>
    <li class="rainfallBox">
      <div class="rainfallIcon">
        <div class="rain"></div>
        <div class="rain rain2"></div>
        <div class="rain rain3"></div>
        <div class="rain rain4"></div><i class="fas fa-umbrella"></i>
      </div>
      <p class="rainfall">降雨機率 70%</p>
    </li>
    <div class="weatherNote"> 
      <h4>小提醒</h4>
      <p class="note">記得帶把傘 </p>
    </div>
  </ul>
`
  }
};

module.exports = mapIcon;