import React from 'react';
import { Stack } from "@fluentui/react";
import ServiceIcon from '../images/service-icon5.png'
import ServiceIcon2 from '../images/service-icon3.png';
import ServiceIcon3 from '../images/service-icon4.png';
import ServiceIcon4 from '../images/service-icon2.png';
import ServiceIcon5 from '../images/icon.png';
import ServiceIcon6 from '../images/service-icon6.png';

interface Props{
image:string,
head:string
}
    export const FourBePartRow: React.FC<Props> = ({ image, head }) => {
        if(image=="1"){image=ServiceIcon}else if(image=="2"){image=ServiceIcon2} else if(image=="3"){image=ServiceIcon3}
        else if(image=="4"){image=ServiceIcon4} else if(image=="5"){
            image=ServiceIcon2} else {image=ServiceIcon6}
  return (
      <>
      
        <Stack className='FourBePartCard'>
              <img src={image}/>
              <a>{head}</a>
          </Stack>
      </>
  )
}
