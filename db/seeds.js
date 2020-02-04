const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Jet = require('../models/jet')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'userOne',
          email: 'david@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        },
        {
          username: 'userTwo',
          email: 'second@email',
          password: 'pass',
          passwordConfirmation: 'pass'
        }
      ])
    })
    .then(createdUsers => {
      console.log(`${'newUser'.repeat(createdUsers.length)} users created`)
      return Jet.create([
        {
          type: 'A380-800',
          manufacturer: 'Airbus',
          commercial: true,
          operational: true,
          year: 2005,
          image: 'http://aer24.co.uk/wp-content/uploads/2018/08/a380EK-960x640.jpg',
          description: 'The double deck A380-800 has been the largest passenger aircraft in production, since it made its first flight in April 2005. According to Airbus, the A380 offers 49% more cabin floor space which results in 26% more seat space than the Boeing 747-400. Also, the A380 is quieter and is claimed to have 800nm more range and 17% better operating economics. The A380\'s main competitor is the 747-8I which still will accommodate c.58 less seats than A380 (3 class) but certainly closes in on range and operating economics.',
          user: createdUsers[0]
        }, {
          type: 'A319-100',
          manufacturer: 'Airbus',
          commercial: true,
          operational: true,
          year: 1995,
          image: 'https://leehamnews.com/wp-content/uploads/2019/09/E195-E2_AZUL-960x640.jpg',
          description: 'The A319 is a simple shrink of the baseline A320. Like its main competitor, the 737-700, it is used by a wide range of operators. The increased MTOW options combined with up to two additional fuel tanks give the A319 a relatively long range by single aisle standards. Since 2013 “Sharklets” have been available for the A319s resulting in 4.0% fuel burn improvement and 500kg more payload. In late October 2013, Airbus launched a Sharklet retrofit programme – replacing the original wingtip fences for in-service A320 Family aircraft (MSN 1200 and above).',
          user: createdUsers[0]
        }, {
          type: 'A320-200',
          manufacturer: 'Airbus',
          commercial: true,
          operational: true,
          year: 1988,
          image: 'https://jetlinemarvel.net/wp-content/uploads/2019/10/img_5150-960x640.jpg',
          description: 'The A320-200 is the baseline aircraft of the Airbus narrow-bodied aircraft family and is one of the most successful jets in history with respect to sales volume. The A320 was initially developed in two different payload/range variants. The A320-100 was the first variant and only 21 were delivered. The second variant is the longer range A320-200, featuring wingtip fences and increased fuel capacity. The selection of the A320 by JetBlue in 1999, highlighted the successful entrance of the A320 family in the low cost market and was followed by more low-cost (start-up) airline orders, particularly from Asia.',
          user: createdUsers[0]
        }, {
          type: 'A330-900N (NEO)',
          manufacturer: 'Airbus',
          commercial: true,
          operational: true,
          year: 2017,
          image: 'https://www.airway1.com/wp-content/uploads/2018/11/A330-800-MSN1888-first-flight-960x640.jpg',
          description: 'After months of speculation, Airbus launched the A330NEO (new engine option) at the Farnborough Air show in July 2014. In fact this concept is strikingly similar to the first design of the Airbus A350 launched in 2004. This first A350 design was based on an A330 fuselage with new aerodynamics and engines. However this design was rejected by many customers and Airbus went back to the drawing board to design a complete new A350 and renamed it the A350 XWB. In first instance, the smallest version of the A350 XWB, the A350-800 was aimed at the market segment of the A330-200/300. However, as this was a shrink from the baseline A350-900, the A350-800 was a suboptimal design.',
          user: createdUsers[0]
        }, {
          type: '747-400',
          manufacturer: 'Boeing',
          commercial: true,
          operational: true,
          year: 1988,
          image: 'https://www.airway1.com/wp-content/uploads/2019/01/170419-F-GY014-003-960x640.jpg',
          description: 'The 747 was the first Wide-bodied in service and remained the largest passenger airliner until the A380 entered into service in 2007. The 747-400 was introduced into service in 1989 and enjoyed a monopoly in the 3-class over 400 seat capacity class for almost 20 years. The introduction of the A340-600 and 777-300ER as well as the A380 served to fragment market demand for the 747-400. Although none of these aircraft exactly matches the capacity of the 747-400, they do offer an alternative/replacement option and reduced the market for the new passenger 747-400s.',
          user: createdUsers[0]
        }, {
          type: '787-8',
          manufacturer: 'Boeing',
          commercial: true,
          operational: true,
          year: 2009,
          image: 'https://gojetting.com/wp-content/uploads/2014/04/NEW_787_aircraft_masterimage-960x640.jpg',
          description: 'The 787 family is initially designed to replace the 757- and 767-products and is the most successful wide-bodied aircraft design ever in terms of aircraft ordered prior to its entry into service. The 787 family features many new technologies like a full composite structure including wing and barrel shaped fuselage sections (accommodates 9 abreast seating), new up to 15-20% more efficient and relatively quiet engines, improved aerodynamics and many new electric systems instead of pneumatics/hydraulics. The 787-8 is the \'baseline type\' and is optimized for the long-range medium-density markets and would serve as such as a replacement for the 767-300ER and be a new threat to the successful A330-200.',
          user: createdUsers[0]
        }, {
          type: '757-200',
          manufacturer: 'Boeing',
          commercial: true,
          operational: false,
          year: 1982,
          image: 'https://www.shannongroup.ie/wp-content/uploads/B757-200-New-United-1-HR-960x640.jpg',
          description: 'The 757-200 was developed in conjunction with the wide-bodied 767 programme. As a result the 757-200 shares some components with the 767 and has a common crew rating. The 757 was designed for trans-continental markets that had outgrown the then-available 727. In 1986, a 757-200 with a higher certified MTOW entered service. ETOPS certification further improved the 757\'s operational flexibility. In its first years of production, the 757 attracted many orders from major carriers and charter airlines alike.',
          user: createdUsers[0]
        }, {
          type: 'F-35 Lightning II',
          manufacturer: 'Lockheed Martin',
          commercial: false,
          operational: true,
          year: 2006,
          image: 'https://wallup.net/wp-content/uploads/2017/11/22/362757-aircraft-military_aircraft-military-F-35_Lightning_II-Lockheed_Martin_F-35_Lightning_II-748x468.jpg',
          description: 'The Lockheed Martin F-35 Lightning II is a family of single-seat, single-engine, all-weather, stealth multirole combat aircraft, designed for ground-attack and air-superiority missions. The aircraft was developed and built by Lockheed Martin, with key subcontractors including Northrop Grumman, Pratt & Whitney, and BAE Systems. The F-35 has three main variants: the conventional takeoff and landing F-35A (CTOL), the short take-off and vertical-landing F-35B (STOVL), and the carrier-based F-35C (CV). The aircraft descends from the Lockheed Martin X-35, the design that was awarded the Joint Strike Fighter (JSF) program over the competing Boeing X-32 in 2001.',
          user: createdUsers[0]
        }
      ])
    })
    .then(createdJets => console.log(`${createdJets.length} jets created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})