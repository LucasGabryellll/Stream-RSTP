import { OptionStreamType } from "@/types/OptionStreamType";

import tv_icon from "@/assets/tv.svg";
import cam_icon from "@/assets/cam.svg";

export const homeOptionStream: OptionStreamType[] = [
  { 
    title: `Live TV's`,
    subtitle: '+10 Canais',
    icon: tv_icon,
    path: '/stream'
  },
  { 
    title: 'Câmeras',
    subtitle: '+5 Câmeras',
    icon: cam_icon,
    path: '/cam'
  }
]