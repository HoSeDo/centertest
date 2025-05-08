kakao.maps.load(function () {
  var mapContainer = document.getElementById('map');
  var mapOption = {
    center: new kakao.maps.LatLng(37.566698, 126.978618),
    level: 9
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 여러 개의 고정 마커
  var positions = [
    {
      title: '공주시치매안심센터',
      latlng: new kakao.maps.LatLng(36.457006, 127.120185)
    },
    {
      title: '금산군치매안심센터',
      latlng: new kakao.maps.LatLng(36.109486, 127.493454)
    },
    {
      title: '논산시치매안심센터',
      latlng: new kakao.maps.LatLng(36.198574, 127.095278)
    }
  ];

  for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title
    });

    (function(marker, title) {
      kakao.maps.event.addListener(marker, 'click', function () {
        alert(title);
      });
    })(marker, positions[i].title);
  }

  // 클릭 시 위치 마커 (1개만)
  var clickMarker = new kakao.maps.Marker();
  clickMarker.setMap(map);

  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    var latlng = mouseEvent.latLng;

    // 클릭한 위치로 마커 이동
    clickMarker.setPosition(latlng);

    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';

    var resultDiv = document.getElementById('clickLatlng');
    resultDiv.innerHTML = message;
  });
});
