type CamProps = {
  id: string;
  description: string;
  //url_rstp: string;
  folder_output: string;
  user: string;
  path_cam_stream: string;
  ip: string;
  password: string;
}

export const CAM_STREAMING: CamProps[] = [
  {
    id: "cam1",
    user: 'tv',
    password:'vidatel@0315',
    ip: '172.30.10.106',
    //url_rstp: 'rtsp://tv:vidatel@0315@172.30.10.106:554',
    path_cam_stream: 'cam/realmonitor?channel=1&subtype=0',
    description: "POP Santa Clara",
    folder_output: 'cam_p_farma',
  },

  {
    id: "cam2",
    user: 'admin',
    password:'admvdtsnu12',
    ip: '172.22.13.90',
    path_cam_stream: 'cam/realmonitor?channel=1&subtype=0',
    description: "Sitio dos Nunes",
    folder_output: 'cam_snu',
  }
];