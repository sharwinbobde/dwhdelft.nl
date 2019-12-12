import barbuddies from '~/lang/en_barbuddies.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Join DWH', url: localePath => localePath('index') + '#join-dwh' },
    { title: 'EatingOUT', url: localePath => localePath('index') + '#eatingout' },
    { title: 'Education', url: localePath => localePath('education') },
    { title: 'Andersblad', url: localePath => localePath('andersblad') },
    { title: 'Contact', url: () => '#contact' }
  ],
  hero: {
    title: 'DWH LGBT+ society',
    subtitle: "Delft's society for queer people",
    leftButton: 'Join DWH',
    rightButton: 'Watch video'
  },
  description: {
    text: `DWH is the independent LGBT+ association of Delft and surroundings. We're two things, a meeting place for
      LGBT+ people and their friends and a group that actively pushes for greater LGBT+ rights and acceptance. As the
      latter, we give lectures at schools, have introduction groups for newly out people and organise public events
      arounds dates like coming out day.
      <br>
      <br>
      As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
      nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
      beer tastings, workshops, pub crawls and even vacations. See our upcoming events below!`,
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Friday starting at 22:00</strong>'
  },
  activities: {
    title: 'Upcoming activities',
    defaults: {
      bar: {
        banner_title: 'Weekly bar night',
        banner_subtitle: 'Open for everyone',
        title: 'Bar Night',
        date: 'Every Friday from 10pm'
      },
      eating_out: {
        banner_title: 'Weekly dinner',
        banner_subtitle: 'Members only, registration required',
        title: 'EatingOUT',
        date: 'Every Tuesday at 7pm'
      }
    }
  },
  ways_to_join: {
    title: 'Ready to check out <strong>DWH</strong>?',
    description: `You're always welcome on a Friday night during a bar night. Do you think this is too exciting or
    frightening? Then you can make use of our bar buddy system!`,
    outsite_hint: `Are you 28 years or younger? Take a look at
      <a href="https://outsite.nl/" class="font-bold">Outsite</a>, the youth division of our association.`,
    bar_buddy: {
      title: 'Bar Buddy System',
      description: `If you are looking to come by on a Friday night but you are not yet familiar with the society you
        can make use of the bar buddy system! A bar buddy is someone who can not only tell you all there is to know
        about DWH but they can also introduce you to new people.`,
      sign_up: 'Sign up for a bar buddy',
      action: 'Find a bar buddy',
      meet_up_with: 'Meet up with',
      barbuddies_title: 'Our <strong>Bar Buddies</strong>',
      read_more: 'Read more',
      read_less: 'Collapse'
    }
  },
  recurring_events: {
    announcement: '<strong>DWH</strong> is open 4 nights a week',
    events: [
      {
        name: 'EatingOUT',
        note: 'Members only',
        day: 'Tuesday',
        time: '19:00',
        description: `On tuesdays we gather around the dinner table to enjoy a delicious meal cooked by one of our
          members.`,
        buttonText: 'Sign Up',
        buttonLink: '/eatingout'
      },
      {
        name: 'Fillum',
        day: 'Wednesday',
        time: '21:15',
        description: `The one and only queer movie night in Delft: Come by to enjoy another classic or a newly released
          queer movie.`,
        buttonText: 'Check Programme',
        buttonLink: 'http://homodelft.nl/films/'
      },
      {
        name: 'Outsite',
        note: 'Max. 28 years old',
        day: 'Thursday',
        time: '22:00',
        description: `A bar night for everyone aged 28 or under. If you like the occasional party or enjoy a drink at
          the bar instead, Outsite is the right place for you!`,
        buttonText: 'Head to Outsite.nl',
        buttonLink: 'https://outsite.nl/en'
      },
      {
        name: 'Friday Bar Night',
        day: 'Friday',
        time: '22:00',
        description: `Friday night is an open bar night for DWH as whole. Young or old: Every is welcome to have a drink
          at our bar!`
      }
    ]
  },
  forms: {
    label: {
      name: 'How should we call you?',
      email: 'Email address',
      language: 'Language',
      languages: {
        dutch: 'Dutch',
        english: 'English',
        no_preference: 'No preference'
      },
      remarks: 'Do you have any further questions?',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City of residence',
      pronouns: 'Pronouns',
      barbuddy: 'Who would you like to meet?'
    },
    placeholder: {
      name: 'Name',
      email: 'Email address',
      remarks: 'Remarks or questions',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City name',
      pronouns: 'e.g. she/her, he/him, they/them'
    },
    buttons: {
      sign_up: 'Sign up',
      loading: 'Loading'
    },
    success: {
      heading: 'The form has been submitted successfully',
      barbuddy: 'The bar buddy you selected will contact you as soon as possible.'
    }
  },
  footer: {
    newsletter: {
      description: 'Stay up to date, subscribe to the <strong>DWH newsletter</strong>',
      button: 'Subscribe'
    },
    leftTitle: 'Board',
    rightTitle: 'Contact',
    board: {
      president: 'President',
      secretary: 'Secretary',
      treasurer: 'Treasurer',
      youth: 'Commissioner Youth',
      general: 'Comissioner'
    }
  },
  barbuddies,
  andersblad: {
    title: 'Andersblad',
    main_text: `
      The association magazine of DWH is published several times a year. Earlier editions can be seen here in PDF
      format. The magazine is (partly) in Dutch.
    `,
    list_title: 'Editions'
  },
  education: {
    title: 'Education',
    main_text: `
      Who doesn’t remember puberty? A period with many changes… Hair begins to grow in places, you start being
      independent from your parents and you fall in love for the first time! But what if you fall in love with someone
      of the same gender?<br />
      <br />
      Many LGBT youngsters can’t cope with this and don’t dare to come out because they fear they might be victims of
      bullying. In high schools, the word gay is unfortunately too often used as a term of abuse. When asked about what
      homosexuality means, the stereotypes, the most creative words for sex, and even pedophilia come up. This shows
      that young people don’t often have a grasp of what constitutes homosexuality, which sometimes can result in
      incomprehension and harassment.<br />
      <br />
      Through education we can show the young people that homosexuality is not that strange. By breaking stereotypes and
      explaining the sexual diversity terms, we get the youth to think actively about homosexuality and its meaning for
      themselves. Experience shows that after being informed, young people have more respect for sexual diversity and
      more importantly, for each other!<br />
      <br />
      DWH characterizes itself for having a predominantly young and enthusiastic team of educators. Through this small
      age difference with the high school students it is often easy for them to relate and identify to our educators.
      Do you want DWH to come to your school? Send us an email at
      <a href="mailto:voorlichting@dwhdelft.nl" class="text-purple-500">voorlichting@dwhdelft.nl</a>.<br />
      <br />
      See you soon!<br />
      Jeroen en Justin<br />
      Education Coordinators<br />
      <br />
      P.S. Are you a member of DWH and would you like to become an educator? Send us an email!
    `
  }
}
