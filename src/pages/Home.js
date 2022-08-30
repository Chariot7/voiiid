import img from '../Assets/LG_Frieze.png'
import img2 from '../Assets/StanbyME.png'
import screen1 from '../Assets/stanby1.png'
import screen2 from '../Assets/stanby2.png'
import screen3 from '../Assets/stanby3.png'

const home = function(){
    return (
    <>
    <div style={{
        height: "84vh",
        margin: "auto",
        position: "relative",
        aspectRatio: 'auto 16/9',
        minHeight: '150px',
    }}>
            <div
            style={{
                // border: '2px solid black',
                height: "8%",
                minWidth: '400px',
                minHeight: '40px',
                left:'7%',
                
            }}>
                <h2 
                    style={{
                        left: '7%',
                        position: 'relative',
                        textAlign: 'left'
                    }}>
                    LG - Frieze, New York
                </h2>
                <h5
                    style={{
                        left: '7%',
                        top: '2%',
                        position: 'relative',
                        textAlign: 'left'
                    }}>
                        Designed & Built: Adobe XD, HTML, CSS, React, Heroku
                </h5>
            </div>
        <div style={{
            // border: '1px solid black',
            height: "84vh",
            margin: "auto",
            position: "relative",
            aspectRatio: 'auto 16/9',
            minHeight: '150px',
        }}>
            <img src={img2}
                alt="artwork"
                className="image"
                style={{ height: '65%',
                left: '7%',
                top: '14%',
                position: 'absolute',
                
                }}/>
            <img src={img}
                alt="artwork"
                className="image"
                style={{ height: '65%',
                right: '7%',
                top: '14%',
                position: 'absolute',
                borderRadius:'0.75%',
                filter: 'drop-shadow(0 0 0.45rem #C8C8C8)',
                }}/>
        </div>
    </div>
    <div
    style={{
        // border: '1px solid black',
        height: "93vh",
        margin: "auto",
        marginTop: "7vh",
        position: "relative",
        aspectRatio: 'auto 16/10'}}>
            <div style={{
                // border: '1px solid black',
                width: "30%",
                aspectRatio: 'auto 4/7',
                top: "4%",
                left:"1%",
                position: 'absolute',
                filter: 'drop-shadow(0 0 0.35rem #C8C8C8)',
            }}>
                <img src={screen1} alt='' style={{
                    height: "100%",
                }}/>
            </div>
            <div style={{
                // border: '1px solid black',
                width: "30%",
                aspectRatio: 'auto 4/7',
                top: "4%",
                left:"34%",
                position: 'absolute',
                filter: 'drop-shadow(0 0 0.35rem #C8C8C8)'
            }}>
                <img src={screen2} alt='' style={{
                    height: "100%",
                }}/>
            </div>
            <div style={{
                // border: '1px solid black',
                width: "30%",
                aspectRatio: 'auto 4/7',
                top: "4%",
                left:"67%",
                position: 'absolute',
                filter: 'drop-shadow(0 0 0.35rem #C8C8C8)'
            }}>
                <img src={screen3} alt='' style={{
                    height: "100%",
                }}/>
            </div>

    </div>
    </>
    )
}
export default home;