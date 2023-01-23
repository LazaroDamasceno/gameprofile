import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

import { useEffect, useState } from 'react';


import {getPlayer} from "../../../services/api/player"

const Dashboard = () => {
    const [user, setUser] = useState({
        nome: '',
        nickname: '',
        email: ''
    });

    useEffect(() => {
        getPlayer(2).then((response) => {
            console.log(response)
            setUser({
                nome: response.nome,
                nickname: response.nickname,
                email: response.email
            });
        });
    }, [])
    //carregando dados do usuário aqui
    return (
        <div className='p-10'>
            <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-full'>
                <Skeleton variant="circular" width={150} height={150} />
                <Box className='ml-2'> 
                    <h1 className='flex'> {user.nome} </h1>
                    <h1> AKA: {user.nickname}</h1>
                    <h1>{user.email}</h1>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', direction: 'row'}} className='mt-10 h-4/6'>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10 w-4/6 mr-2 h-full'>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }} className='bg-gray-200 rounded p-10  w-2/6 ml-2 h-full'>
                </Box>


            </Box>
            


        </div>
    );
}

export default Dashboard;