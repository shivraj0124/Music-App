import React, { useState } from 'react'
import './AudioDisplay.css';
function Marathi() {
    const maRathi = {
        Songs: [
            {
                name: "Yad Lagla",
                artists: "Ajay Gogavale , AjayAtul",
                imgUrl: "https://images.hungama.com/c/1/95d/27c/17440121/17440121_300x300.jpg",
                songUrl: "https://pwdown.info/10936/03%20Yad%20Lagla%20-%20Sairat%20-%20190Kbps.mp3"
            },
            {
                name: "Ved Tujha",
                artists: "Ajay-Atul",
                imgUrl: "https://static.toiimg.com/photo/msid-95852773/95852773.jpg",
                songUrl: "https://pwdown.info/113597/Ved%20Tujha.mp3"
            },
            {
                name: "Shivba Raja - Sher Shivraj",
                artists: "Avadhoot Gandhi, Devdutta Manisha",
                imgUrl: "https://www.pagalworld.tv/GpE34Kg9Gq/113597/149250-shivba-raja-sher-shivraj-mp3-song-300.jpg",
                songUrl: "https://pwdown.info/113597/Shivba%20Raja%20-%20Sher%20Shivraj.mp3"
            },

            {
                name: "To Chand Rati",
                artists: "Shreya Ghoshal, Ajay Atul",
                imgUrl: "https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/w3vwmyrvWj/size_l.jpg",
                songUrl: "https://pwdown.info/113597/To%20Chand%20Rati%20-%20Chandramukhi.mp3"
            },
            {
                name: "Aapli Yaari",
                artists: "Adarsh Shinde, Sonali Sonawane",
                imgUrl: "https://c.saavncdn.com/038/Aapli-Yaari-feat-Adarsh-Shinde-Sonali-Sonawane--Marathi-2021-20210728232214-500x500.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/3261"
            },
            {
                name: "Dhaga Dhaga",
                artists: "Aakanksha Sharma, Souvik Ganguly",
                imgUrl: "https://pagalworldi.com/siteuploads/thumb/sft17/8471_4.jpg",
                songUrl: "https://pagalworldi.com/files/download/type/128/id/8471"
            },
            {
                name: "Shwasat Raja Dhyasat Raja",
                artists: "Avadhoot Gandhi",
                imgUrl: "https://marathimovieworld.com/images/actor-ajay-purkar-in-pawank.jpg",
                songUrl: "https://pagalworldl.com/files/download/type/128/id/5558"
            },
            {
                name: "Kitida Navyane",
                artists: "Mandar Aapte, Aarya Ambekar",
                imgUrl: "https://c.saavncdn.com/104/Ti-Saddhya-Kay-Karte-Marathi-2016-500x500.jpg",
                songUrl: "https://pagalworldi.com/files/download/type/128/id/8427"
            },
            {
                name: "Sar Sukhachi Shravani",
                artists: "Abhijeet Sawant, Bela Shende",
                imgUrl: "https://static.toiimg.com/photo/64869549.cms",
                songUrl: "https://pagalworldi.com/files/download/id/8511"
            },
            {
                name: "Morya Morya",
                artists: "Ajay Govale",
                imgUrl: "https://a10.gaanacdn.com/gn_img/albums/R7vKX66Wmr/7vKXaeMV3m/size_l.jpg",
                songUrl: "https://pagalworld.nl/files/download/id/33107"
            },
            {
                name: "Man Udhan Varyache",
                artists: "Ajay Atul",
                imgUrl: "https://i.pinimg.com/originals/76/4d/6e/764d6e4fe2c8a49a612b49646b56d73e.jpg",
                songUrl: "https://pwdown.info/14106/Man%20Udhan%20Varyache%20-%20Ajay%20Atul.mp3"
            },
            {
                name: "Kanha",
                artists: "Ajay Gogavale",
                imgUrl: "https://www.mymahanagar.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-09-at-4.11.23-PM.jpeg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/7154"
            }

        ]
    }
    const [songC, setSongC] = useState("Songs");
    // count the div time
    const [count, setCount] = useState(0);
    // show audio control pannel
    const [audioShow, setAudioShow] = useState(null);
    // onclick set height of div
    const [outDiv, setOutDiv] = useState(null);
    let myCountSameDiv = 0
    const showPlaySong = (e) => {
        setCount(count + 1);
        let outerDiv = e.currentTarget;
        console.log(outerDiv);
        let audioT = outerDiv.lastElementChild;
        console.log(audioT);
        setAudioShow(audioT)
        setOutDiv(outerDiv)
        audioT.style.display = "block";
        outerDiv.style.height = "20rem";
        console.log(outerDiv.id);
        console.log(outDiv.id);
        if (count >= 1) {
            if (outerDiv.id === outDiv.id) {
                myCountSameDiv = myCountSameDiv + 1;
                if (myCountSameDiv % 2 != 0) {
                    audioShow.style.display = 'none';
                    outDiv.style.height = '16rem';
                } else {
                    audioT.style.display = "block";
                    outerDiv.style.height = "20rem";
                }
            } else {
                myCountSameDiv = 0;
                audioShow.style.display = 'none';
                outDiv.style.height = '16rem';
            }
        }
        audioShow.pause();
    }

    return (
        <div className="container ">
            {/* <h4>Marathi Songs</h4> */}
            <div className="row ">
                {maRathi[songC].map((itemOne, b) => (
                    <div className="card mySongBox sm-2" style={{ width: '18rem', cursor: 'pointer' }} id={b} key={b} onClick={showPlaySong}>
                        <img src={itemOne.imgUrl} className="card-img-top" alt="img" style={{ height: '10rem' }} />
                        <div className="card-body bodyOfcard">
                            <h4 className="card-title" >{itemOne.name}</h4>
                            <h6 style={{ color: 'gray' }} >{itemOne.artists}</h6>
                        </div>
                        <audio className='audiotag' src={itemOne.songUrl} controls />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marathi