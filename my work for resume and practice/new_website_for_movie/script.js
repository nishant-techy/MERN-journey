// Example movie data (you can add more or modify)
const movies = [
  {
    title: "Saiyaara",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/1i4l4B18qgdVY_qimhwtshrW_m657v86_/view?usp=drive_link",
  },
  {
    title: "Black Adam",
    poster:
      "https://image.tmdb.org/t/p/original/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
    link: "https://drive.google.com/file/d/1lh7wPLmfH2li_E-IJPlC_h_vPgIT_Z5X/view?usp=drive_link",
  },
  {
    title: "Red one",
    poster:
      "https://preview.redd.it/official-poster-for-red-one-v0-sbjhwpkm8gqd1.jpeg?width=640&crop=smart&auto=webp&s=c1c9afee018d15ae96e87b19d0f2c48804356a21",
    link: "https://drive.google.com/file/d/1asj-IZTDp_C-bj1_lKxcHvt3cNLxanRQ/view?usp=drive_link",
  },
  {
    title: "Central Intelligence",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_FMjpg_UX1000_.jpg",
    link: "https://drive.google.com/file/d/1nX8u2J8vgshCU9LH0USn1KASNb9RmTdY/view?usp=drive_link",
  },
  {
    title: "Dangal",
    poster:
      "https://i.pinimg.com/736x/a2/bf/94/a2bf94f21f32d8e172531ab31865b911.jpg",
    link: "https://drive.google.com/file/d/1U3ZfJmtCDj8vQasQBlXa2PVIUX27x7uF/view?usp=drive_link",
  },
  {
    title: "Sultan",
    poster:
      "https://i.pinimg.com/736x/a0/f0/c4/a0f0c449950b2b386e61effc5c5e46ff.jpg",
    link: "https://drive.google.com/file/d/1AqEsg6JCVkXSQ-wXgkJdCct9DSDY9abU/view?usp=drive_link",
  },
  {
    title: "Sitaare Zameen Par",
    poster:
      "https://images.filmibeat.com/ph-big/2025/05/sitaare-zameen-par1747294849_1.jpg",
    link: "https://drive.google.com/file/d/1fxdDrfYxrgtiqm_epoo-dCr_YYJ0uumG/view?usp=drive_link",
  },
  {
    title: "Om Shanti Om",
    poster:
      "https://c8.alamy.com/comp/B84DKG/om-shanti-om-oso-year-2007-india-affiche-poster-shahrukh-khan-director-B84DKG.jpg",
    link: "https://drive.google.com/file/d/171UB8WGbdfC3ma0xQKG1g-lboOtj4heA/view?usp=drive_link",
  },
  {
    title: "Bahubali",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2YxZThhZmEtYzM0Yi00OWYxLWI4NGYtM2Y2ZDNmOGE0ZWQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    link: "https://drive.google.com/file/d/1neeCeVFVCkf5DSXcSzMqhaXvEcFhBGla/view?usp=drive_link",
  },
  {
    title: "Bahubali 2",
    poster:
      "https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=20&crop=false",
    link: "https://drive.google.com/file/d/1XpJ6VE0hASAMxVCI-gyX5Ebu1ztNxThg/view?usp=drive_link",
  },
  {
    title: "Bhaag Milkha Bhaag",
    poster:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a12d79391315.560cdaf634c23.jpg",
    link: "https://drive.google.com/file/d/1lOoaHRDqroFHtQTddLlg4qhi_brk3o_G/view?usp=drive_link",
  },
  {
    title: "Tumbbad",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg",
    link: "https://drive.google.com/file/d/1tOxwlhWAc0sLTDI69pkEm9L2H5JRJjfd/view?usp=drive_link",
  },
  {
    title: "Rab ne bana di jodi",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Rab_Ne_Bana_Di_Jodi.jpg/250px-Rab_Ne_Bana_Di_Jodi.jpg",
    link: "https://drive.google.com/file/d/1WR9DCGQl3f0dIKc5S_WXJtYUxPLg9q4d/view?usp=drive_link",
  },
  {
    title: "Chup Chup Ke",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTg3MTMzNjUwOF5BMl5BanBnXkFtZTcwODgxODMzMQ@@._V1_FMjpg_UX1000_.jpg",
    link: "https://drive.google.com/file/d/1MNlsI8aGYV_Vn8D_7SeKjjknkHQvregG/view?usp=drivesdk",
  },
  {
    title: "Kabhi khushi kabhie gham",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWRiMGQ4ZTktMmFlZS00MmJiLWFkZDItMDZlOGY4MzcwOTUzXkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/1-U4fksWAw95Lb5nCivZZoDFYPXrh8vAR/view?usp=drivesdk",
  },
  {
    title: "Munna Bhai MBBS",
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p83370_p_v10_aa.jpg",
    link: "https://drive.google.com/file/d/1KSotL8dOHSlaWo9XsQrthEeq2sOo1BWn/view?usp=drivesdk",
  },
  {
    title: "Rab ne bana di jodi",
    poster: "https://m.media-amazon.com/images/I/71bYJZRgMGL.jpg",
    link: "https://drive.google.com/file/d/1Slk_Jubh39i7TKUU3LFFaSUkN5sw-a_g/view?usp=drivesdk",
  },
  {
    title: "Rocket Singh",
    poster:
      "https://www.postergully.com/cdn/shop/products/o4vR87W.jpeg?v=1578641374&width=1445",
    link: "https://drive.google.com/file/d/1OZOe5JgcGARsPJcfa9QcRzReUr5taUI7/view?usp=drivesdk",
  },
  {
    title: "Sanju",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTllN2U1MDEtNmRhZC00ZmU0LTk1ZDUtODlkZGQyZTNiOTZlXkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/1Pu6XVt8UUosBhDRbEmrmhpeRYMZnPUYx/view?usp=drivesdk",
  },
  {
    title: "Sonu ke titu ke sweety",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmM0ZjFkOTAtNmVjMi00NmExLTk2MzItZWNmNWFhYzNmMjY2XkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/1ttq5h4e0P127DuOgip2ABrVfkgO_aD6B/view?usp=drivesdk",
  },
  {
    title: "Swades",
    poster: "https://m.media-amazon.com/images/I/9120JZWP1uL.jpg",
    link: "https://drive.google.com/file/d/1auadv2EBcUj21BZ-5-B7BB-w5dLkr_mn/view?usp=drivesdk",
  },
  {
    title: "Table No - 21",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmZhNTRhODgtNzFhMy00MjQ3LWJkNDctMzVhNTRlNDg2OWZmXkEyXkFqcGc@._V1_.jpg",
    link: "https://drive.google.com/file/d/1AKfniwu9w1mf-ZW8FLM82EcZev3Vm9Vt/view?usp=drivesdk",
  },
  {
    title: "Talaash",
    poster:
      "https://www.postergully.com/cdn/shop/products/SR480.jpg?v=1578633708",
    link: "https://drive.google.com/file/d/1cZzem8moIllLy3_yuqGeOQ2PdmhtArmp/view?usp=drivesdk",
  },
];

const container = document.getElementById("moviesContainer");

movies.forEach((movie) => {
  const movieDiv = document.createElement("div");
  movieDiv.className = "movie";

  movieDiv.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3 class="movie-title">${movie.title}</h3>
        <a class="watch-button" href="${movie.link}" target="_blank">Watch Now</a>
      `;

  container.appendChild(movieDiv);
});
