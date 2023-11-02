import React from 'react'
import nopfp from '../../../Assets/pfp.jpg'
import mariah from '../../../Assets/Mariah.jpg'
import anthone from '../../../Assets/Anthone.jpg'
import stephnie from '../../../Assets/Stephnie.jpg'
import kim from '../../../Assets/Kim.jpg'
import goldfelt from '../../../Assets/Goldfelt.jpg'
import whitman from '../../../Assets/Whitman.jpg'
import '../../../CSS/Main Content/Staff/Staff.css'
import StaffCards from '../Sections/Staff Sections/StaffCards'

const staffMembers = [
  {
    imgSrc: goldfelt,
    name: "Dr. John Goldfelt",
    bio: "Dr. John was born and raised in Calgary, Alberta, where he pursued an undergraduate degree at Mount Royal College & University of Calgary. He later graduated from the Palmer College of Chiropractic West in San Jose, CA, where he also played collegiate hockey. John has lived in Spokane since 1998, and has practiced chiropractic for over 17 years. He believes in a comprehensive, integrated approach to achieving wellness for all patients. An avid hockey player, Dr. Goldfeldt also plays tennis and downhill skis. John is also very active in the community through coaching tennis, soccer, and volunteer work. Dr. Goldfeldt is the proud husband of a beautiful wife, Kim, and father of three lovely daughters."
  },
  {
    imgSrc: whitman,
    name: "Dr. Mark Whitman",
    bio: "Dr Whitman was raised in Spokane. He went to College in Arizona. He completed medical school and his residency in New York. Dr Whitman is a board certified in Emergency Medicine and has been practicing in Spokane since 2001. Dr. Whitman is married with 3 children. He Is an outdoor enthusiast and can be found hiking, hunting, skiing, mountain biking, golfing, and riding dirt bikes in his down time. Dr Whitman's goals for Argonne Integrative Medicine are to improve people's functional abilities and return them to doing the activities they enjoy!!"
  },
  {
    imgSrc: mariah,
    name: "Mariah Stewart",
    bio: "Mariah is a massage therapist at Argonne Integrative Medicine, having been licensed since 2021. She got married in 2018 to her wonderful husband, parenting 6 fur babies and counting. She is a serious reader, coffee snob, and candle hoarder. She also served 6 years in the army reserves. Despite not re-enlisting, she would do it over again if she had the chance."
  },
  {
    imgSrc: anthone,
    name: "Anthone Garvin",
    bio: "Having begun his interests in psychology at Spokane Falls Community College in 2019, Anthone rigorously pursued the social sciences in hopes of becoming a behavioral therapist, however life soon had a way of presenting unexpected opportunities. One winter day, while on a snowboarding trip at the beautiful Silver Mountain Resort, Anthone had a revelation. As he carved his way down the slopes, he realized that the healing power of physical movement was something he had vastly underestimated. His fascination with psychology shifted, and he found himself drawn to the world of chiropractic care- a field that combined his love for human anatomy with the opportunity to help people through physical well-being. With interests in skateboarding, snowboarding, hiking, spending time with his wife and family, taking long evening walks, and binging comics, Anthone appreciates physicality and health in its entirety, and is an all round outgoing and joyful guy! "
  },
  {
    imgSrc: stephnie,
    name: "Stephnie",
    bio: "Stephnie Grew up in the lower valley of washington. Graduated from Massage School in 2007 and has been a therapist since then. Steph(as everyone calls her) currently is our Office Manager and billing specialist. She is also a licensed notary as well as a certified chiropractic assistant. Her hobbies include riding horses, archery, motorcycles, snowmobiling and spending time outdoors. She loves to cuddle and hang out with her 2 dogs and 2 cats. She also is a tattoo enthusiast and will never turn down a good taco with some sweet tea."
  },
  {
    imgSrc: kim,
    name: "Kim",
    bio: "Kim is the office manager and HR specialist at AIM.  She grew up in a small town in Alberta, Canada and honed her skills as a budding Athlete, playing college Volleyball at Olds College in Canada. She has worked in HR for over 20 years, across diverse industries including Hi-Tech PR, Insurance and Medical.  Her ability to focus her skills came early in life and her accomplishments have  demonstrated this along the way.  From becoming a college Athlete in volleyball, running a marathon or winning fitness competitions at the age of 45.  Kim has always been diligent, focused and detail oriented to be the best that she can be.  Presently she enjoys activities like skiing, tennis, pickleball and reading."
  },
]
export default function Staff() {
  return (
    <div>
      <StaffCards staffMembers={staffMembers} />
    </div>
  )
}
