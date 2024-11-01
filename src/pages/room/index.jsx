import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

function Room() {
    const {roomId} = useParams()

    const myMeeting = async (element) => {
        const appId = 1876745226
        const servetSecret = "0381e61700de9eef6890747c1dc9a140"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, servetSecret, roomId, Date.now().toString(), "user")


        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }

   
  return (
    <>
    <div>
        <div ref={myMeeting}/>
    </div>
    </>
  )
}

export default Room