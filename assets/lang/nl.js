export default {
  meta: {
    home: {
      title: 'DWH - LHBT+ vereniging Delft',
      description: `
        DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen; een ontmoetingsplek 
        voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie.
      `,
    },
  },
  forms: {
    label: {
      name: 'Hoe mogen we je noemen?',
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      initials: 'Voorletters',
      email: 'E-mailadres',
      language: 'Taal',
      languages: {
        dutch: 'Nederlands',
        english: 'Engels',
        no_preference: 'Geen voorkeur',
      },
      remarks: 'Heb je verder nog vragen?',
      date_of_birth: 'Geboortedatum',
      age: 'Hoe oud ben je?',
      phone_number: 'Telefoonnummer',
      residence: 'Woonplaats',
      address: 'Straat en Huisnummer',
      postal_code: 'Postcode',
      pronouns: 'Pronouns',
      barbuddy: 'Met wie wil je afspreken?',
      membership_fee: 'Tariefgroep Contributie (zie onderaan deze pagina)',
      iban: 'IBAN nummer voor betaling via automatisch incasso (geen spaties)',
      message: 'Bericht',
    },
    placeholder: {
      name: 'Naam',
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      initials: 'Voorletters (bijvoorbeeld Q.B.)',
      email: 'E-mailadres',
      remarks: 'Opmerkingen of vragen',
      date_of_birth: 'Geboortedatum',
      age: 'Je leeftijd',
      phone_number: 'Telefoonnummer',
      residence: 'Naam van stad',
      address: 'Straat en Huisnummer',
      postal_code: 'Postcode (bijvoorbeeld 2611PV)',
      pronouns: 'bv. zij/haar, hij/hem, hen/hun',
      iban: 'IBAN nummer',
      message: 'Uw bericht',
    },
    buttons: {
      sign_up: 'Aanmelden',
      submit: 'Verzenden',
      loading: 'Laden',
    },
    success: {
      heading: 'Het formulier is succesvol verstuurd',
    },
  },
}
