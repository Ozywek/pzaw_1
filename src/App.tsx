  import gwiezdnewojny from './assets/gwiezdnewojny.jpg';
  import hailmary from './assets/hailmary.jpg';
  import oddyseja from './assets/oddyseja.jpg';
  import graduation from './assets/graduation.jpg';
  import collegedropout from './assets/collegedropout.jpg';
  import zbrodniaikara from './assets/zbrodniaikara.jpg';
  import lalka from './assets/lalka.jpg';
  import harrypoter from './assets/harrypoter.jpg';
  import 'bootstrap/dist/css/bootstrap.min.css';

  import { useState } from "react";





  function Filmy({plakat, tytul, rok, rating}: do_filmow){

    return (

        <div className='card'>
            <div className="card-body">
            <img className ='card-img-top' src={plakat} alt={tytul}/>
            <br />
            <h2 className='card-title'>{tytul}</h2>
            <i>{rok}</i> <br />
            <i>Rating: {rating}</i> <br />
            {rating > 8 && <p>Polecany!</p>}
            <br />
            </div>
        </div>
    );
  }

  function Ksiazki({okladka, tytul, strony, rok}: do_ksiazek){
      return (
        <div className='card'>
          <img className='card-img-top' src={okladka} alt={tytul}/>
          <br />
          <p className='card-title'>{tytul}</p>
          <p>{strony}</p>
          <p>{rok}</p>
          {rok < 2000 && <p>Klasyka!</p>}
        <br />
        </div>
      );
  }



  function Muzyka({okladka, nazwa_albumu, nazwa_zespolu, gatunek, rok, utwory}: do_muzyki){
    return (
        <div className='card'>
            <img className='card-img-top' src={okladka} alt={nazwa_albumu}  />
            <h2 className='card-title'>{nazwa_albumu}</h2>
            <p>Wykonawca: {nazwa_zespolu}</p>
            <p>Gatunek: {gatunek}</p>
            <p>Rok wydania: {rok}</p>
            <table  className='table table-striped table-hover' >
              <tbody>
                {utwory?.length > 0 ? ( //zmienic na tabele
                    utwory.map((utwor, index) => (
                        <tr key={index}>
                            <td>{utwor.tytul}</td><td>–</td>  <td>{utwor.czas} s</td>
                        </tr>
                    ))
                ) : (
                    <div className="alert alert-warning" role="alert">Brak utworów</div>
                )}
            </tbody>
          </table>

         <br />
         </div>
    );
  }

function App() {
    const MovieCardsAFTER12010 = movies.filter((movie) => Number(movie.rok) > 0).map((movie) => (<Filmy
      plakat={movie.plakat}
      tytul={movie.tytul}
      rok={movie.rok}
      rating={movie.rating}
    />));


    const bookCards = books.sort((a, b) => a.rok - b.rok).map((book) => (<Ksiazki
      okladka={book.okladka}
      tytul={book.tytul}
      strony={book.strony}
      rok={book.rok}
    />));

        //longest todo
    // const albumCards = albums.map((album) => (<Muzyka
    //   okladka={album.okladka}
    //   nazwa_albumu={album.nazwa_albumu}
    //   nazwa_zespolu={album.nazwa_zespolu}
    //   gatunek={album.gatunek}
    //   rok={album.rok}
    //   utwory={album.utwory}
    // />));
        
    const albumCards = albums.map((album) => (<Muzyka
      okladka={album.okladka}
      nazwa_albumu={album.nazwa_albumu}
      nazwa_zespolu={album.nazwa_zespolu}
      gatunek={album.gatunek}
      rok={album.rok}
      utwory={album.utwory}
    />));
    


    const [isOpen, setIsOpen] = useState(true);

    return (
      <main className="container">
        <h1 onClick={() => setIsOpen(!isOpen)}>Filmy {isOpen ? "⏷" : "⏵"}</h1> 
      {isOpen && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {MovieCardsAFTER12010}
        </div>
      )}  
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {bookCards}
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {albumCards}  
      </div>
    </main>
  
  );
}


  const movies: do_filmow[] = [
  { plakat: oddyseja, tytul: "2001: Odyseja kosmiczna", rok: 1968, rating: 8.7 },
  { plakat: gwiezdnewojny, tytul: "Gwiezdne wojny: część VI – Powrót Jedi", rok: 1980, rating: 8.8 },
  { plakat: hailmary, tytul: "Projekt Hail Mary", rok: 2026, rating: 8.9 }
];

const books: do_ksiazek[] = [
  { okladka: zbrodniaikara, tytul: "Zbrodnia i Kara", strony: 416, rok: 1866 },
  { okladka: harrypoter, tytul: "Harry Potter i Kamień Filozoficzny", strony: 328, rok: 1997 },
  { okladka: lalka, tytul: "Lalka", strony: 632, rok: 1890 }
];

const albums: do_muzyki[] = [
  {
    okladka: collegedropout,
    nazwa_albumu: "The College Dropout",
    nazwa_zespolu: "Kanye West",
    gatunek: "Hip-hop",
    rok: 2004,
    utwory: [
      { tytul: "We Don't Care", czas: 239 },
      { tytul: "All Falls Down", czas: 223 },
      { tytul: "Jesus Walks", czas: 193 },
      { tytul: "Slow Jamz", czas: 316 },
      { tytul: "Through the Wire", czas: 221 },
      { tytul: "Family Business", czas: 278 }
    ]
  },
  {
    okladka: graduation,
    nazwa_albumu: "Graduation",
    nazwa_zespolu: "Kanye West",
    gatunek: "Hip-hop",
    rok: 2007,
    utwory: [
      { tytul: "Good Morning", czas: 195 },
      { tytul: "Champion", czas: 167 },
      { tytul: "Stronger", czas: 312 },
      { tytul: "I Wonder", czas: 243 },
      { tytul: "Good Life", czas: 207 },
      { tytul: "Flashing Lights", czas: 237 }
    ]
  },
    {
    okladka: graduation,
    nazwa_albumu: "TEST",
    nazwa_zespolu: "TEST",
    gatunek: "TEST",
    rok: 1,
    utwory: []
  }
];

  interface do_filmow {
    plakat: string;
    tytul: string;
    rok: number;
    rating: number;
  }
  interface do_ksiazek {
    okladka: string;
    tytul: string;
    strony: number;
    rok: number;
  }
  interface do_muzyki {
    okladka: string;
    nazwa_albumu: string;
    nazwa_zespolu: string;
    gatunek: string;
    rok: number;
        utwory: {
        tytul: string;
        czas: number;
    }[];
  }
  export default App


