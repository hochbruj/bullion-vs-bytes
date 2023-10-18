import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  showComments: boolean;
  title: string | null;
  identifier: string | null;
};

const Layout = ({
  preview,
  children,
  showComments,
  title,
  identifier,
}: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer
        showComments={showComments}
        title={title}
        identifier={identifier}
      />
    </>
  );
};

export default Layout;
