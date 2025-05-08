import ProfileLayout from "./profile-layout"
export const metadata = {
  title: "Payment Method",
};

const Layout = ({ children }) => {
  return (
    <ProfileLayout>
      {children}
    </ProfileLayout>
  )
};

export default Layout;
