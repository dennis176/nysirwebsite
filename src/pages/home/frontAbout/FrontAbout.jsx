import React from 'react'
import { Link } from "react-router-dom";
import "../Home"
import "../frontAbout/frontabout.scss"
import {useState, useEffect} from 'react'
import {db} from "../../../firebase-config"
import { collection, getDocs } from "firebase/firestore"
import pyro from "../../../img/nysirbillede.jpeg"


const Selection = () => {


  const [about, setAbout] = useState([])
    const maintitleReference = collection(db, "frontabout")


    useEffect(() => {


        const getAbout = async () => {
            const about = await getDocs(maintitleReference)
            setAbout(about.docs.map((doc) =>({...doc.data(), id: doc.id})))
            console.log(about)
        }
    
        getAbout()
    }, [])







  return (

    <section className='frontabout'>

        <div className="dots">
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
        </div>
        
        <h1>Om Nýsir Aarhus</h1>

        <section className='frontaboutsnip'>
            {about.map((about) => (
             <article className='infosnip'>
              <p>{about.nysirinfo}</p>
              <button>
                <Link to="/nysir">
                      <li>Læs videre her</li>
                </Link>
              </button>
             </article>
              
          ))}
          <img src={pyro} alt="nysirpyro" className='nysirpyro' loading="lazy" />
        </section>
    </section>
    
  )
}

export default Selection