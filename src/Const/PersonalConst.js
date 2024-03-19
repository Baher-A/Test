import BeefBop from "../assets/PersonalImages/Section1/BeefBop.png";
import Crown from "../assets/PersonalImages/Section1/Crown.png";
import Gangesta from "../assets/PersonalImages/Section1/Gangesta.png";
import QueenShery from "../assets/PersonalImages/Section1/QueenShery.png";
import PurchaseCardimg from ".././assets/PersonalImages/SVGSection/Purchase-Card.svg";
import CreateProfileimg from ".././assets/PersonalImages/SVGSection/Create-Profile.svg";
import ShareProfileimg from ".././assets/PersonalImages/SVGSection/ShareProfile.svg";
export const IconsImage = [Crown, QueenShery, Gangesta, BeefBop];
export const SectionDesignData = [
  {
    Pic: PurchaseCardimg,
    SectionTitle: "Purchase Your Card",
    SectionCaption:
      "After placing your order, you will receive instructions on how to provide us with your logo or design for on the card.",
    imageView: "left",
  },
  {
    Pic: CreateProfileimg,
    SectionTitle: "Create Your Profile",
    SectionCaption:
      "Here you can add, edit & enable what you would like to share with your contactless card.",
    imageView: "right",
  },
  {
    Pic: ShareProfileimg,
    SectionTitle: "Tap, Share & Go",
    SectionCaption:
      "It's that simple! Share who you are and what you do with with one quick tap.",
    imageView: "left",
  },
];
