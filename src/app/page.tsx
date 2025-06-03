import { AboutMe } from './home/about-me';
import { Footer } from './home/footer';
import { LastNews } from './home/last-news';
import { Tecnologies } from './home/tecnologies';
import { WhereIHaveWorked } from './home/where-i-have-worked';

export default function Home() {

  return (
    <>
      <AboutMe />
      <Tecnologies />
      <WhereIHaveWorked />
      <LastNews />
      <Footer />
    </>
  );
  
}
