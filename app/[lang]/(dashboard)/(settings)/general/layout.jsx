import ProfileLayout from "./profile-layout"
export const metadata = {
  title: "General Settings",
};

const Layout = ({ children }) => {
  return (
    <ProfileLayout>
      {children}
    </ProfileLayout>
  )
};

export default Layout;
