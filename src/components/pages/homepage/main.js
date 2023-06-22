
import './main.css'
import eventImage from '../../../images/d6055f8b-868b-9a28-1d6b-89e529a579cf_Asset_2@2x.png.png'
import StatsCard from '../../cards/stats/stats';
export default function MainPage(){


    return (
        <>

        <div className="main-container">

            <div style={{maxWidth:'670px', height:'60%',backgroundColor:'',}}>

                <div style={{width:'170px', height:'100px',backgroundColor:''}}>
                    <img src={eventImage} style={{width:'100%', height:'auto'}}/>

                </div>
                <div>
                    <h2>CEOG SUMMIT</h2>
                    <h5>Hyatt Regency, #1 Wrighston Rd,,, Part of Spain, ,,Trinidad and Tobago</h5>
                    <p><span>Start:</span> Wed Dec 07 2022 18:30:00 GMT+0530 (India Standard Time)</p>
                    <p><span>End:</span>  Fri Dec 09 2022 02:30:00 GMT+0530 (India Standard Time)</p>
                    <p><span>2022</span><span style={{marginLeft:'20px'}}>USD</span></p>
                    <a style={{float:'right'}}>https://ceogsummit.com</a>
                    

                </div>
                <div style={{marginTop:'50px'}}>
                <hr />
                
                <h4>With a view to broaden the scope of the event and ensure the participation of all the major stakeholders from across the global energy landscape, Caribbean Oil & Gas Virtual Summit (CARIVS) is returning as The Caribbean Energy, Oil & Gas Summit (CEOGS 2022). CEOGS will continue to provide the best networking and business development opportunities to all the industry stakeholders whilst placing the Caribbean region’s rich Oil & Gas potential at the centre of the global dialogue. The event will bring together the entire Oil & Gas Value Chain to network, exchange key ideas and explore propitious business opportunities in the upstream, midstream and downstream oil & gas markets of Guyana, Suriname, Trinidad & Tobago and the wider Caribbean region.</h4>
                
                
                </div>
            
            

            </div>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between',flexWrap:'wrap', backgroundColor:'',height:'auto', marginTop:'20px'}}>
                <StatsCard title={'Attendees'} count={10}/>
                <StatsCard title={'Attendees'} count={10}/>
                <StatsCard title={'Attendees'} count={10}/>
                <StatsCard />
                
            

            </div>

        </div>
        </>
    );
}