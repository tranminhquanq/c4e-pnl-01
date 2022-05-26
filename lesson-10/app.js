// function randomColor() {
//   let color = getRandomGRBColor();
//   document.getElementById("square").style.background = color;
// }

// function getRandomColor() {
//   const colors = [
//     "red",
//     "blue",
//     "green",
//     "yellow",
//     "orange",
//     "purple",
//     "pink",
//     "brown",
//     "black",
//     "white",
//     "gray",
//     "cyan",
//     "magenta",
//     "lime",
//     "maroon",
//     "navy",
//   ];

//   const randomIndex = parseInt(Math.random() * colors.length);
//   return colors[randomIndex];
// }

// function getRandomHexColor() {
//   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     let randomIndex = parseInt(Math.random() * hex.length);
//     color += hex[randomIndex];
//   }
//   return color;
// }

// function getRandomGRBColor() {
//   const red = parseInt(Math.random() * 255);
//   const green = parseInt(Math.random() * 255);
//   const blue = parseInt(Math.random() * 255);
//   return `rgb(${red}, ${green}, ${blue})`;
// }

const moviesData = [
  {
    adult: false,
    backdrop_path: "/qK7Ssnrfvrt65F66A1thvehfQg2.jpg",
    genre_ids: [16, 10751, 35, 12, 9648],
    id: 420821,
    original_language: "en",
    original_title: "Chip 'n Dale: Rescue Rangers",
    overview:
      "Chip và Dale trở lại sau 30 năm kể từ khi Rescue Rangers (tập phim đầu tiên ra mắt), trong một thế giới nơi con người và các nhân vật hoạt hình sinh sống cùng nhau. Ở đó các nhân vật hoạt hình truyền thống đang phải vật lộn để tồn tại khi việc tái khởi động với đồ họa máy tính đang trở thành một xu hướng tất yếu. Cùng lúc đó, Chip và Dale phải nối lại quan hệ đối tác để cứu một người bạn khỏi nạn vi phạm bản quyền video",
    poster_path: "/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
    release_date: "2022-05-20",
    title: "Chip và Dale Biệt Đội Giải Cứu",
    video: false,
    vote_average: 7.3,
    vote_count: 260,
    popularity: 472.643,
    media_type: "movie",
  },
  {
    title: "Nhím Sonic 2",
    adult: false,
    backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    genre_ids: [28, 878, 35, 10751, 12],
    original_language: "en",
    original_title: "Sonic the Hedgehog 2",
    poster_path: "/dhICSaFjCE6DaTacJxpjkw57g76.jpg",
    id: 675353,
    vote_average: 7.8,
    vote_count: 1643,
    overview:
      'Nhím Sonic 2 là sự tiếp nối của siêu phẩm live-action trước, khi ác nhân Robotnik đã thoát được khỏi hành tinh Nấm và mang đồng bọn nhím đỏ Knuckles tới Trái Đất "gây chuyện". Trong khi đó, nhím Sonic cũng có thêm một gương mặt cùng đồng hành chống lại kẻ xấu, bảo vệ hành tinh là người bạn Tails.',
    release_date: "2022-03-30",
    video: false,
    popularity: 6234.63,
    media_type: "movie",
  },
  {
    release_date: "2022-05-24",
    adult: false,
    backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    id: 361743,
    genre_ids: [28, 18],
    original_language: "en",
    original_title: "Top Gun: Maverick",
    poster_path: "/zh3kZ9rAlVAwcpuMMIPJzBq6ejd.jpg",
    vote_count: 88,
    video: false,
    vote_average: 8.2,
    title: "Phi Công Siêu Đẳng Maverick",
    overview:
      "Bộ phim xoay quanh những cuộc chiến đấu gay cấn trên bầu trời cao của chàng phi công tài ba Maverick (Tom Cruise). Tuy nhiên, người hùng nay còn phải đối mặt với những chiếc máy bay không người lái được điều khiển từ xa.",
    popularity: 914.761,
    media_type: "movie",
  },
  {
    backdrop_path: "/78NtUwwo3lhH7QGh4vG3U1qK1mc.jpg",
    first_air_date: "2019-03-15",
    genre_ids: [16, 10765],
    id: 86831,
    name: "Love, Death & Robots",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Love, Death & Robots",
    overview:
      "Love, Death & Robots là tập hợp 18 bộ phim hoạt hình ngắn, có nội dung hoàn toàn độc lập, và được chiếu trên hệ thống Netflix. Chủ đề chung của nhóm tác phẩm là ảnh hưởng của công nghệ đến con người, và mang đậm yếu tố bạo lực, giả tưởng.\n\nĐây là thành quả của nhiều nhóm họa sĩ đến từ khắp nơi trên thế giới. Bởi không chỉ độc lập về mặt nội dung, mỗi tập phim còn mang phong cách hoạt hình, đồ họa hoàn toàn khác biệt.\n\nVới thời lượng tập ngắn nhất là 5 phút và dài nhất là 15 phút mỗi tập, toàn bộ series là trải nghiệm đen tối, nhưng cực kỳ thú vị đối với khán giả. Qua đó, Love, Death & Robots giúp mở ra tương lai cho dòng phim hoạt hình chỉ dành cho người lớn.",
    poster_path: "/cRiDlzzZC5lL7fvImuSjs04SUIJ.jpg",
    vote_average: 8.2,
    vote_count: 1720,
    popularity: 623.833,
    media_type: "tv",
  },
  {
    genre_ids: [99],
    first_air_date: "2022-05-23",
    id: 95171,
    poster_path: "/yMdFsHKp4YX2CUkAQcZswxXDuoe.jpg",
    original_name: "Prehistoric Planet",
    origin_country: ["GB"],
    overview: "",
    name: "Prehistoric Planet",
    vote_count: 26,
    vote_average: 9,
    backdrop_path: "/tjXXXRnEI3rxzTsrs4FvhjhPlQt.jpg",
    original_language: "en",
    popularity: 120.071,
    media_type: "tv",
  },
  {
    poster_path: "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
    video: false,
    vote_average: 6.3,
    overview:
      "Sau khi bị mắc một căn bệnh hiếm gặp về máu, vị giáo sư Michael Morbius đã cố gắng tạo một thứ thuốc để tự điều trị cho bản thân mình nhưng cũng vì thứ thuốc đó đã khiến trở thành một dạng ma cà rồng.",
    release_date: "2022-03-30",
    title: "Ma Cà Rồng Morbius",
    adult: false,
    backdrop_path: "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
    vote_count: 1158,
    genre_ids: [28, 878, 14],
    id: 526896,
    original_language: "en",
    original_title: "Morbius",
    popularity: 9222.216,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/iN3vKCuOGRdZ9Cn3yRGCyMlaiST.jpg",
    genre_ids: [28, 12, 878, 35],
    id: 545611,
    original_language: "en",
    original_title: "Everything Everywhere All at Once",
    overview:
      "Everything everywhere all at once - Cuộc Chiến Đa Vũ Trụ là một bộ phim hài viễn tưởng kể về một gia đình nhập cư đang vật lộn với cuộc sống ở nước Mỹ. Dương Tử Quỳnh đóng vai Evelyn Wang - một người mẹ gốc Hoa đang kiệt sức khi điều hành một tiệm giặt ủi cùng với ông chồng lấm lem và tất bật của bà - Waymond (Quan Kế Huy đóng).",
    poster_path: "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    release_date: "2022-03-24",
    title: "Cuộc Chiến Đa Vũ Trụ",
    video: false,
    vote_average: 8.5,
    vote_count: 367,
    popularity: 228.284,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/bcpATvKQmSgCbwxONs9PPQrer3A.jpg",
    genre_ids: [28, 12, 14],
    id: 616037,
    original_language: "en",
    original_title: "Thor: Love and Thunder",
    overview:
      "Vốn từng là một chiến binh hùng mạnh của Asgard, trải qua vô số trận chiến lớn nhỏ nhưng sau sự kiện trong Avengers: Endgame (2019) cùng vô số mất mát, Thần Sấm không còn muốn theo đuổi con đường siêu anh hùng. Từ đây, anh lên đường tìm ra ý nghĩa của cuộc sống và nhìn nhận lại bản thân mình.",
    poster_path: "/4KylO8GnqIaJf9TDx7rgREsG9Ok.jpg",
    release_date: "2022-07-06",
    title: "Thor: Tình Yêu và Sấm Sét",
    video: false,
    vote_average: 0,
    vote_count: 0,
    popularity: 220.31,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg",
    genre_ids: [28, 53, 80],
    id: 818397,
    original_language: "en",
    original_title: "Memory",
    overview: "",
    poster_path: "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
    release_date: "2022-04-28",
    title: "Memory",
    video: false,
    vote_average: 7.3,
    vote_count: 124,
    popularity: 634.644,
    media_type: "movie",
  },
  {
    original_name: "Stranger Things",
    origin_country: ["US"],
    genre_ids: [18, 9648, 10765],
    original_language: "en",
    first_air_date: "2016-07-15",
    poster_path: "/uKYUR8GPkKRCksczYDJb3pwZauo.jpg",
    name: "Cậu Bé Mất Tích",
    vote_count: 9877,
    vote_average: 8.6,
    id: 66732,
    overview:
      "Phim Cậu Bé Mất Tích - Stranger Things 2016: Lấy bối cảnh những năm 1980 tại thị trấn Hawkins yên bình, cậu bé Will đột nhiên mất tích một cách bí ẩn. Mẹ cậu - Joyce ngày đêm tìm kiếm con trai mình trong tuyệt vọng. Bức màn dần được vén lên khi cô phát hiện ra rằng sự biến mất của Will rất có thể dính dáng đến chính phủ và những thế lực siêu nhiên. Cùng lúc đó, một cô bé sở hữu những khả năng kỳ dị đột nhiên xuất hiện...",
    backdrop_path: "/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg",
    popularity: 933.874,
    media_type: "tv",
  },
  {
    title: "Người Dơi: Vạch Trần Sự Thật",
    adult: false,
    backdrop_path: "/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
    genre_ids: [80, 9648, 53],
    original_language: "en",
    original_title: "The Batman",
    poster_path: "/nMp4tu8XuVG3CSWdXTFiHLdngnc.jpg",
    id: 414906,
    vote_average: 7.8,
    vote_count: 4795,
    overview:
      "Tay giết người hàng loạt – The Ridder (Paul Dano) sẽ là kẻ thù nguy hiểm hàng đầu của Batman ở phần phim sắp tới. Tên xấu xa này bị cảnh sát James Gordon và đồng đội bắt giữ đã lâu. Thế nhưng, hóa ra việc nhốt gã sau song sắt chỉ khiến The Ridder phiền phức hơn với Đấng. Penguin (Colin Farrell) thể hiện là kẻ thủ ác thích trực tiếp tạo ra hỗn loạn, muốn đối đầu Batman hơn là chỉ đạo gián tiếp theo cách The Ridder thực hiện.",
    release_date: "2022-03-01",
    video: false,
    popularity: 3914.258,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/kB1Qrsg189eDz4Ej3ABXtLudClq.jpg",
    genre_ids: [35],
    title: "The Valet",
    original_language: "en",
    original_title: "The Valet",
    poster_path: "/q7FmdJHKMLIC4XgWfcFRIu2iVdL.jpg",
    vote_count: 88,
    video: false,
    vote_average: 7.9,
    id: 810171,
    overview: "",
    release_date: "2022-05-11",
    popularity: 369.362,
    media_type: "movie",
  },
  {
    poster_path: "/ovMxUPSSuvBD7GcgdQxzbJfsR8q.jpg",
    video: false,
    id: 453395,
    overview:
      "Sự kiện xảy sau phần phim Người Nhện: Không còn nhà (2021) và mùa đầu tiên của Loki (2021), Bác sĩ Stephen Strange đã sử dụng một phét thuật bị cấm và mở ra cánh cổng dẫn tới đa vũ trụ, vô tình dẫn đưa một biến thể hắc ám của Stephen Strange khác đến vũ trụ mình - mối đe dọa lớn mà Dr. Strange có thể phải đối đầu hoặc hợp sức chống lại một cái ác khác, đồng hành cùng Strange còn có Wong và Wanda Maximoff cùng với nhân vật mới American Chavez.",
    release_date: "2022-05-04",
    title: "Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn",
    adult: false,
    backdrop_path: "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
    vote_count: 1882,
    genre_ids: [14, 28, 12],
    vote_average: 7.4,
    original_language: "en",
    original_title: "Doctor Strange in the Multiverse of Madness",
    popularity: 2966.347,
    media_type: "movie",
  },
  {
    genre_ids: [28, 12, 14, 53],
    original_language: "en",
    original_title: "The Northman",
    poster_path: "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
    video: false,
    id: 639933,
    overview:
      "Hoàng tử Amleth đang trên đường trở thành một người đàn ông thì cha của anh bị sát hại dã man bởi người chú của mình, kẻ bắt cóc mẹ của cậu bé. Hai thập kỷ sau, Amleth giờ là một người Viking đang thực hiện sứ mệnh cứu mẹ, giết chú và trả thù cho cha mình.",
    release_date: "2022-04-07",
    vote_count: 1119,
    vote_average: 7.5,
    adult: false,
    backdrop_path: "/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
    title: "The Northman - Chiến Binh Phương Bắc",
    popularity: 6052.751,
    media_type: "movie",
  },
  {
    original_language: "en",
    original_title: "The Lost City",
    id: 752623,
    video: false,
    vote_average: 6.8,
    overview:
      "Thành Phố Mất Tích theo chân một tiểu thuyết gia tài năng nhưng thích sống ẩn dật. Cô không hề hào hứng với việc phải tham gia vào chuỗi sự kiện giới thiệu cuốn sách phiêu lưu mới ra mắt của mình cùng anh chàng người mẫu trang bìa rất nhiệt tình nhưng có phần hơi “lạ”. Cho đến khi một vụ bắt cóc bất ngờ xảy ra, kéo cả hai vào cuộc phiêu lưu mạo hiểm xuyên rừng rậm, khiến cô nhận ra cuộc sống thực sự khác xa những gì cô viết trong cuốn tiểu thuyết.",
    release_date: "2022-03-24",
    vote_count: 790,
    title: "Thành Phố Mất Tích",
    adult: false,
    backdrop_path: "/A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg",
    poster_path: "/hvKVpCmoXQQbAVTbbMjUFNdhI7Q.jpg",
    genre_ids: [28, 12, 35, 10749],
    popularity: 8765.341,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/dtb3MFpp0ziw3RJeqLdPPJJ3DzE.jpg",
    genre_ids: [16, 28, 35],
    id: 913205,
    original_language: "en",
    original_title:
      "Teen Titans Go! & DC Super Hero Girls: Mayhem in the Multiverse",
    overview: "",
    poster_path: "/3Hnhf1FqVGnh20hKlHbiRvHhB5b.jpg",
    release_date: "2022-05-23",
    title: "Teen Titans Go! & DC Super Hero Girls: Mayhem in the Multiverse",
    video: false,
    vote_average: 7.3,
    vote_count: 12,
    popularity: 94.787,
    media_type: "movie",
  },
  {
    backdrop_path: "/1qpUk27LVI9UoTS7S0EixUBj5aR.jpg",
    first_air_date: "2022-03-24",
    genre_ids: [10759, 10765],
    id: 52814,
    name: "Halo",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Halo",
    overview:
      "Halo (2022) bộ phim được lấy ý tưởng từ trò chơi cùng tên, bối cảnh diễn ra ở thế kỷ 26 khi vũ trụ được đẩy mạnh khai phá và sự xuất hiện của những dấu hiệu sống ngoài con người được biết đến. Lúc này người ngoài hành tinh đến Trái Đất mang theo ý định xâm lược, đe doạ sự tồn vong của toàn nhân loại.",
    poster_path: "/eO0QV5qJaEngP1Ax9w3eV6bJG2f.jpg",
    vote_average: 8.6,
    vote_count: 791,
    popularity: 3983.731,
    media_type: "tv",
  },
  {
    adult: false,
    backdrop_path: "/qJu5OXe8toQq4cjZ7h6zkDXRtRK.jpg",
    genre_ids: [18],
    id: 971647,
    original_language: "tr",
    original_title: "Yolun Açik Olsun",
    overview: "",
    poster_path: "/jfDxr9uDIOK5QZDsO76Y7ATs0kF.jpg",
    release_date: "2022-05-23",
    title: "Yolun Açik Olsun",
    video: false,
    vote_average: 7,
    vote_count: 5,
    popularity: 70.183,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genre_ids: [28, 12, 878],
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    poster_path: "/j5f5bRlpChRuyHdexmeSnQmklDt.jpg",
    vote_count: 13030,
    video: false,
    vote_average: 8.1,
    title: "Người Nhện: Không Còn Nhà",
    overview:
      "Peter Parker đã bị lộ mặt và không còn có thể tách biệt cuộc sống bình thường của mình với những yêu cầu cao của việc trở thành một Siêu anh hùng. Khi anh ta yêu cầu sự giúp đỡ từ Doctor Strange, mọi thứ càng trở nên nguy hiểm hơn, buộc anh ta phải khám phá ra ý nghĩa thực sự của việc trở thành Người Nhện. vcl",
    release_date: "2021-12-15",
    id: 634649,
    popularity: 3383.372,
    media_type: "movie",
  },
  {
    backdrop_path: "/2L4ob76e1tp6fgMXgMD2BC2hSUT.jpg",
    first_air_date: "2020-04-23",
    genre_ids: [16, 18, 10759, 10765],
    id: 90293,
    name: "Vỏ Bọc Ma: SAC_2045 - Ghost in the Shell: SAC_2045",
    origin_country: ["JP"],
    original_language: "ja",
    original_name: "攻殻機動隊 SAC_2045",
    overview:
      'Sau cuộc khủng hoảng tài chính toàn cầu, thế giới chìm trong "chiến tranh trường kỳ" do AI chi phối. Đội 9 chính là cứu tinh để chống lại các hình thức đe dọa mạng mới.',
    poster_path: "/hLHPuObVB8zSIoJFfsAYP365c1L.jpg",
    vote_average: 6.4,
    vote_count: 47,
    popularity: 70.172,
    media_type: "tv",
  },
];

function createMovieItem(movieObject) {
  // const movieItemWrapper = document.createElement("div");
  // movieItemWrapper.className = "movie-item";
  // const movieBanner = document.createElement("img");
  // movieBanner.className = "movie-img";
  // movieBanner.src = `https://image.tmdb.org/t/p/w220_and_h330_face/${movieObject.poster_path}`;
  // const averageRate = document.createElement("h4");
  // averageRate.className = "average-rate";
  // averageRate.textContent = `${movieObject.vote_average}%`;
  // const movieTitle = document.createElement("h2");
  // movieTitle.className = "movie-title";
  // movieTitle.textContent = movieObject.title;
  // const dateTime = document.createElement("p");
  // dateTime.className = "date-time";
  // dateTime.textContent = movieObject.release_date;
  // movieItemWrapper.appendChild(movieBanner);
  // movieItemWrapper.appendChild(averageRate);
  // movieItemWrapper.appendChild(movieTitle);
  // movieItemWrapper.appendChild(dateTime);
  // return movieItemWrapper;

  const movieItemWrapper = `
     <div class="movie-item">
      <img class="movie-img" src="https://image.tmdb.org/t/p/w220_and_h330_face/${movieObject.poster_path}">
      <h4 class="average-rate">${movieObject.vote_average}%</h4>
      <h2 class="movie-title">${movieObject.title}</h2>
      <p class="date-time">${movieObject.release_date}</p>
    </div>
  `;

  return movieItemWrapper;
}

const movieWrapper = document.getElementById("movieWrapper");

function renderMovies(movieArray) {
  for (let i = 0; i < movieArray.length; i++) {
    const movieItem = createMovieItem(movieArray[i]);
    movieWrapper.innerHTML += movieItem;
  }
}

renderMovies(moviesData);
