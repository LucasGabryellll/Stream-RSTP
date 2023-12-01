import Image from "next/image";

import icon_logout from '@/assets/logout.svg';

export function LogoutIcon() {
  return (
    <Image
      className='h-7 w-7'
      src={icon_logout}
      alt='sair'
      priority={true}
    />
  );
}