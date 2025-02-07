import React from 'react'
import Angry from "../Reactions/Angry"
import Confused from "../Reactions/Confused"
import Happy from "../Reactions/Happy"
import Love from "../Reactions/Love"
import Sad from "../Reactions/Sad"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const Feedback = ({Name,Email,Description,Rating,Time}) => {
    const reactionIcon = (Rating)=>{
        switch (Rating) {
            case "Angry":
                return <Angry/>
                break;
            case "Confused":
                return <Confused/>
                break;
            case "Happy":
                return <Happy/>
                break;
            case "Love":
                return <Love/>
                break;
            case "Sad":
                return <Sad/>
                break;
        
            default:
                return <Love/>
                break;
        }
    }
  return (
    <Card className="m-5">
      <CardHeader className="flex gap-3">
        {
            reactionIcon(Rating)
        }
        <div className="flex flex-col max-w-[80%]">
          <p className="text-md break-all">{Name}</p>
          <p className="text-small text-default-500 break-all">{Email}</p>
          <p className="text-small text-default-500 break-all">{Time}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className='text-justify'>{Description}</p>
      </CardBody>
    </Card>
  )
}

export default Feedback