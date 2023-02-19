import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import Layout from '../Layouts/Layout'
// import { register} from '../Reducers/registerState'


export const Home = () => {
 const navigate= useNavigate()
  // const {profile}= useAppSelector((state)=>state)


    useEffect(()=>{
      navigate("/questions/gk")

    },[navigate])


  return (
    <div>
        <Layout>
          <Link to="/questions/add">
            Add Question
          </Link>
           
        </Layout>
    </div>
  )
}

