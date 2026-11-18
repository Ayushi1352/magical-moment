import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  LuArrowRight,
  LuArrowUp,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuList,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMessageCircleMore,
  LuMinus,
  LuPhone,
  LuPlus,
  LuUserRound,
  LuX,
} from "react-icons/lu";
import { RiDoubleQuotesL } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

// The design's own outline emblems (service cards), drawn like the Lu icons
const MmRings: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="9" cy="12" r="5" />
    <circle cx="15" cy="12" r="5" />
  </svg>
);
const MmDiamond: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M6 3h12l4 6-10 12L2 9z" />
    <path d="M2 9h20" />
    <path d="M10 3l-2 6 4 12 4-12-2-6" />
  </svg>
);
const MmSparkle: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-3.05-7.05l-2.83 2.83m-8.48 8.48l-2.83 2.83m0-14.14l2.83 2.83m8.48 8.48l2.83 2.83" />
  </svg>
);

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaTwitter,
  FaYoutube,
  LuArrowRight,
  LuArrowUp,
  LuCalendarDays,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuList,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMessageCircleMore,
  LuMinus,
  LuPhone,
  LuPlus,
  LuUserRound,
  LuX,
  MmDiamond,
  MmRings,
  MmSparkle,
  RiDoubleQuotesL,
  TbWorld,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu, Tb, Mm); the filled icons keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? LuChevronRight;
  const outline = name.startsWith("Lu") || name.startsWith("Tb") || name.startsWith("Mm");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};
