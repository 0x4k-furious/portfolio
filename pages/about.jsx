import USER from '../data/user.json';
import AppShell from '../components/templates/AppShell';
import AppHeader from '../components/organisms/AppHeader';
import AppSection from '../components/molecules/AppSection';

const About = () => (
  <AppShell
    title={`Matthew Riechers | ${USER.about.title}`}
    description={USER.about.description}
    keyword="about me, about, me, history"
  >
    <AppHeader title={USER.about.title} description={USER.about.description} />
    {USER.about.contents.map((item) => (
      <AppSection key={item.id} title={item.name}>
        <p className="text-gray text-xs md:text-base leading-5 md:leading-8 text-center max-w-2xl lg:mx-auto">
          {item.description}
        </p>
      </AppSection>
    ))}
  </AppShell>
);

export default About;
