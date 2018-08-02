var cardIcon = {
    cloudy: `<div class="weatherIcon"><p class="iconText">陰天</p></div>`,
    rainy: `<div class="weatherIcon"><div class="rainBox"><div class="rain rain1"></div><div class="rain rain2"></div><div class="rain rain3"></div><div class="rain rain4"></div><div class="rain rain5"></div></div><p class="iconText">雨天</p></div>`,
    mostly_cloudy: `<div class="svgBox"><svg viewbox="-50 -50 100 100"><circle class="sun" cx="0" cy="0" r="20"></circle><circle class="cloud" cx="-30" cy="20" r="20"></circle><circle class="cloud" cx="-15" cy="20" r="20"></circle><circle class="cloud" cx="0" cy="20" r="20"></circle><circle class="cloud" cx="-25" cy="5" r="20"></circle><circle class="cloud" cx="-5" cy="13" r="20"></circle></svg><p class="iconText">晴時多雲</p></div>`,
    sun: `<div class="svgBox"><svg viewbox="-50 -50 100 100"><circle class="sun" cx="0" cy="0" r="20"> </circle></svg><p class="iconText">晴天</p></div>`
}
module.exports = cardIcon;