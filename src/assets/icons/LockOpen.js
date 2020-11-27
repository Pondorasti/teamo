import React from 'react';
import { SvgIcon } from '@material-ui/core';

function LockOpenIcon(props) {
  return(
    <SvgIcon {...props}>
      <path d="M12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13ZM18 8H17V6C17 3.24 14.76 1 12 1C9.72 1 7.73 2.54 7.16 4.75C7.02 5.29 7.34 5.83 7.88 5.97C8.41 6.11 8.96 5.79 9.1 5.25C9.44 3.93 10.63 3 12 3C13.65 3 15 4.35 15 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM18 19C18 19.55 17.55 20 17 20H7C6.45 20 6 19.55 6 19V11C6 10.45 6.45 10 7 10H17C17.55 10 18 10.45 18 11V19Z"/>
    </SvgIcon>
  )
}

export default LockOpenIcon
