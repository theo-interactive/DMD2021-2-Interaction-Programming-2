# 1 WEEK

1주차 과제입니다.

수업시간에 진행했던 Visual Studio Code 를 익혀보고, jQuery 로드했던 소스를 작성합니다.

'학번_이름(영문)' 폴더 생성 후 index.html, css, js 폴더 구조까지 만들어서 폴더 업로드합니다.

jQuery 준비(ready) 되는 함수 부분에서

(1) alert() 을 이용하여 자신의 '학번 / 이름' 을 출력하고

(2) console.log() 을 이용하여 수업에 임하는 '간단한 인사말' 을 console 창에 출력합니다.

(3) 또한, 수업을 통에서 배우고 싶거나 바라는 점들이 있다면 console.log() 에 추가 기입합니다.

## 제출기한

9월 8일 (수) 23:00 까지 업로드

## jQuery 로드


```
### index.html ###
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
    <title>1Week</title>
    <link href="./css/reset.css" rel="stylesheet"/>
</head>
<body>
<h1>1Week - 09/02</h1>
<script src="./vendor/jquery/jquery.min.js" type="text/javascript"></script>
<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript"></script> -->
<script src="./js/script.js" type="text/javascript"></script>
</body>
</html>
```
```
### script.js ###
(function($){
    $(document).ready(function(){
        console.log('Hello World!');
        alert('안녕하세요.');
    });
})(jQuery);
```