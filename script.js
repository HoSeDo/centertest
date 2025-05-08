kakao.maps.load(function () {
  var mapContainer = document.getElementById('map');

  // 지도 생성 시 center/level은 일단 임시값 (전체 마커 기준으로 나중에 setBounds로 조정)
  var mapOption = {
    center: new kakao.maps.LatLng(36.5, 127.3),
    level: 13
  };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커 목록
  var positions = [
    { title: '공주시치매안심센터', latlng: new kakao.maps.LatLng(36.457006, 127.120185) },
    { title: '금산군치매안심센터', latlng: new kakao.maps.LatLng(36.109486, 127.493454) },
    { title: '금산군추부치매안심센터', latlng: new kakao.maps.LatLng(36.190988, 127.469942) },
    { title: '금산군군북치매안심센터', latlng: new kakao.maps.LatLng(36.166273, 127.525738) },
    { title: '금산군남일치매안심센터', latlng: new kakao.maps.LatLng(36.042799, 127.504706) },
    { title: '금산군제원치매안심센터', latlng: new kakao.maps.LatLng(36.112522, 127.546088) },
    { title: '금산군진산치매안심센터', latlng: new kakao.maps.LatLng(36.144203, 127.370060) },
    { title: '계룡시치매안심센터', latlng: new kakao.maps.LatLng(36.273093, 127.250047) },
    { title: '홍성군치매안심센터', latlng: new kakao.maps.LatLng(36.596650, 126.663088) },
    { title: '홍성군결성치매안심센터', latlng: new kakao.maps.LatLng(36.526345, 126.544503) },
    { title: '홍성군광천치매안심센터', latlng: new kakao.maps.LatLng(36.504551, 126.625427) },
    { title: '홍성군서부치매안심센터', latlng: new kakao.maps.LatLng(36.581379, 126.513389) },
    { title: '홍성군금마치매안심센터', latlng: new kakao.maps.LatLng(36.611614, 126.732731) },
    { title: '홍성군장곡치매안심센터', latlng: new kakao.maps.LatLng(36.501927, 126.693670) },
    { title: '홍성군갈산치매안심센터', latlng: new kakao.maps.LatLng(36.603244, 126.551729) },
    { title: '홍성군구항치매안심센터', latlng: new kakao.maps.LatLng(36.587707, 126.610406) },
    { title: '홍성군홍북치매안심센터', latlng: new kakao.maps.LatLng(36.649059, 126.692029) },
    { title: '홍성군은하치매안심센터', latlng: new kakao.maps.LatLng(36.532773, 126.589985) },
    { title: '홍성군홍동치매안심센터', latlng: new kakao.maps.LatLng(36.559556, 126.686989) },
    { title: '태안군치매안심센터', latlng: new kakao.maps.LatLng(36.751840, 126.323205) },
    { title: '태안군안면읍치매안심센터', latlng: new kakao.maps.LatLng(36.520689, 126.344488) },
    { title: '논산시치매안심센터', latlng: new kakao.maps.LatLng(36.196205, 127.103816) },
    { title: '당진시치매안심센터', latlng: new kakao.maps.LatLng(36.887373, 126.630007) },
    { title: '당진시합덕치매안심센터', latlng: new kakao.maps.LatLng(36.807757, 126.769399) },
    { title: '청양군치매안심센터', latlng: new kakao.maps.LatLng(36.455300, 126.804540) },
    { title: '청양군정산면치매안심센터', latlng: new kakao.maps.LatLng(36.414201, 126.945177) },
    { title: '천안시서북구치매안심센터', latlng: new kakao.maps.LatLng(36.819764, 127.139874) },
    { title: '천안시서북구성환치매안심센터', latlng: new kakao.maps.LatLng(36.918152, 127.134386) },
    { title: '천안시서북구직산치매안심센터', latlng: new kakao.maps.LatLng(36.878710, 127.155976) },
    { title: '천안시동남구치매안심센터', latlng: new kakao.maps.LatLng(36.807177, 127.151463) },
    { title: '천안시동남구병천치매안심센터', latlng: new kakao.maps.LatLng(36.767176, 127.302587) },
    { title: '아산시치매안심센터', latlng: new kakao.maps.LatLng(36.782909, 127.014051) },
    { title: '서천시치매안심센터', latlng: new kakao.maps.LatLng(36.774482, 126.444515) },
    { title: '부여군치매안심센터', latlng: new kakao.maps.LatLng(36.282929, 126.909414) },
    { title: '부여군서부치매안심센터', latlng: new kakao.maps.LatLng(36.217367, 126.759627) },
    { title: '부여군남부치매안심센터', latlng: new kakao.maps.LatLng(36.186729, 126.893891) },
    { title: '보령시치매안심센터', latlng: new kakao.maps.LatLng(36.356318, 126.604527) },
    { title: '보령시 주교면 치매안심센터', latlng: new kakao.maps.LatLng(36.389641, 126.569789) },
    { title: '보령시 웅천읍 치매안심센터', latlng: new kakao.maps.LatLng(36.234530, 126.596896) }
  ];

  // 지도 범위 자동 조정용 LatLngBounds 객체
  var bounds = new kakao.maps.LatLngBounds();

  // 마커 생성 및 이벤트 연결
  for (var i = 0; i < positions.length; i++) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
      title: positions[i].title
    });

    bounds.extend(positions[i].latlng);

    (function(marker, title) {
      kakao.maps.event.addListener(marker, 'click', function () {
        alert(title);
      });
    })(marker, positions[i].title);
  }

  // 마커 포함 지도 범위로 자동 조정
  map.setBounds(bounds);

  // 클릭한 위치 표시 마커 (1개만 사용)
  var clickMarker = new kakao.maps.Marker();
  clickMarker.setMap(map);

  kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    var latlng = mouseEvent.latLng;
    clickMarker.setPosition(latlng);

    var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    message += '경도는 ' + latlng.getLng() + ' 입니다';

    var resultDiv = document.getElementById('clickLatlng');
    resultDiv.innerHTML = message;
  });
});
