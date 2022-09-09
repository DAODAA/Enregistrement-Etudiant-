  function Tmatiere(code, nom, volumeHoraire, prof, assistant, drapeau) {
      this.code = code;
      this.nom = nom;
      this.volumeHoraire = volumeHoraire;
      this.prof = prof;
      this.assistant = assistant;
      this.drapeau = drapeau;
  }


  function Tetudiant(mat, nom, dateNaiss, lieuNaiss, sexe, taille, poids, parcours, matieres) {
      this.mat = mat;
      this.nom = nom;
      this.dateNaiss = dateNaiss;
      this.lieuNaiss = lieuNaiss;
      this.sexe = sexe;
      this.taille = taille;
      this.poids = poids;
      this.parcours = parcours;
      this.matieres = matieres;
  }
  let form1 = document.getElementById('form1'); //recuperation du formulaire matiere
  form1.style.display = 'none'; //je le cache pour l'afficher au click du bouton
  let matieres = document.getElementById('catalogueMatieres');
  matieres.style.display = 'none'; //Display none des matieres en vue d'affichage au click

  let form2 = document.getElementById('form2'); //recuperation du formulaire etudiant
  form2.style.display = 'none'; //je le cache pour l'afficher au click du bouton
  let etudiants = document.getElementById('catalogueEtudiants');
  etudiants.style.display = 'none'; //Display none des Etudiants en vue d 'affichage au click

  let nbClicMatCree = 0;
  let nbClicEtCree = 0;
  let nbClicMatAffiche = 0;
  let nbClicEtAffiche = 0;
  let btnCreationMatiere = document.querySelector('#blocMatiere .btnNouv');
  btnCreationMatiere.addEventListener('click', () => {
      nbClicMatCree = nbClicMatCree + 1;
      form1.style.display = 'block';
      if (nbClicMatCree % 2 == 0) {
          form1.style.display = 'none';
      }
  }); //affichage du formulaire au click du bouton nouvelle matiere
  let btnAfficheMatiere = document.querySelector('#matiere .btnMatiere');
  btnAfficheMatiere.addEventListener('click', () => {
      nbClicMatAffiche = nbClicMatAffiche + 1;
      matieres.style.display = 'block';
      if (nbClicMatAffiche % 2 == 0) {
          matieres.style.display = 'none';
      }
  }); //affichage des Matieres au click du bouton Afficher Matieres

  let btnCreationEtudiant = document.querySelector('#blocEtudiant .btnNouv');
  btnCreationEtudiant.addEventListener('click', () => {
      nbClicEtCree = nbClicEtCree + 1;
      form2.style.display = 'block';
      if (nbClicEtCree % 2 == 0) {
          form2.style.display = 'none';
      }
  }); //affichage du formulaire au click du bouton Nouvel Etudiant
  let btnAfficheEtudiant = document.querySelector('#etudiant .btnAffiche');
  btnAfficheEtudiant.addEventListener('click', () => {
      nbClicEtAffiche = nbClicEtAffiche + 1;
      etudiants.style.display = 'block';
      if (nbClicEtAffiche % 2 == 0) {
          etudiants.style.display = 'none';
      }
  }); //affichage des Etudiants au click du bouton Afficher Etudiant

  let btn = document.getElementById('bouton1');
  let tabl;
  let tr;
  let td, td1, td2, td3, td4, td5;
  let nbMat = 0;
  btn.addEventListener(
      'click', (e) => {
          e.preventDefault();
          let mat = new Tmatiere(document.getElementById('code1').value,
              document.getElementById('nom1').value,
              document.getElementById('volume1').value,
              document.getElementById('prof').value,
              document.getElementById('ass').value,
              document.getElementById('drap').value);


          nbMat += 1; //Au clic il sera incremente en vue de la numerotation
          document.getElementById('zone1').innerHTML += '<h3> Numero ' + nbMat + ':</h3>';
          document.getElementById('zone1').innerHTML += '<p><u>Code:</u> ' + mat.code + '</p>';
          document.getElementById('zone1').innerHTML += '<p><u>Nom:</u> ' + mat.nom + '</p>';
          document.getElementById('zone1').innerHTML += '<p><u>VH:</u> ' + mat.volumeHoraire + '</p>';
          document.getElementById('zone1').innerHTML += '<p><u>Enseignant:</u> ' + mat.prof + '</p>';
          document.getElementById('zone1').innerHTML += '<p><u>Assistant:</u> ' + mat.assistant + '</p>';
          document.getElementById('zone1').innerHTML += '<p><u>Drapeau:</u> ' + mat.drapeau + '</p>';


          //Creation des elements du tableau Matiere en vue d'enregistrement

          tabl = document.getElementById('tabMat');
          tr = document.createElement('tr');
          td = document.createElement('td');
          td.innerHTML = nbMat; //Ici le numero de la matiere dans le tableau
          td1 = document.createElement('td');
          td1.innerHTML = mat.code;
          td2 = document.createElement('td');
          td2.innerHTML = mat.nom;
          td3 = document.createElement('td');
          td3.innerHTML = mat.volumeHoraire;
          td4 = document.createElement('td');
          td4.innerHTML = mat.prof;
          td5 = document.createElement('td');
          td5.innerHTML = mat.assistant;
          td6 = document.createElement('td');
          td6.innerHTML = mat.drapeau;

          tr.style.backgroundColor = 'teals';
          tr.appendChild(td);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          tabl.appendChild(tr);
      });
  /********************************************************************************/


  let btn2 = document.getElementById('bouton2'); //Bouton de validation du formulaire
  let nbEtudiant = 0;
  btn2.addEventListener('click', (e) => {
      e.preventDefault();
      let Etudiant = new Tetudiant(document.getElementById('mat').value,
          document.getElementById('nom').value,
          document.getElementById('dateNaiss').value,
          document.getElementById('lieuNaiss').value,
          document.querySelector('#blocSexe input[name="sexe"]:checked').value,
          document.getElementById('taille').value,
          document.getElementById('poids').value,
          document.getElementById('parcours').value,
          document.getElementById('matieres').value
      );

      nbEtudiant += 1;
      document.getElementById('zone2').innerHTML += '<h3> Numero ' + nbEtudiant + ':</h3>';
      document.getElementById('zone2').innerHTML += '<p><u>Matricule:</u> ' + Etudiant.mat + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Nom & Prenom:</u> ' + Etudiant.nom + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Date Naissance:</u> ' + Etudiant.dateNaiss + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Lieu Naissance:</u> ' + Etudiant.lieuNaiss + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Sexe:</u> ' + Etudiant.sexe + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Taille:</u> ' + Etudiant.taille + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Poids:</u> ' + Etudiant.poids + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Parcours:</u> ' + Etudiant.parcours + '</p>';
      document.getElementById('zone2').innerHTML += '<p><u>Matieres:</u> ' + Etudiant.matieres + '</p>';


      //Creation des lignes pour enregistrement des etudiants au tableau
      let tableauEtudiant = document.getElementById('tabEtudiant');
      let tr1 = document.createElement('tr');
      let td11 = document.createElement('td');
      td11.innerHTML = nbEtudiant;
      let td12 = document.createElement('td');
      td12.innerHTML = Etudiant.mat;
      let td13 = document.createElement('td');
      td13.innerHTML = Etudiant.nom;
      let td14 = document.createElement('td');
      td14.innerHTML = Etudiant.dateNaiss;
      let td15 = document.createElement('td');
      td15.innerHTML = Etudiant.lieuNaiss;
      let td16 = document.createElement('td');
      td16.innerHTML = Etudiant.sexe;
      let td17 = document.createElement('td');
      td17.innerHTML = Etudiant.taille;
      let td18 = document.createElement('td');
      td18.innerHTML = Etudiant.poids;
      let td19 = document.createElement('td');
      td19.innerHTML = Etudiant.parcours;
      let td10 = document.createElement('td');
      td10.innerHTML = Etudiant.matieres;

      tr1.appendChild(td11);
      tr1.appendChild(td12);
      tr1.appendChild(td13);
      tr1.appendChild(td14);
      tr1.appendChild(td15);
      tr1.appendChild(td16);
      tr1.appendChild(td17);
      tr1.appendChild(td18);
      tr1.appendChild(td19);
      tr1.appendChild(td10);
      tableauEtudiant.appendChild(tr1);
  });
  /***********************************************************************************************/