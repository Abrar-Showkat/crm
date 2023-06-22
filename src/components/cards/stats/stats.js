import './stats.css'

export default function StatsCard({title='None', count=0}){

    return(

        <div className="stats-card">
        
        
        <p style={{fontSize:'14px', fontWeight:'bold'}}>{title}</p>
        
        <span style={{fontWeight:'bold', fontSize: '17px',}}>{count}</span>
        
        <hr className="card-line" />
        

    </div>


    );
    
    






}


