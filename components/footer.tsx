import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center">
          <p>&copy; 2023 BullionvsBytes. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
