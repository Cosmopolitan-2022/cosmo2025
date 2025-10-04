import { s } from "motion/react-client";

export const propImg =
  "https://res.cloudinary.com/djqgs2pet/image/upload/v1757096825/image_1_Traced_upijz1.png";

export const fade =
  "https://res.cloudinary.com/djqgs2pet/image/upload/v1757111997/Ellipse_64_iutuad.png";


export function getTeamData() {
  const personImg =
    "https://res.cloudinary.com/djqgs2pet/image/upload/v1757096826/image_61_gfx6av.png";
  const bgImg =
    "https://res.cloudinary.com/djqgs2pet/image/upload/v1757102162/Vector_swuozh.png";
  const propImg =
    "https://res.cloudinary.com/djqgs2pet/image/upload/v1757096825/image_1_Traced_upijz1.png";
  const centerImageUrl =
    "https://res.cloudinary.com/dsjxx976j/image/upload/v1756724529/963fbdec7112799038c0557126e4a1003632df78_bhnwyz.png";

  const fade =
    "https://res.cloudinary.com/djqgs2pet/image/upload/v1757111997/Ellipse_64_iutuad.png";

  const backgroundImageUrl =
    "https://res.cloudinary.com/dsjxx976j/image/upload/v1756720468/Frame_9590_vttipu.png";

  const arrowahead = "https://res.cloudinary.com/djqgs2pet/image/upload/v1757172558/arrow_ahead_si9adp.svg";
  const arrowback = "https://res.cloudinary.com/djqgs2pet/image/upload/v1757172557/arrow_prev_cumlyo.svg";

  return {
    ourPatron: {
      title: "OUR PATRON",
      members: [
        { name: "COSMO1", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO2", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO3", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO4", description: "WORKING", personImg, bgImg, propImg }

      ]
    },
    convener: {
      title: "CONVENER",
      members: [
        { name: "COSMO1", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO2", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO3", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO4", description: "WORKING", personImg, bgImg, propImg }
      ]
    },
    sacOfficials: {
      title: "SAC OFFICIALS",
      members: [
        { name: "COSMO1", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO2", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO3", description: "WORKING", personImg, bgImg, propImg },
        { name: "COSMO4", description: "WORKING", personImg, bgImg, propImg }
      ]
    },
    coreTeam: {
      title: "CORE TEAM",
      sections: [
        {
          subtitle: "TECHNICAL",
          members: [
            { name: "DEBAJYOTI CHATTERJEE", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541713/Debajyoti_CoreTeam_Technical_-_Luffy_k6brdn.jpg", bgImg, propImg },
            { name: "CHINNARI NARASHIMHA PRASAD", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541643/ChinnariNarashimha_CoreTeam_Technical_-_Chinnari_Narashimha_lhx5l1.jpg", bgImg, propImg },
            { name: "SUJAL KUMAR AGARWAL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759590000/WhatsApp_Image_2025-10-04_at_20.23.32_zfdb3b.jpg", bgImg, propImg },
            { name: "SOUMADEEP SENGUPTA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541774/Soumadeep_Coreteam_Technical_-_soumadeep_sengupta_d6xvm5.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "DESIGN",
          members: [
            { name: "T.SATISH KUMAR PATRO ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541641/Satish_CoreTeam_Creative_-_Satish_pfahno.jpg", bgImg, propImg },

            { name: "ISHITA AGRAWAL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541823/ishita_coreteam_designer_-_Ishita_Agrawal_hyqahp.jpg", bgImg, propImg },
            { name: "AYUSH YADAV", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541698/Ayush_Coreteam_Creative_-_Ayush_Yadav_klawww.jpg", bgImg, propImg },
            { name: "DEBASISH ARORA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541766/Devashish_coreteam_creative_-_Devashish_Arora_qm9bov.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "EVENT MANAGEMENT",
          members: [
            { name: "SUDEEP KUMAR SWAIN ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759585535/1000140697_9000_-_Sudiip_kumar_Swaain_xafmpt.jpg", bgImg, propImg },
            { name: "CHIDAMBAR SWAIN ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541711/Chidambar_Coreteam_Event_Management_-_Chidambar_Swain_ic6can.jpg", bgImg, propImg },
            { name: "ADITYA PANDA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541824/IMG_20240908_021100_-_Aditya_Panda_u5djc7.jpg", bgImg, propImg },



            { name: "AYUSH JAISWAL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541762/Ayush_Jaiswal_Core_Team_EM_-_Ayush_Jaiswal_fkgue3.webp", bgImg, propImg },

            { name: "SALONI BEHERA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541709/Saloni_Coreteam_EM_-_Saloni_Behera_gtxvn6.png", bgImg, propImg },

            { name: "RUPAYAN DUTTA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541673/Rupayan_Coreteam_Eventmanagement_-_Rupayan_Dutta_hve2c9.png", bgImg, propImg },


          ]
        },
        {
          subtitle: "GUEST  HOSPITALITY",
          members: [
            { name: "JYOTI SETHI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541643/Jyoti_Core_team_Guest_hospitality_-_jyoti_sethi_fu2ier.jpg", bgImg, propImg },
            { name: "P BINDUSHREE DORA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541641/Bindushree_Coreteam_Guest_Hospitality_-_P_BINDUSHREE_DORA_sqyqy6.jpg", bgImg, propImg },
            { name: "PARTHA SARATHI BEHERA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541811/Partha_Coreteam_Guestandhospitality_-_Partha_sarathi_Behera_vuzkwk.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "WORKSHOP",
          members: [

            { name: "PRADYUSH PARIDA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541729/Pradyush_core_team_workshop_performance_-_Pradyush_Parida_apm5so.jpg", bgImg, propImg },
            { name: "ROHIT KUMAR SAHU ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541700/ROHIT_CORETEAM_WORKSHOPANDPERFORMANCEMANAGEMENT_-_Rohit_Kumar_sahu_yjr8mg.jpg", bgImg, propImg },
            { name: "HIMANSU NAHAK ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541681/Himansu_Coreteam_Workshop_And_Performance_-_Himansu_Nahak_iz7mlh.png", bgImg, propImg },
            { name: "ANKIT MEWADA  ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541789/Ankit_CoreTeam_Workshop_-_Ankit_Mewada_iru8mz.jpg", bgImg, propImg }
          ]

        },
        {
          subtitle: "BOOKING  PERMISSION",

          members: [
            { name: "NIKHIL KUMAR DALAI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541693/Nikhil_Coreteam_Booking_Permissions_-_Nikhil_Dalai_sbn17t.png", bgImg, propImg },
            { name: "PRITAM RAJ MAHAPATRO", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541830/PRITAM_CORE_TEAM_BOOKINGS_AND_PERMISSION_-_Pritam_Raj_mm5aa4.jpg", bgImg, propImg },
          ]
        },
        {
          subtitle: "CONTENT",
          members: [
            { name: "VARSHA PRIYADARSHINI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541704/Varsha_Coreteam_Content_-_Varsha_Priyadarshini_h73ia5.jpg", bgImg, propImg },

            { name: "ARINDAM SARKAR", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541702/Arindam_Coreteam_Content_-_Arindam_Sarkar_wg75xh.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "REQUIREMENTS MANAGEMENT",

          members: [
            { name: "TUSAR KANTA MAHARANA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541664/Tusar_Coreteam_Requirements_-_Tushar_Kanta_Maharana_bvp8jj.jpg", bgImg, propImg },
            { name: "DEEPAK PANIGRAHI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541751/Deepak_secretary_-_Deepak_Kumar_aehax2.jpg", bgImg, propImg },
            { name: "ASISH BEHERA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541692/Asish_Coreteam_Requirements_-_Asish_Behera_yfyk0w.png", bgImg, propImg },

            { name: "DEEPAK BEHERA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541692/Deepak__Coreteam__Requirements_page-0001_-_Deepak_Behera_nr3qhb.jpg", bgImg, propImg },
          ]
        },
        {
          subtitle: "SPONSORSHIP",
          members: [
            { name: "AMLAN PRATEEK PANDA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541666/AMLAN_coreteam_spons_-_AMLAN_PRATEEK_PANDA_vslmxy.png", bgImg, propImg },
            { name: "ANSHUMAN PANDA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541675/Anshuman_CoreTeam_Sponsorship_-_Anshuman_mjbfwq.jpg", bgImg, propImg },

            
            { name: "SUBHAM KUMAR SAHOO", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541774/1000266957_-_SUBHAM_qm7p7z.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "DECORATIONS AND  AESTHETICS",
          members: [
            { name: "CHIRANJEEB OM PRAKASH", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541817/Chiranjeeb_coreteam_decoration_-_Chiranjeeb_Om_Prakash_sr7ixx.jpg", bgImg, propImg },


          ]
        },
        {
          subtitle: "DATABASE MANAGEMENT",
          members: [
            { name: "ROHAN PADHY", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541717/20251003_172727_-_Rohan_Padhy_x6zmyn.jpg", bgImg, propImg },

            { name: "JAGNYASAI SAHU", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541697/Jagnyasai_Coreteam_Database_-_Jagnyasai_Sahu_mqzrqw.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "TRAVEL AND LOGISTICS",
          members: [
            { name: "CH GYANESWAR RAO", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541687/IMG_7559_-_Gyaneswar_Ch_q7xw8m.jpg", bgImg, propImg },
            { name: "SWAYNSU MOHANTY", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541663/IMG-20250728-WA0014_-_Swaynsu_Mohanty_iwbxxc.jpg", bgImg, propImg },
            { name: "ADITYA ADHIKARI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541767/Aaditya_Adhikari_Core_team__Travel_and_Logistics_-_Aaditya_Adhikari_qti9r4.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "PROMOTION AND OUTREACH",
          members: [
            { name: "SAHIL KUMAR SUBUDHI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541761/Sahil_Coreteam_Promotions_and_Outreach_-_Sahil_Kumar_Subudhi_as5fwd.jpg", bgImg, propImg },
            { name: "GOLA SRINIVAS", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541655/Srinivas_Coreteam_PR_-_GOLA_SRINIVAS_v33ymt.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "FUN EVENTS",
          members: [
            { name: "KISHAN KUMAR BEHERA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541780/kishan_core_funevents_-_Kishan_Kumar_Behera_xkncmv.jpg", bgImg, propImg },
            { name: "RUSTAM KUMAR", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541658/IMG_20241027_193237241_PORTRAIT_-_RUSTAM_KUAMR_dhadui.jpg", bgImg, propImg },

            { name: "ASISH KUMAR NATH", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541724/Asish_coreteam_funevents_-_Kumar_Asish_tbonef.jpg", bgImg, propImg }
          ]
        },




      ]
    },
    assets: {
      centerImageUrl,
      fade,
      backgroundImageUrl,
      arrowahead,
      arrowback,
    },
  };
}
