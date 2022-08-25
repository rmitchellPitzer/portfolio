import "./page4.css"
import birb from "../portfolioImages/birb.jpg"
// import React from "react";
// import { Link } from "react-router-dom";


export default function Page4(args) {

    // const ButtonMailto = ({ mailto, label }) => {
    //     return (
    //         <Link
    //             to='#'
    //             onClick={(e) => {
    //                 window.location.href = mailto;
    //                 e.preventDefault();
    //             }}
    //         >
    //             {label}
    //         </Link>
    //     );
    // };
    let page4pageBackgroundImagePhone = args.isPhone ? "page4pageBackgroundImagePhone" : "page4pageBackgroundImage";

    return(
        <div className="page4page">
            <div className="page4pagecontainer">
                <div className="pinkbackground">
                <div className="page4pagegetintouch">
                If you'd like to get in touch
                </div>


                    <button className="page4pageemail" onClick={() => window.location = 'mailto:ryderm123456@gmail.com'}>
                        send me an email!
                    </button>

                    {/*<button className="page4pageemail">*/}
                {/*    send me an email!*/}
                {/*</button>*/}
                </div>

                <div className="page4pagethanks">
                Thank you so much!
                </div>
            </div>
        <img className={page4pageBackgroundImagePhone} src={birb}/>

        </div>

    );
}







// import "./page4.css"
// import birb from "../portfolioImages/birb.jpg"
//
// export default function Page4(args) {
//     return(
//         <div className="page4">
//             <div className="page4Container">
//                 <div className="getInTouchContainer">
//                     <div className="page4Title">
//                         If you'd like to get in touch...
//                     </div>
//                     <button className="page4EmailButton">
//                         Send me an email!
//                     </button>
//                 </div>
//                 <div className="thanks">
//                     Thank you so much!
//                 </div>
//             </div>
//             <img className="page4BackgroundImage" src={birb}/>
//         </div>
//
//     );
// }