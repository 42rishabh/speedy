import ProfileLayout from "./profile-layout"
export const metadata = {
  title: "Security",
};

const Layout = ({ children }) => {
  return (
    <ProfileLayout>
      {children}
    </ProfileLayout>
  )
};

export default Layout;
