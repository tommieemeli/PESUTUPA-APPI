// Määritellään palvelimelle portti joka on joko julkaisualustan määrittelemä tai 8080
const PORT = process.env.PORT || 8080;

// Otetaan moduulit tarvittavat käyttöön.
var express = require("express");
var mongoose = require("mongoose");
var app = express();

// Uusin express sisältää bodyparserin joten sitä ei tarvitse erikseen lisätä.
// Annetaan lupa käyttää urlencoded-tyyppiset post käskyt.
app.use(express.urlencoded({ extended: true }));


// Määritellään tietokannan osoite, joka on poikkeuksena tuotu koodiin.
var uri =
  "mongodb+srv://testikayttaja:testikayttaja@cluster0.pctfq.mongodb.net/harjoitus?retryWrites=true&w=majority";


// Yhdistetään tietokantaan
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Tallennetaan tietokantayhteyden yhdistämistieto muuttujaan, sekä tulostetaan se konsoliin..
var db = mongoose.connection;
db.once("open", function () {
  console.log("Yhdistäminen onnistui!");
});

db.on("error", function () {
  console.log("Yhdistäminen epäonnistui!");
});



// Määritellään Varaus -schema ja siihen tietokentät
const Varaus = mongoose.model(
  "Varaukset",
  {
    tila: String,
    varaaja: String,
    pvm: String,
    aloitus: String,
    lopetus: String,
    kesto: Number
  },
  "Pesutupavaraukset"
);



// LUODAAN SIVUSTOLLE REITIT JA NIIDEN OMINAISUUDET

// Tulostetaan kaikki varaukset.
app.get("/api/getall", function (req, res) {
  Varaus.find({}, function (err, results) {
    console.log("Kaikki liikunta-data on haettu!");
    res.json(results);
  });
});

// Haetaan varaajan perusteella.
app.get("/api/varaaja/:text", function (req, res) {
  Varaus.find({ varaaja: req.params.text }, function (err, results) {
    console.log("Henkilön \"" + req.params.text + "\" varaukset on haettu!");
    res.json(results);
  });
});

// Haetaan tilan perusteella.
app.get("/api/tila/:text", function (req, res) {
  Varaus.find({ tila: req.params.text }, function (err, results) {
    console.log("Henkilön \"" + req.params.text + "\" varaukset on haettu!");
    res.json(results);
  });
});

// Haetaan päivämäärän perusteella perusteella.
app.get("/api/pvm/:text", function (req, res) {
  Varaus.find({ pvm: req.params.text }, function (err, results) {
    console.log("Varaukset \"" + req.params.text + "\"  on haettu!");
    res.json(results);
  });
});


// Haetaan Id:n perusteella
app.get("/api/:id", function (req, res) {
  Varaus.find({ _id: req.params.id }, function (err, results) {
    console.log("Varaus " + req.params.id + " on haettu");
    res.json(results);
  });
});

// Varausta muokataan id:n perusteella.
app.put("/api/update/:id", function (req, res) {
  Varaus.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, todo) => {
      // Annetaan palaute päivityksen onnistumisesta.
      if (err) return res.status(500).send(err);
      console.log("Seuraavan Id:n tiedot on päivitetty: " + req.params.id);
      res.send("Seuraavan Id:n tiedot on päivitetty: " + req.params.id);
    })
});

// Lisätään tietoa sekä luodaan uusi olio, joka tallennetaan tietokantaan.
app.post("/api/add", function (req, res) {
  
  var newVaraukset = new Varaus({
    tila: req.body.tila,
    varaaja: req.body.varaaja,
    pvm: req.body.pvm,
    aloitus: req.body.aloitus,
    lopetus: req.body.lopetus,
    kesto: req.body.kesto
  });

  // Tallennetaan olio tietokantaan, sekä annetaan palaute siitä.
  newVaraukset.save(function (err, result) {
    if (err) console.log(err);
    console.log("Seuraava varaus on lisätty onnistuneesti \"" + req.body.pvm + "\"");
    res.send("Seuraava varaus on lisätty onnistuneesti \"" + req.body.pvm + "\"");
  });
});

// Poistetaan Mognoosen "hieno" oletusasetus pois käytöstä.
mongoose.set('useFindAndModify', false);


// Poistetaan varaus id:n perusteella.
app.delete("/api/delete:id", function (req, res) {
 
  var id = req.params.id;
  Varaus.findByIdAndDelete(id, function (err, results) {
    if (err) {
      console.log(err);
      res.json("EI POISTETTAVAA", 200);
    } else if (results == null) {
      res.json("TAPAHTUI VIRHE", 500);
    } else {
      console.log("Seuraavan tapahtuman poisto onnistui " + id);
      res.json("Seuraavan tapahtuman poisto onnistui " + id);
    }
  });
});

// Luodaan web-palvelin ja kerrotaan siitä tieto konsolissa.
app.listen(PORT, () => {
  console.log("Listening on port " + PORT );
});