export const movieListUI = (data) => {
    return `
    <div class="movie-item" movie-id="${data.id}">
        <img class="movie-image" src='https://image.tmdb.org/t/p/original${data.poster_path}' alt="이미지 없음"></img>
        <div>
            <div class="movie-title">${data.title}</div>
            <div class="movie-rate">평점: ${data.vote_average}</div>
        </div>
    </div>
`;
};
