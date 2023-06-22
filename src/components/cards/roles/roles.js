
import './roles.css'



export default function RoleCard({title, icon: IconComponent} ){
    
    return (
        <>
         

        <div className='card'>
        <h4>{title}</h4>
        <IconComponent style={{fontSize: '60px'}} />
        </div>
      
      </>

    );

    
    

}
{/* <Space direction="vertical" size={16}>
    
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space> */}