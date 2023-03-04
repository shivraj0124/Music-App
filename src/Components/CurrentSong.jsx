import React, { useState } from 'react'
import './AudioDisplay.css';

function CurrentSong(props) {
  const [audioS,setAudioS]=useState('none')
  const [bodyS,setBodyS]=useState('visible')
  const [prevDiv,setprevDiv]=useState(null)
  const [count,setCount]=useState(0)
    function showPlaySong(e){
        setCount(count + 1)
        let outerDiv = e.currentTarget;
        let audioT = outerDiv.lastElementChild;
        let bodyName = audioT.previousSibling;
       
        audioT.style.display = audioT.style.display === 'block' ? 'none' : 'block';
        bodyName.style.visibility = bodyName.style.visibility === 'hidden' ? 'visible':'hidden';
        console.log(count)

        
        if(count >= 1){
            if(prevDiv != outerDiv){
                audioS.style.display ='none'
                bodyS.style.visibility ='visible';
            }
            audioS.pause();
        }
        setAudioS(audioT)
        setBodyS(bodyName)
        setprevDiv(outerDiv)
    }

    return (
        <>
            <div className="outrDiv">
                
                <div className="cardContain">
                    {props.typeS[props.SongS].map((itemOne, b) => (
                        <div className="myCard" id={b} key={b} onClick={showPlaySong}>
                        <div className="myImage">
                                <img src={itemOne.imgUrl} className="card-img-top imgBox" alt="img" style={{ height: '10rem' }} />
                        </div>
                           
                        <div className="cardBody">
                                <h4 className="titleName" >{itemOne.name} </h4>
                                <h6 style={{ color: 'gray' }} >{itemOne.artists}</h6>
                        </div>
                            <audio className='audiotag' src={itemOne.songUrl} controls></audio>                            
                    </div>
                    ))}
                </div>
            </div>
        </>
    );
                    }
export default CurrentSong;