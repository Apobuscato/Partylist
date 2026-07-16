/* =========================================================================
   PARTYLIST COMPILATION — DATA
   -------------------------------------------------------------------------
   I-edit mo dito ang mga partylist at miyembro. Walang database — dito
   mismo sa JS array ilalagay ang lahat. Static file lang ito kaya gagana
   agad sa GitHub Pages.

   Paano maglagay ng larawan:
   1. Idrop mo ang image file sa loob ng "images" folder (kasabay nito).
   2. Sa 'image' key ng member, ilagay ang path, hal: "images/juan.jpg"
      - Kung wala kang larawan, pwede mong iwan itong "" (blangko) at
        awtomatikong lalabas ang paunang titik ng pangalan bilang avatar.

   Paano magdagdag ng bagong partylist:
   - Kumopya ka ng isang block sa loob ng PARTYLISTS array (mula sa
     '{' hanggang kasunod na '}') at palitan ang mga detalye.

   Paano magdagdag ng bagong miyembro:
   - Kumopya ka ng isang block sa loob ng 'members' array at palitan.

   Paano magdagdag ng achievement:
   - Idagdag lang ang bagong linya sa loob ng 'achievements' array ng
     kani-kanilang miyembro.F1879E f0869E
   =========================================================================
   

*/

const PARTYLISTS = [
    {
        number: 1,
        name: 'KISLAP Partylist',
        slogan: 'Serbisyong Totoo, Pagbabagong Totoo',
        color: '#F1879E',
        members: [
             {
                name: 'ALTHEA CASSANDRA MABASA.',
                position: 'PRESIDENT',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'SHANE KIMBERLY ALCIRA',
                position: 'VICE PRESIDENT',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'PRINCESS JOANNA M. TANALEON',
                position: 'TREASURER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'ANDREA D. GONZAGA',
                position: 'BUSINESS MANAGER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'KELLEN FUENTES',
                position: 'AUDITOR',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'MIA A. ISLA',
                position: 'PUBLIC INFORMATION OFFICER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'ANDREA N. PADEROS',
                position: 'PUBLIC INFORMATION OFFICER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
              
                name: 'FLOYD ALVIN G. GUTIERREZ',
                position: 'PEACE OFFICER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'JAMES M. MISA',
                position: 'PEACE OFFICER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },

    
            {
                name: 'ALEX JESSIE S. PATATA',
                position: 'G11 REPRESENTATIVE',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'CHIARA JADE B. PAGUIO',
                position: 'G11 REPRESENTATIVE',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
        ],
    },
    {
        /*  
*/
        number: 2,
        name: 'SIKLAB Partylist',
        slogan: 'Sama-sama Tungo sa Pag-unlad',
        color: '#aa2016',
        members: [
            {
                name: 'ALTHEA CASSANDRA MABASA.',
                position: 'PRESIDENT',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'SHANE KIMBERLY ALCIRA',
                position: 'VICE PRESIDENT',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'AIRESH MAE Q. CARANGALAN',
                position: 'SECRETARY',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'PRINCESS JOANNA M. TANALEON',
                position: 'TREASURER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'ANDREA D. GONZAGA',
                position: 'BUSINESS MANAGER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'KELLEN FUENTES',
                position: 'AUDITOR',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'MIA A. ISLA',
                position: 'PUBLIC INFORMATION OFFICER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'ANDREA N. PADEROS',
                position: 'PUBLIC INFORMATION OFFICER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
              
                name: 'FLOYD ALVIN G. GUTIERREZ',
                position: 'PEACE OFFICER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'JAMES M. MISA',
                position: 'PEACE OFFICER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },

    
            {
                name: 'ALEX JESSIE S. PATATA',
                position: 'G11 REPRESENTATIVE',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'CHIARA JADE B. PAGUIO',
                position: 'G11 REPRESENTATIVE',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
        ],
    },
    {
        number: 3,
        name: ' L.A.B.A.N Partylist',
        slogan: 'Malasakit. Pagkakaisa. Aksyon.',
        color: '#0717a8',
        members: [
           {
                name: 'JOHN ROBERT PADILLA',
                position: 'PRESIDENT',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'DEZEM B. LEMERIC',
                position: 'VICE PRESIDENT',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'JOURNEYDAYNE BUGAY',
                position: 'SECRETARY',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'FIER ALTRAN BUDLAYAN',
                position: 'TREASURER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'ANLI CLAIRE DINULOS',
                position: 'BUSINESS MANAGER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'RENA OLAYTA',
                position: 'AUDITOR',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
                name: 'MICHELLE SALADINO',
                position: 'PUBLIC INFORMATION OFFICER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'ARLENE ENOCENCIO',
                position: 'PUBLIC INFORMATION OFFICER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },
            {
              
                name: 'MATHEW QUINCING',
                position: 'PEACE OFFICER',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
            {
                name: 'CHRISTIAN SIMANGCA',
                position: 'PEACE OFFICER',
                image: '',
                achievements: [
                    'Student Council President, 2 taon',
                    'Regional Debate Champion',
                ],
            },

    
            {
                name: 'ANGEL MELLENDREZ',
                position: 'G11 REPRESENTATIVE',
                image: '',
                achievements: [
                    'Model Student Awardee',
                ],
            },
           
        ],
    },
];
