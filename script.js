window.onload = function () {
  var mapContainer = document.getElementById('map');
  var mapOption = {
    center: new kakao.maps.LatLng(37.56808, 126.98046),
    level: 5,
    mapTypeId: kakao.maps.MapTypeId.ROADMAP
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  var marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(37.56653, 126.98109),
    map: map
  });

  // 지도 클릭 시 위도/경도 표시
  kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    var latlng = mouseEvent.latLng;
    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';
    document.getElementById('clickLatlng').innerText = message;
  });
};
