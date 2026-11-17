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
  RiDoubleQuotesL,
  TbWorld,
};

type Props = {
  name: string;
  className?: string;
  // Line thickness of the outline icons (Lu, Tb); the filled icons keep their own shape.
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.8 }: Props) => {
  const Component = icons[name] ?? LuChevronRight;
  const outline = name.startsWith("Lu") || name.startsWith("Tb");
  return <Component className={className} strokeWidth={outline ? strokeWidth : undefined} aria-hidden="true" />;
};
