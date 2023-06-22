import RoleCard from '../../cards/roles/roles.js'
import './SelectRole.css'
import { TeamOutlined, MoneyCollectOutlined} from '@ant-design/icons';

export default function selectRole(){

    

    return (

        
        <div className='select-role-container'>
        <h1 >Select Role</h1>
        <div className='roles-container'>
        <RoleCard title={'Marketing'} icon={TeamOutlined} />
        <RoleCard title={'Sales'} icon={MoneyCollectOutlined} />
        </div>
        </div>

        

    );
}


