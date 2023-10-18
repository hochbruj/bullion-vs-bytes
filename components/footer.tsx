import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import { DiscussionEmbed } from "disqus-react";

type Props = {
  showComments: boolean;
  title: string | null;
  identifier: string | null;
};

const Footer = ({ showComments, title, identifier }: Props) => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        {showComments ? (
          <div className="py-6">
            <DiscussionEmbed
              shortname="bullionvsbytes"
              config={{
                url: `https://bullionvsbytes.com/posts/${identifier}`,
                identifier,
                title,
              }}
            />
          </div>
        ) : null}
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <p>&copy; 2023 BullionvsBytes. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
