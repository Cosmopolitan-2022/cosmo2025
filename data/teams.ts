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
     
    convener: {
      title: "CONVENOR",
      members: [
        { name: "NILANCHAL NAHAK", description: "WORKING", personImg:"https://res.cloudinary.com/du5qoczcn/image/upload/v1759795453/Nilanchal_Nahak_general_convenor_-_nilanchal_nahak_1_qeg29o.png", bgImg, propImg },
        { name: "CHINMAYA KUMAR NAIK", description: "WORKING", personImg:"https://res.cloudinary.com/du5qoczcn/image/upload/v1759795064/ChinmayaKumarNaik_convener_-_Chinmay_Kumar_Naik_tbmta3.jpg", bgImg, propImg },
      ]
    },
    sacOfficials: {
      title: "SAC OFFICIALS",
      sections:[
        {
          subtitle:"SAC President",
          members: [
        { name: "RAJEEV KUMAR PANDA", description: "WORKING", personImg:"https://res.cloudinary.com/dmah92jqh/image/upload/v1759653950/94679_s4fqlq.jpg", bgImg, propImg },
      ]
    },
    {
          subtitle:"FMS Vice President",
          members:[
        { name: "KUMUD KANT MEHTA", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759653951/WhatsApp_Image_2025-10-05_at_12.26.55_PM_u3zptm.jpg", bgImg, propImg },
        { name: "SIVARAMAN J", description: "WORKING", personImg:"https://res.cloudinary.com/dmah92jqh/image/upload/v1759653950/WhatsApp_Image_2025-10-05_at_12.26.56_PM_l17zaf.jpg", bgImg, propImg },
      ]
    }
    ]
    },
    coreTeam: {
      title: "CORE TEAM",
      sections: [
        {
          subtitle: "TECHNICAL",
          members: [
            { name: "DEBAJYOTI CHATTERJEE", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541713/Debajyoti_CoreTeam_Technical_-_Luffy_k6brdn.jpg", bgImg, propImg },
            { name: "NARASHIMHA", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759655143/copy-ChinnariNarashimha_CoreTeam_Technical_-_Chinnari_Narashimha_fj4i5g.jpg", bgImg, propImg },
            { name: "SUJAL KUMAR AGARWAL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759590000/WhatsApp_Image_2025-10-04_at_20.23.32_zfdb3b.jpg", bgImg, propImg },
            { name: "SOUMADEEP SENGUPTA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541774/Soumadeep_Coreteam_Technical_-_soumadeep_sengupta_d6xvm5.jpg", bgImg, propImg },

          ]
        },
        {
          subtitle: "DESIGN",
          members: [
            
            { name: "T.SATISH KUMAR PATRO ", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759648769/Satish_CoreTeam_Creative_-_Satish_amuc9h.jpg", bgImg, propImg },
            { name: "AYUSH YADAV", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759647898/copy-Ayush_Coreteam_Creative_-_Ayush_Yadav_apatih.jpg", bgImg, propImg },
            { name: "DEBASISH ARORA", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759647904/copy-Devashish_coreteam_creative_-_Devashish_Arora_mjwwvs.jpg", bgImg, propImg },
            { name: "VIKRAM SINGH PATEL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759793270/Vikram_coreteam_creative_-_vikram_singh_1_fbthi2.jpg", bgImg, propImg },
            { name: "SANTOSH", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759793265/Santosh_core_creative_2_page-0001_-_Santosh_Patra_cv0xub.jpg", bgImg, propImg },
            
          ]
        },
        {
          subtitle: "EVENT MANAGEMENT",
          members: [
            { name: "SASWAT MISHRA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759795645/SaswatMishra_CoreTeam_EM_-_Stradd_Noux_2_npy46m.jpg", bgImg, propImg },
            { name: "SAI KUMAR", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759794093/sai_kumar_core_team_event_management_-_Sanapala_Sai_Kumar_uu6aka.png", bgImg, propImg },
            { name: "SUDEEP KUMAR SWAIN ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759585535/1000140697_9000_-_Sudiip_kumar_Swaain_xafmpt.jpg", bgImg, propImg },
            { name: "CHIDAMBAR SWAIN ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541711/Chidambar_Coreteam_Event_Management_-_Chidambar_Swain_ic6can.jpg", bgImg, propImg },
            { name: "ADITYA PANDA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541824/IMG_20240908_021100_-_Aditya_Panda_u5djc7.jpg", bgImg, propImg },
            
            
            
            { name: "AYUSH JAISWAL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541762/Ayush_Jaiswal_Core_Team_EM_-_Ayush_Jaiswal_fkgue3.webp", bgImg, propImg },
            
            { name: "SALONI BEHERA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541709/Saloni_Coreteam_EM_-_Saloni_Behera_gtxvn6.png", bgImg, propImg },
            
            { name: "RUPAYAN DUTTA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541673/Rupayan_Coreteam_Eventmanagement_-_Rupayan_Dutta_hve2c9.png", bgImg, propImg },
            { name: "ISHITA AGRAWAL", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541823/ishita_coreteam_designer_-_Ishita_Agrawal_hyqahp.jpg", bgImg, propImg },


          ]
        },
        {
          subtitle: "GUEST AND  HOSPITALITY",
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
            { name:"SAI KISHAN " , description:"WORKING", personImg:"https://res.cloudinary.com/du5qoczcn/image/upload/v1759791718/Picsart_25-03-29_19-09-52-565_diiit8.jpg", bgImg, propImg},
            { name: "HIMANSU NAHAK ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541681/Himansu_Coreteam_Workshop_And_Performance_-_Himansu_Nahak_iz7mlh.png", bgImg, propImg },
            { name: "ANKIT MEWADA  ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541789/Ankit_CoreTeam_Workshop_-_Ankit_Mewada_iru8mz.jpg", bgImg, propImg }
          ]

        },
        {
          subtitle: "BOOKING  PERMISSION",

          members: [
            { name: "NIKHIL KUMAR DALAI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541693/Nikhil_Coreteam_Booking_Permissions_-_Nikhil_Dalai_sbn17t.png", bgImg, propImg },
            { name: "PRITAM RAJ MAHAPATRO", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759648008/copy-PRITAM_CORE_TEAM_BOOKINGS_AND_PERMISSION_-_Pritam_Raj_ey6cvy.jpg", bgImg, propImg },
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
            { name: "DEEPAK PANIGRAHI", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759647781/Deepak_CoreTeam_RequirementandManagment_-_Dipu_Panigrahi_cfbfvi.jpg", bgImg, propImg },
            { name: "ASISH BEHERA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541692/Asish_Coreteam_Requirements_-_Asish_Behera_yfyk0w.png", bgImg, propImg },
            { name: "TRIPATTI", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759791718/WhatsApp_Image_2025-10-06_at_23.00.38_i7yjpe.jpg", bgImg, propImg },

            { name: "DEEPAK BEHERA ", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541692/Deepak__Coreteam__Requirements_page-0001_-_Deepak_Behera_nr3qhb.jpg", bgImg, propImg },
          ]
        },
        {
          subtitle: "SPONSORSHIP",
          members: [
            { name: "AMLAN PRATEEK PANDA", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759654467/copy-AMLAN_coreteam_spons_-_AMLAN_PRATEEK_PANDA_as1pqf.png", bgImg, propImg },
            { name: "ANSHUMAN PANDA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541675/Anshuman_CoreTeam_Sponsorship_-_Anshuman_mjbfwq.jpg", bgImg, propImg },
            { name:"RUDRA NARAYAN", description:"WORKING" , personImg:"https://res.cloudinary.com/du5qoczcn/image/upload/v1759791717/WhatsApp_Image_2025-10-06_at_21.04.24_l6chcr.jpg", bgImg, propImg},

            
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
            { name: "SWAYNSU MOHANTY", description: "WORKING", personImg: "https://res.cloudinary.com/dmah92jqh/image/upload/v1759655533/IMG-20250728-WA0014_-_Swaynsu_Mohanty_lhtzli.jpg", bgImg, propImg },
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

            { name: "ASISH KUMAR NATH", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759541724/Asish_coreteam_funevents_-_Kumar_Asish_tbonef.jpg", bgImg, propImg },
            { name: "SNEHA GUPTA", description: "WORKING", personImg: "https://res.cloudinary.com/du5qoczcn/image/upload/v1759794419/Sneha_Coreteam_Funevents_-_Sneha_Gupta_q3rgom.jpg", bgImg, propImg },
            
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
