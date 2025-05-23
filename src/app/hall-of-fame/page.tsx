import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SwipeableCarousel from "../ui/SwipeableCarousel";

type Entry = {
  sk: string;
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
  profileImage: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
};

const entries: Entry[] = [
  {
    sk: "1",
    name: "Aileen Reid",
    description:
      "North West Triathlon Club is immensely proud to call Aileen Reid one of our own. A true trailblazer in Irish triathlon, Aileen&apos;s journey from a young athlete in Derry to becoming Ireland&apos;s most successful triathlete is nothing short of inspirational.\n\n&nbsp;\n\nAileen represented Ireland at two Olympic Games—London 2012 and Rio 2016—competing at the highest level of the sport. Over her career, she stood on the podium in 14 ITU races, claimed a silver medal at the ITU World Triathlon Series Grand Final in 2013, and was ranked among the top ten female triathletes in the world for three consecutive years. In recognition of her incredible achievements, she was inducted into the Triathlon Ireland Hall of Fame in 2019—the fourth athlete ever to receive this honour.\n\n&nbsp;\n\nAileen also represented Northern Ireland in triathlon at the 2014 Commonwealth Games in Glasgow, competing in both the women&apos;s individual event and the mixed team relay. She delivered outstanding performances, finishing 6th in the individual race and 8th in the mixed team relay alongside Connor Murphy, Russell White, and Heather Foley.\n\n&nbsp;\n\nDespite racing on the world stage and working with some of the best junior athletes in Australia today, Aileen has never forgotten her roots. Whenever she returns home, she makes time for NWTC, inspiring our members and sharing her vast experience with the next generation of triathletes. She has taken our juniors for sessions, imparting invaluable knowledge that only a world-class competitor can offer.\n\n&nbsp;\n\nAileen&apos;s success is not just about talent—it is a testament to her relentless dedication, mental strength, and love for the sport. She has paved the way for future Irish triathletes and remains a role model to all of us at NWTC. We are incredibly proud of her achievements and grateful for her continued support of our club",
    image: {
      src: "/about-us/reid.jpg",
      alt: "John Doe racing",
      height: 1440,
      width: 810,
    },
    profileImage: {
      src: "/hof/aileenreid.jpg",
      alt: "John Doe racing",
      height: 484,
      width: 402,
    },
  },
  {
    sk: "2",
    name: "Luke McCarron",
    description:
      "We are pleased to announce the induction of Luke McCarron into the NWTC Hall of Fame. Since his debut in 2016 as a 17-year-old racing full sprint triathlons, Luke has achieved tremendous success in both sport and academics, building a legacy of dedication, perseverance, and remarkable talent.\n\n&nbsp;\n\nAs a junior, Luke&apos;s potential was evident to anyone who saw him race. His speed, endurance, and natural ability stood out, and he was awarded NWTC Athlete of the Year on numerous occasions—an early indication of the incredible journey that lay ahead. His achievements were undeniable, and his performances sparked recognition from those who knew the sport, marking him as a future star.\n\n&nbsp;\n\nLuke&apos;s highlights include winning a silver medal at the British Universities and Colleges (BUCS) Triathlon Championships, leading the Cambridge Men&apos;s Triathlon team to their first-ever BUCS medal, and securing the titles of English National Triathlon Champion and Irish National Aquathlon Champion. Most recently, in February 2025, Luke claimed his first international podium, earning bronze at the Asia Triathlon Cup, a monumental achievement in his young career.\n\n&nbsp;\n\nLuke&apos;s victory at the 2021 Triathlon Ireland National Aquathlon Championships was another standout moment, where he completed the 1km swim and 5km run in 30:03—a clear reflection of his dedication and skill.\n\n&nbsp;\n\nHaving now graduated in Medicine from Jesus College, Cambridge, Luke is embarking on a dual career as both a doctor and a professional triathlete. Despite his success, Luke remains grounded, never forgetting his roots in Derry. Whenever he returns home, he is always eager to give back to the community, helping and training with younger and developing athletes, sharing his experience with genuine humility and generosity.\n\n&nbsp;\n\nAs part of the University of Cambridge Athlete Performance Programme (UCAPP), Luke was able to balance his demanding studies and athletic career, benefiting from the programme&apos;s support in areas like physiotherapy, nutrition, and sports psychology. Luke has spoken highly of how UCAPP helped him, noting that it was the first time he felt the University truly understood the importance of sport in the lives of its students.\n\n&nbsp;\n\nWhile these achievements are impressive, Luke&apos;s story is far from finished. His journey continues, and we&apos;re eager to see what new heights he will reach in the future. With his drive and determination, it&apos;s clear that the best is yet to come.\n\n&nbsp;\n\nTo be continued...",
    image: {
      src: "/hof/lukemccarron.JPG",
      alt: "Luke McCarron racing",
      height: 508,
      width: 475,
    },
    profileImage: {
      src: "/hof/lukemccarron.JPG",
      alt: "Luke McCarron racing",
      height: 508,
      width: 475,
    },
  },
  {
    sk: "3",
    name: "Róisín Lynch",
    description:
      "Róisín Lynch stands as a shining example of dedication, resilience, and community spirit, making her a rightful inductee into the NWTC Hall of Fame. Her unparalleled contributions to triathlon, her remarkable athletic achievements, and her decades of tireless fundraising work for a cause close to her heart make her a true champion, both in sport and in life.\n\n&nbsp;\n\n**Triathlon Triumphs**\n\nA long-time member of NWTC, Róisín has proven that age is no barrier to success in sport. Her career reached new heights in 2019 when, at 70, she won a silver medal at the World Triathlon Championships in Lausanne, Switzerland, representing both Ireland and her beloved club. This success came after a brilliant silver medal performance at the European Championships in Weert, Holland, solidifying Róisín as a force in international age-group triathlon. These achievements are a testament to her perseverance, dedication, and passion for the sport.\n\nBut perhaps one of her most impressive feats is her dedication to the Liam Ball Sprint Triathlon, an annual event in memory of Derry's own two-time Olympic swimmer. Róisín has completed over 30 editions of the Liam Ball Triathlon, a remarkable achievement that speaks to her commitment to both the sport and the memory of a local hero. This is a feat that remains likely unbeaten, underscoring her unmatched consistency and dedication to the triathlon community.\n\n&nbsp;\n\n**The Buncrana Christmas Swim**\n\nIt was Liam Ball himself who first introduced Róisín to the Buncrana Christmas Swim, a tradition she has now been part of for decades. Beginning in 1976, Róisín has made an unbroken run at the Christmas Day Swim, raising over £50,000 for the Children&apos;s Eye Cancer Trust (CHECT). This cause, close to her heart after her son David&apos;s diagnosis with Retinoblastoma, has benefitted significantly from her commitment and fundraising efforts. The Buncrana Swim, alongside her many years of triathlon success, showcases Róisín's dedication not only to sport but to giving back to the community in the most meaningful ways.\n\n&nbsp;\n\n**A Lifelong Athlete**\n\nBefore triathlon, Róisín was already an accomplished athlete in multiple disciplines. Her early days as a netball player and cross-country runner set the stage for a career that spanned several decades. As a member of the Sparta Athletic Club, Róisín consistently excelled in cross-country competitions, representing Ireland in numerous events and winning several gold and silver medals.\n\nHer commitment to sport was exemplified by her ability to stay competitive well into her 60s and beyond. At the age of 65, Róisín&apos;s inclusion in the over-65 cross-country team for the British and Irish Masters Cross Country Championships was a clear reflection of her dedication to maintaining peak fitness and competitiveness throughout her life.\n\n&nbsp;\n\n**Charitable Giving: A Legacy of Compassion**\n\nRóisín&apos;s influence extends far beyond athletics. Since 1995, she has raised over £35,000 for the Children&apos;s Eye Cancer Trust, demonstrating her dedication to supporting others. Her fundraising work, initiated through the Christmas Day Swim, has provided vital funding for research and treatment, impacting many lives in the process.\n\nRóisín&apos;s ability to balance her competitive athletic career with her charity work demonstrates her true character. Her story serves as an inspiration to all who know her, showing that the power of sport can extend far beyond the individual.\n\n&nbsp;\n\n**A Dedication to Education**\n\nRóisín&apos;s commitment to others also extended to her 37-year career as an educator. As a physical education teacher and vice-principal at St Cecilia&apos;s College, she was instrumental in shaping the lives of countless students. Her passion for teaching, coupled with her own athletic background, helped inspire generations of young people to pursue sport and lead active, healthy lives.\n\n&nbsp;\n\n**An Inspiration for All**\n\nRóisín&apos;s journey is one of resilience, determination, and giving back. Through her triathlon victories, her charitable work, and her legacy as a teacher, she has left a lasting impact on NWTC and the wider community. Her achievements remind us all that with passion, dedication, and the courage to pursue our dreams, we can achieve greatness at any stage in life.\n\nRóisín Lynch&apos;s legacy is one of inspiration, proving that sports can empower, connect, and change lives. We are proud to induct her into the NWTC Hall of Fame, where her story will continue to inspire future generations of athletes.",
    image: {
      src: "/hof/roisinlynch.jpg",
      alt: "Róisín Lynch hall of famer",
      height: 586,
      width: 487,
    },
    profileImage: {
      src: "/hof/roisinlynch.jpg",
      alt: "Róisín Lynch hall of famer",
      height: 586,
      width: 487,
    },
  },
  {
    sk: "4",
    name: "Colm Quigley",
    description:
      "Colm Quigley was a man of many talents, a dedicated father, a friend, a community leader, and above all, an athlete who represented the very best of Derry. His contribution to the world of sport, particularly triathlon, and his deep impact on those around him, make him a true legend. The NorthWest Triathlon Club (NWTC) is proud to induct Colm into its Hall of Fame, ensuring that his remarkable legacy continues to inspire generations of athletes and community members alike.\n\n&nbsp;\n\n**The Athlete**\n\nColm Quigley&apos;s athleticism was nothing short of exceptional. As an elite-level triathlete, he not only represented Ireland at numerous competitions, but he also pushed the boundaries of his own limits. His commitment to the sport was unwavering, and his dedication to perfecting his craft became a model for others to follow. Colm was known for his drive, discipline, and relentless pursuit of excellence, whether in the pool, on the bike, or on the run.\n\nHis passion for triathlon extended beyond personal achievement; Colm was deeply invested in helping others succeed. As a coach, he was a tireless mentor, sharing his expertise with athletes at all levels. His commitment to their growth and success exemplified his selflessness and desire to see others reach their potential. Colm&apos;s legacy as a coach lives on in the countless athletes he mentored, each one of them carrying forward his lessons of perseverance, determination, and camaraderie.\n\n&nbsp;\n\n**The Family Man**\n\nOff the field of play, Colm was first and foremost a loving father to his five children. His family was his foundation, and everything he did was driven by a deep love and commitment to them. Colm worked tirelessly to support his family, taking on a variety of roles—from driving a taxi to working as a handyman and tiler. No matter the job, Colm&apos;s focus was always on providing for his children, ensuring they had everything they needed, both physically and emotionally. His children were his pride and joy, and he took every opportunity to create lasting memories with them, teaching them the importance of hard work, kindness, and community.\n\n&nbsp;\n\n**The Community Leader**\n\nColm&apos;s influence extended far beyond his own family and athletes he coached. He was a man who believed in the power of community, constantly seeking ways to contribute and make a positive impact. Whether he was leading by example in a triathlon, offering a word of encouragement to a fellow athlete, or volunteering his time to help with community events, Colm was always there, showing the true spirit of service and support.\n\nHis work with the Jog in the Bog race, a community event that brings together runners of all levels, exemplified his passion for making fitness accessible to everyone. Colm understood the importance of promoting health and well-being within the community, and the race has since become a lasting tribute to his memory. The event, which began as a way to get people moving, has grown into one of Derry&apos;s most loved community fixtures, drawing together hundreds of participants each year to celebrate Colm&apos;s vision for a healthy and active community.\n\n&nbsp;\n\n**The Legacy**\n\nTragically, Colm&apos;s life was cut short, leaving a gap that no one could ever fill. But his legacy is one that will live on forever. The lessons he imparted, the relationships he built, and the community he helped create will endure far beyond his time on earth. Colm&apos;s story is not just one of athletic achievement, but of kindness, hard work, and a dedication to those around him.\n\nAs we induct Colm into the NWTC Hall of Fame, we do so not only to celebrate his athletic accomplishments but to honour the man he was a loving father, a respected coach, a loyal friend, and a true community champion. Colm Quigley&apos;s name will always be synonymous with dedication, generosity, and the spirit of sportsmanship.\n\n&nbsp;\n\n**Conclusion**\n\nColm&apos;s memory is alive in every athlete he inspired, in every race he helped organise, and in every person whose life he touched. The Colm Quigley ‘Jog in the Bog&apos; race, the athletes he coached, and the countless lives he impacted all stand as a testament to his remarkable legacy. As we honour Colm today, we celebrate not just his success as an athlete, but the many ways in which he built up his community, supported his family, and inspired those who were fortunate enough to know him.\n\nNWTC is proud to induct Colm Quigley into our Hall of Fame, ensuring his legacy continues to inspire athletes and community members for generations to come.",
    image: {
      src: "/hof/colmquigley.jpg",
      alt: "Colm Quigley hall of famer",
      height: 462,
      width: 544,
    },
    profileImage: {
      src: "/hof/colmquigley.jpg",
      alt: "Colm Quigley hall of famer",
      height: 462,
      width: 544,
    },
  },
  // {
  //   sk: "5",
  //   name: "Joe McConnellogue",
  //   description:
  //     "Joe McConnellogue&apos;s story is the epitome of resilience, determination, and relentless pursuit of excellence. A veteran of four open-heart surgeries, Joe&apos;s journey has been a test of survival, mental fortitude, and his unyielding love for triathlon. His first surgery at 27 could have ended his competitive career, but instead, Joe approached it like the race of his life—a race he would never stop running. The challenges didn&apos;t stop there, as his fourth and most recent surgery at age 46 further tested his strength, but only solidified his resolve to continue his triathlon journey.\n\n&nbsp;\n\nOver the years, Joe&apos;s heart has become both his strength and his limiter—a line he cannot cross. But rather than letting this restriction define him, Joe has embraced it, developing a deep understanding of his body&apos;s capabilities. Every training session is a calculated risk, yet Joe has consistently exceeded expectations. His ability to train and race within his heart's limits, while pushing the boundaries of his performance, makes him one of the most unique and respected athletes in the triathlon world.\n\n&nbsp;\n\nJoe&apos;s entry into triathlon came after a career in football, where he realised his passion was elsewhere. In 2011, he completed his first triathlon in Limavady at the Roe Valley Sprint Triathlon. He crossed the line in a very respectable 1hr 11minutes, with his brother Paul helping him maintain a controlled heart rate. By 2021, Joe had completed a Half Ironman in 4:58—achieving his goal of going sub-5 hours despite the challenges posed by his medical history. This remarkable progression is a testament to Joe&apos;s dedication, focus, and resilience, as he has consistently improved while managing his heart condition.\n\n&nbsp;\n\nWhat sets Joe apart from many athletes is his ongoing commitment to training and racing well into his 50s. In 2025, Joe is still racing, still planning his race season, and still showing up to every club training session and practice race with the same passion as when he started. Last year, while staying in his mobile home in Donegal, Joe took part in a local sea swim race series, the Portnablagh Crab Crawl, placing overall second. This result wasn&apos;t a fluke, the same as achieving Age Group wins in practically every race he enters, not to mention going sub 60 minutes for a 25-mile time trial. It is the culmination of years of hard work and an in-depth understanding of his body&apos;s abilities.\n\n&nbsp;\n\nWhen reviewing Joe&apos;s race splits, his biking times are nothing short of legendary. For most athletes, these times would represent an all-out effort, their heart rates nearing the red line. Yet Joe, bound by the limitations of his heart, rides with ease, practically singing a tune on his bike. His ability to maintain such a high level of effort while staying within his limits is extraordinary. Joe&apos;s cycling prowess is so impressive that young athletes often draft off him, struggling to take their turn or even keep up. He has been known to pull his training teammates through tough sessions, showing his selfless nature and commitment to the success of others.\n\n&nbsp;\n\nJoe McConnellogue is a storyteller—and a master at it. We&apos;re not saying he spins tales, but during long bike rides and training sessions, you&apos;re never short of entertainment. Joe has a way of bringing stories to life like no one else. Sure, some of the details might evolve over time, but the core always stays true. There&apos;s always something new in every retelling—maybe a little twist, or a fresh detail that keeps the crowd hooked. A true legend, and that&apos;s exactly how we like it.\n\n&nbsp;\n\nOutside of triathlon, Joe is a big family man. Married to Oonagh, and the proud father of Jayne, Holly, and Joe, he&apos;s always put his family first. As the youngest of 13 siblings, Joe&apos;s childhood was nothing short of a survival of the fittest—literally. You had to be the first up to even get a pair of shoes to wear to school! It&apos;s that sense of determination, grit, and family-first mentality that has shaped him into the athlete and person we admire today.\n\n&nbsp;\n\nJoe&apos;s heart condition has shaped his approach to life and sport, but it has never been a barrier. Through all the challenges—whether medical or athletic—Joe has remained a pillar in the triathlon community. His journey from football to triathlon, from heart surgeries to race victories, is a story of unwavering perseverance, skill, and an unrelenting love for the sport.\n\n&nbsp;\n\nJoe McConnellogue is more than an athlete; he is a living example of what it means to defy the odds and continuously strive for greatness. He has proven time and again that heart conditions, age, and limitations are mere obstacles to be overcome with determination, the right mindset, and a love for life. Joe&apos;s legacy, both literally and figuratively, is one of heart—an inspiration to us all.\n\n&nbsp;\n\nIt is with immense pride that we induct Joe McConnellogue into the NWTC Hall of Fame. A true champion, a dedicated racer, and a legend in every sense of the word.",
  //   image: {
  //     src: "/hof/joemcconnellogue.jpg",
  //     alt: "Joe McConnellogue hall of famer",
  //     height: 1080,
  //     width: 1080,
  //   },
  //   profileImage: {
  //     src: "/hof/joemcconnellogue.jpg",
  //     alt: "Joe McConnellogue hall of famer",
  //     height: 1080,
  //     width: 1080,
  //   },
  // },
];

export default async function HallOfFamePage() {
  return (
    <main className="no-scrollbar h-dvh snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start snap-always" id="hall-of-fame">
        <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
          <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
            <SwipeableCarousel
              className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
              id="hall-of-fame"
            >
              {entries.map((entry) => {
                return (
                  <div key={entry.sk}>
                    <Image
                      src={entry.image.src}
                      width={entry.image.width}
                      height={entry.image.height}
                      alt={`${entry.name} hall of famer`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                      <div className="w-3/4 text-center md:w-2/4">
                        <div className="mb-4 flex items-center justify-center">
                          <Image
                            src={entry.profileImage.src}
                            width={entry.profileImage.width}
                            height={entry.profileImage.height}
                            alt={`${entry.name} hall of famer`}
                            className="h-36 w-36 rounded-full border-2 border-brandGreen object-cover"
                          />
                        </div>
                        <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                          {entry.name}
                        </h1>
                        <div className="no-scrollbar relative max-h-[60dvh] overflow-scroll text-ellipsis rounded-xl border-t-2 border-brandGreen px-3 py-3 text-justify">
                          <ReactMarkdown>{entry.description}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </SwipeableCarousel>
          </div>
        </div>
      </div>
    </main>
  );
}
