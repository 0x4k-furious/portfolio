import USER from '../data/user.json';
import AppHeader from '../components/organisms/AppHeader';
import AppShell from '../components/templates/AppShell';
import AppSection from '../components/molecules/AppSection';
import AppProject from '../components/atomics/AppProject';

const Project = () => (
    <AppShell
      title={`Matthew Riechers | ${USER.project.title}`}
      description={USER.project.desctiption}
      keyword="project, projects, portfolio project, mobile development project, skill"
    >
      <AppHeader
        title={USER.project.title}
        description={USER.project.desctiption}
      />
      <AppSection title="Personal Projects">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-x-4 gap-y-16">
          {USER.project.contents.map((item) => (
            <AppProject key={item.id} project={item} />
          ))}
        </div>
      </AppSection>
    </AppShell>
  );

export default Project;
