google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
  var mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(23.5881678, 120.2068121)
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  loadMapMarker(map);
}

function loadMapMarker(map) {
  $.ajax({
    url: 'http://localhost:3000/api/index',
    error: function () {
      console.log('error');
    },
    success: function (results) {

      results.forEach(function (result) {
        setlatlng(result);
        newMarker(result, map);
      })
    }
  })
};

//將lat,lng放進api中
function setlatlng(result) {

  for (var i in latlng) {
    if (result.cityname == latlng[i].title) {
      result.lat = latlng[i].lat;
      result.lng = latlng[i].lng;
    }
  }
}

//插入map icon
function newMarker(result, map) {
  var marker = new RichMarker({
    content: '',
    map: map,
    position: new google.maps.LatLng(result.lat, result.lng)
  });
  setMarkerIcon(result, marker);
  markerClick(result, marker);

}

//這邊加入 status 判斷 然後set content
function setMarkerIcon(result, marker) {
  var mapIcon = {
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
  </svg></div>`
  };
  if (result.status.match(/雨/) == '雨') {
    marker.setContent(mapIcon.rainy);

  } else if (result.status.match(/晴天/) == '晴天') {
    marker.setContent(mapIcon.sun);

  } else if (result.status.match(/晴時/) == '晴時') {
    marker.setContent(mapIcon.mostly_cloudy);

  } else if (result.status.match(/多雲/) == '多雲') {
    marker.setContent(mapIcon.cloudy);
  }
}

//marker click listener
function markerClick(result, marker) {
  marker.addListener('click', function () {
    $('#areaInfoCard').remove();

    var markerId = result.id;
    console.log(markerId);
    setInfoCard(markerId);
  });
}

//set area infocard 
function setInfoCard(id) {
  $.ajax({
    url: 'http://localhost:3000/index/area?id=' + id,
    error: function () {
      console.log('error');
    },
    success: function (data) {
      var Data = data[0];
      areaCardIcon(Data);
      $('#map').after('<div id="areaInfoCard"></div>');
      var infoCard = `
          <ul data-id= "${Data.id}" class="areaInfoBox">
            <li class="areaBox">
              <div class="spaceblock"></div>
              ${Data.icon}
              <h2 class="areaName">${Data.cityname}</h2>
            </li>
            <li class="temperBox">
              <h2 class="temper title"> 氣溫</h2>
              <p class="temper num">${Data.temp}</p>
            </li>
            <li class="rainfallBox">
              <div class="rainfallIcon">
                <div class="rain"></div>
                <div class="rain rain2"></div>
                <div class="rain rain3"></div>
                <div class="rain rain4"></div><i class="fas fa-umbrella"></i>
              </div>
              <p class="rainfall">降雨機率 ${Data.rain}</p>
            </li>
            <div class="weatherNote"> 
              <h4>小提醒</h4>
              <p class="note">記得帶把傘 </p>
            </div>
          </ul>` ;

      $('#areaInfoCard').append(infoCard);
    }
  })
}

//set infocard area weather icon 
function areaCardIcon(data) {
  var cardIcon = {
    cloudy: `<div class="weatherIcon"><p class="iconText">陰天</p></div>`,
    rainy: `<div class="weatherIcon"><div class="rainBox"><div class="rain rain1"></div><div class="rain rain2"></div><div class="rain rain3"></div><div class="rain rain4"></div><div class="rain rain5"></div></div><p class="iconText">雨天</p></div>`,
    mostly_cloudy: `<div class="svgBox"><svg viewbox="-50 -50 100 100"><circle class="sun" cx="0" cy="0" r="20"></circle><circle class="cloud" cx="-30" cy="20" r="20"></circle><circle class="cloud" cx="-15" cy="20" r="20"></circle><circle class="cloud" cx="0" cy="20" r="20"></circle><circle class="cloud" cx="-25" cy="5" r="20"></circle><circle class="cloud" cx="-5" cy="13" r="20"></circle></svg><p class="iconText">晴時多雲</p></div>`,
    sun: `<div class="svgBox"><svg viewbox="-50 -50 100 100"><circle class="sun" cx="0" cy="0" r="20"> </circle></svg><p class="iconText">晴天</p></div>`
  };
  if (data.status.match(/雨/) == '雨') {
    data.icon = cardIcon.rainy;
  } else if (data.status.match(/晴天/) == '晴天') {
    data.icon = cardIcon.sun;
  } else if (data.status.match(/晴時/) == '晴時') {
    data.icon = cardIcon.mostly_cloudy;
  } else if (data.status.match(/多雲/) == '多雲') {
    data.icon = cardIcon.cloudy;
  }
}


const latlng = [
  {
    title: '基隆市',
    lat: 25.131630,
    lng: 121.744642
  },
  {
    title: '臺北市',
    lat: 25.037780,
    lng: 121.564390
  },
  {
    title: '新北市',
    lat: 24.892335,
    lng: 121.522549
  },
  {
    title: '桃園市',
    lat: 24.993191,
    lng: 121.301017
  },
  {
    title: '新竹市',
    lat: 24.651396,
    lng: 121.195309
  },
  {
    title: '苗栗縣',
    lat: 24.447371,
    lng: 120.975831
  },
  {
    title: '臺中市',
    lat: 24.161890,
    lng: 120.646878
  },
  {
    title: '彰化縣',
    lat: 23.936506,
    lng: 120.508931
  },
  {
    title: '南投縣',
    lat: 23.822287,
    lng: 120.971007
  },
  {
    title: '雲林縣',
    lat: 23.699196,
    lng: 120.526324
  },
  {
    title: '嘉義縣 ',
    lat: 23.481317,
    lng: 120.453599
  },
  {
    title: '宜蘭縣 ',
    lat: 24.506455,
    lng: 121.479123
  },
  {
    title: '花蓮縣 ',
    lat: 23.617318,
    lng: 121.286111
  },
  {
    title: '臺東縣 ',
    lat: 22.755471,
    lng: 121.150534
  },
  {
    title: '臺南市',
    lat: 22.992372,
    lng: 120.185061
  },
  {
    title: '高雄市',
    lat: 23.039001,
    lng: 120.645841
  },
  {
    title: '屏東縣 ',
    lat: 22.450732,
    lng: 120.660151
  },
  {
    title: '連江縣 ',
    lat: 26.172734,
    lng: 119.965732
  },
  {
    title: '金門縣  ',
    lat: 24.436791,
    lng: 118.318632
  },
  {
    title: '澎湖縣  ',
    lat: 23.570003,
    lng: 119.566378
  }
];


