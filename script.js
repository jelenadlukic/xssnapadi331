

  /* ======================================= */
  /* PODACI TUTORIJALA */
  /* ======================================= */


  const tutorials = [

    {
      title: "Promenljive",
      text:
        "Promenljive u JavaScript-u kreiraju se pomoću let i const."
    },

    {
      title: "if / else",
      text:
        "if i else koristimo kada program treba da donese odluku."
    },

    {
      title: "for petlja",
      text:
        "for petlja omogućava ponavljanje dela programa više puta."
    },

    {
      title: "Funkcije",
      text:
        "Funkcije omogućavaju organizovanje i ponovno korišćenje koda."
    },

    {
      title: "DOM manipulacija",
      text:
        "DOM omogućava JavaScript-u da pristupi i menja HTML elemente."
    },

    {
      title: "Event listener",
      text:
        "Događaji omogućavaju reagovanje na klik, unos teksta i druge akcije korisnika."
    }

  ];



  /* ======================================= */
  /* PRETRAGA */
  /* NAMERNO RANJIVA */
  /* ======================================= */


  function searchTutorials() {

    const input =
      document.getElementById("searchInput").value;


    const search =
      input.toLowerCase();


    const result =
      tutorials.filter(function(tutorial) {

        return (
          tutorial.title.toLowerCase().includes(search)
          ||
          tutorial.text.toLowerCase().includes(search)
        );

      });


    let html = "";


    if (result.length > 0) {

      html +=
        "<div class='result-box'>";


      html +=
        "<p>Rezultati pretrage za: <strong>"
        + input +
        "</strong></p>";


      result.forEach(function(tutorial) {

        html +=
          "<h3>" +
          tutorial.title +
          "</h3>";

        html +=
          "<p>" +
          tutorial.text +
          "</p>";

      });


      html +=
        "</div>";

    }

    else {

      html =
        "<div class='result-box'>" +

        "Nema rezultata za: <strong>" +

        input +

        "</strong></div>";

    }


    /*
      NAMERNO NESIGURNO.

      Korisnički unos se direktno
      ubacuje pomoću innerHTML.
    */

    document.getElementById("searchResult").innerHTML =
      html;

  }



  /* ======================================= */
  /* PROFIL */
  /* NAMERNO RANJIV */
  /* ======================================= */


  function updateProfile() {

    const name =
      document.getElementById("username").value;


    const bio =
      document.getElementById("bio").value;


    document.getElementById("profileName").innerHTML =
      name;


    document.getElementById("profileBio").innerHTML =
      bio;

  }



  /* ======================================= */
  /* KOMENTARI */
  /* NAMERNO RANJIVI */
  /* ======================================= */


  function addComment() {

    const name =
      document.getElementById("commentName").value;


    const text =
      document.getElementById("commentText").value;


    const comments =
      document.getElementById("comments");


    /*
      NAMERNO LOŠ PRIMER.

      Korisnički podaci se direktno
      spajaju sa HTML kodom.
    */


    comments.innerHTML += `

      <div class="comment">

        <strong>
          ${name}
        </strong>

        <p>
          ${text}
        </p>

      </div>

    `;


    document.getElementById("commentName").value =
      "";


    document.getElementById("commentText").value =
      "";

  }
