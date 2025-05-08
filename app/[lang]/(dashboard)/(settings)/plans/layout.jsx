import ProfileLayout from "./profile-layout"
export const metadata = {
  title: "Plans",
};

const Layout = ({ children }) => {
  return (
    <ProfileLayout>
      {children}
    </ProfileLayout>
  )
};

export default Layout;
