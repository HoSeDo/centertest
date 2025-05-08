kakao.maps.load(function () {
  var mapContainer = document.getElementById('map');
  var mapOption = {
    center: new kakao.maps.LatLng(36.5, 127.5),
    level: 9
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var positions = [
    {
      title: '공주시치매안심센터',
      latlng: new kakao.maps.LatLng(36.457006, 127.120185)
    },
    {
      title: '금산군치매안심센터',
      latlng: new kakao.maps.LatLng(36.109486, 127.493454)
    },
  ];

  // 여러 개의 마커 생성
  for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title
    });

    // 마커 클릭 시 info 출력 (선택 사항)
    (function(marker, title) {
      kakao.maps.event.addListener(marker, 'click', function () {
        alert(title);
      });
    })(marker, positions[i].title);
  }

  // 지도 클릭 시 위경도 출력
  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    var latlng = mouseEvent.latLng;
    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';

    var resultDiv = document.getElementById('clickLatlng');
    resultDiv.innerHTML = message;
  });
});
