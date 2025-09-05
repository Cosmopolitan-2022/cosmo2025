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
            { name: "COSMO1", description: "WORKING", personImg, bgImg, propImg },
            { name: "COSMO2", description: "WORKING", personImg, bgImg, propImg },
            { name: "COSMO3", description: "WORKING", personImg, bgImg, propImg },
             { name: "COSMO4", description: "WORKING", personImg, bgImg, propImg }
          ]
        },
        {
          subtitle: "DESIGN",
          members: [
            { name: "COSMO1", description: "WORKING", personImg, bgImg, propImg },
            { name: "COSMO2", description: "WORKING", personImg, bgImg, propImg },
            { name: "COSMO3", description: "WORKING", personImg, bgImg, propImg },
             { name: "COSMO4", description: "WORKING", personImg, bgImg, propImg }
          ]
        }
      ]
    }
  };
}
