import { useState } from "react";

const movieData = [
  {
    _id: "60d5ec49f4863c45d8b9b2c7",
    poster_url: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017487_0.jpg&w=1920&q=75",
    title: "Inception",
    genre: "Science Fiction",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page"
    ],
    price: 12.99,
    release: "2023-05-16T14:00:00Z",
    showtimes: [
      {
        _id: "60d5ec9bf4863c45d8b9b2c8",
        start: "2023-05-16T14:00:00Z",
        end: "2023-05-16T16:30:00Z",
        seats: [
          {
            _id: "60d5ecaaf4863c45d8b9b2c9",
            number: "A1",
            available: true,
            VIP: false
          },
          {
            _id: "60d5ecb2f4863c45d8b9b2ca",
            number: "A2",
            available: false,
            VIP: false
          },
          {
            _id: "60d5ecb9f4863c45d8b9b2cb",
            number: "A3",
            available: true,
            VIP: true
          }
        ]
      },
      {
        _id: "60d5ecc2f4863c45d8b9b2cc",
        start: "2023-05-16T18:00:00Z",
        end: "2023-05-16T20:30:00Z",
        seats: [
          {
            _id: "60d5eccaf4863c45d8b9b2cd",
            number: "B1",
            available: true,
            VIP: false
          },
          {
            _id: "60d5ecd2f4863c45d8b9b2ce",
            number: "B2",
            available: true,
            VIP: true
          },
          {
            _id: "60d5ecdbf4863c45d8b9b2cf",
            number: "B3",
            available: false,
            VIP: false
          }
        ]
      }
    ]
  }
];

function MovieShowing() {
  const [movies, setMovies] = useState(movieData);

  return (
    <>
      <div className="w-full xl:w-4/5 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="pb-10 xl:pb-20 px-4 md:px-6 xl:px-0">
            <div className="divide-y divide-gray-700 hidden xl:block">
              <div className="pb-16">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-red-500 w-4 h-4"></div>
                    <h3 className="font-bold text-base xl:text-xl">Phim đang chiếu</h3>
                  </div>
                  <a className="text-sm xl:text-base underline" href="/movies">Xem tất cả</a>
                </div>
                <div className="mt-6 grid gap-7 grid-cols-1 xl:grid-cols-4">
                  {movies.map((movie) => (
                    <div key={movie._id} className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          src={movie.poster_url}
                          alt={movie.title}
                        />
                        <div>
                          <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                            <p>{movie.genre}</p>
                            <p>{new Date(movie.release).toLocaleDateString()}</p>
                          </div>
                          <p className="mt-2 text-sm xl:text-base font-bold">{movie.title}</p>
                        </div>
                      </div>
                      
                    </div> 
                  ))}
                  {movies.map((movie) => (
                    <div key={movie._id} className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          src={movie.poster_url}
                          alt={movie.title}
                        />
                        <div>
                          <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                            <p>{movie.genre}</p>
                            <p>{new Date(movie.release).toLocaleDateString()}</p>
                          </div>
                          <p className="mt-2 text-sm xl:text-base font-bold">{movie.title}</p>
                        </div>
                      </div>
                      
                    </div> 
                  ))}
                  {movies.map((movie) => (
                    <div key={movie._id} className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          src={movie.poster_url}
                          alt={movie.title}
                        />
                        <div>
                          <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                            <p>{movie.genre}</p>
                            <p>{new Date(movie.release).toLocaleDateString()}</p>
                          </div>
                          <p className="mt-2 text-sm xl:text-base font-bold">{movie.title}</p>
                        </div>
                      </div>
                      
                    </div> 
                  ))}
                  {movies.map((movie) => (
                    <div key={movie._id} className="cursor-pointer shadow-lg">
                      <div className="relative w-full h-[290px] overflow-hidden rounded-xl shadow-lg">
                        <img
                          className="object-cover object-center rounded-xl hover:scale-110 transition duration-500"
                          src={movie.poster_url}
                          alt={movie.title}
                        />
                        <div>
                          <div className="flex flex-wrap items-center gap-x-5 text-[#5D6A81] text-sm mt-3">
                            <p>{movie.genre}</p>
                            <p>{new Date(movie.release).toLocaleDateString()}</p>
                          </div>
                          <p className="mt-2 text-sm xl:text-base font-bold">{movie.title}</p>
                        </div>
                      </div>
                      
                    </div> 
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieShowing;
