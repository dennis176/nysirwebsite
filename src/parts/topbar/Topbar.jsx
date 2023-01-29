import React from 'react'
import "../topbar/topbar.scss"
import 'animate.css';
//IMG
import gb from "../../img/gb.jpeg"
import nysirlogo from "../../img/nysirlogo-1.png"
import 'animate.css';



const Topbar = () => {


 /*    const [title, setMainTitle] = useState([])
    const maintitleReference = collection(db, "maintitle")


    useEffect(() => {


        const getMainTitle = async () => {
            const title = await getDocs(maintitleReference)
            setMainTitle(title.docs.map((doc) =>({...doc.data(), id: doc.id})))
        }
    
        getMainTitle()
    }, [])
     */


  return (
        <header>
            
                <div className='nysirheader'>
                <div className='topwhitespace'></div>
                <hr />
                     <div className='headertitle'>
                        <div className='whitespace'></div>
                        <img src={nysirlogo} alt="nysirlogo" id='nysirlogo'  className='animate__animated animate__fadeIn' />
                        <img src={gb} alt="gb" className='animate__animated animate__fadeIn'  id='gb'/>
                </div>
        </div>
        </header>
  )
}

export default Topbar