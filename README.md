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

#### 기능 설명  
- 사용자가 검색어를 입력하면, TMDB API를 이용해 영화 리스트를 불러옵니다.
- 검색에는 디바운싱을 사용하여 사용자가 입력할 때마다 API 요청을 최소화하고, 또한 엔터 키를 통한 일반 검색 기능도 제공합니다.

#### 문제 상황  
- 기존 검색 기능은 디바운싱만 사용할 수 있었습니다.
- 사용자가 기능을 변경할 때 이벤트가 중복 호출되는 문제가 발생했습니다.

#### 해결 방법  
- **이벤트 동적 관리**: 초기에는 디바운싱 이벤트만 활성화하고, 사용자가 검색 방식을 변경하면 기존 이벤트를 제거하고 새로운 이벤트를 추가하도록 구현했습니다.  
- **중복 호출 방지**: `removeEventListener`를 활용해 기존 이벤트를 삭제한 후 새로운 이벤트를 추가했습니다.

#### 적용 코드  
```javascript
searchInput.addEventListener('input', searchDebouncing);

searchOption.addEventListener('change', (e) => {
    const selectedOption = e.target.value;

    // 기존 이벤트 제거
    searchInput.removeEventListener('input', searchDebouncing);
    searchInput.removeEventListener('keyup', searchNormal);

    // 새로운 이벤트 추가
    if (selectedOption === 'search-normal') {
        searchInput.addEventListener('keyup', searchNormal);
    } else {
        searchInput.addEventListener('input', searchDebouncing);
    }
});
```
![검색 기능](https://github.com/user-attachments/assets/7e4c4b8f-bc6e-4f5f-b83f-a03d629a004b)

### 🎥 영화 상세 정보 
- 각 영화 카드를 클릭하면, 해당 영화의 고유 ID를 기반으로 TMDB API에서 상세 정보를 불러옵니다.
- 영화 상세 정보는 모달 창으로 띄워져 사용자가 편리하게 내용을 확인할 수 있습니다.

![진짜 상세](https://github.com/user-attachments/assets/05358ebc-fbd5-459f-bc31-3c67eb9f3b6a)

### ⭐ 북마크 기능 

#### 기능 설명  
- 영화 상세 모달에서 별 아이콘을 클릭하여 북마크를 추가하거나 삭제할 수 있습니다.
- 북마크 데이터는 `localStorage`에 저장되어, 페이지를 새로고침해도 데이터가 유지됩니다.

#### 문제 상황  
- 북마크 페이지에서 북마크를 취소했을 때, 화면이 즉시 리렌더링되지 않아 취소된 영화가 화면에 남아있던 문제가 있었습니다.

#### 해결 방법  
- **전역 변수 추가**: `bookmarkView`를 통해 현재 북마크 페이지 여부를 확인했습니다.  
- **조건부 렌더링**: 북마크 취소 시 `bookmarkView`가 활성화된 경우, 북마크 화면을 리렌더링하도록 수정했습니다.

#### 적용 코드  
```javascript
modal.addEventListener('click', async (e) => {
    if (e.target.classList.contains('modal-bookmark-btn')) {
        const movieId = e.target.closest('.modal-item').getAttribute('movie-id');

        if (e.target.classList.contains('bookmark-true')) {
            deleteBookmark(movieId);
            e.target.textContent = '☆';
        } else {
            const detailData = await getMovieDetail(movieId);
            addBookmark(movieId, detailData);
            e.target.textContent = '★';
        }

        // 북마크 페이지 리렌더링
        if (bookmarkView) {
            renderMovieList();
        }
    }
});
```

![북마크](https://github.com/user-attachments/assets/1f5b9ad1-0ff3-4a8e-b6cb-61b502e70ac1)

## ⚙️ 트러블 슈팅 
[영화 리스트에 이벤트를 추가하면 하위 요소에 어떻게 접근하지...?](https://dlawi0108.tistory.com/37)  
[디바운싱을 이용한 검색 기능 최적화](https://dlawi0108.tistory.com/38)  
[이벤트 중복 호출 해결](https://dlawi0108.tistory.com/41)

## 🚀 배포 및 실행 
[Github Pages](https://imjaeone.github.io/sparta-movie/)

## 📝 느낀 점
이번 프로젝트를 통해 vanillaJS로 영화 검색, 북마크, 모달 등의 기능을 구현하며 많은 것을 배웠습니다. 특히, 북마크 기능을 구현할 때 전역 변수(bookmarkView)를 활용해 북마크 페이지 여부를 관리했는데, 이를 React의 **useState**를 이용했다면 훨씬 깔끔하게 상태 관리를 할 수 있었겠다는 생각이 들었습니다.

React에서는 상태와 UI가 자연스럽게 연결되기 때문에, 상태 변경 시 화면이 자동으로 리렌더링되는 점이 매우 편리합니다. 이번 프로젝트를 통해 React의 소중함을 다시 한번 느끼게 되었고, 향후 React 기반 프로젝트에서도 더 효율적으로 상태 관리를 할 수 있을 것 같습니다.

또한, vanillaJS로 동적인 기능을 구현하며 이벤트 관리, 조건부 렌더링, 데이터 유지 등을 직접 처리해 본 경험이 큰 공부가 되었습니다.
