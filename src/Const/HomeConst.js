import { PermMediaOutlined, SaveOutlined, SentimentVerySatisfiedOutlined, SettingsVoice, Speed, ThumbUpAltOutlined } from "@mui/icons-material";
import HPimgBlack from ".././assets/SliderImages/black.png";
import HPimgRed from ".././assets/SliderImages/red.png";
import HPimgYellow from ".././assets/SliderImages/yellow.png";

export const HPSliderImages = [
  { name: "Basic Card Black", img: HPimgBlack , color:'white' },
  { name: "Basic Card red", img: HPimgRed ,color:'red'},
  { name: "Basic Card Yellow", img: HPimgYellow ,color:'yellow' },
];
export const NewGEN = [
  {
    icon: PermMediaOutlined,
    title: "Media sharing",
    subtitle:
      "Share all your media, including videos, photos, and any visual files or external links",
    GradientColor:
      "Linear-gradient(to left top, #03c6e3, #6ec0e5, #9abcdb, #b3b9cc, #bbbbbb)",
  },
  {
    icon: SentimentVerySatisfiedOutlined,
    title: "Customers Feed Back",
    subtitle:
      "Get direct messages from your customers by simply scanning your card",
    GradientColor: "linear-gradient(-15deg, #f12711, #f5af19)",
  },
  {
    icon: ThumbUpAltOutlined,
    title: "Social media links",
    subtitle:
      "Share links to all your social media platforms professionally with your clients or fans",
    GradientColor: "linear-gradient(-15deg, #7f00ff, #e100ff)",
  },
  {
    icon: SaveOutlined,
    title: "Save Contact",
    subtitle:
      "Make the process of saving your data as a contact easier With one click, your customers can save all your data on their phone",
    GradientColor: "linear-gradient(-60deg, #12c2e9, #c471ed, #f64f59)",
  },
  {
    icon: SettingsVoice,
    title: "Share audio files",
    subtitle:
      "There are no limits with the Linky Smart Card. Share any audio files with your customers to send a specific message in the appropriate language to them",
    GradientColor: "linear-gradient(90deg, #fc4a1a, #f7b733)",
  },
  {
    icon: Speed,
    title: "Performance",
    subtitle: "Get stable and highly efficient performance at any time, 24/7",
    GradientColor: "linear-gradient(90deg, #56ab2f, #a8e063)",
  },
];
