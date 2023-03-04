import React from 'react'
import CurrentSong  from './CurrentSong'
function HindiSong(){
    const Hindi = {
        Songs: [
            {
                name: "Khairiya",
                artists: "Arijit Singh, Pritam",
                imgUrl: "https://i.pinimg.com/originals/ab/69/76/ab6976576facf8b77013540b2abcf2d1.jpg",
                songUrl: "https://pwdown.info/113422/Khairiyat%20Happy%20-%20Chhichhore.mp3"
            },
            {
                name: "Halki Si Barsaat",
                artists: "Saaj Bhatt, Sanjeev Ajay",
                imgUrl: "https://www.ilyricshub.com/wp-content/uploads/2022/06/halki-si-barsaat-saaj-bhatt.jpg",
                songUrl: "https://pwdown.info/113604/Halki%20Si%20Barsaat%20-%20Saaj%20Bhatt.mp3"
            },
            {
                name: "Hua Hain Aaj Pehli Baar",
                artists: "Armaan Malik,Amaal Mallik",
                imgUrl: "http://img.wynk.in/unsafe/320x180/top/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8902894357647/1615212667/srch_hungama_16960701.jpg",
                songUrl: "https://pwdown.info/10173/03%20Hua%20Hain%20Aaj%20Pehli%20Baar%20-%20Sanam%20Re%20(Armaan%20Malik)%20190Kbps.mp3"
            },

            {
                name: "Tu Hai Ki Nahi",
                artists: "Ankit Tiwari",
                imgUrl: "http://2.bp.blogspot.com/-_kOdWZBgiQQ/VJ6VGTYKlXI/AAAAAAAAYcw/Im0gtX99v68/w1200-h630-p-k-no-nu/Tu%2BHai%2BKi%2BNahi%2BRoy%2B%2BRanbir%2BKapoor.jpg",
                songUrl: "https://pwdown.info/9469/Tu%20Hai%20Ki%20Nahi%20(Roy)%20-%20Ankit%20Tiwari%20(PagalWorld.com).mp3"
            },
            {
                name: "Dil",
                artists: "Raghav Chaitanya, Kaushik Guddu",
                imgUrl: "https://w0.peakpx.com/wallpaper/280/500/HD-wallpaper-dil-love-red.jpg",
                songUrl: "https://pwdown.info/113666/Dil%20-%20Ek%20Villain%20Returns.mp3"
            },
            {
                name: "Tum Hi Aana",
                artists: "Jubin Nautiyal, Payal Dev",
                imgUrl: "https://www.quirkybyte.com/wp-content/uploads/2021/03/15-9.jpg",
                songUrl: "https://pwdown.info/113434/Tum%20Hi%20Aana%20-%20Marjaavaan.mp3"
            },
            {
                name: "Apna Bana Le",
                artists: "Arijit Singh & Sachin-Jigar",
                imgUrl: "https://files.mostmags.com/mostmags/2022/11/Apna-Bana-Le-Piya.jpg",
                songUrl: "https://pagalworldi.com/files/download/type/128/id/14055"
            },
            {
                name: "Maan Meri Jaan",
                artists: "King, Saurabh Lokhande",
                imgUrl: "https://pagalworld4u.in/wp-content/uploads/2022/10/Dejalo-Lyrics-King-Wo-Lyrics.jpg",
                songUrl: "https://pwdown.info/113604/Maan%20Meri%20Jaan%20-%20King.mp3"
            },
            {
                name: "Befikra",
                artists: "Meet Bros,Aditi Singh Sharma",
                imgUrl: "https://c.saavncdn.com/822/Befikra-Hindi-2016-20210525201035-500x500.jpg",
                songUrl: "https://pwdown.info/10181/Befikra%20-%20Meet%20Bros%20-%20190Kbps.mp3"
            },
            {
                name: "Main Agar Kahoon",
                artists: "Sonu Nigam, Shreya Ghoshal",
                imgUrl: "https://pagalworldl.com/uploads/thumb/sft11/5496_4.jpg",
                songUrl: "https://pwdown.info/112312/04.%20Main%20Agar%20Kahoon.mp3"
            },
            {
                name: "Shayad",
                artists: "Arijit Singh, Pritam",
                imgUrl: "https://www.firstpost.com/wp-content/uploads/2020/01/Kartik-Aaryan-min-1024x682.jpg",
                songUrl: "https://pwdown.info/113467/Shayad%20-%20Love%20Aaj%20Kal.mp3"
            },
            {
                name: "Pal Ek Pal",
                artists: "Arijit Singh",
                imgUrl: "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_1918943003.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/4266"
            }

        ]
    }
    return(
    <>
            <CurrentSong typeS={Hindi} SongS="Songs" />
    </>
    )
}
export default HindiSong;