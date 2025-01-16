# Movie Search Project🍿

[React 9기] 프로그래밍 기초 주차 개인과제로 TMDB API를 이용하여 영화 검색을 진행할 수 있는 프로젝트입니다.  

## 🛠️ 기술 스택 
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌐 사용한 외부 API 
[![TMDB API](https://img.shields.io/badge/TMDB%20API-000000?style=flat&logo=tmdb&logoColor=white)](https://www.themoviedb.org/)

## ✨ 기능 
### 🔍 영화 검색 기능 
- 사용자가 검색어를 입력하면, TMDB API를 이용해 영화 리스트를 불러옵니다.
- 검색에는 디바운싱을 사용하여 사용자가 입력할 때마다 API 요청을 최소화하고, 또한 엔터 키를 통한 일반 검색 기능도 제공하여 직관적인 검색 경험을 제공합니다.

![검색 기능](https://github.com/user-attachments/assets/7e4c4b8f-bc6e-4f5f-b83f-a03d629a004b)

### 🎥 영화 상세 정보 
- 각 영화 카드를 클릭하면, 해당 영화의 고유 ID를 기반으로 TMDB API에서 상세 정보를 불러옵니다.
- 영화 상세 정보는 모달 창으로 띄워져 사용자가 편리하게 내용을 확인할 수 있습니다.

![진짜 상세](https://github.com/user-attachments/assets/05358ebc-fbd5-459f-bc31-3c67eb9f3b6a)

### ⭐ 북마크 기능 
- 영화 상세 모달에서 별 아이콘을 클릭하여 북마크를 추가하거나 삭제할 수 있습니다.
- 북마크 데이터는 localStorage에 저장되어, 페이지를 새로 고침해도 유지됩니다.

![북마크](https://github.com/user-attachments/assets/1f5b9ad1-0ff3-4a8e-b6cb-61b502e70ac1)

## ⚙️ 트러블 슈팅 
[영화 리스트에 이벤트를 추가하면 하위 요소에 어떻게 접근하지...?](https://dlawi0108.tistory.com/37)  
[디바운싱을 이용한 검색 기능 최적화](https://dlawi0108.tistory.com/38)  
[이벤트 중복 호출 해결](https://dlawi0108.tistory.com/41)

## 🚀 배포 및 실행 
[Github Pages](https://imjaeone.github.io/sparta-movie/)
