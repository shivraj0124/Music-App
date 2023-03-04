import React from 'react'
import CurrentSong from './CurrentSong'
function EnglishSong() {
    const English = {
        Songs: [
            {
                name: "Faded ",
                artists: "Alan Walker",
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylvRgFJcuMxMCl8_l7JNZ-WtU_RuBkRONPPzrlyxsdlT32yfgXUj5U2VZGN_kynJ-QYA&usqp=CAU",
                songUrl: "https://www.pagalworld.com.se/files/download/type/128/id/65659"
            },
            {
                name: "See You Again",
                artists: "Wiz Khalifa, Charlie Puth,",
                imgUrl: "https://c.saavncdn.com/231/See-You-Again-From-Fast-Furious-7-English-2015-500x500.jpg",
                songUrl: "https://www.pagalworld.com.se/files/download/type/128/id/3265"
            },
            {
                name: "Baby",
                artists: "Justin Bieber, Ludacris",
                imgUrl: "https://c.saavncdn.com/728/My-World-2-0-English-2010-20200606003742-500x500.jpg",
                songUrl: "https://paglasongs.com/files/download/type/128/id/2576"
            },
            {
                name: "Night Changes",
                artists: "One Direction",
                imgUrl: "https://gospeljingle.com/wp-content/uploads/2023/01/one-direction-night-changes-lyri.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/6024"
            },
            {
                name: "Industry Baby",
                artists: "Lil Nas X,Jack Harlow",
                imgUrl: "https://upload.wikimedia.org/wikipedia/en/f/f7/Lil_Nas_X_-_Industry_Baby.png",
                songUrl: "https://www.pagalworld.com.se/files/download/type/128/id/6931"
            },
            {
                name: "Peaches",
                artists: "Justin Bieber",
                imgUrl: "https://naasongslyrics.com/wp-content/uploads/2021/03/Peaches-300x225.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/4577"
            },
            {
                name: "Blinding Lights",
                artists: "The Weeknd",
                imgUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
                songUrl: "https://pagalworld.nl/files/download/id/26673"
            },

            {
                name: "Closer ",
                artists: "The Chainsmokers",
                imgUrl: "https://2.bp.blogspot.com/-2tataJwYKX4/WA5RZ_OkKuI/AAAAAAAAEL8/rGX919GDhDgEuOZLsduSzq2TiYdJXlZjgCLcB/s1600/chainsmokers-mp3.jpg",
                songUrl: "https://pagalworldi.com/files/download/id/2638"
            },
            {
                name: "Protect Me",
                artists: "Valiant",
                imgUrl: "https://assets.audiomack.com/hapilos/7be0968819bab4ec1d28a1a84145c3d2b591672f4fa78cf82b13d7f87037639c.jpeg?width=1000&height=1000&max=true",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/13402"
            },
            {
                name: "Way Too Petty",
                artists: "Jonas Brothers",
                imgUrl: "https://i.pinimg.com/550x/4f/4d/33/4f4d3315365a12f22a5051143b32daa1.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/13399"
            },
            {
                name: "Wings",
                artists: "Jonas Brothers",
                imgUrl: "https://www.thenews.com.pk/assets/uploads/updates/2023-01-30/1035728_8423958_jonass_updates.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/13401"
            },
            {
                name: "Arrival",
                artists: "Hospin",
                imgUrl: "https://i.ytimg.com/vi/AWg9aePpXFk/hqdefault.jpg",
                songUrl: "https://pagaliworld.com/files/download/type/128/id/13066"
            }
                     
        ]
    }
    return (
        <>
            <CurrentSong typeS={English} SongS="Songs" />
        </>
    )
}
export default EnglishSong;