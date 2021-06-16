import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent implements OnInit {
  profiles: Profile[];

  constructor() { 
    this.profiles = [
      //misc
      new Profile(
      'William Jiang',
      'william-jiang.png', 
      'Chief Executive Officer', 
      'Hey everyone! My name is William Jiang and I&lsquo;m thrilled to be serving as PassionFruit Youth&lsquo;s Chief Executive Officer. I founded PFY with the hopes of connecting the youth of today with opportunities that will enhance their ambitions of pursuing their "passion". For far too long, many auspicious youth are forced to abandon their aspirations due to a lack of support, absence of opportunities, and most of all, the expectation to be apart of the "norm". It&lsquo;s time for change. Here at PFY, we aim to foster a community that not only supports one-another&lsquo;s ambitions, but collectively builds on each others successes, breaking boundaries and reaching new heights. Through various high-impact community events, volunteer/career insight opportunities, self-growth workshops and more, PFY has its sights on being the premier hub for cultivating prospering dreams for youth.'
      ),

      new Profile(
      'Stephanie Li', 
      'stephanie-li.png', 
      'Secretary', 
      'Helloo! I&lsquo;m Stephanie and I&lsquo;m so beyond thrilled to be PassionFruit&lsquo;s Secretary this year :D When I&lsquo;m not cramming school work, you can find me listening to music (and by music I mean the one song that I loop😌), reading webtoons or vibing with friends!! Feel free to msg me @steqh.l if you have any webtoon recommendations or if you just wanna talk :)'
      ),

      //most important member!
      new Profile(
      'Lucas Shen', 
      'lucas-shen.png',
      'Chief of Web Development',
      'Hi, my name is Lucas. I enjoy playing League of Legends, watching anime, and winning anything. I joined PassionFruit Youth to develop better social as an ambassador but received a promotion to web developer. That is all I will say, if you want to know more, message @lucas.shen21 on instagram for a slim chance for you to learn more about me. Good day.'
      ),

      new Profile(
      'Kayley Chan', 
      'kayley-chan.png',
      'Web Development Coordinator',
      'Heyo, PFY web dev Kayley Chan here. I joined PFY to gain experience, connections, and beef up that uni application :) As a competitive dancer/contortionist, I’ve got the spine of a 90 year old. Find me @kayreychan on ig if you want to vent, or want an obscenely long (but organized!) anime watchlist.'
      ),

      //finance
      new Profile(
      'Bonnie Wen',
      'bonnie-wen.png',
      'Co-Chief of Finance & EA',
      'Hi everyone I’m Bonnie and I can’t wait to be one of your EAF leads! Asides from working on PassionFruit, you can find me baking more cookies, listening to another 5 song playlist, or messing up my grammar. I’m super stoked for what we have in store this year and if you ever see me online at 1am- no you didn’t, but feel free to dm me :)'
      ),

      new Profile(
      'Lola Irelewuyi', 
      'lola-irelewuyi.png', 
      'Co-Chief of Finance & EA', 
      'Hey! My name is Lola and I’m looking forward to being a Finance and External Affairs lead in Passionfruit Youth this year! My pastimes include reading, writing, and learning about philosophy, so if you have any good recs let me know! You can reach me @lol_a.05 on Instagram!'
      ),
      
      new Profile(
      'Jessie Hu',
      'jessie-hu.png', 
      'Finance & EA Coordinator', 
      'Hi everyone! I’m Jessie Hu and I’m thrilled to be one of Passionfruit Youth’s Finance and External Affairs execs this year! I’m in Grade 10 which means I still have time to have some fun before IB exams 😰 In my free time, I enjoy going on walks with my cat, watching movies, and playing video games with my friends. I joined Passionfruit to work with a group of dedicated individuals and help create a positive change in our community. I’m quite active on Instagram (@_jessie_who) so feel free to hit me up if you have any questions or just want to talk :))'
      ),

      new Profile(
      'Julia Petrucci', 
      'julia-petrucci.png', 
      'Finance & EA Coordinator', 
      'Hey everyone! I’m Julia and I can’t believe I’m a part of the executive team here at PassionFruit Youth :)) I love love love art, cinema, and clothes as well as writing and talking! I joined PassionFruit Youth because I always like meeting new people and getting involved within my area! I’m so excited about the community we’re fostering here at PFY and I can’t wait for you all to learn more. If you have any questions or just want to say hi... text me! My instagram is @juliia.p :)'
      ),

      new Profile(
      'Maggie Lu', 
      'maggie-lu.png', 
      'Finance & EA Coordinator', 
      'Heyo! I&lsquo;m Maggie and I love meeting new people! I’m also picking up new skills like baking--my cheesecake is world-class Michelin-star-worthy for sure, they just haven&lsquo;t discovered me yet 😉. I joined PassionFruit since 1) I love to help out because 2) I want to make a difference! Pop me a message @miscreantmoogly :)'
      ),

      //marketting
      new Profile(
      'Emily Yu', 
      'emily-yu.png', 
      'Co-Chief of Marketing & Design', 
      'Hello!! I’m Emily, and I’m stoked to be one of PassionFruit’s marketing leads for this year! I’ll try my best to make this year an exciting and memorable one for you all! In my free time, you can find me listening to music, trying to catch up with work, or taking a quick nap. Text me @em.ilyyu if you have any questions, or just to say hi :)'
      ),

      new Profile(
      'Esther Zhu', 
      'esther-zhu.png', 
      'Co-Chief of Marketing & Design', 
      'Hi friends! I&lsquo;m Esther Zhu, and I&lsquo;m so excited to be one of PassionFruit&lsquo;s marketing heads this year :) A few of my hobbies include vibing to some music and playing video games with my friends!! I joined PFY to earn some leadership skills and help operate the amazing community that it&lsquo;s creating, and so far it&lsquo;s been a blast! HMU @esthcrzhu on ig if you have any questions or just wanna vibe!'
      ),

      new Profile(
      'Bethany Cheung', 
      'bethany-cheung.png', 
      'Marketing & Design Coordinator', 
      ''
      ),

      new Profile(
      'Elizabeth Zhang', 
      'elizabeth-zhang.png', 
      'Marketing & Design Coordinator', 
      'Hello fellow gamers! My name is Elizabeth Zhang, and I’m part of PassionFruit’s marketing team :) I’m really into video games but mainly into league and genshin rn so hmu for my ign ;)) Joining PassionFruit was an impulse move by me to see if I could really expand my horizons on “graphic design is my passion”, and it’s a lot of fun :DD DM me at liz.jp.zhang on ig if you have any questions or want a carry in genshin <3'
      ),

      new Profile(
      'Shirley Huang',
      'shirley-huang.png',
      'Marketing & Design Coordinator',
      'Heyo! I&lsquo;m Shirley Huang, I joined PassionFruit as a way to connect and meet new people around the community. I love making art, playing video games, watching anime, and listening to music :D If you want to message me (or wanna talk about anime) find me @Bunnyhoopp.13 on Instagram <3'
      ),

      new Profile(
      'Caitlyn Tan',
      'caitlyn-tan.png',
      'Marketing & Design Coordinator',
      'Hello there! I’m Caitlyn Tan, and I’m thrilled to be part of PassionFruit’s marketing team this year. In my free time, I enjoy vibing to music and spending quality time with friends. I joined PassionFruit in hopes of new experiences and meeting many of the wonderful people in our community! Find me on Instagram @caitlyn.taan if you ever wanna chat :D'
      ),

      //logistics
      new Profile(
      'Stephen Tang', 
      'stephen-tang.png', 
      'Co-Chief of Logistics & Events', 
      'Sup sup! My name is Stephen, and I am the co-lead for logistics at Passionfruit! I enjoy playing rhythm games and volleyball. I hope to help other people make new connections as well as better our community’s pool of resources. IG is stephen.tangg <br><br>Wp gg 😁 Joking 😂 We shilling 😎 Solo Bolo 😱'
      ),

      new Profile(
      'Marco Chen',
      'marco-chen.png',
      'Co-Chief of Logistics & Events',
      'Hey, I&lsquo;m Marco and I am one of the logistics leads at PassionFruit Youth! Outside of PassionFruit, I enjoy photography, some occasional cooking, watching the sunset and before the pandemic, I enjoyed traveling. Feel free to reach me @marco.charco with any questions, or if you just want to talk :)'
      ),

      new Profile(
      'Andrea Yeh',
      'andrea-yeh.png', 
      'Logistics & Events Coordinator', 
      'Hello hello! My name is Andrea Yeh and I’m ecstatic to be one of the logistics executives this year! I joined PFY because I wanted to connect youth with their communities and create opportunities, all while developing my own soft skills! In my free time, you can find me reading a historical fiction book, making a mess in the kitchen, or playing video games with friends. Feel free to shoot me a message on IG @typewritergirl800 if you have any questions or just want to talk!'
      ),

      new Profile(
      'Marshal Guo', 
      'marshal-guo.png', 
      'Logistics & Events Coordinator', 
      'Hey, name is Marshal and I joined Passionfruit&lsquo;s logistics department to further develop its mission statement of providing resources for youth and to meet new people. Some of my hobbies include playing video games, watching anime, and playing sports. You can find me mostly active on @marshalxguo on ig if you have any questions or just want to talk.'
      ),

      new Profile(
      'Fatima Mohammed', 
      'fatima-mohammed.png', 
      'Logistics & Events Coordinator', 
      'Hey! I&lsquo;m Fatima and I&lsquo;m happy to be apart of PassionFruit this year. A few of my hobbies include shopping, travelling and listening to RnB / Rap music. I joined PassionFruit as a way to network with other individuals while touching upon my communication skills to further enhance the community. PassionFruit has been amazing so far and I see it going places!'
      ),

      new Profile(
      'Nada Armanios', 
      'nada-armanios.png', 
      'Logistics & Events Coordinator', 
      'Hi everyone!! My name is Nada and i am part is the logistics team at Passionfruit. I enjoy playing piano and guitar as well as listening to music, and i love chilling with friends. I joined Passionfruit a youth because i really wanted to make a difference and create a place where all kinds of youth, no matter who, would be included. I am excited to dive deeper into the projects we have been working on (coming soon stay tuned for that!!). And i’m looking foreword to getting to know the other members of this organization. Passionfruit is only just getting started and i’m excited to see what the future holds:))'
      )
    ]
  }

  ngOnInit(): void {
  }

  displayProfile(profile: Profile) {
    var profileContainer = document.getElementById('profile-container');
    profileContainer!.style.visibility = 'visible';
    profileContainer!.style.marginTop = '18vh';

    var activePosition = document.getElementById('active-position');
    activePosition!.style.marginTop = '3vh'; 
    activePosition!.innerHTML = profile.position;

    var activeBlurb = document.getElementById('active-blurb');
    activeBlurb!.style.marginTop = '1.5vh';
    activeBlurb!.innerHTML = profile.description;

    var activeImage = document.getElementById('active-image');
    activeImage!.setAttribute('src', 'assets/img/profiles/' + profile.imgName);
    if (activeImage!.className === "") {
      activeImage!.className = "active-img";
    } 

    document.getElementById('active-name')!.innerHTML = profile.name;
    


    this.scrollToTop();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
}

}

class Profile {
  private _name: string;
  private _imgName: string;
  private _position: string;
  private _description: string;

  constructor(name: string, imgName: string, position: string, description: string) {
    this._name = name;
    this._imgName = imgName;
    this._position = position;
    this._description = description;
  }

  get name() {
    return this._name;
  }

  get imgName() {
    return this._imgName;
  }

  get position() {
    return this._position;
  }

  get description() {
    return this._description;
  }
}
