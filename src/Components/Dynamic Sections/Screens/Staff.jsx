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
    name: "Mariah",
    bio: "j sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs df j sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs df"
  },
  {
    imgSrc: anthone,
    name: "Anthone Garvin",
    bio: "Having begun his interests in psychology at Spokane Falls Community College in 2019, Anthone rigorously pursued the social sciences in hopes of becoming a behavioral therapist, however life soon had a way of presenting unexpected opportunities. One winter day, while on a snowboarding trip at the beautiful Silver Mountain Resort, Anthone had a revelation. As he carved his way down the slopes, he realized that the healing power of physical movement was something he had vastly underestimated. His fascination with psychology shifted, and he found himself drawn to the world of chiropractic care- a field that combined his love for human anatomy with the opportunity to help people through physical well-being. With interests in skateboarding, snowboarding, hiking, spending time with his wife and family, taking long evening walks, and binging comics, Anthone appreciates physicality and health in its entirety, and is an all round outgoing and joyful guy! "
  },
  {
    imgSrc: stephnie,
    name: "Stephnie",
    bio: "j sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs df j sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs df"
  },
  {
    imgSrc: kim,
    name: "Kim",
    bio: "j sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs df j sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs dfj sdfkj sdfkj dfkj dkfj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkj sdfkjs dfkjs df"
  },
]
export default function Staff() {
  return (
    <div>
      <StaffCards staffMembers={staffMembers} />
    </div>
  )
}
