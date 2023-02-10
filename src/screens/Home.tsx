import React, { useEffect } from 'react'
import { getUserProfile } from '../actions/user'
import Layout from '../Layouts/Layout'
// import { register} from '../Reducers/registerState'
import { useAppDispatch, useAppSelector } from '../selector'

export const Home = () => {

  // const {profile}= useAppSelector((state)=>state)
  const dispatch = useAppDispatch()
  


  return (
    <div>
        <Layout>
            { 
            [...Array(50)].map((item)=>(
                <h1>Muzamil</h1>

            ))
            }
           
        </Layout>
    </div>
  )
}

