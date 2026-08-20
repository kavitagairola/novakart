import MainLayout from "../../components/layout/MainLayout";
import Container from "../../components/ui/Container";

import ProfileSidebar from "../../features/profile/ProfileSidebar";
import ProfileHeader from "../../features/profile/ProfileHeader";
import ProfileInfo from "../../features/profile/ProfileInfo";
import ProfileStats from "../../features/profile/ProfileStats";

function Profile() {
  return (
    <MainLayout>
      <Container>

        <section className="py-10">

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

            <ProfileSidebar />

            <div className="space-y-8">

              <ProfileHeader />

              <ProfileStats />

              <ProfileInfo />

            </div>

          </div>

        </section>

      </Container>
    </MainLayout>
  );
}

export default Profile;